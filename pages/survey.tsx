// pages/survey.tsx
import Link from 'next/link';

export default function Survey() {
  return (
    <main style={{ textAlign: "center", padding: "100px" }}>
      <h2>설문 진행 중...</h2>
      <Link href="/result">결과 보러가기</Link>
    </main>
  );
}
