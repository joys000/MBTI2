// pages/start.tsx
import Link from 'next/link';

export default function Start() {
  return (
    <main style={{ textAlign: "center", padding: "100px" }}>
      <h2>질문에 답변해주세요!</h2>
      <Link href="/survey">설문 시작하기</Link>
    </main>
  );
}
