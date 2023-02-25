import { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email)
            toast.success('Email was sent')
            navigate('/signin')

        } catch (error) {
            toast.error('Something went Wrong')
        }
    }
    return (
        <Layout>
            <div className='container mt-4'>
                <h1>Reset Your Password</h1>

                <form onSubmit={onSubmitHandler}>
                    <div className="container mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>


                    <div className='d-flex justify-content-between'>
                        <button type="submit" className="btn btn-primary">reset</button>
                        <Link to='/signin'>Sign in</Link>
                    </div>
                </form>
            </div>

        </Layout>
    )
}

export default ForgotPassword