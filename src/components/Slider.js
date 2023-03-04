import React, { useState, useEffect } from 'react'
import { db } from '../firebase.config'
import { collection, getDoc, query, orderBy, limit, getDocs } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import Spinner from "../components/Spinner";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { ImLocation2 } from "react-icons/im";
import '../styles/Slider.css'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
    const [listings, setListing] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const userPic =
        "https://openclipart.org/download/247319/abstract-user-flat-3.svg";

    useEffect(() => {
        const fetchListing = async () => {
            const listingRef = collection(db, 'listings')
            const q = query(listingRef, orderBy('timestamp', 'desc'), limit(5))
            const querySnap = await getDocs(q)
            let listings = [];
            querySnap.forEach(doc => {
                return listings.push({
                    id: doc.id,
                    data: doc.data()
                })
            })
            setListing(listings)
            setLoading(false)
        };

        fetchListing()

    }, [])

    if (loading) {
        return <Spinner />
    }
    return (
        <>
            <div style={{ width: "100%" }}>
                {listings === null ? (
                    <Spinner />
                ) : (
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}

                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}

                        className="mySwipe"

                    >
                        {listings.map(({ data, id }) => (
                            <SwiperSlide key={id} onClick={() => { navigate(`/category/${data.type}/${id}`) }}>

                                <img
                                    src={data.imgUrls[0]}
                                    height={500}
                                    width='100%'
                                    alt={data.name}

                                />
                                <h4 className='bg-info text-light p-2 m-0'>
                                    <ImLocation2 size={20} className="ms-2" /> Recently Added :{" "}
                                    <br />
                                    <span className='ms-4 mt-2'>{data.name}</span>
                                    <span className="ms-2">
                                        | Price ( $ {data.regularPrice} )
                                    </span>
                                </h4>


                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </>
    )
}

export default Slider