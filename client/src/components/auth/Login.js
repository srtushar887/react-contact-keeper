import React,{useState,useContext,useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext.js';

const Login = (props) => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);


    const {setAlert } = alertContext;

    const {login,error,clearErrors,isAuthenticated } = authContext;

    useEffect(() => {

        if (isAuthenticated){
            props.history.push('/');
        }

        if (error === 'Invalid Credentials'){
            setAlert(error,'danger');
            clearErrors();
        }

        // eslint-disable-next-line

    },[error,isAuthenticated,props.history]);



    const [user, setUser] = useState({
        email : '',
        password : '',
    });

    const { email, password} = user;

    const onchange = e => setUser({...user,[e.target.name] : e.target.value});

    const onsubmit =e=>{
        e.preventDefault();
        if (email === "" || password === ""){
            setAlert('Please fill in al field','danger');
        }else {
            login({
                email, password
            })
        }
    }


    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onsubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required value={email} onChange={onchange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required value={password} onChange={onchange}/>
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-block" />
            </form>
        </div>
    );
};

export default Login;