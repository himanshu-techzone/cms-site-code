import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import {useRouter} from 'next/router';
import React, { useEffect, useState,  useCallback} from "react";

export default function Thankyou({postData}) {
    const data = postData;
    // const [data, dataSet] = useState(null)
    // var router = useRouter();
    // var url = router.asPath;

    // const type = router.pathname;
    // const fetchMyAPI = useCallback(async (url) => {
    //   let response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/seo-tag`+url)
    //   response = await response.json()
    //   dataSet(response)
    // },[])
  
    // useEffect(() => {
    //   fetchMyAPI()
    // }, [fetchMyAPI])
    return (
    <> 
    <Head>
    <script>
        gtag('event', 'conversion', {`{'send_to': 'AW-854769480/DCyBCLKDgHEQyP7KlwM'}`});
    </script>
    <title>{data?.seo.title_tag}</title>
        <link rel="canonical" href={data?.seo.canonical_tag} />
        <meta name="description" content={data?.seo.description_tag} />
        <meta name="keywords" content={data?.seo.keyword_tag} />
        <meta property="og:title" content={data?.seo.title_tag} />
        <meta property="og:type" content="" />
        <meta property="og:image" content="" />
        <meta property="og:description" content={data?.seo.description_tag} />
        <meta property="og:site_name" content="" />
        <meta property="og:url" content={data?.seo.canonical_tag} />
        <meta property="twitter:title" content={data?.seo.title_tag}/>
        <meta property="twitter:type" content="" />
        <meta property="twitter:image" content={data?.seo.description_tag} />
        <meta property="twitter:description" content={data?.seo.description_tag} />
        <meta property="twitter:site_name" content="" />
        <meta property="twitter:url" content={data?.seo.canonical_tag} />
    </Head>
<section className='AboutBanner ServicePageBanner'>
    <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/contact-us-banner.jpg'} className="img-fluid" alt="Thank You" layout="responsive" width={1366} height={350} />
</section>


<section className="ContactUsPage">
    <div className="container">
<div className="row justify-content-center">    
<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
    <div className='thankYouPageCont'>
<h1>Thank You</h1>
<p>We have received your request.<br/> We will get in-touch with you shortly.</p>
<Link href="/"><a className='BtnRdMore'>Go to Home Page</a></Link>
</div>
    </div>
</div>
</div>
</section>

        </>
    )
}


Thankyou.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Header />
            {page}
            <Footer />
        </Layout>
    )
}

export async function getServerSideProps(){
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/seo-tag/`+'thank-you',
        {
          method: 'GET'
        }
      );
        const postData = await response.json();
        return { 
          props:{
            
            postData
          }
      
    }
  }