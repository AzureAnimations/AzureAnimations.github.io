# Narrator Script — Foundry · Build lightweight Foundry apps in Python

**Source animation:** [FoundryCodeAlong.html](../../../../journeys/AI/Foundry/FoundryCodeAlong.html)
**Language:** ko

Tags in `[brackets]` are delivery directions; `[600ms]` is a pause.
One block per finished animation step. English step headings are retained in every language for a stable mapping.

## References

- <https://learn.microsoft.com/azure/foundry/quickstarts/get-started-code>
- <https://learn.microsoft.com/azure/developer/python/sdk/authentication/credential-chains>
- <https://learn.microsoft.com/azure/foundry/openai/how-to/responses>
- <https://learn.microsoft.com/azure/foundry/openai/audio-completions-quickstart>

---

## Step 1 · A small app, three things to start

[calm] 경량 클라이언트라고 해서 거창한 게 아닙니다. Contoso 아웃피터스용 짧은 파이썬 스크립트 하나입니다. 여기 나오는 데이터는 모두 예시로 만든 것입니다.
[600ms]
[confident] 무거운 작업은 Foundry에서 처리합니다. 여러분의 코드는 요청을 보내고, 돌아온 응답을 쓰기만 하면 됩니다.
[600ms]
[curious] Microsoft Learn에서는 Foundry SDK를 프로젝트 API 위에 얹은 얇은 클라이언트라고 설명합니다. 이 수업에서는 Azure AI Projects 2점 x 패키지를 사용합니다.

## Step 2 · Set up and sign in

[calm] az login을 한 번 실행하고 패키지를 설치하세요. 그러고 나면 DefaultAzureCredential이 여러분의 신원을 알아서 찾습니다.
[600ms]
[confident] 이 자격 증명은 체인으로 동작합니다. 환경 설정, Azure의 관리 ID, Azure 명령줄 로그인 같은 로그인 소스를 순서대로 시도합니다.
[600ms]
[reassuring] 그래서 로컬에서도 프로덕션에서도 똑같이 동작하고, 코드에는 키가 전혀 들어가지 않습니다.

## Step 3 · Chat with a model

[curious] 프로젝트 클라이언트를 만들고, 거기서 OpenAI 클라이언트를 받아 옵니다.
[600ms]
[confident] responses create 호출로 프롬프트를 보내고, 응답을 출력하세요.
[600ms]
[serious] model 인수에는 여러분이 만든 모델 배포의 이름을 넣으세요. Learn 퀵스타트에서 쓰는 호출과 같습니다.

## Step 4 · Analyze text

[curious] Azure Language 클라이언트는 고객 리뷰를 읽고 감정과 핵심 구문, 개인 데이터를 알려 줍니다. 메서드 호출 한 번에 하나씩입니다.
[600ms]
[calm] Microsoft Entra ID로 로그인하려면, 사용자 지정 하위 도메인이 있는 엔드포인트가 필요합니다.
[600ms]
[concerned] Learn에는 감정 분석과 핵심 구문 추출이 종료 예정인 기능으로 올라 있고, 개인 데이터 감지는 계속 제공됩니다. 새 프로젝트를 시작하기 전에 Learn의 최신 페이지를 확인하세요.

## Step 5 · Speak and transcribe

[calm] Azure Speech 클라이언트는 텍스트를 오디오 파일로 바꾸고, 그 오디오를 다시 텍스트로 읽어 냅니다.
[600ms]
[curious] 두 방향 모두 같은 음성 구성을 씁니다. Learn에서는 환경 변수에 담아 둔 키와 엔드포인트로 이 구성을 만듭니다.
[600ms]
[confident] 한 번만 인식하면 발화 하나를 처리합니다. 최대 30초까지, 또는 말이 끊길 때까지 듣습니다.

## Step 6 · Ask about an image

[curious] 이미지를 받을 수 있는 모델 배포라면, 이미지에 대한 질문에도 답할 수 있습니다.
[600ms]
[confident] 사진과 질문을 한 메시지에 함께 담아 보내세요.
[600ms]
[calm] Learn에서는 이미지를 전달하는 방법으로 세 가지를 안내합니다. 공개 URL, Base64 데이터 URI, 그리고 Files API의 파일 ID입니다. 비전을 지원하는 배포를 쓰세요.

## Step 7 · Send a spoken prompt

[curious] 오디오를 지원하는 모델은 녹음 파일 자체를 입력으로 받습니다. 답하기 전에 따로 전사하는 단계가 없습니다.
[600ms]
[calm] Learn 퀵스타트는 텍스트와 오디오 모달리티를 쓰는 채팅 완성을 사용하고, 입력 오디오로는 Base64로 인코딩한 WAV 파일을 씁니다.
[600ms]
[serious] 모델을 쓸 수 있는지는 리전마다 다르니, 먼저 모델 페이지에서 확인하세요.

## Step 8 · Extract from files

[curious] Content Understanding 클라이언트 하나로 세 종류의 입력을 처리합니다. 파일 형식에 맞는 기본 제공 분석기를 고르고, 구조화된 결과를 읽으면 됩니다.
[600ms]
[confident] 송장 분석기는 필드를 돌려주고, 이미지 분석기는 사진을 설명하고, 오디오 분석기는 음성을 전사해서 요약까지 해 줍니다.
[600ms]
[serious] 분석기를 쓰려면 먼저 Foundry 리소스에 모델 배포를 설정해 두어야 합니다. 분석기마다 어떤 모델이 필요한지는 Learn README에 나와 있습니다.

## Step 9 · Call an agent

[calm] 에이전트는 지침과 모델을 갖춘 채 이미 프로젝트 안에 있습니다.
[600ms]
[confident] 클라이언트에는 이름과 대화, 메시지만 있으면 됩니다. 그러면 그 에이전트에 연결된 OpenAI 클라이언트를 받게 됩니다.
[600ms]
[impressed] 대화가 턴마다 기록을 유지하니, 이어지는 질문도 그대로 잘 동작합니다.

## Step 10 · Handle errors and clean up

[serious] 대응할 수 있는 오류를 잡아내세요. Learn에서는 400, 401, 403, 404 오류가 나면 재시도하지 말라고 안내합니다.
[600ms]
[calm] 429 오류와 서버 오류는 백오프를 두고 재시도해 볼 만합니다. 403은 권한이 없다는 뜻이니, 키 대신 Entra ID로 로그인하세요. 그리고 직접 만든 리소스는 삭제하세요.
[600ms]
[proud] 여섯 가지 클라이언트는 A I 901 학습 가이드에 나오는 실습 기술입니다.
