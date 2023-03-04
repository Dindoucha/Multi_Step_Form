function StepOne({handleData,data,required}){    
    return(
        <>
            <h1>Personal info</h1>
            <p className="paragraph">Please provide your name, email address, and phone number.</p>
            <div className="inputGroup">
                <label>Name</label>
                <input 
                className={required.name ? "required" : ""}
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
                className={required.email ? "required" : ""}
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
                className={required.number ? "required" : ""}
                onChange={handleData} 
                value={data.number} 
                name = "number"
                type="text"
                placeholder="e.g. +1 234 567 890"
                />
            </div>
        </>
    )
}
export default StepOne;