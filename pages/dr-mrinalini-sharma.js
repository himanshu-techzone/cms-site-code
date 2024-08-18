import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import styles from '../styles/about-doctor.module.css'
import Footer from '../components/footer'
import AppointmentForm from '../components/AppointmentForm'
import RealResults from '../components/RealResults'
import { useRouter } from 'next/router';
import CallBackForm from '../components/CallBackForm';
import React, { useEffect, useState, useCallback } from "react";


export default function AboutDoctor({postData}) {
      const data = postData;
    // const [data, dataSet] = useState(null)
    // const router = useRouter();
    // const url = router.asPath;
    // const type = router.pathname;
    // const fetchMyAPI = useCallback(async () => {
    //     let response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/seo-tag` + url)
    //     response = await response.json()
    //     dataSet(response)
    // }, [])

    // useEffect(() => {
    //     fetchMyAPI()
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

        {/* Breadcrum section start here  */}

        <section className="breadcrum-section">
          <div className="container-fluid text-center">
            <div className="row p-3 mb-2 content">
              <div className="col-lg-12">
                <div className='abt_doc'>Dr. Mrinalini Sharma</div>
              </div>
              <div className="col-lg-12">
                <p>
                  <Link href="/">
                    <a className="anchor-tag">Home</a>
                  </Link>{" "}
                  | Dr. Mrinalini Sharma
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="AboutBanner hide-banner overlay p-0">
          <Image
            src={
              process.env.NEXT_PUBLIC_BASE_URL +
              "/images/clinic_images_overlay.jpg"
            }
            className="img-fluid "
            alt="aestiva-hospital"
            layout="responsive"
            width={1366}
            height={665}
          />
          <div className="AboutBannerCont ">
            <div className="AbtBnrCaption">
                <div className="AboutBannerHD">DR. MRINALINI SHARMA</div>
              <p>
                MBBS, MS – General Surgery,
                <br />
                MCh – Plastic Surgery
              </p>
              <div className="breadcrmb hide-class">
                <Link href="/">
                  <a>Home</a>
                </Link>
                / Dr. Mrinalini Sharma
              </div>
            </div>
            <div className="AboutBannerTxt">
              <ul>
                <li>State Topper – 1995</li>
                <li>
                  All India second rank in Mch Plastic Surgery Examination at
                  PGIMER.
                </li>
                <li>
                  Best audio-visual presentation at Annual Conference of
                  Association of Plastic Surgeon of India for “An objective
                  analysis of smile in patients of facial palsy”
                </li>
              </ul>
            </div>
            <div className="AboutBannerPic ban-img">
              <Image
                src={
                  process.env.NEXT_PUBLIC_BASE_URL + "/images/doctor_images.jpg"
                }
                alt="dr mrinalini sharma"
                className="img-fluid"
                width={500}
                height={340}
              />
              <div className="AboutBannerPicTwo">
                {/* <Image src={process.env.NEXT_PUBLIC_BASE_URL + '/images/dr-mrinalini-sharma-2.jpg'} alt="dr mrinalini sharma" className='img-fluid' width={500} height={339} /> */}
              </div>
            </div>
          </div>
        </section>

        <CallBackForm />

        <section className="sectionSpace AboutHsptlOne">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12">
              <h1 className="doctor_hd">Female Plastic Surgeon in Delhi</h1>
                <p className={styles.About_surgeon_para}>
                  Dr. Mrinalini Sharma, one of the best <b>female plastic surgeon
                  in Delhi</b>, has completed her MBBS, MS and MCh from some of the
                  very prestigious medical colleges/ institutions in India. She
                  is a hard-working medical professional who has an extensive
                  experience of more than 17 years in the field of plastic and
                  cosmetic surgery. During her tenure at PGIMER Chandigarh, she
                  has trained to perform maxillofacial surgeries, hand trauma,
                  management of burns, cancer reconstruction and micro-vascular
                  surgery including digital replantation. She is also an expert
                  in congenital anomalies such as cleft palate, cleft lip, and
                  hypospadias and has also worked with renowned hospitals such
                  as Apollo Hospitals, New Delhi and Columbia Asia Hospital,
                  Gurgaon as a consultant plastic surgeon. The skilled <strong>female plastic surgeon in Delhi</strong> has a motive to provide affordable  as well as effective plastic & cosmetic surgery treatments which can be availed by everyone.
                </p>

                <p className={styles.About_surgeon_para}>
                  Being a Female Plastic Surgeon In Delhi, Dr. Mrinalini Sharma
                  as well as her staff understands the concerns of women very
                  well. Whether it is a teenager dealing with body image issues
                  or a woman post-childbirth; she emphatically listens to their
                  concerns and provides permanent solutions to their problems.
                  Treatments like rhinoplasty, jawline shaping, chin
                  enhancement, cheek enhancement, lip fillers, arm liposuction &
                  lift, back liposuction, bust reduction/ enlargement/ lift
                  surgeries, tummy & waist liposuction, tummy tuck surgery/
                  abdominoplasty, buttock lift surgery and thigh lift are some
                  of the very commonly requested cosmetic surgeries by women.
                  Apart from these, women put their complete faith in Dr. Mrinalini Sharma, the <strong>female plastic surgeon in Delhi</strong>, when it comes to facelift and mommy makeover.
                </p>

                <div className="text-center py-2">
                  <Link href="/book-an-appointment">
                    <a className="BtnRdMore">BOOK AN APPOINTMENT</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`sectionSpace ${styles.AbtDctrSctn}`}>
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BASE_URL +
                    "/images/dr-mrinalini-sharma-delhi.jpg"
                  }
                  layout="responsive"
                  alt="Dr. Mrinalini Sharma"
                  width={530}
                  height={784}
                  className={`img-fluid ${styles.drPicZindex}`}
                />
              </div>
              <div
                className={`col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 ${styles.AbtDctrSctnTxt}`}
              >
                <div className={styles.know_more_hd}>
                  Know More About Dr. Mrinalini Sharma
                </div>
                <h2 className={styles.SctnHdng}>
                Female Cosmetic Surgeon in Delhi
                </h2>
                <p>
                  Dr. Mrinalini Sharma, best cosmetic surgeon in Delhi always
                  guides her patients and shares complete information about the
                  procedures so that they can choose the best for themselves.
                  ‘One size cannot fit all’, especially in the case of cosmetic
                  surgery. It is because before suggesting any treatment options
                  the doctor needs to consider the patient’s medical history,
                  overall health condition and their expectations from the
                  surgery.
                </p>

                <div className={styles.certificationBx}>
                  <ul>
                    <li>
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_BASE_URL + "/images/logo1.png"
                        }
                        alt="logo"
                        className="img-fluid"
                        width={50}
                        height={38}
                      />
                    </li>
                    <li>
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_BASE_URL + "/images/logo2.png"
                        }
                        alt="logo"
                        className="img-fluid"
                        width={93}
                        height={38}
                      />
                    </li>
                    <li>
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_BASE_URL + "/images/logo3.png"
                        }
                        alt="logo"
                        className="img-fluid"
                        width={52}
                        height={38}
                      />
                    </li>
                    <li>
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_BASE_URL + "/images/logo4.png"
                        }
                        alt="logo"
                        className="img-fluid"
                        width={68}
                        height={38}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`sectionSpace ${styles.careerSctn}`}>
          <div className="container">
            <h2 className={`${styles.SctnHdng} text-center`}>
              A Distinguished Career in Plastic Surgery
            </h2>

            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className={styles.subHdng}>Education</div>
                <ul>
                  <li>
                    <strong>MBBS</strong>
                    <br />
                    Lady Hardinge Medical College,
                    <br />
                    New Delhi, 2002
                  </li>
                  <li>
                    <strong>MS - General Surgery</strong>
                    <br />
                    Vardhman Mahavir Medical College & Safdarjung Hospital,
                    <br />
                    Delhi, 2008
                  </li>
                  <li>
                    <strong>MCh - Plastic Surgery</strong>
                    <br />
                    Postgraduate Institute Of Medical Education And Research,
                    <br />
                    Chandigarh, 2012
                  </li>
                </ul>
                <div className={styles.subHdng}>Awards and Recognitions</div>
                <ul>
                  <li>
                    <strong>State Topper - 1995</strong>
                  </li>
                  <li>
                    <strong>
                      Best Audio-Visual presentation APSIOCON - 2001
                    </strong>
                  </li>
                </ul>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className={styles.subHdng}>Experience</div>
                <ul>
                  <li>
                    <strong>Consultant Plastic Surgeon</strong>
                    <br />
                    Columbia Asia Hospital, 2016-2017
                  </li>
                  <li>
                    <strong>Sr. Registrar</strong>
                    <br />
                    Dept of Plastic Surgery at Indraprastha Apollo Hospital
                  </li>
                  <li>
                    <strong>Resident</strong>
                    <br />
                    Plastic Surgery at Institute Of Medical Education and
                    Research
                  </li>
                  <li>
                    <strong>Senior Resident</strong>
                    <br />
                    Plastic Surgery at Safdarjung Hospital
                  </li>
                  <li>
                    <strong>Resident</strong>
                    <br />
                    General Surgery at Safdarjung Hospital
                  </li>
                  <li>
                    <strong>Intern</strong>
                    <br />
                    Lady Hardinge Medical College And SSKH
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionSpace">
          <div className="container">
            <div className="SctnAbtDtr" style={{ marginTop: "0" }}>
              <div className={`leftBox ${styles.leftBox}`}>
                <p className="SctnAbtDtrHdng">
                  WHY CHOOSE
                  <br />
                  DR. MRINALINI SHARMA
                </p>

                <div className="SctnAbtDtrBrdr"></div>
                <p>
                  Dr. Mrinalini is a renowned cosmetic surgeon in Delhi, who has
                  always been appreciated by her patients for providing
                  natural-looking results and she adopts the latest technologies
                  and techniques to provide the desired outcomes to all her
                  patients.
                </p>
                <ul>
                  <li>
                    All the procedures/surgeries are personalized for best
                    results. Dr. Mrinalini Sharma will analyze all the possible
                    pros and cons before commencing the procedure, to avoid any
                    complications post-procedure.
                  </li>
                  <li>
                    Dr. Mrinalini Sharma known as the skilled <strong>plastic surgeon for women in Delhi</strong> is also regarded for offering results with the best safety standards. She provides a safe and clean
                    procedure environment and makes her patients feel really
                    comfortable.{" "}
                  </li>
                  <li>
                    Dr. Mrinalini Sharma provides post-operative care too. She
                    is known to be empathetic and an ally to her patients. She
                    believes in personally monitoring the patient’s progress
                    through their journey of transformation.{" "}
                  </li>
                </ul>
              </div>

              <Image
                src={
                  process.env.NEXT_PUBLIC_BASE_URL +
                  "/images/dr-mrinalini-sharma-3.jpg"
                }
                alt="Dr. Mrinalini Sharma"
                className="img-fluid w-100"
                layout="responsive"
                width={1175}
                height={675}
              />
            </div>
          </div>
        </section>

        <AppointmentForm />
        <RealResults />
      </>
    );
}


AboutDoctor.getLayout = function getLayout(page) {
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
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/seo-tag/`+'dr-mrinalini-sharma',
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