import React from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import { BsFillEyeFill } from 'react-icons/bs'
import { toast } from 'react-toastify';

const Signin = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData
    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))

    }
    //loginHandler

    const loginHandler = async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth()
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            if (userCredential.user) {
                toast.success('Login Success')
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            toast.error('Invalid Email or Password')
        }
    }


    return (
        <Layout>
            <div className='d-flex  align-items-center justify-content-center w-100 mt-4'>
                <form className='bg-light p-4' onSubmit={loginHandler}>
                    <h4 className='bg-dark p-2 mt-2 text-light text-center'>Sign In</h4>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" value={email} onChange={onChange} className="form-control" id="email" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type={showPassword ? 'text' : 'password'} value={password} onChange={onChange} className="form-control" id="password" />
                        <span>
                            Show Password <BsFillEyeFill className='ms-2 text-danger' style={{ cursor: 'pointer' }} onClick={() => { setShowPassword((prevState) => !prevState) }} />
                        </span>
                    </div>

                    <button type="submit" className="btn btn-primary">Sign In</button>
                    <div className='mt-2'>
                        <h6>Login with Google</h6>
                        <span>New User </span><Link to='/signup'>Sign Up</Link>
                    </div>
                </form>

            </div>

        </Layout>
    )
}

export default Signin