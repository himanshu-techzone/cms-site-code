import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import styles from '../styles/about-hospital.module.css'
import Footer from '../components/footer'
import AppointmentForm from '../components/AppointmentForm'
import { useRouter } from 'next/router';
import React, { useEffect, useState, useCallback } from "react";

export default function AboutHospital() {
    const [data, dataSet] = useState(null)
    const router = useRouter();
    const url = router.asPath;
    const type = router.pathname;
    const fetchMyAPI = useCallback(async () => {
        let response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/seo-tag` + url)
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
            <section className='AboutBanner'>
                <Image src={process.env.NEXT_PUBLIC_BASE_URL + '/images/about-aestiva-hospital.jpg'} className="img-fluid" alt="aestiva-hospital" layout="responsive" width={1366} height={665} />
                <div className='AboutBannerCont'>
                    <div className='AbtBnrCaption'>
                        <div className='AboutBannerHD'>ABOUT AESTIVA</div>
                        <p>Best Cosmetic and Plastic Surgery<br />Specialists Hospital in Delhi</p>
                        <div className="breadcrmb"><Link href="/"><a>Home</a></Link>/ About Aestiva</div>
                    </div>
                    <div className='AboutBannerTxt'>
                        Established by Dr. Mrinalini Sharma, this premier plastic surgery hospital has been providing a vast number of cosmetic and plastic surgery treatments in Delhi NCR.
                    </div>
                    <div className='AboutBannerPic'>
                        <Image src={process.env.NEXT_PUBLIC_BASE_URL + '/images/aestiva-hospital-1.jpg'} alt="aestiva hospital" className='img-fluid' width={250} height={339} />
                        <div className='AboutBannerPicTwo'><Image src={process.env.NEXT_PUBLIC_BASE_URL + '/images/aestiva-hospital-2.jpg'} alt="aestiva hospital" className='img-fluid' width={250} height={339} /></div></div>
                </div>

            </section>


            <section className='sectionSpace AboutHsptlOne'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12'>
                            <p className='AboutHsptlTxt1 pb-3'>Having a perfect body is not about luck anymore, it is about a decision which has to be made. One can choose to be in an ideal shape by getting the best plastic and cosmetic surgery treatments available at Aestiva Plastic Surgery Clinic, one of the Best Clinics for Plastic Surgery in Delhi. Aestiva Clinic, established by Dr. Mrinalini Sharma is a premier plastic surgery clinic which offers a vast number of cosmetic and plastic surgery treatment options to its patients. Choosing the right plastic surgeon is crucial because plastic surgery is altogether different from other medical fields. The final results depend on the doctor’s expertise and understanding of the ultimate goals of a specific plastic/cosmetic surgery treatment.</p>
                            <div className='text-center py-2'><Link href="/book-an-appointment"><a className='BtnRdMore'>BOOK AN APPOINTMENT</a></Link></div>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className={`col-xl-4 col-lg-4 col-md-4 col-sm-12 ${styles.OurApproach}`}>
                            <div className={styles.ApprochHD}>Our Approach</div>
                            <p>At Aestiva Clinic, we focus on providing excellent patient care as our top most priority. A personalized treatment plan is also designed by Dr. Mrinalini Sharma, best plastic surgeon in Delhi to provide the desired results.</p>
                        </div>
                        <div className={`col-xl-4 col-lg-4 col-md-4 col-sm-12 ${styles.OurApproach} ${styles.active}`}>
                            <div className={styles.ApprochHD}>Our Practice</div>
                            <p>At Aestiva Clinic, we have the best team of medical experts who are extremely dedicated to maintain and deliver the highest standard of medical care. The clinic is equipped with all the latest equipment and technologies, that helps patients to achieve the best possible results without compromising their safety.</p>
                        </div>
                        <div className={`col-xl-4 col-lg-4 col-md-4 col-sm-12 ${styles.OurApproach}`}>
                            <div className={styles.ApprochHD}>Our Facilities</div>
                            <p>Our dedicated team of nurses and support team deliver the best care to all the patients. Dr. Mrinalini Sharma and her team are there with the patients at every step, making them feel comfortable and assuring that they are in best hands.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.CmprhnsvSrvcs}`}>
                <Image src={process.env.NEXT_PUBLIC_BASE_URL + '/images/dr-mrinalini-sharma.jpg'} className='img-fluid' layout="responsive" width={1366} height={652} alt="Aestiva Hospital" />
                <div className={`container ${styles.CmprhnsvCont}`}>
                    <div className='row justify-content-center'>
                        <div className='col-12 col-xl-10 col-lg-10 col-md-10'>
                            <div className={`SctnHdng ${styles.SctnHdng} text-center`} style={{ textTransform: 'none' }}>Our Comprehensive Aesthetic Services</div>
                            <div className={styles.cmprhCntTxt}>
                                <div className='row justify-content-evenly py-3'>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                                        <p>All Cosmetic, Plastic & Reconstructive Surgeries under one roof
                                            The clinic was established in 2012 as a one stop place for all plastic and cosmetic procedures. We focus on providing affordable and quality care to clients who procedures to enhance their looks and correct their scars.Starting from the consultation to post-surgery after care, the patient feels supported throughout at Clinic, best plastic surgery clinic in Delhi. </p>
                                    </div>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                                        <p> The surgeon aims at providing natural-results to her patient by performing advanced techniques. Surgery results enhance one'quality of life and one can see improvements in their career, relationships, and impressions with an enhanced look.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className={`sectionSpace ${styles.WhyChoosHsptl}`}>
                <div className='container'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12'>
                            <div className={`SctnHdng ${styles.SctnHdng}`} style={{ textTransform: 'none' }}>Why Choose Aestiva Hospital?</div>
                            <p>Aestiva Clinic is one of the top providers of plastic and cosmetic surgery in Delhi. The treatments offered at the clinic are affordable and helpful for all people of various ages and ethnicities. The changes made in the surgeries can range from subtle refinements to more dramatic enhancements, which depend on individual goals. Dr. Mrinalini Sharma aims to provide natural results that can help one look more beautiful.</p>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                            <div className={styles.HsptlBrdrBx}>
                                <div className={styles.HsptlBrdrHD}>Self-focus</div>
                                <p>Plastic and cosmetic surgery requires skilled hands and precise planning for best results and having it done by an experienced surgeon such as Dr. Mrinalini Sharma is definitely an ideal choice. She is always focussed and never fails to stick to the expectations of the patients.</p>
                            </div>
                        </div>
                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                            <div className={styles.HsptlBrdrBx}>
                                <div className={styles.HsptlBrdrHD}>Expertise</div>
                                <p>We specialize in performing cosmetic surgery treatments such as breast enlargement, hair transplantbreast lift, breast reduction, liposuction, tummy tuck etc. The founder of Aestiva Clinic, Dr. Sharma, best plastic Surgeon in Delhi (MS, Mch Plastic Surgery PGIMER) is an experienced plastic with keen interest in the field of breast surgeries such as breast lift and breast reduction. The procedures which are routinely performed include nose surgery, brow lift, arm lift, botox, etc. </p>
                            </div>
                        </div>
                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                            <div className={styles.HsptlBrdrBx}>
                                <div className={styles.HsptlBrdrHD}>Experience</div>
                                <p>The surgeries are performed by an expert plastic surgeon in Delhi, Dr. Mrinalini Sharma who has 17+ years of experience. In all these years she has performed thousands of successful plastic and cosmetic surgeries (including both facial plastic surgeries and body contouring surgeries) for patients from all across the globe.</p>
                            </div></div>
                    </div>
                    <p className='text-center my-3'>So those looking for the Best Clinic For Plastic Surgery in Delhi to improve their facial aesthetics or body shape, along with their self-esteem and confidence, can fully trust Aestiva Clinic.</p>
                </div>
            </section>

            <AppointmentForm />


        </>
    )
}


AboutHospital.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Header />
            {page}
            <Footer />
        </Layout>
    )
}

