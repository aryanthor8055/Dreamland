import React from 'react'
import Layout from '../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import Slider from '../components/Slider'
import "../styles/Homepage.css"

const HomePage = () => {
    const navigate = useNavigate()
    const img1 = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    const img2 = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    return (
        <Layout>

            <Slider />
            <div className='home-cat row d-flex align-items-center justify-content-center'>
                <h1>Category</h1>
                <div className='col-md-5'>
                    <div className="Imagecontainer">
                        <img src={img1} alt="rent" style={{ width: '100%' }} />
                        <button className="btn" onClick={() => navigate('/category/rent')}>TO RENT</button>
                    </div>

                </div>
                <div className='col-md-5'>
                    <div className="Imagecontainer">
                        <img src={img2} alt="rent" style={{ width: '100%' }} />
                        <button className="btn" onClick={() => navigate('/category/sell')}>TO SELL</button>
                    </div>
                </div>
            </div>

        </Layout>
    )
}


export default HomePage