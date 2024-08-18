import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import Header from '../../components/header'
import Footer from '../../components/footer'
import styles from '../../styles/videos.module.css'
import AppointmentForm from '../../components/AppointmentForm'
import React, { useState, useEffect } from 'react';
import Paginations from '../../components/Paginations';
import CallBackForm from '../../components/CallBackForm';

export default function Videos({postData}) {    
    const data = postData;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postperpage, setPostPerPage] = useState(9);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/videos`);
      const data = await res.json();
      setPosts(data.data);
      setLoading(false);
      // const firstPageIndex = (currentPage - 1) * PageSize;
      // const lastPageIndex = firstPageIndex + PageSize;
      // return data.slice(firstPageIndex, lastPageIndex);
    }
    fetchPosts();
  }, []);

    const indexOfLastPost = currentPage * postperpage;
    const indexOfFirstPost = indexOfLastPost - postperpage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);

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
                    <div className="row p-3   content">
                        <div className="col-lg-12">
                            <h2>Videos</h2>
                        </div>
                        <div className="col-lg-12">
                            <p><Link href="/"><a className='anchor-tag'>Home</a></Link> | Videos</p>
                        </div>
                    </div>
                </div>
            </section>

<section className='AboutBanner hide-banner p-0 ServicePageBanner'>
    <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/video-banner1.jpg'} className="img-fluid" alt="Videos" layout="responsive" width={1366} height={447} />
    <div className='AboutBannerCont hide-class'>
    <div className='AbtBnrCaption'>
    <div className='AboutBannerHD hide-class'>Videos</div>
    <div className="breadcrmb hide-class"><Link href="/"><a>Home</a></Link>/ Videos</div>
    </div>
    </div>
     
</section>
<CallBackForm />


<section className={styles.videoPage}>
<div className="container-fluid">

<div className="row">
    {currentPosts.map((video) => {
        return (
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12" key={video.id}>
                <div className={styles.videoBx}>
                    <figure>
                        <Link href="/videos/[video.url]" as={"/videos/"+video.url}><a><Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+'/backend/service_video/image/'+video.image} alt={video.alt_tag} width={640} height={360} /></a></Link>
                    </figure>
                    <div className={styles.videoCatName}>
                        <Link href="/videos/[video.url]" as={"/videos/"+video.url}>
                            <a>{video.name}</a>
                        </Link>
                    </div>
                </div>
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


Videos.getLayout = function getLayout(page) {
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
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/seo-tag/`+'videos',
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

// export async function getServerSideProps({query}){
//     // const { url } = query;
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/videos`);
//     const postData = await res.json();
//     return { 
//       props:{
//         postData
//       }
//     }
// }