import React from 'react'
import { BsGithub, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from 'react-icons/ai'
import { Link } from "react-router-dom";
import '../../styles/Footer.css'

const Footer = () => {
    return (
        <div className="footer pt-4 d-flex flex-column align-items-center justify-content-center bg-dark text-light p-4">
            <h3>
                Created By Aryanthor-8055
            </h3>
            <h6>All Right Reserved &copy; Aryanthor-8055 - 2023</h6>
            <div className="d-flex flex-row p-2">
                <p className="me-4" title="Github">
                    <Link to="https://github.com/aryanthor8055">
                        <BsGithub color="black" size={30} />
                    </Link>
                </p>
                <p className="me-4" title="Linkedin">
                    <Link to="https://www.linkedin.com/in/aryan-sharma-a22a08156/">
                        <AiFillLinkedin color="#0a66c2" size={30} />
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default Footer