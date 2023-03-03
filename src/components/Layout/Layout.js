import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Helmet } from "react-helmet";

const Layout = ({ children, title }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Header />
            <main style={{ minHeight: "80vh" }}>
                {children}
            </main>
            <Footer />
        </>
    )
}

Layout.defaultProps = {
    title: "Dreamland -Find Best"
}

export default Layout