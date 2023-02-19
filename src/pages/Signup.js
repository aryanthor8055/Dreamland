import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const { name, email, password } = formData
    const navigate = useNavigate()

    const onChange = () => {

    }
    return (
        <Layout>
            <div className='d-flex  align-items-center justify-content-center w-100 mt-4'>
                <form className='bg-light p-4'>
                    <h4 className='bg-dark p-2 mt-2 text-light text-center'>Sign Up</h4>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email Name</label>
                        <input type="text" value={name} onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="nameHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" value={email} onChange={onChange} className="form-control" id="email" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={password} onChange={onChange} className="form-control" id="password" />
                        <span>

                        </span>
                    </div>

                    <button type="submit" className="btn btn-primary">Sign up</button>
                    <div>
                        <h6>Login with Google</h6>
                        <span>Already User? </span><Link to='/signin'>Login</Link>
                    </div>
                </form>

            </div>
        </Layout>
    )
}

export default Signup