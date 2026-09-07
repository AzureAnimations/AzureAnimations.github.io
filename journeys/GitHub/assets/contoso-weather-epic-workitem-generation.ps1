# ==============================================================================
# Interactive GitHub Backlog & Milestone Importer (PowerShell)
# CONTOSO WEATHER + MAP MINI WEB APP (v1.0 Software Requirements)
# Scope: Australia, Singapore, India, the Philippines, and Indonesia
# ~12 work items (4 Epics x 2 Sub-Tasks) for a 2-day GitHub training
# Handles Repo Prompt, Auth Checks, Milestones, Labels, Native Effort Field,
# Issue Type, & Sub-Issues
# ==============================================================================

Clear-Host
Write-Host "==================================================================" -ForegroundColor Cyan
Write-Host "  Contoso Weather + Map Mini Web App - Backlog Importer            " -ForegroundColor Cyan
Write-Host "==================================================================" -ForegroundColor Cyan

# ------------------------------------------------------------------------------
# STEP 1: Prompt for Repository Input
# ------------------------------------------------------------------------------
$RepoInput = Read-Host -Prompt "`nEnter GitHub Repository (e.g., owner/repo or GH-900-trainings/GH-900-July-2026)"

if ([string]::IsNullOrWhitespace($RepoInput)) {
    Write-Host "Error: Repository name cannot be empty." -ForegroundColor Red
    exit 1
}

# ------------------------------------------------------------------------------
# STEP 2: Pre-flight Checks (GitHub CLI Installed & Authenticated)
# ------------------------------------------------------------------------------
Write-Host "`n[1/5] Checking GitHub CLI Authentication & Setup..." -ForegroundColor Yellow

# Check if 'gh' executable exists
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "Error: GitHub CLI ('gh') is not installed or not in PATH." -ForegroundColor Red
    Write-Host "Please install it from https://cli.github.com/ and try again." -ForegroundColor Yellow
    exit 1
}

# Check authentication status
$authStatus = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: You are not logged into GitHub CLI." -ForegroundColor Red
    Write-Host "Please run 'gh auth login' in your terminal and try again." -ForegroundColor Yellow
    exit 1
}
Write-Host " -> GitHub CLI authentication verified." -ForegroundColor Green

# Validate Repository Access
Write-Host " -> Verifying access to target repository '$RepoInput'..." -ForegroundColor Gray
$repoCheck = gh repo view $RepoInput --json name,owner 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Could not find or access repository '$RepoInput'." -ForegroundColor Red
    Write-Host "Please check the spelling and ensure you have write permissions." -ForegroundColor Yellow
    exit 1
}
Write-Host " -> Repository access confirmed!" -ForegroundColor Green


# ------------------------------------------------------------------------------
# STEP 3: Create Project Milestone
# ------------------------------------------------------------------------------
Write-Host "`n[2/5] Creating Milestone..." -ForegroundColor Yellow

$milestones = @(
    @{ Title = "v1.0.0 - Contoso Weather + Map Mini Web App"; Due = "2026-08-15"; Description = "2-day training demo covering Australia, Singapore, India, the Philippines, and Indonesia: Node.js/Azure Maps backend, Bootstrap dashboard + city detail view, unit tests with a CI pipeline on GitHub Actions runners, a security gate (CodeQL/Dependabot), and Docker packaging deployed to Azure App Service or Azure Container Apps via OIDC." }
)

foreach ($m in $milestones) {
    gh api repos/$RepoInput/milestones -f title="$($m.Title)" -f state="open" -f description="$($m.Description)" -f due_on="$($m.Due)T23:59:59Z" 2>$null | Out-Null
    Write-Host " -> Milestone ready: '$($m.Title)'" -ForegroundColor Green
}

$M1 = "v1.0.0 - Contoso Weather + Map Mini Web App"
$TargetMilestone = $M1


# ------------------------------------------------------------------------------
# STEP 4: Create Color-Coded Labels
# ------------------------------------------------------------------------------
Write-Host "`n[3/5] Setting up Labels with distinct colors..." -ForegroundColor Yellow

$labelMap = [ordered]@{
    "Epic"     = @{ Color = "3E4B9B"; Description = "High-level feature tracking parent issue" }     # dull indigo
    "Feature"  = @{ Color = "0E8A16"; Description = "Feature work item (no bugs in this demo)" }      # bright green
    "Backend"  = @{ Color = "00B8D9"; Description = "Server logic, APIs, and data models" }           # bright cyan
    "Frontend" = @{ Color = "2C5F8A"; Description = "UI components, layouts, and views" }              # dull steel blue
    "Testing"  = @{ Color = "6B6B3A"; Description = "Unit testing and coverage" }                      # dull olive
    "Security" = @{ Color = "D73A4A"; Description = "Dependabot, CodeQL, and secrets management" }     # bright red
    "CI/CD"    = @{ Color = "5319E7"; Description = "GitHub Actions pipeline, packaging, and Azure deployment" } # bright purple
}

foreach ($name in $labelMap.Keys) {
    $color = $labelMap[$name].Color
    $desc  = $labelMap[$name].Description
    gh label create $name --repo $RepoInput --color $color --description $desc --force 2>$null
    if ($LASTEXITCODE -ne 0) {
        gh label edit $name --repo $RepoInput --color $color --description $desc 2>$null
    }
    Write-Host " -> Label configured: '$name' (#$color)" -ForegroundColor Green
}


# ------------------------------------------------------------------------------
# HELPER FUNCTIONS FOR ISSUE CREATION & LINKING
# ------------------------------------------------------------------------------

function Initialize-IssueEffortField {
        param ([string]$RepoPath)

        $parts = $RepoPath -split '/'
        $owner = $parts[0]
        $repo  = $parts[1]

        $query = @"
query {
    repository(owner: "$owner", name: "$repo") {
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
"@

        $queryResultRaw = $query | gh api graphql -F query=@- 2>$null
        if ($LASTEXITCODE -ne 0 -or -not $queryResultRaw) {
                Write-Host "Error: Could not retrieve native issue fields for '$RepoPath'." -ForegroundColor Red
                exit 1
        }

        $response = $queryResultRaw | ConvertFrom-Json
        $effortField = $response.data.repository.issueFields.nodes |
                Where-Object { $_.name -eq "Effort" } |
                Select-Object -First 1

        if (-not $effortField) {
                Write-Host "Error: The repository does not have a native single-select issue field named 'Effort'." -ForegroundColor Red
                exit 1
        }

        $script:EffortFieldId = $effortField.id
        $script:EffortOptionIds = @{}
        foreach ($option in $effortField.options) {
                $script:EffortOptionIds[$option.name] = $option.id
        }

        foreach ($requiredOption in @("High", "Medium", "Low")) {
                if (-not $script:EffortOptionIds.ContainsKey($requiredOption)) {
                        Write-Host "Error: The native Effort field is missing the '$requiredOption' option." -ForegroundColor Red
                        exit 1
                }
        }

        Write-Host " -> Native Effort field verified (High, Medium, Low)." -ForegroundColor Green
}

function Set-IssueEffort {
        param (
                [string]$RepoPath,
                [string]$IssueNum,
                [ValidateSet("High", "Medium", "Low")]
                [string]$Effort
        )

        $parts = $RepoPath -split '/'
        $owner = $parts[0]
        $repo  = $parts[1]

        $query = @"
query {
    repository(owner: "$owner", name: "$repo") {
        issue(number: $IssueNum) { id }
    }
}
"@
        $queryResultRaw = $query | gh api graphql -F query=@- 2>$null
        if ($LASTEXITCODE -ne 0 -or -not $queryResultRaw) {
                throw "Could not retrieve issue #$IssueNum to set its native Effort field."
        }

        $response = $queryResultRaw | ConvertFrom-Json
        $issueId = $response.data.repository.issue.id
        $optionId = $script:EffortOptionIds[$Effort]

        $mutation = @"
mutation {
    createIssueFieldValue(input: {
        issueId: "$issueId"
        issueField: {
            fieldId: "$script:EffortFieldId"
            singleSelectOptionId: "$optionId"
        }
    }) {
        issue { number }
    }
}
"@
        $mutation | gh api graphql -F query=@- 2>$null | Out-Null
        if ($LASTEXITCODE -ne 0) {
                throw "Issue #$IssueNum was created, but its native Effort field could not be set to '$Effort'."
        }

        Write-Host "    Set native Effort for issue #$IssueNum to $Effort" -ForegroundColor Gray
}

function New-GHIssue {
    param (
        [string]$Repo,
        [string]$Title,
        [string]$Type,
                [ValidateSet("High", "Medium", "Low")]
                [string]$Effort,
        [string[]]$Labels,
        [string]$Body,
        [string]$Milestone
    )
    $labelArgs = @()
    foreach ($l in $Labels) { $labelArgs += @("--label", $l) }
    # Body is written to a UTF-8 file and passed via --body-file: passing emoji/flag
    # characters directly as a command-line argument gets mangled by the system codepage.
    # [IO.File]::WriteAllText is used (instead of Set-Content -Encoding utf8NoBOM) for
    # compatibility with both Windows PowerShell 5.1 and PowerShell 7+.
    $tempFile = New-TemporaryFile
    [System.IO.File]::WriteAllText($tempFile.FullName, $Body, [System.Text.UTF8Encoding]::new($false))
    $url = gh issue create --repo $Repo --title $Title --type $Type @labelArgs --body-file $tempFile --milestone $Milestone
    Remove-Item -Path $tempFile -ErrorAction SilentlyContinue
    if ($url -match 'issues/(\d+)') {
        $issueNum = $matches[1]
        Set-IssueEffort -RepoPath $Repo -IssueNum $issueNum -Effort $Effort
        return $issueNum
    }
    return $null
}

function Add-SubIssue {
    param (
        [string]$RepoPath,
        [string]$ParentNum,
        [string]$ChildNum
    )

    if (-not $ParentNum -or -not $ChildNum) { return }

    $parts = $RepoPath -split '/'
    $owner = $parts[0]
    $repo  = $parts[1]

    $query = @"
query {
  repository(owner: "$owner", name: "$repo") {
    parent: issue(number: $ParentNum) { id }
    child: issue(number: $ChildNum) { id }
  }
}
"@

    # NOTE: the query is piped via stdin (-F query=@-) instead of passed as a
    # command-line argument, because Windows PowerShell mangles multi-line,
    # quote-containing strings when they're passed as native-command arguments.
    $queryResultRaw = $query | gh api graphql -F query=@- 2>$null
    if ($LASTEXITCODE -ne 0 -or -not $queryResultRaw) {
        Write-Host "    Could not look up issue IDs for linking Sub-Task #$ChildNum to Epic #$ParentNum." -ForegroundColor DarkYellow
        return
    }

    $response = $queryResultRaw | ConvertFrom-Json
    $parentId = $response.data.repository.parent.id
    $childId  = $response.data.repository.child.id

    if (-not $parentId -or -not $childId) {
        Write-Host "    Could not resolve issue IDs for linking Sub-Task #$ChildNum to Epic #$ParentNum." -ForegroundColor DarkYellow
        return
    }

    $mutation = @"
mutation {
  addSubIssue(input: { issueId: "$parentId", subIssueId: "$childId" }) {
    subIssue { number }
  }
}
"@
    $mutation | gh api graphql -H "GraphQL-Features: sub_issues" -F query=@- 2>$null | Out-Null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "    Linked Sub-Task #$ChildNum to Epic #$ParentNum" -ForegroundColor Gray
    }
    else {
        Write-Host "    Sub-Task #$ChildNum created, but linking to Epic #$ParentNum failed." -ForegroundColor DarkYellow
    }
}


function Add-BlockedBy {
    param (
        [string]$RepoPath,
        [string]$BlockedNum,   # the issue that is blocked (e.g. the later Epic)
        [string]$BlockingNum   # the issue that blocks it (e.g. the earlier Epic)
    )

    if (-not $BlockedNum -or -not $BlockingNum) { return }

    $parts = $RepoPath -split '/'
    $owner = $parts[0]
    $repo  = $parts[1]

    $query = @"
query {
  repository(owner: "$owner", name: "$repo") {
    blocked: issue(number: $BlockedNum) { id }
    blocking: issue(number: $BlockingNum) { id }
  }
}
"@
    $queryResultRaw = $query | gh api graphql -F query=@- 2>$null
    if ($LASTEXITCODE -ne 0 -or -not $queryResultRaw) {
        Write-Host "    Could not look up issue IDs to mark Epic #$BlockedNum as blocked by Epic #$BlockingNum." -ForegroundColor DarkYellow
        return
    }

    $response   = $queryResultRaw | ConvertFrom-Json
    $blockedId  = $response.data.repository.blocked.id
    $blockingId = $response.data.repository.blocking.id

    if (-not $blockedId -or -not $blockingId) {
        Write-Host "    Could not resolve issue IDs to mark Epic #$BlockedNum as blocked by Epic #$BlockingNum." -ForegroundColor DarkYellow
        return
    }

    $mutation = @"
mutation {
  addBlockedBy(input: { issueId: "$blockedId", blockingIssueId: "$blockingId" }) {
    issue { number }
    blockingIssue { number }
  }
}
"@
    $mutation | gh api graphql -F query=@- 2>$null | Out-Null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "    Marked Epic #$BlockedNum as blocked by Epic #$BlockingNum" -ForegroundColor Gray
    }
    else {
        Write-Host "    Epic #$BlockedNum created, but could not mark it as blocked by Epic #$BlockingNum." -ForegroundColor DarkYellow
    }
}


# ------------------------------------------------------------------------------
# STEP 5: Create Epics & Tasks (4 Epics / ~12 items, per the v1.0 Software
# Requirements: Australia, Singapore, India, the Philippines, and Indonesia)
# ------------------------------------------------------------------------------
Write-Host "`n[4/5] Creating Epics and Tasks..." -ForegroundColor Yellow
Initialize-IssueEffortField -RepoPath $RepoInput

# --- EPIC 1: Backend - Weather & Map API ---
Write-Host " Creating Epic 1..." -ForegroundColor Cyan
$Epic1 = New-GHIssue -Repo $RepoInput -Title "[Epic 1] Backend - Weather & Map API" -Type "Feature" -Effort "High" -Labels @("Epic") -Milestone $M1 -Body "Parent Issue tracking the Node.js/Express backend that serves weather and location data for the supported countries (Australia, Singapore, India, the Philippines, and Indonesia) via Azure Maps, with no database or caching layer."
Write-Host " Created Epic 1: #$Epic1" -ForegroundColor Green

$body1_1 = @"
**Type:** Feature
**Effort:** High
**Estimate:** 5 Story Points (~2-3 days)

**Description:** Stand up the Node.js/Express backend, add a single server-side configuration module with the supported country/city reference data, and integrate Azure Maps Search (geocoding) + Weather API so the service can resolve each supported city to coordinates and fetch current conditions.

**Acceptance Criteria:**
- package.json initialized; Express server serves the built frontend as static files and listens on a configurable port
- Supported country/city reference data lives in a single server-side configuration module (Australia: Sydney; Singapore: Singapore; India: Bengaluru, Mumbai; Philippines: Manila; Indonesia: Jakarta) - no database or caching layer
- Backend resolves each supported city to coordinates via the Azure Maps Search API (or uses approved stored coordinates), then calls the Azure Maps Weather API for current conditions
- ``AZURE_MAPS_KEY`` is read from configuration/environment only; the service fails fast at startup with a clear error if it's missing; ``.env.example`` documents the variable name only, never a real key
"@
$Sub1_1 = New-GHIssue -Repo $RepoInput -Title "Sub-Task 1.1: Base Server, Configuration & Azure Maps Integration" -Type "Feature" -Effort "High" -Labels @("Feature", "Backend") -Milestone $M1 -Body $body1_1
Add-SubIssue -RepoPath $RepoInput -ParentNum $Epic1 -ChildNum $Sub1_1

$body1_2 = @"
**Type:** Feature
**Effort:** Medium
**Estimate:** 3 Story Points (~1-2 days)

**Description:** Expose the required REST endpoints for the frontend, validate incoming city/country values, and normalize the Azure Maps response into a small, stable JSON shape.

**Acceptance Criteria:**
- ``GET /api/health`` returns 200 + status, for use as the deployment health check
- ``GET /api/cities`` returns the supported country/city reference data (flags, coordinates, timezones)
- ``GET /api/weather?city={city}&country={country}`` returns a normalized weather JSON, e.g. ``{ city, country, temperatureC, condition, emoji, humidity, latitude, longitude }``
- Unsupported or missing city/country input returns a clear error with an appropriate HTTP status code; provider failures never leak raw external-service errors or the Azure Maps key to the caller
"@
$Sub1_2 = New-GHIssue -Repo $RepoInput -Title "Sub-Task 1.2: REST Endpoints, Input Validation & Response Normalization" -Type "Feature" -Effort "Medium" -Labels @("Feature", "Backend") -Milestone $M1 -Body $body1_2
Add-SubIssue -RepoPath $RepoInput -ParentNum $Epic1 -ChildNum $Sub1_2


# --- EPIC 2: Frontend - Country & City Weather Dashboard ---
Write-Host "`n Creating Epic 2..." -ForegroundColor Cyan
$Epic2 = New-GHIssue -Repo $RepoInput -Title "[Epic 2] Frontend - Country & City Weather Dashboard" -Type "Feature" -Effort "Medium" -Labels @("Epic") -Milestone $M1 -Body "Parent Issue tracking the Bootstrap dashboard grouped by country (Australia, Singapore, India, the Philippines, and Indonesia) with flags and emoji weather, plus a city detail view with a map, condition, min/max temperature, and humidity."
Write-Host " Created Epic 2: #$Epic2" -ForegroundColor Green
Add-BlockedBy -RepoPath $RepoInput -BlockedNum $Epic2 -BlockingNum $Epic1

$body2_1 = @"
**Type:** Feature
**Effort:** Medium
**Estimate:** 3 Story Points (~1-2 days)

**Description:** Build the dashboard shown in the mock UI: cities grouped under their country, each with a national flag, current temperature, and one weather emoji, fetched only from the backend.

**Acceptance Criteria:**
- Bootstrap 5 integrated; responsive layout for mobile, tablet, and desktop
- Countries covered: Australia, Singapore, India, the Philippines, and Indonesia; cities are grouped under their country and shown with the full country name and national flag - never a text acronym (e.g., 🇦🇺 🇸🇬 🇮🇳 🇵🇭 🇮🇩)
- Each city card shows city name, current temperature in °C, and one weather emoji, sourced only from ``GET /api/cities`` and ``GET /api/weather`` (no direct frontend calls to Azure Maps)
- Loading, empty, and friendly error states are visible; cards are keyboard accessible with a clear focus state
"@
$Sub2_1 = New-GHIssue -Repo $RepoInput -Title "Sub-Task 2.1: Dashboard - Bootstrap UI, Country Grouping, Flags & Emoji Weather" -Type "Feature" -Effort "Medium" -Labels @("Feature", "Frontend") -Milestone $M1 -Body $body2_1
Add-SubIssue -RepoPath $RepoInput -ParentNum $Epic2 -ChildNum $Sub2_1

$body2_2 = @"
**Type:** Feature
**Effort:** Medium
**Estimate:** 3 Story Points (~1-2 days)

**Description:** Selecting 'View details' on a city card opens a detail view with a map and a richer weather panel, matching the mock UI.

**Acceptance Criteria:**
- Selecting a city (in one click) navigates to a detail view showing the city's location on a map (e.g., Azure Maps Web SDK or Leaflet) with a single location marker
- Weather panel shows condition, current temperature, feels-like temperature, minimum/maximum temperature, humidity, and local time
- Loading, success, and error states are handled (e.g., 'Loading weather...', populated map/panel, 'Unable to load data. Try again.')
- A 'Back to dashboard' action returns the user to the dashboard without losing its state; unknown/unsupported city input shows a clear message rather than a broken screen
"@
$Sub2_2 = New-GHIssue -Repo $RepoInput -Title "Sub-Task 2.2: City Detail View - Map, Weather Panel & Back Navigation" -Type "Feature" -Effort "Medium" -Labels @("Feature", "Frontend") -Milestone $M1 -Body $body2_2
Add-SubIssue -RepoPath $RepoInput -ParentNum $Epic2 -ChildNum $Sub2_2


# --- EPIC 3: Test & Enable Pipeline ---
Write-Host "`n Creating Epic 3..." -ForegroundColor Cyan
$Epic3 = New-GHIssue -Repo $RepoInput -Title "[Epic 3] Test & Enable Pipeline" -Type "Feature" -Effort "Medium" -Labels @("Epic") -Milestone $M1 -Body "Parent Issue tracking backend/frontend automated test coverage and the GitHub Actions CI pipeline that runs on every push/PR to main."
Write-Host " Created Epic 3: #$Epic3" -ForegroundColor Green
Add-BlockedBy -RepoPath $RepoInput -BlockedNum $Epic3 -BlockingNum $Epic2

$body3_1 = @"
**Type:** Feature
**Effort:** Medium
**Estimate:** 3 Story Points (~1-2 days)

**Description:** Add unit tests across both backend and frontend so the app has a baseline safety net before the CI pipeline enforces it.

**Acceptance Criteria:**
- Backend tests cover weather/geocoding response parsing, supported input, missing/invalid input, and a simulated provider failure
- Frontend tests cover at least dashboard rendering (country grouping, flags, emoji, temperature binding) and city-card click navigation to the detail view
- Tests use the ``AZURE_MAPS_KEY`` GitHub Actions secret when run in the runner; no real key is committed to the repo
- All tests runnable locally with a single documented command (e.g., ``npm test``) for both backend and frontend
"@
$Sub3_1 = New-GHIssue -Repo $RepoInput -Title "Sub-Task 3.1: Backend & Frontend Unit Tests" -Type "Feature" -Effort "Medium" -Labels @("Feature", "Testing") -Milestone $M1 -Body $body3_1
Add-SubIssue -RepoPath $RepoInput -ParentNum $Epic3 -ChildNum $Sub3_1

$body3_2 = @"
**Type:** Feature
**Effort:** Low
**Estimate:** 2 Story Points (~1 day)

**Description:** Enable the CI pipeline so every push/PR automatically builds and tests the app on GitHub-hosted runners - turning the tests from Sub-Task 3.1 into an enforced quality gate.

**Acceptance Criteria:**
- ``.github/workflows/ci.yml`` triggers on ``push`` and ``pull_request`` to ``main`` and runs on the ``ubuntu-latest`` GitHub-hosted runner
- Separate jobs (or steps) install dependencies and run backend + frontend unit tests, using dependency caching (e.g., ``actions/setup-node`` with ``cache: npm``)
- Branch protection on ``main`` requires this workflow (test check) to pass before a PR can be merged
"@
$Sub3_2 = New-GHIssue -Repo $RepoInput -Title "Sub-Task 3.2: Enable CI Pipeline with GitHub Actions" -Type "Feature" -Effort "Low" -Labels @("Feature", "CI/CD") -Milestone $M1 -Body $body3_2
Add-SubIssue -RepoPath $RepoInput -ParentNum $Epic3 -ChildNum $Sub3_2


# --- EPIC 4: Security Scanning, Containerization & Azure Deployment ---
Write-Host "`n Creating Epic 4..." -ForegroundColor Cyan
$Epic4 = New-GHIssue -Repo $RepoInput -Title "[Epic 4] Security Scanning, Containerization & Azure Deployment" -Type "Feature" -Effort "High" -Labels @("Epic") -Milestone $M1 -Body "Parent Issue tracking the security gate (Dependabot + CodeQL), Docker packaging published to GitHub Container Registry, and deployment to Azure App Service or Azure Container Apps using OIDC."
Write-Host " Created Epic 4: #$Epic4" -ForegroundColor Green
Add-BlockedBy -RepoPath $RepoInput -BlockedNum $Epic4 -BlockingNum $Epic3

$body4_1 = @"
**Type:** Feature
**Effort:** Low
**Estimate:** 2 Story Points (~1 day)

**Description:** Add Dependabot + CodeQL scanning as a required gate, and apply the secure coding practices called out in the requirements before packaging/deployment.

**Acceptance Criteria:**
- ``.github/dependabot.yml`` enabled for npm dependencies (frontend + backend), with a weekly update schedule
- ``.github/workflows/codeql.yml`` (or a job in ``ci.yml``) runs CodeQL analysis on every push/PR to ``main``; branch protection on ``main`` requires this check to pass before merge
- Frontend uses ``textContent`` or safe DOM creation for values returned by the API (no ``innerHTML`` with untrusted data); backend never logs secrets or returns raw external-service errors to the browser
- The packaging/deployment job (Sub-Task 4.2) uses ``needs:`` so it only runs after the CodeQL/security scan and unit test jobs succeed
"@
$Sub4_1 = New-GHIssue -Repo $RepoInput -Title "Sub-Task 4.1: Security Scan Gate (Dependabot + CodeQL) & Secure Coding Practices" -Type "Feature" -Effort "Low" -Labels @("Feature", "Security") -Milestone $M1 -Body $body4_1
Add-SubIssue -RepoPath $RepoInput -ParentNum $Epic4 -ChildNum $Sub4_1

$body4_2 = @"
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
"@
$Sub4_2 = New-GHIssue -Repo $RepoInput -Title "Sub-Task 4.2: Docker Packaging, GHCR Publish & Deploy to Azure (App Service or Container Apps)" -Type "Feature" -Effort "High" -Labels @("Feature", "CI/CD") -Milestone $M1 -Body $body4_2
Add-SubIssue -RepoPath $RepoInput -ParentNum $Epic4 -ChildNum $Sub4_2

Write-Host "`n==================================================================" -ForegroundColor Green
Write-Host " [5/5] Success! All items imported into '$RepoInput'." -ForegroundColor Green
Write-Host "==================================================================" -ForegroundColor Green
