# React Shop

- React와 Recoil, Tailwind CSS를 활용

### 트러블 슈팅

search 검색 List focus문제

- setActiveIndex가 초기화되지 않아 키보드 탐색 시 잘못된 index 참조
- 해결 : deferredSearch 변경 시 setActiveIndex(-1)을 우선 실행

반응형 스타일 적용 문제

- 문제: 모바일에서 검색창이 안 보이거나, 전환이 부자연스러움
- 해결 : 조건부 Tailwind 처리와 transform, translateY를 통한 애니메이션 적용

`React state update on a component that hasn't mounted yet` 경고

- Recoil selector로부터 비동기로 데이터를 가져오는 동안 컴포넌트가 언마운트된 경우, `setState()`로 상태 변경 시도.
- `useRecoilValueLoadable(productsList)` 사용 후 곧바로 상태 접근 시 해당 경고 발생
- Suspense를 활용하여 해결하였지만 다른 해결방법 확인 필요

### 개선 및 배운점

상태 선언 순서와 비동기 처리가 민감한 컴포넌트에서는 useEffect와 useMemo를 적극적으로 활용해야 함.

키보드 접근성을 고려한 네비게이션 UX는 activeIndex 관리와 DOM ref 연동이 중요함.

반응형 UI에서 검색창 토글 여부에 따라 상태 초기화가 필요했으며, 이 또한 useEffect로 처리.

## Vercel

### 배포 단계

-

### 배포 주소
