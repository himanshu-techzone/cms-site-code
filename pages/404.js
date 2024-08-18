import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Custom404() {
  return (
    <>
     <Head>
        <title>404 page not found</title>
        <link rel="canonical" href="" />
        <meta name="description" content="404 page not found" />
        <meta name="keywords" content="404 page not found" />
    </Head>
{/* <section className='AboutBanner ServicePageBanner'>
    <Image src="/images/contact-us-banner.jpg" className="img-fluid" alt="404 page" layout="responsive" width={1366} height={350} />
</section> */}


<section className="error500" style={{height:'auto', padding:'10rem'}}>
<div className='thankYouPageCont error500Cont'>
<h1>404 error</h1>
<p>Sorry! Page not found.</p>
<Link href="/"><a className='BtnRdMore'>Go to Home Page</a></Link>
</div>
</section>


{/* End code here */}



    </>
  )
}


Custom404.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Header />
            {page}
            <Footer />
        </Layout>
    )
}