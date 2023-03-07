import styles from '../cssModules/stepThree.module.css'
function StepThree(){
    return(
        <>
            <h1>Pick add-ons</h1>
            <p className="paragraph">Add-ons help enhance your gaming experience.</p>
            <button className={styles.checkLabel} >
                <input type="checkbox" />
                <div className={styles.addsDetails}>
                    <h2>Online service</h2>
                    <p>Access to multiplayer games</p>
                </div>
                <p className={styles.price}>+$1/mo</p>
            </button>

            <button className={styles.checkLabel}>
                <input type="checkbox" />
                <div className={styles.addsDetails}>
                    <h2>Larger storage</h2>
                    <p>Extra 1TB of cloud save</p>
                </div>
                <p className={styles.price}>+$2/mo</p>
            </button>
            <button className={styles.checkLabel}>
                <input type="checkbox" />
                <div className={styles.addsDetails}>
                    <h2>Customizable Profile</h2>
                    <p>Custom theme on your profile</p>
                </div>
                <p className={styles.price}>+$2/mo</p>
            </button>
        </>
    )
}
export default StepThree;