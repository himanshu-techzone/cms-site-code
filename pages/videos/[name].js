import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import Header from '../../components/header'
import Footer from '../../components/footer'
import styles from '../../styles/videos.module.css'
import AppointmentForm from '../../components/AppointmentForm'
import React, { useState, useEffect, useCallback } from 'react';
import {useRouter} from 'next/router';
import Paginations from '../../components/Paginations';

export default function Videos({postData}) {
  const data = postData.data;
  const seo = postData.seo;
  const [id,setvidId]=useState("");
  const [videourl,setVideourl]=useState("");
  const popupClick = (e, id, videourl) => {
    setVideourl(videourl);
    setvidId(id);
    console.log(videourl);
  }

  const popupClose = (e, com) => {
    if(com == 'stop'){
      e.preventDefault();
      setVideourl();
      setvidId();
    }
  }
    const posts = postData.video;
    // const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postperpage, setPostPerPage] = useState(6);

const indexOfLastPost = currentPage * postperpage;
const indexOfFirstPost = indexOfLastPost - postperpage;
const currentPosts = postData.video.slice(indexOfFirstPost, indexOfLastPost);
const paginate = pageNumber => setCurrentPage(pageNumber);
// console.log(posts);
    return (
      <>
        <Head>
          <title>{seo?.title_tag}</title>
          <link rel="canonical" href={seo?.canonical} />
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
        <section className="AboutBanner ServicePageBanner">
          <Image
            src={process.env.NEXT_PUBLIC_BASE_URL + "/images/video-banner1.jpg"}
            className="img-fluid"
            alt="Videos"
            layout="responsive"
            width={1366}
            height={447}
          />
          <div className="AboutBannerCont">
            <div className="AbtBnrCaption">
              <div className="AboutBannerHD">{data.name}</div>
              <div className="breadcrmb">
                <Link href="/">
                  <a>Home</a>
                </Link>
                /
                <Link href="/videos">
                  <a>Videos</a>
                </Link>
                / {data.name}
              </div>
            </div>
          </div>
        </section>

        <section className={`sectionSpace ${styles.SctnVideos}`}>
          <div className="container-fluid  text-center">
            {/* <div className='SctnHdng'>Our Videos</div> */}
            <div className="row mt-3 mb-2">
              {currentPosts.map((video) => {
                return (
                  <div
                    className="col-lg-4 col-md-4 col-sm-4 col-12"
                    key={video.id}
                  >
                    <div className={styles.videoThumbBx}>
                      <div className={styles.vdoPlayIcon}>
                        <Link href="/">
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#VidModal"
                            className="stretched-link"
                            onClick={(e) =>
                              popupClick(e, `${video.id}`, `${video.video}`)
                            }
                          >
                            <i className="fa fa-play" aria-hidden="true"></i>
                          </a>
                        </Link>
                      </div>
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                          "/backend/service_video/inner/" +
                          video.image
                        }
                        alt={video.alt_tag}
                        className="img-fluid w-100"
                        layout="responsive"
                        width={375}
                        height={211}
                      />
                    </div>
                    <p>{video.name}</p>
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

        {/* Start Video Modal Popup */}

        <div
          className={`modal  ${styles.videoModal} fade`}
          id="VidModal"
          tabIndex="-1"
          aria-labelledby="VidModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <button
                type="button"
                className={`btn-close ${styles.btnclose}`}
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={(e) => popupClose(e, "stop")}
              ></button>
              <div className="modal-body" id="yt-player">
                <div className="responsive-iframe">
                  <iframe
                    width="100%"
                    height="400"
                    src={videourl}
                    title="Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AppointmentForm />
      </>
    );
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

export async function getServerSideProps({query}){
  const { name } = query;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/video-details/`+name,
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