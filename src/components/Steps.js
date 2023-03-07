import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import { useState } from 'react';
import styles from '../cssModules/steps.module.css'
function Steps(){
   // Step One
  const [data,setData] = useState({
    name : "",
    email : "",
    number : "",
  });
  const [required,setRequired] = useState({
    name : false,
    email : false,
    number : false
  });
  const handleData = (e) => {
    const value = e.target.value;
    setData({...data,[e.target.name]:value})
  }
  const [plan,setPlan] = useState({
    type : "arcade",
    monthly : true
  })
  const [adds_on,setAdds_on] = useState({})

  const [activeTab,setActiveTab] = useState(1);
  const prevTab = () => {
    setActiveTab(activeTab - 1);
  }
  const nextTab = () => {
    verifyInput() && setActiveTab(activeTab + 1);
  }
  const handleTabClick = (tab) => {
    verifyInput() && setActiveTab(tab);
  };
  const verifyInput = () => {
    setRequired({
      name: data.name === "",
      email: data.email === "",
      number: data.number === "",
    });
    return !(data.name === "" || data.email === "" || data.number === "" );
  }
  return (
    <>
      <div className={styles.navButtons}>
      {[1, 2, 3, 4].map((num) => (
        <button key={num} className={`${styles.navButton} ${activeTab === num ? styles.active : ""}`} onClick={() => handleTabClick(num)}>
          {num}
        </button>
      ))}
      </div>
      <div className='content'>
        {activeTab === 1 && <StepOne handleData = {handleData} required={required} data={data} />}
        {activeTab === 2 && <StepTwo setPlan = {setPlan} plan={plan} />}
        {activeTab === 3 && <StepThree handleData = {handleData} data={data} />}
        {activeTab === 4 && <StepFour handleData = {handleData} data={data} />}
      </div>
      <div className={styles.footerButtons}>
        {activeTab > 1 && <button className={styles.backButton} onClick={() => prevTab()}>Go Back</button>}
        {activeTab < 4 && <button className={styles.nextButton} onClick={() => nextTab()}>Next Step</button>}
        {activeTab === 4 && <button className={styles.confirmButton}>Confirm</button>}
      </div>
    </>
  )
}

export default Steps;