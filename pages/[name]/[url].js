import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import Layout from '../../components/layout'
import Header from '../../components/header'
import styles from '../../styles/service.module.css'
import style from '../../styles/popup-video.module.css'
import Footer from '../../components/footer'
import AppointmentForm from '../../components/AppointmentForm'
import ServiceFAQs from '../../components/servicefaqs'
import RealResultsService from '../../components/RealResultsService'
import CallBackForm from '../../components/CallBackForm';
import React, {useState} from 'react'

export default function Rhinoplasty({ postData }) {
  
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
  const datalist = postData.data;
  const faq = postData.faq;
  const real = postData.result;
  const seo = postData.seo;
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
          {seo?.seo_schema}
        </script>
      </Head>


      <section className='AboutBanner ServicePageBanner'>
        <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/backend/service/banner/' + datalist.service_banner_image} className="img-fluid" alt="Rhinoplasty" layout="responsive" width={1366} height={545} />

        
        <div className='AboutBannerCont '>
          <div className='AbtBnrCaption'>
            <div className='AboutBannerHD'>{datalist.service_name}</div>
            <div className='my-para' >{datalist.name_desc}</div>
            <div className="breadcrmb brd-desk"><Link href="/"><a  >Home</a></Link>/<Link href="/services"><a>Services</a></Link>/ {datalist.service_name}</div>
          </div>
        
            
          {/* <div className='AboutBannerTxt'>Nose reshaping surgery or rhinoplasty encompasses a variety of surgeries designed to correct deformities and intensify nasal proportions.</div> */}
        </div>
        <div className="breadcrmb brd-mob"><Link href="/"><a  >Home</a></Link>/<Link href="/services"><a>Services</a></Link>/ {datalist.service_name}</div>
        <CallBackForm />
        {(() => {
          if (datalist?.description2) {
            return (
              <div className='AboutBannerTxt ad-class cd-class' dangerouslySetInnerHTML={{ __html: datalist?.description2 }}></div>
            )
          }
        })()}
      </section>
      


      <section className={`sectionSpace serv_sec ${styles.srvcPgOne} ${styles.no_padding_t} ${styles.no_padding_b}`}>
        <div className='container'>
          {/* <div className={`SctnHdng ${styles.SctnPgHdng} text-center`}>Introduction</div> */}
          <div className='row justify-content-center'>
            <div className='col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12'>
              <div className='AboutBannerTxt hide-Hd' dangerouslySetInnerHTML={{ __html: datalist?.description }}></div>
              {/* <p>The nose occupies a central position in the face and thereby lends a great deal to overall facial beauty and a pleasing look. A straight and symmetrical nose adds more attractiveness to one’s personality, while a crooked and deformed nose detracts from it.</p>
<p>Nose reshaping surgery or rhinoplasty encompasses a variety of surgeries designed to correct deformities and intensify nasal proportions. The rhinoplasty surgery helps to correct the bump of the bridge (dorsal hump), nasal width, twisted nose, prominent nasal tip, nasal tip, post-traumatic deformities (nasal injury), and internal valve collapse.</p> */}
            </div>
          </div>
        </div>
      </section>

      <div className='sectionsLinksHght'>
        <section className='sectionsLinks'>
          <ul className='justify-content-around'>
            {datalist.section.map((post) => {
              var spacesString = post.section_heading;
              var noSpacesString = spacesString.replace(/ /g, '');
              return (
                <li key={post.id}><Link href="/[noSpacesString]" as={"#" + noSpacesString}><a>{post.section_heading}</a></Link></li>
              )
            })}
            {/* <li><Link href="#SurgeryIncludes"><a>Surgery Includes</a></Link></li>
    <li><Link href="#IdealCandidate"><a>Ideal Candidate</a></Link></li>
    <li><Link href="#Procedure"><a>Procedure</a></Link></li>
    <li><Link href="#SrvceBenefits"><a>Benefits</a></Link></li>
    <li><Link href="#Consultation"><a>Consultation</a></Link></li> */}
    {(() => {
        if (faq.length != '0') {
          return (
            <li><Link href="#FAQs"><a>FAQs</a></Link></li>
          )}})}
          </ul>
        </section>
      </div>
      {/* {console.log(datalist.section)} */}
      {datalist.section.map((post) => {
        var spacesString = post.section_heading;
        var noSpacesString = spacesString.replace(/ /g, '');
        if (post.type == 'twoparagraph') {
          return (

            <section className={`sectionSpace serv_sec ${styles.no_padding_t} ${styles.no_padding_b} ${styles.srvcInnerSctn} ${styles.nrmlList} ${post.class_add}`} id={noSpacesString} key={noSpacesString}>
              <div className="container">
                <div className='row'>
                  <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                  {(() => {
                  if (post.service_heading) {
                    return (
                    <div  className={styles.SctnHdng}>{post.service_heading}</div>
                    )
                  }
                })()}
                    <div dangerouslySetInnerHTML={{ __html: post.section1 }}></div>
                  </div>
                  <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                  {(() => {
                  if (post.service_heading1) {
                    return (
                    <div className={styles.SctnHdng}>{post.service_heading1}</div>
                    )
                  }
                  })()}
                    <div dangerouslySetInnerHTML={{ __html: post.section2 }}></div>
                  </div>
                </div>
                {(() => {
                  if (post.button_type == 'Yes') {
                    return (
                      <div className="text-center py-2"><Link href="/book-an-appointment"><a className="BtnRdMore">BOOK AN APPOINTMENT</a></Link></div>

                    )
                  }
                })()}
              </div>
            </section>

          )
        }

        if (post.type == 'imagetext') {
          return (
            <section className={`sectionSpace serv_sec ${styles.no_padding_t} ${styles.no_padding_b} AbtDctrSctn ${styles.srvcInnerSctn}`} id={noSpacesString} key={noSpacesString}>

              <div className='container'>

                <div className='row justify-content-around'>
                  <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12'>

                    <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/backend/service/section/' + post.image} className='img-fluid zIndx' layout="responsive" alt="rhinoplasty" width={530} height={784} />
                  </div>
                  <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 AbtDctrSctnTxt '>
                  {(() => {
                  if (post.service_heading) {
                    return (
                    <div className={styles.SctnHdng}>{post.service_heading}</div>
                    )
                  }
                })()}

                    <div dangerouslySetInnerHTML={{ __html: post.section1 }}></div>
                    <div className="certificationBx">{post.service_heading1} </div>
                  </div>
                </div>
              </div>
            </section>

          )
        }

        if (post.type == 'fulltext') {
          return (
            <section className={`sectionSpace serv_sec ${styles.no_padding_t} ${styles.no_padding_b} ${styles.procedureSctn} ${post.class_add}`} id={noSpacesString}>

              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12' /*style={{ textAlign: 'center', listStylePosition: 'inside' }}*/>
                  {(() => {
                  if (post.service_heading) {
                    return (
                    <div className={styles.SctnHdng}>{post.service_heading}</div>
                    )
                  }
                })()}
                    <div dangerouslySetInnerHTML={{ __html: post.section1 }}></div>
                  </div>
                </div>
              </div>
            </section>
          )
        }



      })}

      {/* Faq Section */}
      {(() => {
        if (faq.length != '0') {
          return (
            <section className={`sectionSpace ${styles.no_padding_t} ${styles.no_padding_b} AbtDctrSctn ${styles.PostOperativeCare}`} id="FAQs">
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                    <div className="srvcFAQs">
                      <div className="SctnHdng spc">FAQs</div>

                      <div className="accordion accordion-flush FaqsAccordion" id="srvcFAQsAccrdn">
                        {faq.map((post) => {
                          return (
                            <div className="accordion-item" key={post.ser_faq_id}>
                              <div className="accordion-header" id="FaqsOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#FAQs-collapse${post.id}`} aria-expanded="true" aria-controls="FAQs-collapse{post.id}" dangerouslySetInnerHTML={{ __html: post.question }}></button>
                              </div>
                              <div id={`FAQs-collapse${post.id}`} className="accordion-collapse collapse show" aria-labelledby={`Faqs${post.id}`} data-bs-parent="#srvcFAQsAccrdn">
                                <div className="accordion-body" dangerouslySetInnerHTML={{ __html: post.answer }}></div>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </section>
          )
        }
      })()}
      {/* Faq Section */}

      {/* Real Result */}
      {(() => {
        if (real.length != '0') {
          return (
            <section className='sectionSpace SctnRealResults  srvcRealRslt'>
              <div className="container">
                <div className='SctnHdng text-center'>{datalist.service_name} Results</div>
                <div className='row my-3'>
                  {real.map((post) => {
                    return (
                      <div className="col-4  desk-view" key={post.id}>
                        <Link href={"/real-results/" + postData.result_cat.url}>
                          <a>
                            <Image
                              src={
                                process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                                "/backend/service_result/inner/" +
                                post.image
                              }
                              alt={post.alt_tag}
                              className="img-fluid"
                              layout="responsive"
                              width={417}
                              height={313}
                            />
                          </a>
                        </Link>
                        <p>
                          *Opinions / Results may vary from person to person.
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="text-center pt-3"><Link href={"/real-results/" + postData.result_cat.url}><a className="BtnRdMore">VIEW ALL</a></Link></div>
              </div>
            </section>
          )
        }
      })()}
     

      {/* real result section end  */}

      {(() => {
        if (postData.video.length != '0') {
          return (
      <section className={`sectionSpace ${style.SctnVideos}`}>
        <div className="container-fluid  text-center">
          <div className='SctnHdng'>Our Videos</div>
          <div className='row mt-3 mb-2'>
            {postData.video.map((video) => {
              return (
                <div className='col-lg-4 col-md-4 col-sm-4 col-12' key={video.id}>
                  <div className={style.videoThumbBx}>
                    <div className={style.vdoPlayIcon}><Link href="/"><a data-bs-toggle="modal" data-bs-target="#VidModal" className="stretched-link" onClick={(e) => popupClick(e, `${video.id}`, `${video.video}`)}><i className="fa fa-play" aria-hidden="true"></i></a></Link></div>
                    <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/backend/service_video/inner/' + video.image} alt={video.alt_tag} className='img-fluid w-100' layout="responsive" width={375} height={211} />
                  </div>
                  <p>{video.name}</p>
                </div>
              )
            })}
          </div>
          <div className='text-center'><Link href={"/videos/" + postData.video_cat?.url}><a className='BtnRdMore'>VIEW ALL</a></Link></div>
        </div>
      </section>
      )
        }
      })()}

      {/* Start Video Modal Popup */}

        <div className={`modal  ${style.videoModal} fade`} id="VidModal" tabIndex="-1" aria-labelledby="VidModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
              <button type="button" className={`btn-close ${style.btnclose}`}
              data-bs-dismiss="modal" aria-label="Close" onClick={(e) => popupClose(e, 'stop')}></button> 
            <div className="modal-body" id='yt-player'>
              <div className='responsive-iframe'>
              <iframe width="100%" height="400" src={videourl} title="Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
            </div>
          </div>
        </div>
        </div>

        {/* End Video modal popup */}

      {/* Appointment Form */}
      <section id="Consultation">
        <AppointmentForm />
      </section>
      {/* Appointment Form */}
    </>
  )
}


Rhinoplasty.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Header />
      {page}
      <Footer />
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const { url } = query;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/service-details/`+url,
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