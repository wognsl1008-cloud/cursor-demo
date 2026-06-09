# cursor-demo v1.0.0 릴리스 노트

**릴리스 일자:** 2026-06-09  
**기준 커밋:** `71134ef`  
**테스트:** pass (`npm test` — 3/3 통과)

## 요약

이메일 추출·검증 유틸을 `src/` 모듈로 분리하고, 런타임 오류와 중복 정의를 제거했습니다. Node 내장 테스트 러너 기반 단위 테스트가 추가되어 `npm test`로 회귀 검증이 가능하며, Cursor용 PR 점검 커맨드와 릴리스 노트 스킬이 함께 포함되었습니다.

## Added

- `src/extractEmails.js` — 사용자 배열에서 이메일 목록을 추출하는 함수
- `src/isValidEmail.js` — 문자열 이메일 형식을 검증하는 함수
- `src/index.js` — 유틸 모듈 re-export 진입점
- `test/index.test.js` — `extractEmails`, `isValidEmail` 단위 테스트 3건
- `report/project-analysis.md` — 프로젝트 진입점·데이터 흐름 정적 분석 보고서
- `Prompt/project-analysis.md` — 분석 작업 대화 기록
- `.cursor/commands/prep-pr.md` — PR 전 테스트·리뷰 점검 커맨드
- `.cursor/skills/release-notes/SKILL.md` — 릴리스 노트 작성 스킬
- `.cursor/skills/release-notes/scripts/collect_commits.sh` — 커밋 수집 스크립트
- `README.md` — 프로젝트 소개 및 v1.0.0 릴리스 노트

## Changed

- 루트 `index.js`가 `./src` 모듈을 require하도록 재구성
- `package.json`의 `test` 스크립트를 `node --test test/index.test.js`로 변경
- 직접 실행(`node .`) 시 데모 출력으로 함수 동작을 확인하도록 변경

## Fixed

- 미정의 `exampleFunction()` 호출로 발생하던 `ReferenceError` 제거
- `extractEmails` 중복 정의 제거 (배열 타입 검사 포함 구현만 유지)
- 1행 문자열 리터럴 `"console.log(...)"`을 실제 실행 코드로 수정
- `src/index.js`가 문자열 리터럴만 담고 있던 문제 해결

## Removed

- 루트 `index.js`에 있던 중복·미사용 함수 정의
- 실행 불가능한 `exampleFunction()` 호출

## Breaking Changes

없음 (초기 공개 버전)

## 마이그레이션 가이드

외부에서 함수를 사용하려면 루트 진입점을 통해 import합니다.

```javascript
const { extractEmails, isValidEmail } = require('cursor-demo');
// 또는
const { extractEmails, isValidEmail } = require('./src');
```

## 알려진 이슈

- 이메일 검증은 단순 정규식 기반이라 RFC 전체 규격을 보장하지 않습니다.
