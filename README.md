# MeaTeam Convention

## 폴더 컨벤션

- 폴더는 무조건 소문자로만 EX => pages
- 컴포넌트 파일은 무조건 PascalCase Ex => Todo.tsx
- style은 style폴더에 따로 EX => 스타일링 컴포넌트 아래 X
- 매 폴더에 index.ts 생성 후 named export 방식으로 경로 설정

## 코드,변수 컨벤션

- .env, api, key는 무조건 대문자로만
- 함수명은 camelCase
- 컴포넌트, 생성자 함수, Class는 PascalCase
- Styled-components는 s.dot naming eX => import \* as S from ~~
- className은 BEM 방식
- 코드는 최대한 함수형으로 작성

## 커밋 컨벤션

- 기능별로 커밋(최대한 상세히)
- pull request시에는 팀원들과 이야기
- 기능 추가 feat #이슈번호 :
- 스타일 style #이슈번호 :
- 수정 fix #이슈번호 :
- 업데이트 update #이슈번호 :
- 삭제 delete #이슈번호 :
- 문서관련 docs #이슈번호 :
- 테스트 test #이슈번호 :
- 리팩토링 refactor #이슈번호 :
- 자잘한 수정 chore #이슈번호 :
- 빌드 build #이슈번호 :
- CI 설정 파일 수정 ci #이슈번호 :
- 성능개선 perf #이슈번호 :

## git branch 전략

- Git Flow
- develop에서 기능별 브랜치 생성 -> pr후 삭제

[참고1](https://hudi.blog/git-branch-strategy/), [참고2](https://techblog.woowahan.com/2553/)

## 협업 컨벤션

- 모르는거 있음 바로 묻기
- 소통 많이 하기
- 개인 아이디어 또는 방법 편하게 말하기
