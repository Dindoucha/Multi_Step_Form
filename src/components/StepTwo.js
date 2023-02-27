function StepTwo({nextTab,prevTab}){
    return(
        <>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            Arcade
            $9/mo

            Advanced
            $12/mo

            Pro
            $15/mo

            Monthly
            Yearly
            <button onClick={prevTab}>Go Back</button>
            <button onClick={nextTab}>Next Step</button>
        </>
    )
}
export default StepTwo;