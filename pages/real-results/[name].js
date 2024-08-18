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


export default function RealResultsGallery({ postData }) {
    const deata = postData.data;
    const posts = postData.result;
    const data = postData;
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postperpage, setPostPerPage] = useState(8);

    const indexOfLastPost = currentPage * postperpage;
    const indexOfFirstPost = indexOfLastPost - postperpage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
      <>
        <Head>
        <title>{data?.seo.title_tag}</title>
          <link rel="canonical" href={data?.seo.canonical} />
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
                <h2>{deata.name}</h2>
              </div>
              <div className="col-lg-12">
                <p>
                  <Link href="/">
                    <a className="anchor-tag">Home</a>
                  </Link>{" "}
                  |{" "}
                  <Link href="/real-results">
                    <a className="anchor-tag">Real Result </a>
                  </Link>
                  | {deata.name}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="AboutBanner hide-banner ServicePageBanner">
          <Image
            src={
              process.env.NEXT_PUBLIC_BASE_URL +
              "/images/real-results-banner.jpg"
            }
            className="img-fluid"
            alt="Real Results Gallery"
            layout="responsive"
            width={1366}
            height={450}
          />
          <div className="AboutBannerCont hide-class">
            <div className="AbtBnrCaption">
              <div className="AboutBannerHD">{deata.name}</div>
              <div className="breadcrmb">
                <Link href="/">
                  <a>Home</a>
                </Link>
                /
                <Link href="/real-results">
                  <a>Real Result</a>
                </Link>
                / {deata.name}
              </div>
            </div>
          </div>
        </section>

        <CallBackForm />

        <section className={styles.ResultsPage}>
          <div className="container">
            <div className="row pb-2">
              {currentPosts.map((post) => {
                return (
                  <div
                    className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                    key={post.id}
                  >
                    <div className={styles.resultThumb}>
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                          "/backend/service_result/inner/" +
                          post.afterimg
                        }
                        alt={post.alt_tag}
                        className="img-fluid"
                        layout="responsive"
                        width={636}
                        height={477}
                      />
                      <p>*Opinions / Results may vary from person to person.</p>
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


RealResultsGallery.getLayout = function getLayout(page) {
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
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/result-details/`+name,
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