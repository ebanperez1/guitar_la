import React from 'react'
import Link from 'next/Link'
import Layout from '../components/Layout'

const nosotros = () => {
    return (
        <div>
            <Layout pagina='Nosotros'>
            <h1>Desde Nosotros</h1>
            <Link href="/">Ir a inicio</Link>
            </Layout>
        </div>
    )
}

export default nosotros
