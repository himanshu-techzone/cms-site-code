import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import AppointmentForm from '../components/AppointmentForm'
import {useRouter} from 'next/router';
import React, { useEffect, useState,  useCallback} from "react";
import Paginations from '../components/Paginations';

export default function HospitalGallery({ postData }) {
    const posts = postData.data;
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postperpage, setPostPerPage] = useState(6);

    const indexOfLastPost = currentPage * postperpage;
    const indexOfFirstPost = indexOfLastPost - postperpage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const [data, dataSet] = useState(null)
    const router = useRouter();
    const url = router.asPath;
    const type = router.pathname;
    const fetchMyAPI = useCallback(async () => {
      let response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/seo-tag`+url)
      response = await response.json()
      dataSet(response)
    }, [])
  
    useEffect(() => {
      fetchMyAPI()
    }, [fetchMyAPI])
    return (
    <> 
    <Head>
        <title>{data?.seo.title_tag}</title>
        <link rel="canonical" href={data?.seo.canonical_tag} />
        <meta name="description" content={data?.seo.description_tag} />
        <meta name="keywords" content={data?.seo.keyword_tag} />
    </Head>

            <section className="breadcrum-section">
                <div className="container-fluid text-center">
                    <div className="row p-3 mb-2 content">
                        <div className="col-lg-12">
                            <h2>Aestiva Gallery</h2>
                        </div>
                        <div className="col-lg-12">
                            <p><Link href="/"><a className='anchor-tag'>Home</a></Link> | Aestiva Gallery</p>
                        </div>
                    </div>
                </div>
            </section>

<section className='AboutBanner hide-banner p-0 ServicePageBanner'>
    <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/contact-us-banner.jpg'} className="img-fluid" alt="Hospital Gallery" layout="responsive" width={1366} height={447} />
    <div className='AboutBannerCont'>
    <div className='AbtBnrCaption'>
    <div className='AboutBannerHD hide-class'>Aestiva Gallery</div>
    <div className="breadcrmb hide-class"><Link href="/"><a>Home</a></Link>/ Aestiva Gallery</div>
    </div>
    </div>
    
</section>

<section className='ContactUsPage'>
<div className="container">

<div className="row">
{currentPosts.map((post) => {
    return (
<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-4" key={post.id}>
    <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+'/backend/gallery/'+post.gallery_image} alt="Hospital Gallery" className='img-fluid' layout="responsive" width={640} height={425} />
</div>
    )
})}

</div>
    <Paginations postperpage={postperpage} totalPosts={posts.length} paginate={paginate}/>  
</div>

</section>

<AppointmentForm/>
        </>
    )
}


HospitalGallery.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Header />
            {page}
            <Footer />
        </Layout>
    )
}

export async function getServerSideProps({query}){
    // const { url } = query;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/gallery`);
    const postData = await res.json();
  
    return { 
      props:{
        postData
      }
    }
  }