import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import AppointmentForm from '../components/AppointmentForm'
import {useRouter} from 'next/router';
import React, { useEffect, useState,  useCallback} from "react";

export default function BookAnAppointment({postData}) {
    const data = postData;
    // const [data, dataSet] = useState(null)
    // const router = useRouter();
    // const url = router.asPath;
    // const type = router.pathname;
    // const fetchMyAPI = useCallback(async () => {
    //   let response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/seo-tag`+url)
    //   response = await response.json()
    //   dataSet(response)
    // }, [])
  
    // useEffect(() => {
    //   fetchMyAPI()
    // }, [fetchMyAPI])
    return (
    <> 
    <Head>
        <title>{data?.seo.title_tag}</title>
        <link rel="canonical" href={data?.seo.canonical_tag} />
        <meta name="description" content={data?.seo.description_tag} />
        <meta name="keywords" content={data?.seo.keyword_tag} />
    </Head>
{/* <section className='AboutBanner ServicePageBanner'>
    <div className='AboutBannerCont'>
    <div className='AbtBnrCaption'>
    <div className='AboutBannerHD'>Book An Appointment</div>
    </div>
    </div>
    <Image src="/images/testimonials-banner.jpg" className="img-fluid" alt="Book An Appointment" layout="responsive" width={1366} height={545} />
</section> */}


<section className='AboutBanner ServicePageBanner' style={{ paddingTop: '6rem' , backgroundColor:'#e5eaf0'}}>
<AppointmentForm/>
</section>

        </>
    )
}


BookAnAppointment.getLayout = function getLayout(page) {
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
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/seo-tag/`+'book-an-appointment',
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