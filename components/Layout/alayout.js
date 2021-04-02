import Head from 'next/head'
import Link from 'next/link'
import {GET_TOKEN} from '../../shared/backend'
import Cookies from 'js-cookie'

const Alayout = (props) => {
    return (
        <div>
             <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/bootstrap.min.css" />
        <script src="/jquery-3.6.0.min.js" crossorigin="anonymous"></script>
        <script src="/bootstrap.min.js" crossorigin="anonymous"></script>
      </Head>
            <div className="container" style={{display: 'flex', flexDirection: 'row'}}>
                <div className="sidebar" style={{margin: '80px 40px 10px 10px'}}>
                    <ul style={{listStyleType: 'none'}}>
                        <li style={{margin: '30px 0'}}>
                            <Link href="/dashboard">
                            <a>Dashboard</a>
                            </Link>
                            </li>
                        {Cookies.get('user') === 'admin' && 
                        <li style={{margin: '30px 0'}}>
                            <Link href="/staff">
                                <a>Staff</a>
                            </Link>
                            </li>}
                        <li style={{margin: '30px 0'}}>Logout</li>
                    </ul>
                </div>
                <div>{props.children}</div>
            </div>
        </div>
    )
}

export default Alayout;