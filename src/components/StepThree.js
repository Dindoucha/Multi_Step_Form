function StepThree({nextTab,prevTab}){
    return(
        <>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            Online service
            Access to multiplayer games
            +$1/mo

            Larger storage
            Extra 1TB of cloud save
            +$2/mo

            Customizable Profile
            Custom theme on your profile
            +$2/mo
            <button onClick={prevTab}>Go Back</button>
            <button onClick={nextTab}>Next Step</button>
        </>
    )
}
export default StepThree;