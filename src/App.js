import React, {useState} from 'react';
import './App.css';
import learnerData from './data/learners';
import Learner from './components/Learner'


function App() {
  const [learners] = useState({ learners: learnerData });
  return (
    <div>
    {learners.learners.map((learner, index) => (
      <Learner key={index} learner={learner} />
    ))}
  </div>
  );
}

export default App;
