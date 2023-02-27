import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import { useState } from 'react';

function Steps(){
  const [data,setData] = useState({
    // Step One
    name : "",
    email : "",
    number : "",
    // Step Two
    plan : "",
    monthly:false,
    // Step Three
    onlineService : false,
    largeStorage : false,
    customProfile : false,
  });
  const handleData = (e) => {
    const value = e.target.value;
    setData({...data,[e.target.name]:value});
  }
  const [activeTab,setActiveTab] = useState(1);
  const prevTab = () => {
    setActiveTab(activeTab - 1)
  }
  const nextTab = () => {
    setActiveTab(activeTab + 1)
  }
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className='buttons'>
        <button className={activeTab === 1 ? 'active' : ''} onClick={()=>handleTabClick(1)}>1</button>
        <button className={activeTab === 2 ? 'active' : ''} onClick={()=>handleTabClick(2)}>2</button>
        <button className={activeTab === 3 ? 'active' : ''} onClick={()=>handleTabClick(3)}>3</button>
        <button className={activeTab === 4 ? 'active' : ''} onClick={()=>handleTabClick(4)}>4</button>
      </div>
      <div className='content'>
        {activeTab === 1 && <StepOne handleData = {handleData} data={data} nextTab = {nextTab} />}
        {activeTab === 2 && <StepTwo handleData = {handleData} data={data} nextTab = {nextTab} prevTab = {prevTab}/>}
        {activeTab === 3 && <StepThree handleData = {handleData} data={data} nextTab = {nextTab} prevTab = {prevTab}/>}
        {activeTab === 4 && <StepFour handleData = {handleData} data={data} prevTab = {prevTab}/>}
      </div>
    </>
  )
}

export default Steps;