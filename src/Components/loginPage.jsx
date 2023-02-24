import "./loginPage.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "@auth0/auth0-react";


const LoginPage = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
            <div className="login rounded">
                <h2 className="mb-3">Live Ops Eninge</h2>
                <form>
                    <div className="form-group mb-2">
                        <label htmlFor="username" className="form-label" >Username: </label>
                        <input type={'text'} className="form-control" placeholder={"Username"} />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="password" className="form-label" >Password: </label>
                        <input type={'password'} className="form-control" placeholder={"Password"} />
                    </div>
                    <div className="form-group form-check mb-2">
                        <input type={"checkbox"} className="form-check-input" />
                        <label htmlFor="check" className="form-check-label" >Remember Me </label>
                    </div>
                    <button type="submit" className="btn btn-success block mt-2"
                        onClick={() => loginWithRedirect()}>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;
