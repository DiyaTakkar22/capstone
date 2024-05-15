import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';





const Login = () => {

    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [afterSubmit, setAfterSubmit] = useState('');
    
 

    const handleChange = (evt) => {
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleLoginSubmit = (evt) => {
        evt.preventDefault();
        setLoginData({ username: '', password: '' });
        
               
            
    };


        return (
            <div className="container">
            <div className="row justify-content-center mt-5">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header bg-primary text-white">Login</div>
                  <div className="card-body">
                    <form onSubmit={handleLoginSubmit}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="username"
                          value={loginData.username}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          value={loginData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </form>
                    <div className="mt-3">
                      <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      };
export default Login;
