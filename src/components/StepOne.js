function StepOne({handleData,data,nextTab}){
    return(
        <>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <div className="inputGroup">
                <label>Name</label>
                <input 
                onChange={handleData} 
                value={data.name} 
                name = "name"
                type="text"
                placeholder="e.g. Stephen King"
                />
            </div>
            <div className="inputGroup">
                <label>Email Address</label>
                <input 
                onChange={handleData} 
                value={data.email} 
                name = "email"
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                />
            </div>
            <div className="inputGroup">
                <label>Phone Number</label>
                <input 
                onChange={handleData} 
                value={data.number} 
                name = "number"
                type="text"
                placeholder="e.g. +1 234 567 890"
                />
            </div>
            <button onClick={nextTab}>Next Step</button>
        </>
    )
}
export default StepOne;