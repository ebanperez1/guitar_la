import React from 'react'
import Head from 'next/head'
import Header from './Header'

const Layouts = ({children, pagina}) => {
    return (
        <div>
            <Head>
                <title>GuitarLA - {pagina}</title>
            </Head>

            <Header />

            
            

            {children}
        </div>
    )
}

export default Layouts
