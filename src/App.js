import { useState } from 'react';
import { googleLogin, getSteps } from './api/fitness.js';
import './App.css';

function App() {

  const [exerciseMin, setExerciseMin] = useState(0);

  const success = (res)=>{
    console.log(res.data)
    setExerciseMin(res.data.bucket[0].dataset[0].point[0].value[0].intVal);
  }
  const fail = (err)=>{
    console.log(err)
  }
  const payload = {
    "aggregateBy": [{
      "dataSourceId":
        "derived:com.google.active_minutes:com.google.android.gms:merge_active_minutes"
    }],
    "bucketByTime": { "durationMillis": 86400000 },
    "startTimeMillis": 1709046000000,
    "endTimeMillis": 1709097600000
  }
  
  return (
    <div className="App">
      <button onClick={googleLogin}>API 연동</button>  
      {/* <button onClick={getCode}>코드 획득</button>
      <button onClick={getToken}>토큰 가져오기</button> */}
      <button onClick={()=>getSteps(success, fail, payload)}>되나?</button>

      <h1>오늘 총 운동 시간: {exerciseMin}분</h1>
    </div>
  );
}

export default App;
