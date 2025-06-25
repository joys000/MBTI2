import { useRouter } from 'next/router';
export default function Survey() {
  const router = useRouter();
  const gender = router.query.gender;
  return (
    <div>
      <h1>{gender} 설문 시작</h1>
      <p>여기에 설문 문항 로직을 추가하세요.</p>
    </div>
  );
}