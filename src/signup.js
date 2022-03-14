import css from './signup.css'
function Signup (){
    return (
        <main>
        <div className="main-container">
            <h1 className="main-title">Login</h1>
            <div className="main-login">
                <form>
                    <div className="input_100">
                        <input type="text" id="txtEmailId" placeholder="Enter email id"></input>
                    </div>
                    <div className="input_100">
                        <input type="password" id="txtPassword" placeholder="Enter password"></input>
                    </div>

                    <div className="main-btn">
                        <button type="submit" id="btnLogin" className="btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
    )
}
export default Signup;