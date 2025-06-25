// pages/index.tsx
export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "100px" }}>
      <p>성격 유형 검사를 시작해보세요!</p>
      <a href="/start" style={{ fontSize: "18px", color: "blue" }}>
        시작하기
      </a>
    </main>
  );
}
