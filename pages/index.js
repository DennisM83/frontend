import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Welcome to Burger Place | Home of the burger" description="Home of the worlds best burger" keywords="burger, burgers, fries, food">
      <h1>Home Page</h1>
    </Layout>
  )
}
