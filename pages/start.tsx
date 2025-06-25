// pages/start.tsx

export default function StartPage() {
  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h1>MBTI 연애 유형 테스트 - 시작</h1>
      <p>설문을 시작하려면 아래 버튼을 눌러주세요.</p>
      <a href="/survey" style={{ fontSize: '18px', color: 'blue' }}>설문 시작</a>
    </div>
  );
}
