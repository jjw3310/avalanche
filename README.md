npm install

npm run start

git clone https://github.com/ava-labs/avalanche-smart-contract-quickstart.git

cd avalanche-smart-contract-quickstart

yarn

npx hardhat compile

//new terminal
npx hardhat node

npx hardhat accounts

npx hardhat balances --network local

server -> app.js
npm init
npm i express
npm i -D nodemon
npm i cors

app.use(cors());
app.use(express.json());

npm i -D prisma

npx prisma init

prisma extention 설치

https://scoop.sh/ 에서 아래 명령어 2개 실행. (윈도우) ★터미널 파워쉘로 열기★
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser # Optional: Needed to run a remote script the first time
irm get.scoop.sh | iex

https://github.com/planetscale/cli#installation
여기서 윈도우 / Mac에 따라 설치명령어 실행
윈도우 ↓
scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git
scoop install pscale mysql

pscale auth login

//연결 명령어
pscale connect to-do-list

127.0.0.1:8131 <- port

.env 파일 경로 수정
mysql://127.0.0.1:8131/to-do-list

npx prisma db push

//db통신을 위해 backend 폴더에 설치
npm i @prisma/client

//db 생성 명령어 region 위치 ap-northeast 도쿄(한국에서 가장 가까운 곳)
pscale database create to-do-list --region ap-northeast

워크벤치
npx prisma studio

npm run dev

- 20230 추가 설치패키지 +

npm i @chakra-ui/icons
npm i @fortawesome/fontawesome-svg-core
npm i @fortawesome/react-fontawesome
npm install @fortawesome/free-regular-svg-icons
npm i react-dropzone