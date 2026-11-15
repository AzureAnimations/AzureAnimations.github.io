#!/usr/bin/env bash
# ==============================================================================
# Interactive GitHub Backlog & Milestone Importer (Bash)
# CONTOSO WEATHER + MAP MINI WEB APP (v1.0 Software Requirements)
# Scope: Australia, Singapore, India, the Philippines, and Indonesia
# ~12 work items (4 Epics x 2 Sub-Tasks) for a 2-day GitHub training
# Handles Repo Prompt, Auth Checks, Milestones, Labels, Native Effort Field,
# Issue Type, & Sub-Issues
# Bash equivalent of contoso-weather-epic-workitem-generation.ps1
# ==============================================================================

set -uo pipefail

RED=$'\033[0;31m'
GREEN=$'\033[0;32m'
YELLOW=$'\033[0;33m'
CYAN=$'\033[0;36m'
GRAY=$'\033[0;90m'
NC=$'\033[0m'

clear
echo -e "${CYAN}==================================================================${NC}"
echo -e "${CYAN}  Contoso Weather + Map Mini Web App - Backlog Importer            ${NC}"
echo -e "${CYAN}==================================================================${NC}"

# ------------------------------------------------------------------------------
# STEP 1: Prompt for Repository Input
# ------------------------------------------------------------------------------
read -rp $'\nEnter GitHub Repository (e.g., owner/repo or GH-900-trainings/GH-900-July-2026): ' REPO_INPUT

if [[ -z "${REPO_INPUT// }" ]]; then
    echo -e "${RED}Error: Repository name cannot be empty.${NC}"
    exit 1
fi

# ------------------------------------------------------------------------------
# STEP 2: Pre-flight Checks (GitHub CLI Installed & Authenticated)
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[1/5] Checking GitHub CLI Authentication & Setup...${NC}"

if ! command -v gh >/dev/null 2>&1; then
    echo -e "${RED}Error: GitHub CLI ('gh') is not installed or not in PATH.${NC}"
    echo -e "${YELLOW}Please install it from https://cli.github.com/ and try again.${NC}"
    exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
    echo -e "${RED}Error: You are not logged into GitHub CLI.${NC}"
    echo -e "${YELLOW}Please run 'gh auth login' in your terminal and try again.${NC}"
    exit 1
fi
echo -e "${GREEN} -> GitHub CLI authentication verified.${NC}"

echo -e "${GRAY} -> Verifying access to target repository '$REPO_INPUT'...${NC}"
if ! gh repo view "$REPO_INPUT" --json name,owner >/dev/null 2>&1; then
    echo -e "${RED}Error: Could not find or access repository '$REPO_INPUT'.${NC}"
    echo -e "${YELLOW}Please check the spelling and ensure you have write permissions.${NC}"
    exit 1
fi
echo -e "${GREEN} -> Repository access confirmed!${NC}"


# ------------------------------------------------------------------------------
# STEP 3: Create Project Milestone
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[2/5] Creating Milestone...${NC}"

M1="v1.0.0 - Contoso Weather + Map Mini Web App"
M1_DUE="2026-08-15"
M1_DESC="2-day training demo covering Australia, Singapore, India, the Philippines, and Indonesia: Node.js/Azure Maps backend, Bootstrap dashboard + city detail view, unit tests with a CI pipeline on GitHub Actions runners, a security gate (CodeQL/Dependabot), and Docker packaging deployed to Azure App Service or Azure Container Apps via OIDC."

gh api "repos/$REPO_INPUT/milestones" -f title="$M1" -f state="open" -f description="$M1_DESC" -f due_on="${M1_DUE}T23:59:59Z" >/dev/null 2>&1
echo -e "${GREEN} -> Milestone ready: '$M1'${NC}"


# ------------------------------------------------------------------------------
# STEP 4: Create Color-Coded Labels
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[3/5] Setting up Labels with distinct colors...${NC}"

# name|color|description
LABELS=(
    "Epic|3E4B9B|High-level feature tracking parent issue"
    "Feature|0E8A16|Feature work item (no bugs in this demo)"
    "Backend|00B8D9|Server logic, APIs, and data models"
    "Frontend|2C5F8A|UI components, layouts, and views"
    "Testing|6B6B3A|Unit testing and coverage"
    "Security|D73A4A|Dependabot, CodeQL, and secrets management"
    "CI/CD|5319E7|GitHub Actions pipeline, packaging, and Azure deployment"
)

for entry in "${LABELS[@]}"; do
    IFS='|' read -r name color desc <<< "$entry"
    if ! gh label create "$name" --repo "$REPO_INPUT" --color "$color" --description "$desc" --force >/dev/null 2>&1; then
        gh label edit "$name" --repo "$REPO_INPUT" --color "$color" --description "$desc" >/dev/null 2>&1
    fi
    echo -e "${GREEN} -> Label configured: '$name' (#$color)${NC}"
done


# ------------------------------------------------------------------------------
# HELPER FUNCTIONS FOR ISSUE CREATION & LINKING
# ------------------------------------------------------------------------------

EFFORT_FIELD_JSON=""

init_issue_effort_field() {
    local repo="$1"
    local owner="${repo%%/*}"
    local name="${repo##*/}"

    local query
    query=$(cat <<EOF
query {
    repository(owner: "$owner", name: "$name") {
        issueFields(first: 100) {
            nodes {
                ... on IssueFieldSingleSelect {
                    id
                    name
                    options { id name }
                }
            }
        }
    }
}
EOF
)

    local response
    if ! response=$(echo "$query" | gh api graphql -F query=@- 2>/dev/null); then
        echo -e "${RED}Error: Could not retrieve native issue fields for '$repo'.${NC}"
        exit 1
    fi

    EFFORT_FIELD_JSON=$(jq -c '.data.repository.issueFields.nodes[] | select(.name == "Effort")' <<< "$response")

    if [[ -z "$EFFORT_FIELD_JSON" || "$EFFORT_FIELD_JSON" == "null" ]]; then
        echo -e "${RED}Error: The repository does not have a native single-select issue field named 'Effort'.${NC}"
        exit 1
    fi

    for required in High Medium Low; do
        local optionId
        optionId=$(jq -r --arg n "$required" '.options[] | select(.name == $n) | .id' <<< "$EFFORT_FIELD_JSON")
        if [[ -z "$optionId" || "$optionId" == "null" ]]; then
            echo -e "${RED}Error: The native Effort field is missing the '$required' option.${NC}"
            exit 1
        fi
    done

    echo -e "${GREEN} -> Native Effort field verified (High, Medium, Low).${NC}"
}

set_issue_effort() {
    local repo="$1" issue_num="$2" effort="$3"
    local owner="${repo%%/*}"
    local name="${repo##*/}"

    local query
    query=$(cat <<EOF
query {
    repository(owner: "$owner", name: "$name") {
        issue(number: $issue_num) { id }
    }
}
EOF
)

    local response issue_id field_id option_id
    if ! response=$(echo "$query" | gh api graphql -F query=@- 2>/dev/null); then
        echo -e "${RED}    Could not retrieve issue #$issue_num to set its native Effort field.${NC}"
        return 1
    fi

    issue_id=$(jq -r '.data.repository.issue.id' <<< "$response")
    field_id=$(jq -r '.id' <<< "$EFFORT_FIELD_JSON")
    option_id=$(jq -r --arg n "$effort" '.options[] | select(.name == $n) | .id' <<< "$EFFORT_FIELD_JSON")

    local mutation
    mutation=$(cat <<EOF
mutation {
    createIssueFieldValue(input: {
        issueId: "$issue_id"
        issueField: {
            fieldId: "$field_id"
            singleSelectOptionId: "$option_id"
        }
    }) {
        issue { number }
    }
}
EOF
)

    if ! echo "$mutation" | gh api graphql -F query=@- >/dev/null 2>&1; then
        echo -e "${YELLOW}    Issue #$issue_num was created, but its native Effort field could not be set to '$effort'.${NC}"
        return 1
    fi

    echo -e "${GRAY}    Set native Effort for issue #$issue_num to $effort${NC}"
}

# new_gh_issue repo title type effort labels_csv body_file milestone
# echoes the created issue number on success
new_gh_issue() {
    local repo="$1" title="$2" type="$3" effort="$4" labels_csv="$5" body_file="$6" milestone="$7"

    local label_args=()
    IFS=',' read -ra labels <<< "$labels_csv"
    for l in "${labels[@]}"; do
        label_args+=(--label "$l")
    done

    # Body is passed via --body-file (UTF-8) so emoji/flag characters in the
    # requirements doc are never mangled by shell argument encoding.
    local url
    url=$(gh issue create --repo "$repo" --title "$title" --type "$type" "${label_args[@]}" --body-file "$body_file" --milestone "$milestone")

    local issue_num
    issue_num=$(grep -oE 'issues/([0-9]+)' <<< "$url" | grep -oE '[0-9]+')
    if [[ -n "$issue_num" ]]; then
        set_issue_effort "$repo" "$issue_num" "$effort" >&2
        echo "$issue_num"
        return 0
    fi
    return 1
}

add_sub_issue() {
    local repo="$1" parent_num="$2" child_num="$3"
    [[ -z "$parent_num" || -z "$child_num" ]] && return 0

    local owner="${repo%%/*}"
    local name="${repo##*/}"

    local query
    query=$(cat <<EOF
query {
  repository(owner: "$owner", name: "$name") {
    parent: issue(number: $parent_num) { id }
    child: issue(number: $child_num) { id }
  }
}
EOF
)

    local response parent_id child_id
    if ! response=$(echo "$query" | gh api graphql -F query=@- 2>/dev/null); then
        echo -e "${YELLOW}    Could not look up issue IDs for linking Sub-Task #$child_num to Epic #$parent_num.${NC}"
        return 1
    fi

    parent_id=$(jq -r '.data.repository.parent.id' <<< "$response")
    child_id=$(jq -r '.data.repository.child.id' <<< "$response")

    if [[ -z "$parent_id" || "$parent_id" == "null" || -z "$child_id" || "$child_id" == "null" ]]; then
        echo -e "${YELLOW}    Could not resolve issue IDs for linking Sub-Task #$child_num to Epic #$parent_num.${NC}"
        return 1
    fi

    local mutation
    mutation=$(cat <<EOF
mutation {
  addSubIssue(input: { issueId: "$parent_id", subIssueId: "$child_id" }) {
    subIssue { number }
  }
}
EOF
)

    if echo "$mutation" | gh api graphql -H "GraphQL-Features: sub_issues" -F query=@- >/dev/null 2>&1; then
        echo -e "${GRAY}    Linked Sub-Task #$child_num to Epic #$parent_num${NC}"
    else
        echo -e "${YELLOW}    Sub-Task #$child_num created, but linking to Epic #$parent_num failed.${NC}"
    fi
}

add_blocked_by() {
    local repo="$1" blocked_num="$2" blocking_num="$3"
    [[ -z "$blocked_num" || -z "$blocking_num" ]] && return 0

    local owner="${repo%%/*}"
    local name="${repo##*/}"

    local query
    query=$(cat <<EOF
query {
  repository(owner: "$owner", name: "$name") {
    blocked: issue(number: $blocked_num) { id }
    blocking: issue(number: $blocking_num) { id }
  }
}
EOF
)

    local response blocked_id blocking_id
    if ! response=$(echo "$query" | gh api graphql -F query=@- 2>/dev/null); then
        echo -e "${YELLOW}    Could not look up issue IDs to mark Epic #$blocked_num as blocked by Epic #$blocking_num.${NC}"
        return 1
    fi

    blocked_id=$(jq -r '.data.repository.blocked.id' <<< "$response")
    blocking_id=$(jq -r '.data.repository.blocking.id' <<< "$response")

    if [[ -z "$blocked_id" || "$blocked_id" == "null" || -z "$blocking_id" || "$blocking_id" == "null" ]]; then
        echo -e "${YELLOW}    Could not resolve issue IDs to mark Epic #$blocked_num as blocked by Epic #$blocking_num.${NC}"
        return 1
    fi

    local mutation
    mutation=$(cat <<EOF
mutation {
  addBlockedBy(input: { issueId: "$blocked_id", blockingIssueId: "$blocking_id" }) {
    issue { number }
    blockingIssue { number }
  }
}
EOF
)

    if echo "$mutation" | gh api graphql -F query=@- >/dev/null 2>&1; then
        echo -e "${GRAY}    Marked Epic #$blocked_num as blocked by Epic #$blocking_num${NC}"
    else
        echo -e "${YELLOW}    Epic #$blocked_num created, but could not mark it as blocked by Epic #$blocking_num.${NC}"
    fi
}


# ------------------------------------------------------------------------------
# STEP 5: Create Epics & Tasks (4 Epics / ~12 items, per the v1.0 Software
# Requirements: Australia, Singapore, India, the Philippines, and Indonesia)
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[4/5] Creating Epics and Tasks...${NC}"
init_issue_effort_field "$REPO_INPUT"

BODY_DIR=$(mktemp -d)
trap 'rm -rf "$BODY_DIR"' EXIT

# --- EPIC 1: Backend - Weather & Map API ---
echo -e "${CYAN} Creating Epic 1...${NC}"
cat > "$BODY_DIR/epic1.md" <<'EOF'
Parent Issue tracking the Node.js/Express backend that serves weather and location data for the supported countries (Australia, Singapore, India, the Philippines, and Indonesia) via Azure Maps, with no database or caching layer.
EOF
EPIC1=$(new_gh_issue "$REPO_INPUT" "[Epic 1] Backend - Weather & Map API" "Feature" "High" "Epic" "$BODY_DIR/epic1.md" "$M1")
echo -e "${GREEN} Created Epic 1: #$EPIC1${NC}"

cat > "$BODY_DIR/sub1_1.md" <<'EOF'
**Type:** Feature
**Effort:** High
**Estimate:** 5 Story Points (~2-3 days)

**Description:** Stand up the Node.js/Express backend, add a single server-side configuration module with the supported country/city reference data, and integrate Azure Maps Search (geocoding) + Weather API so the service can resolve each supported city to coordinates and fetch current conditions.

**Acceptance Criteria:**
- package.json initialized; Express server serves the built frontend as static files and listens on a configurable port
- Supported country/city reference data lives in a single server-side configuration module (Australia: Sydney; Singapore: Singapore; India: Bengaluru, Mumbai; Philippines: Manila; Indonesia: Jakarta) - no database or caching layer
- Backend resolves each supported city to coordinates via the Azure Maps Search API (or uses approved stored coordinates), then calls the Azure Maps Weather API for current conditions
- ``AZURE_MAPS_KEY`` is read from configuration/environment only; the service fails fast at startup with a clear error if it's missing; ``.env.example`` documents the variable name only, never a real key
EOF
SUB1_1=$(new_gh_issue "$REPO_INPUT" "Sub-Task 1.1: Base Server, Configuration & Azure Maps Integration" "Feature" "High" "Feature,Backend" "$BODY_DIR/sub1_1.md" "$M1")
add_sub_issue "$REPO_INPUT" "$EPIC1" "$SUB1_1"

cat > "$BODY_DIR/sub1_2.md" <<'EOF'
**Type:** Feature
**Effort:** Medium
**Estimate:** 3 Story Points (~1-2 days)

**Description:** Expose the required REST endpoints for the frontend, validate incoming city/country values, and normalize the Azure Maps response into a small, stable JSON shape.

**Acceptance Criteria:**
- ``GET /api/health`` returns 200 + status, for use as the deployment health check
- ``GET /api/cities`` returns the supported country/city reference data (flags, coordinates, timezones)
- ``GET /api/weather?city={city}&country={country}`` returns a normalized weather JSON, e.g. ``{ city, country, temperatureC, condition, emoji, humidity, latitude, longitude }``
- Unsupported or missing city/country input returns a clear error with an appropriate HTTP status code; provider failures never leak raw external-service errors or the Azure Maps key to the caller
EOF
SUB1_2=$(new_gh_issue "$REPO_INPUT" "Sub-Task 1.2: REST Endpoints, Input Validation & Response Normalization" "Feature" "Medium" "Feature,Backend" "$BODY_DIR/sub1_2.md" "$M1")
add_sub_issue "$REPO_INPUT" "$EPIC1" "$SUB1_2"


# --- EPIC 2: Frontend - Country & City Weather Dashboard ---
echo -e "\n${CYAN} Creating Epic 2...${NC}"
cat > "$BODY_DIR/epic2.md" <<'EOF'
Parent Issue tracking the Bootstrap dashboard grouped by country (Australia, Singapore, India, the Philippines, and Indonesia) with flags and emoji weather, plus a city detail view with a map, condition, min/max temperature, and humidity.
EOF
EPIC2=$(new_gh_issue "$REPO_INPUT" "[Epic 2] Frontend - Country & City Weather Dashboard" "Feature" "Medium" "Epic" "$BODY_DIR/epic2.md" "$M1")
echo -e "${GREEN} Created Epic 2: #$EPIC2${NC}"
add_blocked_by "$REPO_INPUT" "$EPIC2" "$EPIC1"

cat > "$BODY_DIR/sub2_1.md" <<'EOF'
**Type:** Feature
**Effort:** Medium
**Estimate:** 3 Story Points (~1-2 days)

**Description:** Build the dashboard shown in the mock UI: cities grouped under their country, each with a national flag, current temperature, and one weather emoji, fetched only from the backend.

**Acceptance Criteria:**
- Bootstrap 5 integrated; responsive layout for mobile, tablet, and desktop
- Countries covered: Australia, Singapore, India, the Philippines, and Indonesia; cities are grouped under their country and shown with the full country name and national flag - never a text acronym (e.g., 🇦🇺 🇸🇬 🇮🇳 🇵🇭 🇮🇩)
- Each city card shows city name, current temperature in °C, and one weather emoji, sourced only from ``GET /api/cities`` and ``GET /api/weather`` (no direct frontend calls to Azure Maps)
- Loading, empty, and friendly error states are visible; cards are keyboard accessible with a clear focus state
EOF
SUB2_1=$(new_gh_issue "$REPO_INPUT" "Sub-Task 2.1: Dashboard - Bootstrap UI, Country Grouping, Flags & Emoji Weather" "Feature" "Medium" "Feature,Frontend" "$BODY_DIR/sub2_1.md" "$M1")
add_sub_issue "$REPO_INPUT" "$EPIC2" "$SUB2_1"

cat > "$BODY_DIR/sub2_2.md" <<'EOF'
**Type:** Feature
**Effort:** Medium
**Estimate:** 3 Story Points (~1-2 days)

**Description:** Selecting 'View details' on a city card opens a detail view with a map and a richer weather panel, matching the mock UI.

**Acceptance Criteria:**
- Selecting a city (in one click) navigates to a detail view showing the city's location on a map (e.g., Azure Maps Web SDK or Leaflet) with a single location marker
- Weather panel shows condition, current temperature, feels-like temperature, minimum/maximum temperature, humidity, and local time
- Loading, success, and error states are handled (e.g., 'Loading weather...', populated map/panel, 'Unable to load data. Try again.')
- A 'Back to dashboard' action returns the user to the dashboard without losing its state; unknown/unsupported city input shows a clear message rather than a broken screen
EOF
SUB2_2=$(new_gh_issue "$REPO_INPUT" "Sub-Task 2.2: City Detail View - Map, Weather Panel & Back Navigation" "Feature" "Medium" "Feature,Frontend" "$BODY_DIR/sub2_2.md" "$M1")
add_sub_issue "$REPO_INPUT" "$EPIC2" "$SUB2_2"


# --- EPIC 3: Test & Enable Pipeline ---
echo -e "\n${CYAN} Creating Epic 3...${NC}"
cat > "$BODY_DIR/epic3.md" <<'EOF'
Parent Issue tracking backend/frontend automated test coverage and the GitHub Actions CI pipeline that runs on every push/PR to main.
EOF
EPIC3=$(new_gh_issue "$REPO_INPUT" "[Epic 3] Test & Enable Pipeline" "Feature" "Medium" "Epic" "$BODY_DIR/epic3.md" "$M1")
echo -e "${GREEN} Created Epic 3: #$EPIC3${NC}"
add_blocked_by "$REPO_INPUT" "$EPIC3" "$EPIC2"

cat > "$BODY_DIR/sub3_1.md" <<'EOF'
**Type:** Feature
**Effort:** Medium
**Estimate:** 3 Story Points (~1-2 days)

**Description:** Add unit tests across both backend and frontend so the app has a baseline safety net before the CI pipeline enforces it.

**Acceptance Criteria:**
- Backend tests cover weather/geocoding response parsing, supported input, missing/invalid input, and a simulated provider failure
- Frontend tests cover at least dashboard rendering (country grouping, flags, emoji, temperature binding) and city-card click navigation to the detail view
- Tests use the ``AZURE_MAPS_KEY`` GitHub Actions secret when run in the runner; no real key is committed to the repo
- All tests runnable locally with a single documented command (e.g., ``npm test``) for both backend and frontend
EOF
SUB3_1=$(new_gh_issue "$REPO_INPUT" "Sub-Task 3.1: Backend & Frontend Unit Tests" "Feature" "Medium" "Feature,Testing" "$BODY_DIR/sub3_1.md" "$M1")
add_sub_issue "$REPO_INPUT" "$EPIC3" "$SUB3_1"

cat > "$BODY_DIR/sub3_2.md" <<'EOF'
**Type:** Feature
**Effort:** Low
**Estimate:** 2 Story Points (~1 day)

**Description:** Enable the CI pipeline so every push/PR automatically builds and tests the app on GitHub-hosted runners - turning the tests from Sub-Task 3.1 into an enforced quality gate.

**Acceptance Criteria:**
- ``.github/workflows/ci.yml`` triggers on ``push`` and ``pull_request`` to ``main`` and runs on the ``ubuntu-latest`` GitHub-hosted runner
- Separate jobs (or steps) install dependencies and run backend + frontend unit tests, using dependency caching (e.g., ``actions/setup-node`` with ``cache: npm``)
- Branch protection on ``main`` requires this workflow (test check) to pass before a PR can be merged
EOF
SUB3_2=$(new_gh_issue "$REPO_INPUT" "Sub-Task 3.2: Enable CI Pipeline with GitHub Actions" "Feature" "Low" "Feature,CI/CD" "$BODY_DIR/sub3_2.md" "$M1")
add_sub_issue "$REPO_INPUT" "$EPIC3" "$SUB3_2"


# --- EPIC 4: Security Scanning, Containerization & Azure Deployment ---
echo -e "\n${CYAN} Creating Epic 4...${NC}"
cat > "$BODY_DIR/epic4.md" <<'EOF'
Parent Issue tracking the security gate (Dependabot + CodeQL), Docker packaging published to GitHub Container Registry, and deployment to Azure App Service or Azure Container Apps using OIDC.
EOF
EPIC4=$(new_gh_issue "$REPO_INPUT" "[Epic 4] Security Scanning, Containerization & Azure Deployment" "Feature" "High" "Epic" "$BODY_DIR/epic4.md" "$M1")
echo -e "${GREEN} Created Epic 4: #$EPIC4${NC}"
add_blocked_by "$REPO_INPUT" "$EPIC4" "$EPIC3"

cat > "$BODY_DIR/sub4_1.md" <<'EOF'
**Type:** Feature
**Effort:** Low
**Estimate:** 2 Story Points (~1 day)

**Description:** Add Dependabot + CodeQL scanning as a required gate, and apply the secure coding practices called out in the requirements before packaging/deployment.

**Acceptance Criteria:**
- ``.github/dependabot.yml`` enabled for npm dependencies (frontend + backend), with a weekly update schedule
- ``.github/workflows/codeql.yml`` (or a job in ``ci.yml``) runs CodeQL analysis on every push/PR to ``main``; branch protection on ``main`` requires this check to pass before merge
- Frontend uses ``textContent`` or safe DOM creation for values returned by the API (no ``innerHTML`` with untrusted data); backend never logs secrets or returns raw external-service errors to the browser
- The packaging/deployment job (Sub-Task 4.2) uses ``needs:`` so it only runs after the CodeQL/security scan and unit test jobs succeed
EOF
SUB4_1=$(new_gh_issue "$REPO_INPUT" "Sub-Task 4.1: Security Scan Gate (Dependabot + CodeQL) & Secure Coding Practices" "Feature" "Low" "Feature,Security" "$BODY_DIR/sub4_1.md" "$M1")
add_sub_issue "$REPO_INPUT" "$EPIC4" "$SUB4_1"

cat > "$BODY_DIR/sub4_2.md" <<'EOF'
**Type:** Feature
**Effort:** High
**Estimate:** 8 Story Points (~3-5 days)

**Description:** Package the backend + built frontend as a single multi-stage Docker image, publish it to GitHub Container Registry, and deploy it to one Azure target - App Service or Container Apps - authenticating with OIDC.

**Acceptance Criteria:**
- Multi-stage Dockerfile builds the frontend and packages it together with the Node.js backend into one production image
- CD job only runs after the security scan + unit test jobs succeed (job dependency via ``needs``)
- Image is published to GitHub Container Registry (``ghcr.io``), tagged with the commit SHA and ``latest``; no credentials are committed to the repository
- Team selects one deployment target - Azure App Service or Azure Container Apps - and provisions it (e.g., via Bicep or the Azure CLI)
- GitHub Actions authenticates to Azure using OpenID Connect (OIDC) via a Microsoft Entra ID App Registration and a Federated Credential - no client secret or publish profile is stored in GitHub
- ``AZURE_MAPS_KEY`` is configured as an application setting/secret on the deployed Azure resource so the running app can call Azure Maps
- Deployment is verified by checking that ``GET /api/health`` returns 200 and the application home page loads successfully
EOF
SUB4_2=$(new_gh_issue "$REPO_INPUT" "Sub-Task 4.2: Docker Packaging, GHCR Publish & Deploy to Azure (App Service or Container Apps)" "Feature" "High" "Feature,CI/CD" "$BODY_DIR/sub4_2.md" "$M1")
add_sub_issue "$REPO_INPUT" "$EPIC4" "$SUB4_2"

echo -e "\n${GREEN}==================================================================${NC}"
echo -e "${GREEN} [5/5] Success! All items imported into '$REPO_INPUT'.${NC}"
echo -e "${GREEN}==================================================================${NC}"
