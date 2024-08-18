  import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AppointmentForm from '../../components/AppointmentForm';
import { setConfig } from 'next/config';

function ServiceMains({ postData }) {
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
        <script type="application/ld+json">
          {`seo?.seo_schema`}
        </script>
    </Head>
<section className='AboutBanner ServicePageBanner'>
  <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/service-main-banner.jpg'} className="img-fluid" alt="aestiva-hospital" layout="responsive" width={1366} height={450}/>
    <div className='AboutBannerCont'>
    <div className='AbtBnrCaption'>
    <div className='AboutBannerHD'>{deata?.service_name}</div>
      <div  dangerouslySetInnerHTML={{ __html: deata?.description }}></div>
    <div className="breadcrmb"><Link href="/"><a>Home</a></Link>/ <Link href="/services"><a>Services</a></Link>/ {deata?.service_name}</div>
    </div>
    </div>
    
</section>



<section className='sectionSpace srvcPgOne'>
<div className='container'>
    {/* <div className='SctnHdng SctnPgHdng text-center'>Services</div> */}
<div className='row justify-content-center'>

{serviceData.map((post) => {
return (
   <div className='col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 srvceCatItemsBx' key={post.ser_id}>
<div className="card">
  <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+'/backend/service/image/'+post.service_image} layout='responsive' className="img-fluid" alt="image" width={505} height={246}/>
  <div className="card-body text-center">
    <div className="srvcCatHd">{post.service_name}</div>
    <div  dangerouslySetInnerHTML={{ __html: post.short_desc }}></div>
    <Link href="/[post.url]" as={"/"+post.url}><a className="BtnRdMore stretched-link">Read more</a></Link>
  </div>
</div>
    </div>
 )})}
     
 
        {/* <div className='col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 srvceCatItemsBx'>
<div className="card">
  <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/about-aestiva-hospital.jpg'} layout='responsive' className="img-fluid" alt="image" width={505} height={246}/>
  <div className="card-body text-center">
    <div className="srvcCatHd">Rhinoplasty</div>
    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="/rhinoplasty"><a className="BtnRdMore stretched-link">Read more</a></Link>
  </div>
</div>
    </div>
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 srvceCatItemsBx'>
<div className="card">
  <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/about-aestiva-hospital.jpg'} layout='responsive' className="img-fluid" alt="image" width={505} height={246}/>
  <div className="card-body text-center">
    <div className="srvcCatHd">Rhinoplasty</div>
    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="/rhinoplasty"><a className="BtnRdMore stretched-link">Read more</a></Link>
  </div>
</div>
    </div> */}
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

// export async function getserviceProps(){

//   const response = await fetch('http://localhost:8091/api/service');
//   const mods = await response.json();

//   return {
//       props: { mods, },
//   };
// }
// export async function getStaticPaths(){
//   const paths = ["/services/face","/services/face1"];
//   return {paths, fallback: true}
// }
// export async function getStaticProps({query}){
//   const { name } = query;

//   const res = await fetch('http://localhost:8091/api/service-category/'+name);
//   const postData = await res.json();

//   return { 
//     props:{
//       postData
//     }
//   }
// }
export async function getServerSideProps({query}){
  const { name } = query;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/service-category/`+name);
  const postData = await res.json();

  return { 
    props:{
      postData
    }
  }
}




// function App() {
//   const [items, setItems] = useState();

//   useEffect(() => {
//     getItems().then(data => setItems(data));
//   }, []);

//   return (
//     <div>
//       {items.map(item => (
//         <div key={item.id}>{item.title}</div>
//       ))}
//     </div>
//   );
// }

export default ServiceMains
