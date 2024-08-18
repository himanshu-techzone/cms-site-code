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
import CallBackForm from '../components/CallBackForm';

export default function Testimonials({ postData }) {
    const posts = postData.data;
    const data = postData;
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postperpage, setPostPerPage] = useState(6);

    const indexOfLastPost = currentPage * postperpage;
    const indexOfFirstPost = indexOfLastPost - postperpage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // const [data, dataSet] = useState(null)
    // const router = useRouter();
    // const url = router.asPath;
    // const type = router.pathname;
    // const fetchMyAPI = useCallback(async (url) => {
    //   let response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/seo-tag`+type)
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
                    <div className="row p-3  content">
                        <div className="col-lg-12">
                            <h2>Written Testimonials</h2>
                        </div>
                        <div className="col-lg-12">
                            <p>Home | Written Testimonials</p>
                        </div>
                    </div>
                </div>
            </section>

<section className='AboutBanner hide-banner  p-0 ServicePageBanner'>
                <Image src={process.env.NEXT_PUBLIC_BASE_URL +'/images/testi2.jpg'} className="img-fluid" alt="Testimonials" layout="responsive" width={1366} height={450} />
                <div className='AboutBannerCont hide-class'>
    <div className='AbtBnrCaption'>
    <div className='AboutBannerHD hide-class'>Testimonials</div>
    <p>What Our Patients Say</p>
    <div className="breadcrmb hide-class"><Link href="/"><a>Home</a></Link>/ Testimonials</div>
    </div>
    <div className='AboutBannerTxt tstmnlSrcImg'>

<ul>
    <li><Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/google.png'} className="img-fluid" alt="google" width={64} height={21} /></li>
    <li><Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/practo.png'} className="img-fluid" alt="practo" width={69} height={17} styles={{height: '17px'}} /></li>
    <li><Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/lybrae.png'} className="img-fluid" alt="lybrae" width={72} height={19} /></li>
    <li><Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/justdial.png'} className="img-fluid" alt="justdial" width={67} height={17} /></li>

</ul>
     </div>
    </div>
   
</section>

<CallBackForm />


<section className='sectionSpace p-0 testimonialPage'>
<div className='container'>
<div className='row justify-content-center text-center'>
    <div className='col-xxl-10  col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 pb-4'>
        {currentPosts.map((test) => {
            return (
                <div className='tstmnlCntBx' key={test.id}>
                    {(() => {
                        if(test.source == 'google'){
return (
                    <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/google.png'} className="img-fluid" alt="google" width={64} height={21} />
                    )} if(test.source == 'practo'){ 
                    return (
                        <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/practo.png'} className="img-fluid" alt="practo" width={69} height={17} styles={{height: '17px'}} />
                    )} if(test.source == 'lybrate'){ 
                    return (
                        <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/lybrae.png'} className="img-fluid" alt="lybrae" width={72} height={19} />
                        )} if(test.source == 'justdial'){ 
                            return (
                                <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/justdial.png'} className="img-fluid" alt="justdial" width={67} height={17} />
                                )}
})()}                    
                    <div className='tstmnlHd' dangerouslySetInnerHTML={{__html: test.name   }}></div>
                    <div className="testimonialsRating">
                    {(() => {
                        var indents = [];
                        for(let i=1; i<=5; i++){
                            indents.push(<i className="fa fa-star" aria-hidden="true"></i>);
                        }
                        return (
                            <div>
                                {indents}
                            </div>
                        );
                    })()}
                    
                    </div>
                    <div dangerouslySetInnerHTML={{__html: test.description }}></div>
                    <div className='opinonTxt'>*Opinions / Results may vary from person to person.</div>
                </div>
            )
        })}
    </div>
    <Paginations postperpage={postperpage} totalPosts={posts.length} paginate={paginate}/>
 
</div> 
</div>
</section> 

<AppointmentForm/>


        </>
    )
}


Testimonials.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Header />
            {page}
            <Footer />
        </Layout>
    )
}

export async function getServerSideProps({page = 1}){
    const start = +page === 1 ? 0 : (+page-1) * 6;
    // console.log(start);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/testimonials?page=${page}`);
    const postData = await res.json();
  
    return { 
      props:{
        postData,page
      }
    }
  }