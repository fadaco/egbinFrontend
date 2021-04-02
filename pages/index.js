import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Login from '../components/login';
import Layout from '../components/Layout/layout';


export default function Home() {
  return (
   <Layout>
<Login/>
   </Layout>
     
  )
}
