import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  // console.log(searchParams.get('mode'));
  
  return (
    // <div className={['Main',searchParams.get('mode')].join(' ')}>
    <div className={`Main ${searchParams.get('mode') || ''}`}>
      <div>MainPage</div>
      <button onClick={()=>{
        // 'mode' 쿼리 파라미터를 Dark로 설정하여 url을 업데이트
        setSearchParams({mode : 'Dark'});
      }}>Dark Mode</button>
    </div>
  )
}


/**
 * useSearchParams() 훅은 현재 URL의 쿼리 파라미터를 읽고 수정할 수 있는 기능을 제공
 * searchParams는 URLSearchParams객체로, 현재 URL의 쿼리 파라미터를 나타냅니다.
 * setSearchParams는 쿼리 파라미터를 수정하는데 사용되는 함수
 * searchParams.get('mode')는 현재 URL의 쿼리 스트링에서 mode라는 이름의 파라미터 값을 가져옵니다.
 * 버큰 클릭 이벤트 핸들러는 setSearchParams({mode : 'Dark'})를 호출하여 쿼리 스트링의 mode파라미터를 Dark로 설정함
 * 이로인해 URL이 업데이트 되며, 페이지가 새로고침 되지않고 URL의 쿼리 파라미터가 변경됩니다.
 */