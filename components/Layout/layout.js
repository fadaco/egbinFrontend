import Head from 'next/head'

const Layout = (props) => {
    return (
        <div>
             <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/bootstrap.min.css" />
        <script src="/jquery-3.6.0.min.js" crossorigin="anonymous"></script>
        <script src="/bootstrap.min.js" crossorigin="anonymous"></script>
      </Head>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;