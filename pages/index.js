import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import styles from '../styles/home.module.css'
import LP from '../styles/lp.module.css'
import Footer from '../components/footer'
import Steps from '../components/Steps'
import AppointmentForm from '../components/AppointmentForm'
import OurServiceSection from '../components/OurServiceSection'
import React, {useState} from 'react'
import CallBackForm from '../components/CallBackForm';
import RealResults from '../components/RealResults'

export default function Home({postData}) {
  console.log(postData,"postdata")
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
    </Head>
 
<div className={styles.hmBanner}> 

<div className={styles.hmBannerMob}>
  <div className={`${styles.hmBannerBox} ${styles.a1}`} id="slide-1">
          <div className={styles.BnrTxt}>
              <div className={styles.bnrSrvCatName}>FACE</div>
              <div className={styles.BnrServList}>
              <Link href="/face/brow-lift">Brow Lift</Link><br/>
              <Link href="/face/nose-reshaping-surgery">Nose Surgery / Rhinoplasty</Link><br/>
              <Link href="/face/lip-reduction-plumping">Lip Reduction / Plumping</Link><br/> 
              <Link href="/face/ear-reshaping-earlobe-repair">Ear Reshaping / Earlobe Repair</Link><br/>
              <Link href="/face/forehead-lift">Forehead Lift</Link><br/>
              <Link href="/face/scar-correction">Scar Correction</Link><br/>
              <Link href="/face/eyelid-surgery">Eyelid / Blepharoplasty</Link><br/>
              <Link href="/face/asian-double-eyelid-surgery">Asian Double Eyelid Surgery</Link><br/>
              <Link href="/face/dimple-creation-surgery">Dimple Creation Surgery</Link><br/>
              <Link href="/face/lipopen-fat-grafting">Lipopen Fat Grafting</Link>
              </div>
          </div>
  </div>
  <div className={`${styles.hmBannerBox} ${styles.a2}`} id="slide-2">
            <div className={styles.BnrTxt}>
              <div className={styles.bnrSrvCatName}>BODY</div>
            <div className={styles.BnrServList}>
              <Link href="/body/liposuction-surgery">Liposuction</Link><br/>
              <Link href="/body/abdominoplasty-tummy-tuck-surgery">Abdominoplasty / Tummy Tuck</Link><br/>
              <Link href="/body/brazilian-butt-lift">Brazilian Butt Lift</Link>
              </div>
          </div>
  </div>
  <div className={`${styles.hmBannerBox} ${styles.a3}`} id="slide-3">
          <div className={styles.BnrTxt}>
              <div className={styles.bnrSrvCatName}>BREAS-T</div>
                  <div className={styles.BnrServList}>
              <Link href="/breas-t/female-breas-t-reduction-surgery">Breas-t Reduction</Link><br/>
              <Link href="/breas-t/b-lift-surgery">Breas-t Lift</Link><br/>
              <Link href="/breas-t/breas-t-implant-enlargement-surgery">Breas-t Implants / Augmentation</Link><br/>
              <Link href="/breas-t/gynecomastia-surgery-male-breas-t-reduction">Male Breas-t Reduction / Gynecomastia</Link>
              </div>
          </div>
  </div>
  <div className={`${styles.hmBannerBox} ${styles.a4}`} id="slide-4">
  <div className={styles.BnrTxt}>
             <div className={styles.bnrSrvCatName}>NON-SURGICAL</div>
               <div className={styles.BnrServList}>
              <Link href="/non-surgical-treatment/anti-wrinkle-injections">Anti Wrinkle Injections</Link><br/>
              <Link href="/non-surgical-treatment/soft-tissue-fillers">Dermal Fillers</Link><br/>
              <Link href="/non-surgical-treatment/chemical-peels">Chemical Peels</Link><br/>
              <Link href="/non-surgical-treatment/vampire-face-lift">Vampire Facelift</Link><br/>
              <Link href="/non-surgical-treatment/l-hair-removal">Laser Hair Removal</Link>
            </div>
        </div>
  </div>
</div>
<div className={styles.slidrNmbr}>
<a href="#slide-1"></a>
  <a href="#slide-2"></a>
  <a href="#slide-3"></a>
  <a href="#slide-4"></a>
</div>
</div>

<CallBackForm />
<Steps/>

<section className='sectionSpace hmAboutHospital'>
<div className="hmHospitalCntnt">
<div className="row justify-content-center">
<div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 text-center">
            <div className="SctnHdng">Aestiva Plastic Surgery Centre</div>
            <h1 className='seoHd'><strong>Best Plastic Surgery in Delhi | Best Cosmetic Surgery in Delhi</strong></h1>
            <p className='pb-2 pt-1'>Aestiva Clinic provides a wide range of plastic and cosmetic surgery treatments in Delhi. ‘Aestiva’ is a Latin word which is related to Summer. Dr. Mrinalini specifically chose this name because summer is the best season to flaunt one’s beauty in various aspects. The definition of ‘perfect beauty’ can be different for each individual both in regards of facial features or body shape.  Thankfully, one does not have to depend on luck anymore to look perfect. One can choose and improve their facial aesthetics and body shape with world class cosmetic and plastic surgery treatments in Delhi provided at the Aestiva Plastic Surgery Centre.</p>
            <Link href="/about-clinic"><a className='BtnRdMore'>READ MORE</a></Link> <Link href="/book-an-appointment"><a className='BtnRdMore'>BOOK AN APPOINTMENT</a></Link>
</div>    
</div>
</div>
</section>

<section className={`sectionSpace ${styles.SctnVideos}`}>
<div className="container-fluid  text-center">
<div className='SctnHdng'>Our Videos</div>
<div className='row mt-3 mb-2'>
{postData.video.map((video) => {
  return (
<div className='col-lg-4 col-md-4 col-sm-4 col-12' key={video.id}>
<div className={styles.videoThumbBx}>
  <div className={styles.vdoPlayIcon}><Link href="/"><a data-bs-toggle="modal" data-bs-target="#VidModal" className="stretched-link" onClick={(e) => popupClick(e, `${video.id}`, `${video.video}`)}><i className="fa fa-play" aria-hidden="true"></i></a></Link></div>
  <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+'/backend/service_video/inner/'+video.image} alt={video.alt_tag} className='img-fluid w-100' layout="responsive" width={375} height={211}/>
</div>
  <p>{video.name}</p> 
</div>
)})}
</div>
<div className='text-center'><Link href="/videos"><a className='BtnRdMore'>VIEW ALL</a></Link></div>
</div>
</section>

{/* Start Video Modal Popup */}

<div className={`modal  ${styles.videoModal} fade`} id="VidModal" tabIndex="-1" aria-labelledby="VidModalLabel" aria-hidden="true">
<div className="modal-dialog modal-lg">
  <div className="modal-content">
      <button type="button" className={`btn-close ${styles.btnclose}`}
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


<OurServiceSection/>

<AppointmentForm/>

<section className='sectionSpace'>
<div className="container">
<div className="SctnHdng text-center">About Doctor</div>
<div className='SctnAbtDtr'>
  <div className='d-block d-lg-none'><Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/dr-pic.jpg'} alt="DR. MRINALINI SHARMA" className='img-fluid w-100' layout="responsive" width={1175} height={675}/></div>
  <div className='leftBox'>
  <p className='SctnAbtDtrHdng'>DR. MRINALINI SHARMA</p>
            <p>MBBS, MS – General Surgery, MCh – Plastic Surgery, Cosmetic & Reconstructive Surgeon</p>
  <div className='SctnAbtDtrBrdr'></div>
            <p>Dr. Mrinalini Sharma, founder of Aestiva Clinic, has emerged as one of the best plastic surgeons in Delhi. With 17 years of experience in the plastic surgery field, she has been providing advanced plastic and cosmetic surgery in Delhi at a very reasonable cost making it possible for people from all strata of society to look their best and get the perfect shape as well as size. Patients visit Dr. Mrinalini Sharma for the best plastic surgery in Delhi including treatments such as rhinoplasty, liposuction, tummy tuck, eyelid surgery, bust surgeries for women, gynecomastia surgery, and facelift.</p>
</div>
  <div className='rightBox'>
  <p className='SctnAbtDtrHdng'>DOCTOR'S PHILOSOPHY</p>
  <div className='SctnAbtDtrBrdr'></div>
            <p>Nose, ears, eyes, lips - all these features combined together have a powerful effect on the overall appearance of the face. Just by making minor changes in these facial features one can improve their facial aesthetics, self-esteem, and confidence to a great extent. Same philosophy applies to body contouring surgeries. One may have a perfect figure except for that one particular area of concern such as tummy or back fat that makes the person’s body look disproportionate.</p>
</div>
<div className=' d-none d-lg-block'><Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/dr-pic.jpg'} alt="DR. MRINALINI SHARMA" className='img-fluid w-100' layout="responsive" width={1175} height={675}/></div>
</div>
<div className='text-center mt-4'><Link href="/about-doctor"><a className='BtnRdMore'>READ MORE</a></Link></div>
</div>
</section>


<RealResults/>

<section className='TestmonialsSection'>
<div className="PtntTstmnlBox">    
<div className="PtntTstmnlLeftBox">
    <div className="SctnHdng sm-text">Patient Testimonials</div>
<p>What Our Patients Say</p>
</div>
<div className="PtntTstmnlRightBox">
<div className="RatingNo">4.8/5</div>
<div className="testimonialsRating">
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
</div>
<div className="CBrandLogo">
    <ul>
    <li><Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/google.png'} alt="google" className="img-fluid" width={64} height={21} /></li>
    <li><Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/practo.png'} alt="practo" className="img-fluid" width={69} height={17} /></li>
    <li><Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/lybrae.png'} alt="lybrae" className="img-fluid" width={72} height={19} /></li>
    <li><Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/justdial.png'} alt="justdial" className="img-fluid" width={67} height={17} /></li>
</ul>
</div>
</div>
</div>

<div className="TestmonialsSectionCntnt">
    <div className="TstQuoteBx d-flex align-items-center"><Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/quote-icon.png'} alt="Quote Icon" width={18} height={16}/></div>
        <div className="container-fluid">
        <div className="row">
        {postData.testimonial.map((testi) => {
          return (
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12 TstmnlItem" key={testi.test_id}>
            <div className="row align-items-center pb-2">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-sm-8 col-8">
            {(() => {
                        if(testi.source == 'google'){
return (
                    <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/google.png'} className="img-fluid" alt="google" width={64} height={21} />
                    )} if(testi.source == 'practo'){ 
                    return (
                        <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/practo.png'} className="img-fluid" alt="practo" width={69} height={17} styles={{height: '17px'}} />
                    )} if(testi.source == 'lybrate'){ 
                    return (
                        <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/lybrae.png'} className="img-fluid" alt="lybrae" width={72} height={19} />
                        )} if(testi.source == 'justdial'){ 
                            return (
                                <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/justdial.png'} className="img-fluid" alt="justdial" width={67} height={17} />
                                )}
})()}                    
            <div className="TstName">{testi.name}</div>
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
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-4 text-end"><div className="UserTag">{testi.short_name}</div></div>
            </div>
            <div dangerouslySetInnerHTML={{__html: testi.description }}></div>
        </div>
          )})}
       </div>
        </div>
        </div>
        <div className="text-center"><Link href="/testimonials"><a className="BtnRdMore">VIEW ALL</a></Link></div>
</section>

<section className='sectionSpace HmBlogSection'>
  <div className="SctnHdng text-center">Latest Blogs</div>
<div className="container-fluid">
<div className="row pb-3 pt-2">
    {postData.blog.map((blog) => {
      return (
    
    <div className='col-lg-4 col-md-4 col-sm-4 col-12' key={blog.blg_id}>
        <div className="card">
        <Link href={`/blog/${blog.url}`} as={"/blog/"+blog.url}><a><Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+'/backend/blog/'+blog.image} alt={blog.alt_tag} className="card-img-top" width={470} height={278} />
    </a></Link>
        <div className="card-body">
              <a href={`/blog/${blog.url}`} as={"/blog/" + blog.url} className="rdMore stretched-link"><div className="BlgTtle">{blog.blog_name}</div></a>
        <div className="BlgDate">{blog.date}</div>
        <div dangerouslySetInnerHTML={{ __html: blog.short_desc }}></div>
        </div>
        </div>
    </div>
    )})}
</div>
<div className='text-center'><Link href="/blog"><a className='BtnRdMore'>VIEW ALL</a></Link></div>
</div>
</section>

  </>

) 
}

Home.getLayout = function getLayout(page) {
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home-details`);
  const postData = await res.json();
  return { 
    props:{
      postData
    }
  }
}