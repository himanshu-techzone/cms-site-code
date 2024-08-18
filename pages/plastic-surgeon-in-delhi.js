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


export default function AboutDoctor({ postData }) {
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
                <meta property="twitter:title" content={data?.seo.title_tag} />
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
                            <div className='abt_doc'>Plastic Surgeon in Delhi</div>
                        </div>
                        <div className="col-lg-12">
                            <p>
                                <Link href="/">
                                    <a className="anchor-tag">Home</a>
                                </Link>{" "}
                                | Plastic Surgeon in Delhi
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
                        <div className="AboutBannerHD">Dr. Mrinalini Sharma</div>
                        <div className="breadcrmb hide-class">
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                            / Plastic Surgeon in Delhi
                        </div>
                    </div>
                    {/* <div className="AboutBannerTxt">
                        <p className='doc_desc'>Dr. Mrinalini Sharma is an experienced and popular <b>Plastic Surgeon in Delhi</b>. With over 19 years of extensive experience in plastic and cosmetic surgery, Dr. Mrinalini Sharma is a talented medical professional. She is recognised, both in her homeland and internationally, as one of the best plastic surgeons.</p>
                    </div> */}
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

            {/* <section className="sectionSpace">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h1 className="doctor_hd"></h1>

                        </div>
                        
                    </div>
                </div>
            </section> */}

            <section className={`sectionSpace ${styles.careerSctn}`}>
                <div className="container">
                    <h1 className={`${styles.SctnHdng} text-center`}>
                        BEST PLASTIC SURGEON IN DELHI
                    </h1>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para} >A <b>Plastic Surgeon</b> can help improve one's appearance, reconstruct facial or body tissue defects, and restore or improve the functioning of a particular body part. Dr. Mrinalini Sharma is an experienced and <b>Best Plastic Surgeon in Delhi</b>, with over 19 years of extensive experience in plastic and cosmetic surgery. She is a talented medical professional and is recognised, both in her homeland and internationally, as one of the best plastic surgeons.</p>
                            <p className={styles.About_surgeon_para} >Dr. Mrinalini Sharma is the <b>best plastic surgeon in Delhi</b>, renowned for her expertise in various procedures, including maxillofacial surgeries, hand trauma, micro-vascular surgery, and congenital anomalies like cleft palate and lip. Having worked with esteemed hospitals, she provides the best and most effective plastic and cosmetic surgery treatments accessible to all.</p>
                            <p className={styles.About_surgeon_para} >She and her team understand women's concerns deeply, providing empathetic and best solutions for issues ranging from body image to post-childbirth concerns. Male patients also opt for plastic or cosmetic surgery with Dr. Mrinalini Sharma to enhance their appearance, boost confidence, combat signs of ageing, address insecurities, maintain competitiveness in their careers, and achieve desired aesthetic goals.</p>
                        </div>
                        <div className="text-center py-2">
                            <Link href="/book-an-appointment">
                                <a className="BtnRdMore">BOOK AN APPOINTMENT</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.careerSctn} greyColor`}>
                <div className="container">
                    <h2 className={`${styles.SctnHdng} text-center`}>
                        What can I expect during a consultation with a Plastic Surgeon?
                    </h2>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>During a consultation with the <b>best plastic surgeon in Delhi</b>, Dr. Mrinalini Sharma, here’s a rundown of what you can expect to happen:</p>
                            {/* <ol className={styles.AboutHsptlTxt1}>
                                <li><strong>Reporting to the front desk office staff: </strong>You need to fill up some medical forms before your time of appointment.</li>

                                <li><strong>Meeting with a medical assistant: </strong>A medical assistant like a trained nurse will review your medical records and then send you to a cosmetic surgeon.</li>

                                <li><strong>Meeting with a cosmetic surgeon: </strong>Now, when you meet a cosmetic surgeon you must confirm that the surgeon is an expert in the procedure you want. You can candidly talk to your surgeon about what change you want to see in your body and how you want to look and feel after surgery. The cosmetic surgeon will answer all your questions and give you details on the procedure(s) you want.</li>

                                <li><strong>A thorough physical examination by your surgeon: </strong>A cosmetic surgeon will take you to the examination room and check on the areas of concern. Some measurements may be taken and even laboratory tests.</li>

                                <li><strong>Meeting with a patient coordinator: </strong>A patient coordinator's work is to help you with scheduling pre-surgery and post-operative appointments as well as your date and time of operation.</li>

                                <li><strong>Discussion about pricing and financing options: </strong>After your consultation, you will provide a detailed quote of the price for the procedure you have to decide to go ahead with.</li>

                                <li><strong>Knowing what is coming next: </strong>Before you leave the office, the staff will tell you about what steps you should be taking next.</li>

                                <li><strong>Scheduling another consultation (if necessary): </strong>In case your consultation has not been up to the mark and you have some questions to ask, you can schedule another consultation before confirming any surgery appointment.</li>
                            </ol> */}
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>1.</strong>
                                        </td>
                                        <td>
                                            <strong>Reporting to the front desk office staff:&nbsp;</strong>
                                        </td>
                                        <td>
                                            You need to fill up some medical forms before your appointment.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>2.</strong>
                                        </td>
                                        <td>
                                            <strong>Meeting with a medical assistant</strong>
                                        </td>
                                        <td>
                                            A medical assistant like a trained nurse will review your medical records and then send you to a cosmetic surgeon.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>3.</strong>
                                        </td>
                                        <td>
                                            <strong>Meeting with a cosmetic surgeon</strong>
                                        </td>
                                        <td>
                                            Now, when you meet a cosmetic surgeon you must confirm that the surgeon is an expert in the procedure you want. You can candidly talk to your surgeon about what change you want to see in your body and how you want to look and feel after surgery. The cosmetic surgeon will answer all your questions and give you details on the procedure(s) you want.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>4.</strong>
                                        </td>
                                        <td>
                                            <strong>A thorough physical examination by your surgeon&nbsp;</strong>
                                            <br /><br /></td>
                                        <td>
                                            A cosmetic surgeon will take you to the examination room and check on the areas of concern. Some measurements may be taken and even laboratory tests.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>5.</strong>
                                        </td>
                                        <td>
                                            <strong>Meeting with a patient coordinator</strong>
                                        </td>
                                        <td>
                                            A patient coordinator's work is to help you with scheduling pre-surgery and post-operative appointments as well as your date and time of operation.&nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>6.</strong>
                                        </td>
                                        <td>
                                            <strong>Discussion about pricing and financing options</strong>
                                        </td>
                                        <td>
                                            After your consultation, you will provide a detailed quote of the price for the procedure you have to decide to go ahead with.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>7.</strong>
                                        </td>
                                        <td>
                                            <strong>Knowing what is coming next</strong>
                                        </td>
                                        <td>
                                            Before you leave the office, the staff will tell you about what steps you should be taking next.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>8.</strong>
                                        </td>
                                        <td>
                                            <strong>Scheduling another consultation (if necessary)</strong>
                                        </td>
                                        <td>
                                            In case your consultation has not been up to the mark and you have some questions to ask, you can schedule another consultation before confirming any surgery appointment.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className={`sectionSpace ${styles.AbtDctrSctn}`}>
                <div className="container">
                    <div className="row justify-content-around">
                        <div className={`col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ${styles.AbtDctrSctnTxt}`}>
                            <h2 className={styles.SctnHdng}></h2>
                            
                        </div>
                    </div>
                </div>
            </section> */}
            <section className={`sectionSpace ${styles.careerSctn}`}>
                <div className="container">
                    <h2 className={`${styles.SctnHdng} text-center`}>How to choose a good plastic surgeon?</h2>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>
                                These days it's difficult to find legitimate cosmetic surgeons who are true experts in their field. An internationally recognized cosmetic surgeon, Dr. Mrinalini Sharma, <b>female plastic surgeon in Delhi</b> recommends these guidelines to follow for choosing a cosmetic surgeon.</p>
                            <ul className={styles.AboutHsptlTxt1}>
                                <li><strong>Proper certification- </strong>It is crucial to choose a cosmetic surgeon who holds the necessary surgical training to achieve desired, successful results with minimal risks. Choosing a certified cosmetic surgeon ensures certain surgical knowledge, safety, and training.</li>
                                <li><strong>Vision and artistry in the work- </strong>Choosing a cosmetic surgeon who has a unique surgical approach and technique in performing the surgery you opt for ensures an exemplary body of work. You can visualise how your final results will look by going through the before and after gallery of your surgeon’s previous patients.</li>
                                <li><strong>A well-renowned leader in the industry- </strong>True cosmetic surgeons are peer-respected and are much invited to worldwide cosmetic surgery conferences. They are sought after by others for lectures and training on up-to-date surgical techniques. Some of them are even great researchers and authors in their field.</li>
                                <li><strong>The patient-cosmetic surgeon relationship- </strong>It’s advised to choose a cosmetic surgeon who has a good rapport with their patients and is a good communicator. Go for a trustworthy and compassionate cosmetic surgeon as they will always keep the patient’s safety, comfort, and desires as a top priority. Moreover, choose a responsible surgeon to receive proper post-operative care and support.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="sectionSpace">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h3 className="doctor_hd"></h3>
                            
                        </div>
                    </div>
                </div>
            </section> */}

            <section className={`sectionSpace ${styles.careerSctn} greyColor`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>How do I tell my Plastic Surgeon what I want?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para} >You should prepare for discussion with a plastic surgeon for the procedure you want. To tell your surgeon about your needs, expectations, and desires you have to schedule a consultation to meet your potential surgeon in person. During your in-person meeting with your surgeon, you should prepare to tell your surgeon about these things:</p>
                            <ul className={styles.AboutHsptlTxt1} >
                                <li>Your complete medical history</li>
                                <li>Your previous surgical and non-surgical procedures</li>
                                <li>Any medical problems that run in your family</li>
                                <li>Your current intake of prescription and non-prescription medications and supplements</li>
                                <li>What kind of surgical outcome do you honestly want</li>
                                <li>Your goals and expectations</li>
                                <li>Any upcoming plans or events.</li>
                            </ul>
                            <p className={styles.About_surgeon_para}>If you choose a plastic surgeon who is client-friendly, you can feel free to speak openly about what you want to look like following your surgery. You should clearly and calmly explain to your surgeon why you have opted for a particular plastic surgery. You should keep your conversation with your surgeon neutral while sharing the physical and emotional reasons that have made you take the decision.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="sectionSpace greyColor">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h3 className="doctor_hd"></h3>
                            
                        </div>
                    </div>
                </div>
            </section> */}

            <section className={`sectionSpace ${styles.careerSctn}`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>What concerns do plastic surgeons address?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para} >They can perform surgeries to:</p>

                            <ul className={styles.AboutHsptlTxt1} >
                                <li>Repair extensive burns or other serious injuries/trauma</li>
                                <li>Reconstruct abnormal body structures resulting from injury, tumours, disease, infection, at-birth anomalies, and developmental abnormalities</li>
                                <li>Address serious skin issues like scars, skin cancer, birthmarks, burns, blemishes, varicose veins, vascular malformations, and undesirable tattoo removal</li>
                                <li>Relieve migraine</li>
                                <li>Straighten jawline</li>
                                <li>Remove tumours or cancer-affected tissues</li>
                                <li>Treat hand deformities caused by carpal tunnel syndrome</li>
                                <li>Contour body after significant weight loss</li>
                                <li>Reduce signs of ageing like severe sagging skin on the face, neck, or hand</li>
                                <li>Correct physical features such as large/missing ears, weak chin, prominent ears, or deviated septum</li>
                                <li>Dr. Mrinalini Sharma, <strong>Female Plastic Surgeon in Delhi</strong> performs repair surgery for facial and breas-t areas damaged by the removal of cancerous tissues</li>
                                <li>Correct congenital defects or malformations such as webbed fingers/toes, cleft lip and palate.</li>
                            </ul>
                            <p className={styles.About_surgeon_para} >This is a partial list of what plastic surgeons can help with. Whether one needs to undergo surgery for medical purposes or cosmetic purposes, one can see a plastic surgeon. An individual can get plastic surgery done on any part of their anatomy except the central nervous system.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.careerSctn} greyColor`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>How would you describe an excellent Plastic Surgeon?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>Finding a great plastic surgeon does not have to be difficult if you know what qualities to look for in a plastic surgeon while making your choice. Great plastic surgeons have the following qualities:</p>
                            {/* <ul className={styles.AboutHsptlTxt1}>
                                <li><strong>Empathy and compassion-</strong> Great plastic surgeons have an understanding and compassion for their work. They have good listening skills and take out time to devise the best-suited treatment plan for their patients.</li>
                                <li><strong>Creativity/artistry- </strong>They know how to improve one&rsquo;s face or body aesthetics while providing natural, attractive results. They can help their patients achieve their desired appearance creatively with their keen eye for detail.</li>
                                <li><strong>Commitment to excellence-</strong> Their practice is progressive. They have knowledge and training for advanced technologies and techniques available in the industry and are committed to maintaining their credentials.</li>
                                <li><strong>Humility:</strong> They are aware of their limits and set reasonable expectations for themselves. They excel in their area of expertise and so provide outstanding results to their patients.</li>
                                <li><strong>Prioritising patients:</strong> These surgeons keep the patient's needs, desires, goals, expectations, safety, and comfort as their top priority.</li>
                                <li><strong>Healing quality</strong>: Surgeons are always willing to answer their patient&rsquo;s questions. They ensure that patients make the right decision when seeking life-altering change with plastic surgery.</li>
                            </ul> */}
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Empathy and compassion</strong>
                                        </td>
                                        <td>
                                            Great plastic surgeons have an understanding and compassion for their work. They have good listening skills and take out time to devise the best-suited treatment plan for their patients.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Creativity/artistry</strong>
                                        </td>
                                        <td>
                                            They know how to improve one&rsquo;s face or body aesthetics while providing natural, attractive results. They can help their patients achieve their desired appearance creatively with their keen eye for detail.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Prioritising patients</strong>
                                        </td>
                                        <td>
                                            These surgeons keep the patient's <strong>needs</strong>, desires, goals, expectations, safety, and comfort as their top priority.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Humility</strong>
                                        </td>
                                        <td>
                                            They are aware of their limits and set reasonable expectations for themselves. They excel in their area of expertise and so provide outstanding results to their patients.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Commitment to excellence</strong>
                                        </td>
                                        <td>
                                            Their practice is progressive. They have knowledge and training for advanced technologies and techniques available in the industry and are committed to maintaining their credentials.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Healing quality</strong>:
                                        </td>
                                        <td>
                                            Surgeons are always willing to answer their patient&rsquo;s questions. They ensure that patients make the right decision when seeking life-altering change with plastic surgery.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.careerSctn}`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>Why do people go to Plastic/Cosmetic Surgeons?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>If you have any physical problems, you should see a plastic surgeon. Generally, your physician may refer you to a plastic surgeon. An expert plastic surgeon may help you improve the functioning of your defective or damaged face or body parts and your looks. A plastic surgeon can address a long list of physical problems. Some of the common problems for which you should consult a plastic surgeon include:</p>
                            <ul className={styles.AboutHsptlTxt1}>
                                <li>Drooping eyelids</li>
                                <li>Severe sagging skin</li>
                                <li>Severe burns or scars</li>
                                <li>Problems caused by sagging breas-t</li>
                                <li>Neck pain or breathing issues by enlarged breas-ts</li>
                                <li>Sagging breas-ts</li>
                                <li>Diastasis recti or overstretched abdominal muscles</li>
                                <li>Lipoma</li>
                                <li>Nose defect caused by accident or nasal septum deviation</li>
                                <li>Enlarged lips</li>
                                <li>Prominent or missing ears</li>
                                <li>Weak chin</li>
                                <li>Hand deformities caused by injuries</li>
                                <li>Migraine</li>
                                <li>Poor jawline profile.</li>
                            </ul>
                            <p className={styles.About_surgeon_para}>Looking for the best-qualified plastic surgeon to repair, restore, or improve the function or appearance or function of an individual body? End your search here at Aestiva Clinic.</p>
                            <p className={styles.About_surgeon_para}>Female <b>plastic/cosmetic surgeon in Delhi</b> at Aestiva Clinic focuses practice on reconstructive procedures as well as cosmetic procedures. Please request an appointment today with our highly skilled and experienced plastic surgeons to achieve your physique transformation at an affordable price.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.careerSctn} greyColor`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>How do you evaluate a Plastic/Cosmetic Surgeon?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>Many plastic surgeons are deceptive and claim to offer professional services to improve the functioning and appearance of the face and body. Not a problem! You don’t have to be confused when selecting a plastic surgeon whom you can trust blindly. You can ensure getting operated on by a trustworthy plastic surgeon by checking on the following things:</p>
                            <ul className={styles.AboutHsptlTxt1}>
                                <li><strong>The credentials of the surgeon and whether the surgeon is certified: </strong>A certified plastic surgeon has accomplished at least six years of surgical training after medical schooling with plastic surgery residency training of at least 3 years. They must have passed rigorous oral and written testing and hold an unrestricted medical licence. You should trust a plastic surgeon who maintains their board certification by retesting every three years and recertifying every decade.</li>
                                <li><strong>The experience level in the surgery they perform: </strong>Plastic surgeons who have a great wealth of experience in their areas of expertise that you are seeking, are more trustworthy than others.</li>
                                <li><strong>Communication and Commitment: </strong>Trust a plastic surgeon who makes you feel comfortable and safe at an appointment and is committed to keeping his/her patient&rsquo;s needs and desires at first.</li>
                                <li><strong>Facility Accreditation- </strong>You should trust a plastic surgeon who performs surgical and non-surgical procedures in an accredited surgical facility.</li>
                            </ul>
                            <p className={styles.About_surgeon_para}>Comprehensive research, consultations with several prospective plastic surgeons, and the surgeons’ relationship with their patients are the key to finding a plastic surgeon who will provide an optimistic surgical experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.careerSctn}`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>How would you describe a Good Cosmetic Surgeon?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>Every good and experienced <b>cosmetic surgeon in Delhi</b> must possess the following qualities:</p>
                            {/* <ul className={styles.AboutHsptlTxt1}>
                                <li>Board certification of being a plastic surgeon</li>
                                <li>More than a decade of experience in performing plastic, reconstructive, and cosmetic surgeries</li>
                                <li>Professionalism: Adheres to all the set rules and regulations of practising plastic surgery; Are true experts in their field; Are great listeners and communicators; Are polite, respectful, and conscientious; Give proper attention to each of their patients</li>
                                <li>Provides a clean and safe environment throughout the journey of plastic surgery</li>
                                <li>Up-to-date Knowledge: Have answers to all possible questions related to plastic surgery</li>
                                <li>Researches and practises new skills and techniques</li>
                                <li>Offers Superb Customer Service and Ensures each patient receives the best care possible</li>
                                <li>Empathy: Genuinely takes care of the patient and empathises with the patient&rsquo;s unique situation; Leaves no stone unturned in making the entire treatment process as smooth and pleasant as possible</li>
                                <li>Honesty: Discloses all the possible risks and complications associated with the procedure the patient wants; Show transparency about their qualifications, experience, and others</li>
                                <li>Good patient testimonials</li>
                                <li>Builds trust relationships with patients</li>
                            </ul> */}
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Certification</strong>
                                        </td>
                                        <td>
                                            Board certification of being a plastic surgeon
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Experience</strong>
                                        </td>
                                        <td>
                                            More than a decade of experience in performing plastic, reconstructive, and cosmetic surgeries
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Professionalism</strong>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Adheres to all the set rules and regulations of practising plastic surgery</li>
                                                <li>Are true experts in their field</li>
                                                <li>Are great listeners and communicators</li>
                                                <li>Are polite, respectful, and conscientious</li>
                                                <li>Give proper attention to each of their patients</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Safe Surgical Settings</strong>
                                        </td>
                                        <td>
                                            Provides a clean and safe environment throughout the journey of plastic surgery
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Up-to-date Knowledge</strong>
                                        </td>
                                        <td>
                                            Have answers to all possible questions related to plastic surgery
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Skills</strong>
                                        </td>
                                        <td>
                                            Researches and practises new skills and techniques
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Customer Service</strong>
                                        </td>
                                        <td>
                                            Offers Superb Customer Service and Ensures each patient receives the best care possible
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Empathy</strong>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Genuinely takes care of the patient and empathises with the patient&rsquo;s unique situation</li>
                                                <li>Leaves no stone unturned in making the entire treatment process as smooth and pleasant as possible</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Honesty</strong>
                                        </td>
                                        <td>
                                            Discloses all the possible risks and complications associated with the procedure the patient wants<br></br>
                                            Show transparency about their qualifications, experience, and others.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Testimonials</strong>
                                        </td>
                                        <td>
                                            Good patient testimonials
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Trust</strong>
                                        </td>
                                        <td>
                                            Builds trust relationships with patients
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.careerSctn} greyColor`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>What types of surgeries does a Cosmetic and Plastic Surgeon perform?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>When looking for a cosmetic or plastic surgeon, it is essential to check for the surgeon's areas of expertise so that your specific medical or cosmetic requirements are fulfilled. Plastic surgeons specialise in various surgical and non-surgical procedures for reconstructive and aesthetic purposes.</p>
                            <p className={styles.About_surgeon_para}>At Aestiva Clinic, our top-notch <b>Cosmetic Surgeon in Delhi</b> have the following areas of expertise:</p>
                            <ul className={styles.AboutHsptlTxt1}>
                                <li>Brow lift</li>
                                <li>Nose Surgery/Rhinoplasty</li>
                                <li>Forehead Lift</li>
                                <li>Lip reduction/plumping</li>
                                <li>Scar correction</li>
                                <li>Ear Reshaping/Earlobe Repair</li>
                                <li>Eyelid lift/Blepharoplasty</li>
                                <li>Dimple Creation Surgery</li>
                                <li>Asian Double Eyelid Surgery</li>
                                <li>Fat Grafting</li>
                                <li>Liposuction</li>
                                <li>Tummy Tuck/Abdominoplasty</li>
                                <li>Brazilian Butt lift</li>
                                <li>Mesotherapy for Hair Fall/Hair Loss</li>
                                <li>Breas-t Reduction</li>
                                <li>Breas-t reconstruction after mastectomy</li>
                                <li>Breas-t Lift</li>
                                <li>Breas-t Implant Surgery/Augmentation</li>
                                <li>Male breas-t Reduction/Gynecomastia surgery</li>
                                <li>Surgery to correct malformations of extremities such as legs, arms, hands, and feet</li>
                                <li>Surgery for correction of external genitalia</li>
                                <li>Surgeries to correct defects of facial structures such as mouth, ears, face, head, and neck.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.no_padding_t} ${styles.no_padding_b} AbtDctrSctn ${styles.faq_section} ${styles.PostOperativeCare}`} id="FAQs">
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                            <div className="srvcFAQs">
                                <div className="SctnHdng spc">Frequently Asked Questions</div>

                                <div className="accordion accordion-flush FaqsAccordion" id="srvcFAQsAccrdn">

                                    <div className="accordion-item">
                                        <div className="accordion-header" id="FaqsOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#FAQs-collapse1" aria-expanded="true" aria-controls="FAQs-collapse{post.id}" fdprocessedid="5cuvao"><p>How many days are required for plastic surgery?</p></button>
                                        </div>
                                        <div id="FAQs-collapse1" className="accordion-collapse collapse show" aria-labelledby="Faqs1" data-bs-parent="#srvcFAQsAccrdn">
                                            <div className="accordion-body"><p>This depends upon the type of plastic surgery you have to undergo and the kind of work life you have. Most plastic surgeons operate for a maximum of 6-7 hours. The patients should expect to be out of work for anywhere between 3 to 14 days.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="FaqsOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#FAQs-collapse2" aria-expanded="true" aria-controls="FAQs-collapse{post.id}" fdprocessedid="5cuvao"><p>How much does plastic surgery cost?</p></button>
                                        </div>
                                        <div id="FAQs-collapse2" className="accordion-collapse collapse show" aria-labelledby="Faqs2" data-bs-parent="#srvcFAQsAccrdn">
                                            <div className="accordion-body"><p>As per Dr. Mrinalini Sharma, <b>female cosmetic surgeon in Delhi</b> the <b>cost of plastic surgery</b> varies for every patient. It depends upon several factors including the price of operating room facilities, material costs, surgeon fees, the type of plastic surgery, the health status of the patient, and additional costs like anesthesiologist fees, medical tests price, prescription price, and cost of follow-up sessions.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="FaqsOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#FAQs-collapse3" aria-expanded="true" aria-controls="FAQs-collapse{post.id}" fdprocessedid="5cuvao"><p>Which is the most commonly performed plastic surgery in men and women?</p></button>
                                        </div>
                                        <div id="FAQs-collapse3" className="accordion-collapse collapse show" aria-labelledby="Faqs3" data-bs-parent="#srvcFAQsAccrdn">
                                            <div className="accordion-body"><p>Plastic surgery procedures most commonly requested by men and women include Rhinoplasty (Nose Job), Blepharoplasty (Eyelid Surgery), Rhytidectomy (Facelift), Liposuction, Abdominoplasty (Tummy tuck), Fat transfer, Eyebrow Lift, Otoplasty (Ear correction), and breas-t Reduction.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="FaqsOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#FAQs-collapse4" aria-expanded="true" aria-controls="FAQs-collapse{post.id}" fdprocessedid="5cuvao"><p>Is plastic surgery for a lifetime?</p></button>
                                        </div>
                                        <div id="FAQs-collapse4" className="accordion-collapse collapse show" aria-labelledby="Faqs4" data-bs-parent="#srvcFAQsAccrdn">
                                            <div className="accordion-body"><p>After plastic surgery, one can usually expect to enjoy results for about a few years to more than 10 to 12 years. However, the results do not necessarily last forever.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="FaqsOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#FAQs-collapse5" aria-expanded="true" aria-controls="FAQs-collapse{post.id}" fdprocessedid="5cuvao"><p>What is the safest plastic surgery?</p></button>
                                        </div>
                                        <div id="FAQs-collapse5" className="accordion-collapse collapse show" aria-labelledby="Faqs5" data-bs-parent="#srvcFAQsAccrdn">
                                            <div className="accordion-body"><p>Among different plastic surgery procedures, the most common and safest plastic surgery is liposuction. Liposuction is a minimally invasive procedure to get rid of extra, stubborn fat via suction.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="FaqsOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#FAQs-collapse6" aria-expanded="true" aria-controls="FAQs-collapse{post.id}" fdprocessedid="5cuvao"><p>What is the most popular type of plastic surgery?</p></button>
                                        </div>
                                        <div id="FAQs-collapse6" className="accordion-collapse collapse show" aria-labelledby="Faqs6" data-bs-parent="#srvcFAQsAccrdn">
                                            <div className="accordion-body"><p>As per Dr. Mrinalini Sharma, <b>female cosmetic surgeon in Delhi</b>, the most popular types of plastic surgeries around the globe are breas-t augmentation, eyelid lift surgery, tummy tuck surgery, breas-t lift, facelift, nose reshaping surgery, liposuction, forehead/brow lift, and ear surgery.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="FaqsOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#FAQs-collapse7" aria-expanded="true" aria-controls="FAQs-collapse{post.id}" fdprocessedid="5cuvao"><p>What is the least painful plastic surgery?</p></button>
                                        </div>
                                        <div id="FAQs-collapse7" className="accordion-collapse collapse show" aria-labelledby="Faqs7" data-bs-parent="#srvcFAQsAccrdn">
                                            <div className="accordion-body"><p>Every patient who goes for plastic surgery has a different pain tolerance level. Generally, plastic surgeries are not so painful. Rhinoplasty is frequently reported by patients to be the least painful.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="FaqsOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#FAQs-collapse8" aria-expanded="true" aria-controls="FAQs-collapse{post.id}" fdprocessedid="5cuvao"><p>Is plastic surgery expensive?</p></button>
                                        </div>
                                        <div id="FAQs-collapse8" className="accordion-collapse collapse show" aria-labelledby="Faqs8" data-bs-parent="#srvcFAQsAccrdn">
                                            <div className="accordion-body"><p>Plastic surgery is viewed by most people to be available only for ultra-wealthy people. But all plastic surgeries are not so expensive. The out-of-pocket expenses for plastic surgery depend upon the chosen surgeon’s fees, the clinic facilities, aftercare, and insurance of the patient.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="FaqsOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#FAQs-collapse9" aria-expanded="true" aria-controls="FAQs-collapse{post.id}" fdprocessedid="5cuvao"><p>Do plastic surgeons treat facial injuries?</p></button>
                                        </div>
                                        <div id="FAQs-collapse9" className="accordion-collapse collapse show" aria-labelledby="Faqs9" data-bs-parent="#srvcFAQsAccrdn">
                                            <div className="accordion-body"><p>Yes. Plastic surgeons can help repair the damages caused by facial injury or trauma. Facial reconstruction is a plastic surgery done to correct soft tissue or bone injuries to the cheekbones, jaw, nose, or eye sockets.</p>
                                            </div>
                                        </div>
                                    </div><div className="accordion-item">
                                        <div className="accordion-header" id="FaqsOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#FAQs-collapse10" aria-expanded="true" aria-controls="FAQs-collapse{post.id}" fdprocessedid="5cuvao"><p>What is the difference between cosmetic and reconstructive surgery?</p></button>
                                        </div>
                                        <div id="FAQs-collapse10" className="accordion-collapse collapse show" aria-labelledby="Faqs10" data-bs-parent="#srvcFAQsAccrdn">
                                            <div className="accordion-body"><p>Reconstructive surgery focuses on the repair and restoration of the form and function of the face or body parts affected by congenital abnormalities, trauma, or diseases. In contrast, cosmetic surgery focuses on improving physical features for better looks.</p>
                                            </div>
                                        </div>
                                    </div><div className="accordion-item">
                                        <div className="accordion-header" id="FaqsOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#FAQs-collapse11" aria-expanded="true" aria-controls="FAQs-collapse{post.id}" fdprocessedid="5cuvao"><p>How do I know if I'm choosing a good plastic surgeon?</p></button>
                                        </div>
                                        <div id="FAQs-collapse11" className="accordion-collapse collapse show" aria-labelledby="Faqs11" data-bs-parent="#srvcFAQsAccrdn">
                                            <div className="accordion-body"><p>You must look for some qualities in a plastic surgeon to select a good surgeon. Good surgeons must have a proper educational degree, they must be professional and experienced. They must have up-to-date knowledge and practice in advanced skills and techniques. They are patient-friendly, provide a comfortable and safe environment, and have good patient testimonials.</p>
                                            </div>
                                        </div>
                                    </div><div className="accordion-item">
                                        <div className="accordion-header" id="FaqsOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#FAQs-collapse12" aria-expanded="true" aria-controls="FAQs-collapse{post.id}" fdprocessedid="5cuvao"><p>Who is the best surgeon for plastic surgery in Delhi?</p></button>
                                        </div>
                                        <div id="FAQs-collapse12" className="accordion-collapse collapse show" aria-labelledby="Faqs12" data-bs-parent="#srvcFAQsAccrdn">
                                            <div className="accordion-body"><p>Dr. Mrinalini Sharma, is one of the <b>best female plastic surgeons in Delhi</b> who has great skill and expertise in plastic and cosmetic surgeries. She holds decades of experience in performing surgeries on the breas-t, body, and face to improve their functioning and aesthetics. She offers a personalised approach to her clients to ensure dramatic, sculpted, and attractive natural-looking results. Her priority is to have a thorough discussion with his patient and spend enough time comprehending what his patient wants to achieve with plastic surgery.</p>
                                                <p>Dr. Mrinalini Sharma has a brilliant staff and her services are price tagged reasonably. She is a true artist and expert who looks at her patients individually and moulds their bodies to perfection. Her patients find her very kind, compassionate, and caring.</p>
                                                <p>She, with her skills and treatments, has delivered happy smiles to her patients. Book your visit with her for more details.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* <section className={`sectionSpace ${styles.careerSctn}`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>How many days are required for plastic surgery?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>This depends upon the type of plastic surgery you have to undergo and the kind of work life you have. Most plastic surgeons operate for a maximum of 6-7 hours. The patients should expect to be out of work for anywhere between 3 to 14 days.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.careerSctn} greyColor`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>How much does plastic surgery cost?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>As per Dr. Mrinalini Sharma, <b>female cosmetic surgeon in Delhi</b> the <b>cost of plastic surgery</b> varies for every patient. It depends upon several factors including the price of operating room facilities, material costs, surgeon fees, the type of plastic surgery, the health status of the patient, and additional costs like anesthesiologist fees, medical tests price, prescription price, and cost of follow-up sessions.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.careerSctn}`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>Which is the most commonly performed plastic surgery in men and women?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>Plastic surgery procedures most commonly requested by men and women include Rhinoplasty (Nose Job), Blepharoplasty (Eyelid Surgery), Rhytidectomy (Facelift), Liposuction, Abdominoplasty (Tummy tuck), Fat transfer, Eyebrow Lift, Otoplasty (Ear correction), and breas-t Reduction. </p>
                            
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.careerSctn} greyColor`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>Is plastic surgery for a lifetime?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>After plastic surgery, one can usually expect to enjoy results for about a few years to more than 10 to 12 years. However, the results do not necessarily last forever.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.careerSctn}`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>What is the safest plastic surgery?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>Among different plastic surgery procedures, the most common and safest plastic surgery is liposuction. Liposuction is a minimally invasive procedure to get rid of extra, stubborn fat via suction.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.careerSctn} greyColor`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>What is the most popular type of plastic surgery?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>As per Dr. Mrinalini Sharma, <b>female cosmetic surgeon in Delhi</b>, the most popular types of plastic surgeries around the globe are breas-t augmentation, eyelid lift surgery, tummy tuck surgery, breas-t lift, facelift, nose reshaping surgery, liposuction, forehead/brow lift, and ear surgery.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.careerSctn}`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>What is the least painful plastic surgery?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>Every patient who goes for plastic surgery has a different pain tolerance level. Generally, plastic surgeries are not so painful. Rhinoplasty is frequently reported by patients to be the least painful.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.careerSctn} greyColor`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>Is plastic surgery expensive?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>Plastic surgery is viewed by most people to be available only for ultra-wealthy people. But all plastic surgeries are not so expensive. The out-of-pocket expenses for plastic surgery depend upon the chosen surgeon’s fees, the clinic facilities, aftercare, and insurance of the patient.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.careerSctn}`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>Do plastic surgeons treat facial injuries?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>Yes. Plastic surgeons can help repair the damages caused by facial injury or trauma. Facial reconstruction is a plastic surgery done to correct soft tissue or bone injuries to the cheekbones, jaw, nose, or eye sockets.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.careerSctn} greyColor`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>What is the difference between cosmetic and reconstructive surgery?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>Reconstructive surgery focuses on the repair and restoration of the form and function of the face or body parts affected by congenital abnormalities, trauma, or diseases. In contrast, cosmetic surgery focuses on improving physical features for better looks. </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.careerSctn}`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>How do I know if I'm choosing a good plastic surgeon?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>You must look for some qualities in a plastic surgeon to select a good surgeon. Good surgeons must have a proper educational degree, they must be professional and experienced. They must have up-to-date knowledge and practice in advanced skills and techniques. They are patient-friendly, provide a comfortable and safe environment, and have good patient testimonials.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`sectionSpace ${styles.careerSctn} greyColor`}>
                <div className="container">
                    <h3 className={`${styles.SctnHdng} text-center`}>Who is the best surgeon for plastic surgery in Delhi?</h3>

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className={styles.About_surgeon_para}>Dr. Mrinalini Sharma, is one of the <b>best female plastic surgeons in Delhi</b> who has great skill and expertise in plastic and cosmetic surgeries. She holds decades of experience in performing surgeries on the breas-t, body, and face to improve their functioning and aesthetics. She offers a personalised approach to her clients to ensure dramatic, sculpted, and attractive natural-looking results. Her priority is to have a thorough discussion with his patient and spend enough time comprehending what his patient wants to achieve with plastic surgery.</p>
                            <p className={styles.About_surgeon_para}>Dr. Mrinalini Sharma has a brilliant staff and her services are price tagged reasonably. She is a true artist and expert who looks at her patients individually and moulds their bodies to perfection. Her patients find her very kind, compassionate, and caring.</p>
                            <p className={styles.About_surgeon_para}>She, with her skills and treatments, has delivered happy smiles to her patients. Book your visit with her for more details.</p>
                        </div>
                    </div>
                </div>
            </section> */}


            <RealResults />
            <AppointmentForm />
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

export async function getServerSideProps() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/seo-tag/` + 'plastic-surgeon-in-delhi',
        {
            method: 'GET'
        }
    );
    const postData = await response.json();
    return {
        props: {

            postData
        }

    }
}