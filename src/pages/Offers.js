import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import { collection, getDocs, query, where, orderBy, limit, startAfter } from 'firebase/firestore'
import Spinner from '../components/Spinner'
import ListingItem from '../components/ListingItem'

const Offers = () => {
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(true)
    const params = useParams()


    //fetch Listing

    useEffect(() => {
        const fetchListing = async () => {
            try {
                //reference
                const listingsRef = collection(db, 'listings')
                //query
                const q = query(listingsRef, where('offer', '==', true), orderBy('timestamp', 'desc'), limit(10))

                //execute query

                const querySnap = await getDocs(q)
                const listings = []
                querySnap.forEach((doc) => {
                    return listings.push({
                        id: doc.id,
                        data: doc.data()
                    })
                })
                setListing(listings)
                setLoading(false)

            } catch (error) {
                console.log(error);
                toast.error('Unable to fetch data')
            }
        }
        fetchListing()
    }, [])
    return (
        <Layout>
            <div className='mt-3 container-fluid'>
                <h1>Best Offers</h1>

                {
                    loading ? <Spinner /> : listing && listing.length > 0 ? (
                        <>
                            <div>
                                {
                                    listing.map((list) => (
                                        <ListingItem listing={list.data} id={list.id} key={list.id} />
                                    ))
                                }
                            </div>
                        </>
                    ) : (<p>There Are no Current Offer</p>)
                }
            </div>

        </Layout>
    )
}

export default Offers