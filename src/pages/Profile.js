import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import { getAuth, updateProfile } from 'firebase/auth'
import { toast } from 'react-toastify';
import { db } from '../firebase.config'
import { FaEdit, FaArrowAltCircleRight } from 'react-icons/fa'
import { IoMdCheckmarkCircle } from 'react-icons/io'
import { doc, updateDoc } from 'firebase/firestore'

const Profile = () => {
    const auth = getAuth()

    const navigate = useNavigate()

    const [changeDetails, setChangeDetails] = useState(false)
    const [formData, setFormData] = useState({

        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    })

    const { name, email } = formData;


    const logoutHandler = () => {
        auth.signOut()
        toast.success('Successfully Logout')
        navigate('/')
    }

    const onSubmit = async () => {
        try {
            if (auth.currentUser.displayName !== name)
                await updateProfile(auth.currentUser, {
                    displayName: name
                })
            const userRef = doc(db, 'users', auth.currentUser.uid)
            await updateDoc(userRef, { name })
            toast.success('User updated')
        } catch (error) {
            console.log(error);
            toast('Something went wrong')
        }
    }

    //onChange
    const onChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }
    return (
        <Layout>
            <div className='container mt-4 w-50 d-flex justify-content-between'>
                <h4>Profile Details</h4>
                <button className='btn btn-danger' onClick={logoutHandler}>Logout</button>
            </div>
            <div className="container mt-4 card" style={{ width: '18rem' }}>

                <div className="card-body">
                    <div className='card-header'>
                        <div className='d-flex justify-content-between'>
                            <p>User Personal Details</p>
                            <span style={{ cursor: 'pointer' }} onClick={() => {
                                changeDetails && onSubmit();
                                setChangeDetails(prevState => !prevState)
                            }}>
                                {changeDetails ? <IoMdCheckmarkCircle color='green' /> : <FaEdit color='red' />}
                            </span>
                        </div>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" value={name} onChange={onChange} disabled={!changeDetails} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={onChange} disabled={!changeDetails} />
                            </div>


                        </form>
                    </div>
                </div>

            </div>
            <div className='container mt-4 w-50 d-flex justify-content-between'>
                <Link to="/create-listing"><FaArrowAltCircleRight color='primary' />Sell or Rent Your Home</Link>
            </div>
        </Layout>
    )
}

export default Profile