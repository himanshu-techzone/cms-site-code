import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import Header from '../../components/header'
import styles from '../../styles/real-results.module.css'
import Footer from '../../components/footer'
import AppointmentForm from '../../components/AppointmentForm'
import {useRouter} from 'next/router';
import React, { useEffect, useState,  useCallback} from "react";
import Paginations from '../../components/Paginations';
import CallBackForm from '../../components/CallBackForm';

export default function RealResults({postData}) {
    const posts = postData.data;
    const data = postData;
    // const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postperpage, setPostPerPage] = useState(9);

    const indexOfLastPost = currentPage * postperpage;
    const indexOfFirstPost = indexOfLastPost - postperpage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
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
                <h2>Real Results</h2>
              </div>
              <div className="col-lg-12">
                <p>
                  <Link href="/">
                    <a className="anchor-tag">Home</a>
                  </Link>{" "}
                  | Real Results
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="AboutBanner hide-banner  ServicePageBanner">
          <Image
            src={
              process.env.NEXT_PUBLIC_BASE_URL +
              "/images/real-results-banner.jpg"
            }
            className="img-fluid"
            alt="Real Results"
            layout="responsive"
            width={1366}
            height={450}
          />
          <div className="AboutBannerCont hide-class">
            <div className="AbtBnrCaption">
              <div className="AboutBannerHD hide-class">Real Results</div>
              <div className="breadcrmb hide-class">
                <Link href="/">
                  <a>Home</a>
                </Link>
                / Real Results
              </div>
            </div>
          </div>
        </section>
        <CallBackForm />

        <section className={styles.ResultsPage}>
          <div className="container">
            <div className="row">
              {currentPosts.map((result) => {
                return (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                    key={result.id}
                  >
                    <div className={styles.resultThumb}>
                      <Link
                        href="/real-results/[result.url]"
                        as={"/real-results/" + result.url}
                      >
                        <a>
                          <Image
                            src={
                              process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                              "/backend/service_result/image/" +
                              result.image
                            }
                            alt={result.alt_tag}
                            className="img-fluid"
                            layout="responsive"
                            width={636}
                            height={477}
                          />
                        </a>
                      </Link>
                      <div className={styles.resultCaption}>
                        <Link
                          href="/real-results/[result.url]"
                          as={"/real-results/" + result.url}
                        >
                          <a
                            dangerouslySetInnerHTML={{ __html: result.name }}
                          ></a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Paginations
              postperpage={postperpage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </div>
        </section>
        <AppointmentForm />
      </>
    );
}


RealResults.getLayout = function getLayout(page) {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/results`);
    const postData = await res.json();
    return { 
      props:{
        postData
      }
    }
}