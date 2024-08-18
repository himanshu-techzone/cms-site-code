  import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';
import AppointmentForm from '../components/AppointmentForm';
import { setConfig } from 'next/config';
import { Router } from 'react-router-dom';

function ServiceMains({ postData }) {
  // console.log(postData.success);
  if(postData.success==false){
      // windows.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`;
  }
  const deata = postData.data;
  const seo = postData.seo;
  const serviceData = postData.data.servicelist;
    return (
    <>

    <Head>
        <title>{seo?.title_tag}</title>
        <link rel="canonical" href={seo?.canonical_tag} />
        <meta name="description" content={seo?.description_tag} />
        <meta name="keywords" content={seo?.keyword_tag} />
        <meta property="og:title" content={seo?.title_tag} />
        <meta property="og:type" content="" />
        <meta property="og:image" content="" />
        <meta property="og:description" content={seo?.description_tag} />
        <meta property="og:site_name" content="" />
        <meta property="og:url" content={seo?.canonical_tag} />
        <meta property="twitter:title" content={seo?.title_tag}/>
        <meta property="twitter:type" content="" />
        <meta property="twitter:image" content={seo?.description_tag} />
        <meta property="twitter:description" content={seo?.description_tag} />
        <meta property="twitter:site_name" content="" />
        <meta property="twitter:url" content={seo?.canonical_tag} />
    </Head>
    
        <section className="breadcrum-section">
          <div className="container-fluid text-center">
            <div className="row p-3 mb-2 content">
              <div className="col-lg-12">
                <h2>{deata?.service_name}</h2>
              </div>
              <div className="col-lg-12">
                <p><Link href="/"><a className='anchor-tag'>Home</a></Link>/ <Link href="/services"><a className='anchor-tag'>Services </a></Link>/ {deata?.service_name}</p>
              </div>
            </div>
          </div>
        </section>

<section className='AboutBanner hide-banner p-0 ServicePageBanner'>
  <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+'/backend/service/banner/'+deata.banner_image} className="img-fluid" alt="aestiva-hospital" layout="responsive" width={1366} height={450}/>
    <div className='AboutBannerCont hide-class'>
    <div className='AbtBnrCaption'>
    <div className='AboutBannerHD hide-class'>{deata?.service_name}</div>
      <div  dangerouslySetInnerHTML={{ __html: deata?.description }}></div>
    <div className="breadcrmb hide-class"><Link href="/"><a >Home</a></Link>/ <Link href="/services"><a>Services</a></Link>/ {deata?.service_name}</div>
    </div>
    </div>
    
  </section>
 



<section className='sectionSpace srvcPgOne'>
<div className='container'>
    {/* <div className='SctnHdng SctnPgHdng text-center'>Services</div> */}
<div className='row justify-content-center'>

{serviceData?.map((post) => {
return (
   <div className='col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 srvceCatItemsBx' key={post.ser_id}>
<div className="card">
  <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+'/backend/service/image/'+post.service_image} layout='responsive' className="img-fluid" alt="image" width={505} height={246}/>
  <div className="card-body text-center">
    <div className="srvcCatHd">{post.service_name}</div>
    <div  dangerouslySetInnerHTML={{ __html: post.short_desc}}></div>
    <Link href="/[deata?.url]/[post?.url]" as={"/"+deata.url+'/'+post.url}><a className="BtnRdMore stretched-link">READ MORE</a></Link>
  </div>
</div>
    </div>
 )})}

</div> 
</div>
</section>


<AppointmentForm/>


        </>
    )
}


ServiceMains.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Header />
            {page}
            <Footer />
        </Layout>
    )
}

export async function getServerSideProps({query}){
  const { name } = query;
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/service-category/`+name);
  const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/service-category/`+name,
      {
        method: 'GET'
      }
    );
      const postData = await response.json();
    if (response.status == 200) {
      return { 
        props:{
          postData
        }
      } 
    }else{
      return {
        redirect: {
          destination: '/404',
        },
      };
    }
    
}
export default ServiceMains
