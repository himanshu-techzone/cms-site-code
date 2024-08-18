import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/video-testimonial.module.css'
import AppointmentForm from '../components/AppointmentForm'
import React, { useState, useEffect, useCallback } from 'react';
import {useRouter} from 'next/router';
import Paginations from '../components/Paginations';
import CallBackForm from '../components/CallBackForm';

export default function VideoTestimonials({postData}) {
  const data = postData;
  const posts = postData.data;
  const [id,setvidId]=useState("");
  const [videourl,setVideourl]=useState("");
  const popupClick = (e, id, videourl) => {
    setVideourl(videourl);
    setvidId(id);
  }

  const popupClose = (e, com) => {
    if(com == 'stop'){
      e.preventDefault();
      setVideourl();
      setvidId();
    }
  }
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postperpage, setPostPerPage] = useState(9);
  
      const indexOfLastPost = currentPage * postperpage;
      const indexOfFirstPost = indexOfLastPost - postperpage;
      const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
      const paginate = pageNumber => setCurrentPage(pageNumber);
      
console.log(id);
    return (
    <> 
    <Head>
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


        <section className="breadcrum-section">
          <div className="container-fluid text-center">
            <div className="row p-3 content">
              <div className="col-lg-12">
                <h2>Videos Testimonials</h2>
              </div>
              <div className="col-lg-12">
                <p><Link href="/"><a className='anchor-tag'>Home</a></Link> | Videos Testimonials</p>
              </div>
            </div>
          </div>
        </section>

<section className='AboutBanner hide-banner p-0 ServicePageBanner'>
    <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/video-testi.jpg'} className="img-fluid" alt="Videos" layout="responsive" width={1366} height={447} />
    <div className='AboutBannerCont hide-class'>
    <div className='AbtBnrCaption'>
    <div className='AboutBannerHD hide-class'>Video  Testimonials</div>
    <div className="breadcrmb hide-class"><Link href="/"><a>Home</a></Link>/ Video  testimonials</div>
    </div>
    </div>
     
</section>

        <CallBackForm />

<section className={`sectionSpace ${styles.SctnVideos}`}>
<div className="container-fluid  text-center">
<div className='row mt-3 mb-2'>
{currentPosts.map((video) => {
  return (
<div className='col-lg-4 col-md-4 col-sm-4 col-12' key={video.id}>
<div className={styles.videoThumbBx}>
  <div className={styles.vdoPlayIcon}><a data-bs-toggle="modal" data-bs-target="#VidModal" className="stretched-link" onClick={(e) => popupClick(e, `${video.id}`, `${video.video}`)}><i className="fa fa-play" aria-hidden="true"></i></a></div>
  <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+'/backend/service_video/inner/'+video.image} alt={video.alt_tag} className='img-fluid w-100' layout="responsive" width={375} height={211}/>
</div>
  <p className='mb-0'>{video.name}</p> 
                    <p className='dis-txt'>*Opinions / Results may vary from person to person.</p>

</div>
)})}
</div>
<Paginations postperpage={postperpage} totalPosts={posts.length} paginate={paginate}/>
</div>
</section>

{/* Start Video Modal Popup */}
<div className={`modal ${styles?.videoModal} fade`} id="VidModal" tabIndex="-1" aria-labelledby="VidModalLabel" aria-hidden="true">
<div className="modal-dialog modal-lg">
  <div className="modal-content">
      <button type="button" className={`btn-close ${styles?.btnclose}`}
      data-bs-dismiss="modal" aria-label="Close" onClick={(e) => popupClose(e, 'stop')}></button> 
    <div className="modal-body" id='yt-player'>
      <div className='responsive-iframe'>
      <iframe width="100%" height="400" src={videourl} title="Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
    </div>
  </div>
</div>
</div>
<AppointmentForm/>

        </>
    )
}


VideoTestimonials.getLayout = function getLayout(page) {
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/video-testimonial`);
  const postData = await res.json();
  return { 
    props:{
      postData
    }
  }
}