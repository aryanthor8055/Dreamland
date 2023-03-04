import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { doc, getDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '../firebase.config'
import { useParams, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../styles/Contact.css'

const Contact = () => {
    const params = useParams()
    const [message, setMessage] = useState('')
    const [landlord, setLandlord] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const auth = getAuth()


    useEffect(() => {
        const getLandlord = async () => {
            const docRef = doc(db, 'users', params.landlordId)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                setLandlord(docSnap.data())
            }
            else {
                toast.error('Unable to fetch data')
            }
        }
        getLandlord()
    }, [params.landlordId])
    return (
        <Layout title="contact details - Dreamland">
            <div className="row contact-container">
                <div className="col-md-6 contact-container-col-1">
                    <img src="/assets/contact.svg" alt="contact" />
                </div>
                <div className='col-md-6 contact-container-col-2'>
                    <h3>Contact Details</h3>
                    <div>


                        {
                            landlord !== '' && (
                                <main>
                                    <h3 className='mb-4'>Person Name:{" "}{landlord.name}</h3>
                                    {
                                        auth.currentUser ? (<form action=''>
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a comment here" value={message} id="message" style={{ height: 100 }} onChange={(e) => { setMessage(e.target.value) }} />
                                                <label htmlFor="floatingTextarea2">Send your message</label>

                                            </div>

                                            <a
                                                href={`mailto:${landlord.email}?Subject=${searchParams.get(
                                                    "listingName"
                                                )}&body=${message}`}
                                                className="btn btn-c mt-2">
                                                Send Message

                                            </a>
                                        </form>) : (<a href='/signin'><button className='btn signinbutton'>Login</button></a>)
                                    }



                                </main>
                            )
                        }
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Contact