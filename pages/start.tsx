import Link from 'next/link';
export default function Start() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>성별을 선택해주세요</h1>
      <Link href="/survey?gender=female">여자</Link>
      <br />
      <Link href="/survey?gender=male">남자</Link>
    </div>
  );
}