import React, { useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import HeaderAccess from '../components/headerAccess'
import Logo from '../assets/logo.svg'
import { login } from '../services/userService'
import { ToastContainer, toast } from 'react-toastify'
import { AuthContext } from '../context/authContext'

const Login = () => {

    const { userLogin } = useContext(AuthContext);
    let history = useHistory();

    const handleClick = e => {
        e.preventDefault();
        const formData = new FormData(document.getElementById("login-form"));

        if (formData.get("username") === "" || formData.get("password") === "") {
            toast.warn('Asegurate de no dejar campos vacios...!', {
                theme: "colored",
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            (async () => {
                try {
                    const result = await login(formData);
                    userLogin(result);
                    history.push("/admin/view-products")
                } catch (error) {
                    console.log(error.response);
                    if (error.response.data.detail === "Incorrect username or password") {
                        toast.error(`Los datos de email o password son invalidos...!`, {
                            theme: "colored",
                            position: "bottom-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                    console.log(error.response);
                }
            })();
        }
    }

    return (
        <>
            <div>
                <HeaderAccess/>
                <div className="container" style={{ zIndex: '100', paddingTop: '7rem' }}>
                    <div className="card card-container mx-auto p-4" style={{ width: '40%' }}>
                        <div className="mx-auto mb-3">
                            <img style={{ width: '100%'}} className="ml-2" alt="img-logo" src={Logo} height="110" width="110"/>
                            <h4 className="text-center texto-u2">Iniciar sesión</h4>
                        </div>
                        <form id="login-form" className="form-group mb-3">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" name="username" placeholder="Emailname@example.com"/>
                                <label htmlFor="floatingInput">Direccion email</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" name="password" placeholder="Password"/>
                                <label htmlFor="floatingPassword">Contraseña</label>
                            </div>
                        </form>
                        <button onClick={handleClick} className="btn btn-primary my-3" type="button">Iniciar</button>
                        <div className="card-footer text-center">
                            <Link to="/register" className="forgot-password">
                                O regístrate aquí, si aún no tienes cuenta
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default Login
