import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { useParams, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Contact = () => {
    const params = useParams()
    const [message, setMessage] = useState('')
    const [landlord, setLandlord] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()


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
        <Layout>
            <div className='container mt-4'>
                <h3>Contact Details</h3>
                <div>


                    {
                        landlord !== '' && (
                            <main>
                                <h3>Name:{landlord.name}</h3>
                                <form action=''>
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a comment here" value={message} id="message" style={{ height: 100 }} onChange={(e) => { setMessage(e.target.value) }} />
                                        <label htmlFor="floatingTextarea2">Send your message</label>

                                    </div>
                                    <a
                                        href={`mailto:${landlord.email}?Subject=${searchParams.get(
                                            "listingName"
                                        )}&body=${message}`}
                                        className="btn btn-primary mt-2">
                                        Send Message

                                    </a>
                                </form>


                            </main>
                        )
                    }
                </div>
            </div>
        </Layout >
    )
}

export default Contact