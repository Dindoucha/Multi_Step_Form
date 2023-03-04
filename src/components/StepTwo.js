import styles from '../cssModules/stepTwo.module.css'
function StepTwo({setPlan,plan}){
    return(
        <>
            <h1>Select your plan</h1>
            <p className='paragraph'>You have the option of monthly or yearly billing.</p>
            {
                [["arcade","$9/mo"],["advanced","$12/mo"],["pro","$15/mo"]].map((element) => (
                    <button 
                    className={`${styles.planButton} ${plan.type === element[0] ? styles.active : ""}`}
                    key = {element[0]}
                    id = {element[0]}
                    onClick={(e)=>{
                        let button = document.getElementById(element[0])
                        setPlan({...plan,type:button.id});
                    }}
                    >
                        <img src={"./assets/images/icon-"+element[0]+".svg"} alt={element} />
                        <div>
                            <h2>{element[0]}</h2>
                            <p>{element[1]}</p>
                        </div>
                    </button>
                ))
            }
            <div>
                {plan.type}
            Monthly
            <button onClick={() => setPlan({...plan,monthly:!plan.monthly})}>
                {plan.monthly ? "true" : "false"}
            </button>
            Yearly
            </div>
            
        </>
    )
}
export default StepTwo;