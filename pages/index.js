import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/Link'
import Layout from '../components/Layout'

export default function Home(){
    return (
        
            
            <Layout pagina= 'Inicio'>
            <h1 className="heading">Desde inicio</h1>
            <Link href="/nosotros">Ir a Nosotros</Link>

            </Layout>
          )
}