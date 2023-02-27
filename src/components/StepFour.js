function StepFour({prevTab}){
    return(
        <>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>

            Total (per month/year)
            <button onClick={prevTab}>Go Back</button>            
            <button>Confirm</button>            

        </>
    )
}
export default StepFour;