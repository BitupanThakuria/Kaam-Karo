
import { useState } from "react";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/header";
import Worklist from "./components/Worklist";
import WorkData from "./data/workdata";
import FeedbackForm from "./components/FeedbackForm";
function App() {

  const [workData, setWorkData] = useState(WorkData);
  const deleteWork = (id) => {
    setWorkData(workData.filter((eachwork)=>(eachwork.id !== id)))
  }
  return (
    <>
    <Header text={'Do Some Work Simrat'}/>
    
    <div className="container">
    <FeedbackForm/>
    <FeedbackStats data={workData}/>
    <Worklist work = {workData} deletework = {deleteWork}/>
    </div>
    
    </>
  );


  
}

export default App;
