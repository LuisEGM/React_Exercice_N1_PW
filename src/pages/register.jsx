import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import HeaderAccess from '../components/headerAccess'
import { ToastContainer, toast } from 'react-toastify'
import { signup } from '../services/userService'

const Register = () => {

    const history = useHistory();

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const handleChange = e => {
        if (e.target.name === "name") {
            setNombre(e.target.value);
        }
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "avatar") {
            setAvatar(e.target.value);
        }
        if (e.target.name === "password1") {
            setPassword1(e.target.value);
        }
        if (e.target.name === "password2") {
            setPassword2(e.target.value);
        }
    }

    const handleClick = e => {
        e.preventDefault();
        if (nombre === "" || email === "" || avatar === "" || password1 === "" || password2 === "") {
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
            if (password1 !== password2) {
                toast.warn('Las contraseñas no coinciden...!', {
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
                        await signup({
                            name: nombre,
                            email: email,
                            avatar: avatar,
                            is_superuser: false,
                            password: password1
                        })
                        toast.info('Registro exitoso...!', {
                            theme: "colored",
                            position: "bottom-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        setTimeout(() => {
                            history.push("/login");
                        }, 2000)
                    } catch (error) {
                        console.log(error);
                    }
                })();
            }
        }
    }

    return (
        <>
            <div>
                <HeaderAccess/>
                <div className="container" style={{ paddingTop: '7rem' }}>
                    <div className="card card-container mx-auto p-4" style={{ width: '40%' }}>
                        <div className="mx-auto mb-3">
                            <img style={{ width: '100%'}} className="ml-2" alt="img-logo" src={Logo} height="110" width="110"/>
                            <h4 className="text-center texto-u2">Registrate</h4>
                        </div>
                        <form id="login-form" className="form-group mb-3" >
                            <div className="form-floating mb-3">
                                <input onChange={handleChange} value={nombre} type="text" className="form-control" name="name" placeholder="Jhon Doe"/>
                                <label htmlFor="floatingInput">Nombre</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleChange} value={email} type="email" className="form-control" name="email" placeholder="Emailname@example.com"/>
                                <label htmlFor="floatingInput">Direccion email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleChange} value={avatar} type="text" className="form-control" name="avatar" placeholder="Jhon Doe"/>
                                <label htmlFor="floatingInput">Url-avatar</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleChange} value={password1} type="password" className="form-control" name="password1" placeholder="Password"/>
                                <label htmlFor="floatingPassword">Contraseña</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleChange} value={password2} type="password" className="form-control" name="password2" placeholder="Password"/>
                                <label htmlFor="floatingPassword">Confirma contraseña</label>
                            </div>
                        </form>
                        <button onClick={handleClick} className="btn btn-primary my-3" type="button">Registrarme</button>
                        <div className="card-footer text-center">
                            <Link to="/login" className="forgot-password">
                                O si ya tienes cuenta, accede por aquí.
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default Register
