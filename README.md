# 프로젝트 개요

팀 스파르타 내일배움캠프 타임어택 해커톤 과제로 E-commerce의 기본 제품 요소인 로그인, 회원가입 기능을 시간 안에 완성을 목표로 하는 프로젝트이다. 이 프로젝트를 통해 자신의 개발 역량을 중간 점검하고, 현업에 즉시 뛰어들 수 있는 실력으로 성장하는 것에 그 목적이 있다.

## 프로젝트 목표

1. 요구사항 분석 능력 향상
2. 생각을 만들어내는 구현 숙련도 확인
3. 모르는 것을 떠올리는 사고력 향상

## 프로젝트 주요 기능

1. 로그인 기능
2. 회원가입 기능

## 프로젝트 요구 조건

1. 로그인/회원가입 폼 구현
2. 페이지 및 라우팅 구현
3. 스타일링
4. 전역 상태 관리 구현
5. 다양한 에러 핸들링 구현

# 세부 중점 사항

## 개요

프로젝트를 진행하면서 중요하게 생각했던 원칙, 중점적으로 생각했던 점에 대한 내용임.

## 원칙

1. 무엇을 만들어야하는지, 어떤 기능을 구현해야 하는지, 데이터의 흐름이 어떻게 흘러가는지에 대해서 정확하게 인지하고 시작한다.
2. 서버 컴포넌트와 클라이언트 컴포넌트를 확실하게 구분한다.
3. 주어진 시간 내에 프로젝트를 완성하기 위해 기능 구현을 우선시 한다.

## 중점 사항

### 공통

- sign in, sign up 컴포넌트 둘 다 사용자의 입력이 들어가기 때문에 클라이언트 컴포넌트로 결정
  - Sign In Page는 서버 컴포넌트로 결정 : Form 외에는 클라이언트 컴포넌트가 없다.
  - Sign Up Page는 클라이언트 컴포넌트로 결정 : Form 이외에도 페이지 자체에서 조건부 랜더링을 해야 하는데 별도의 페이지로 이동하거나 search param을 이용하여 URL을 변경하는 것보다는 CSR을 이용하여 한 페이지에서 보여주는 것이 더 마땅하다 생각하여 클라이언트 컴포넌트로 결정
- 공통 컴포넌트 고려 : 회원가입과 로그인 페이지 모두 Input이 공통의 디자인을 가지고 있기 때문에 공통 Input Component 만들기로 결정
- NextJS 환경에서 로그인 여부 유지를 위한 노력

### 회원가입 기능 구현

- Email Form 조건부 랜더링
- 커스텀 훅을 이용하여 input 상태값에 대하여 input value, error, handler 공통 기능 구현
- 유효성 검사 구현 / 유효성 검사 실패 시 에러가 가시적으로 보일 수 있도록 구현
- 회원가입 완료 후 페이지 네비게이션('/signin')

### 로그인 기능 구현

- 로그인 성공 시 전역 상태로 현재 로그인 상태 공유할 수 있도록 수정
- 로그인 성공 시 페이지 네비게이션('/signin') : 구현해야하는 페이지가 2페이지 밖에 없기 떄문에 제자리 네비게이션 결정
- 유효성 검사 구현 / 유효성 검사 실패 시 에러가 가시적으로 보일 수 있도록 구현

### 전역 상태 관리

- 현재 로그인 상태에 따라서 navigation을 할 수 있도록 isLogin을 전역상태로 구현
- 커스텀 훅을 이용하여 isLogin에 대한 정보를 바로가져올 수 있도록 구현

### 사용한 라이브러리와 사용한 이유

- axios : 비동기 통신을 지원하는 라이브러리로 fetch를 사용하지 않고 axios를 사용한 이유는 instance와 2번의 비동기 작업을 피하기 위해서 사용하기로 결정

### 코드 품질 향상

- 로직 분리를 위해 노력
  - valid 함수 분리
  - redux 관련 폴더 생성하여 분리
  - 커스텀 훅을 이용한 로직 분리
  - 공통 컴포넌트 분리
- 가독성, 유지보수 고려 변수명 최대한 직관적으로 읽히게 결정