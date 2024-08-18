// import Script from 'next/script'
// import StepsStyle from '../styles/StepsStyle.module.css'
import Link from 'next/link'
import Image from 'next/image'

export function TestimonialsSection() {
  return (
<>

<section className='TestmonialsSection'>
<div className="PtntTstmnlBox">    
<div className="PtntTstmnlLeftBox">
    <div className="SctnHdng">Patient Testimonials</div>
<p>What Our Patients Say</p>
</div>
<div className="PtntTstmnlRightBox">
<div className="RatingNo">5/5</div>
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
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12 TstmnlItem">
        <div className="row align-items-center pb-2">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-sm-8 col-8">
        <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/google.png'} alt="google" width={64} height={21}/>
        <div className="TstName">Pallavi Sharma</div>
        <div className="testimonialsRating">
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-4 text-end"><div className="UserTag">PS</div></div>
        </div>
        <p>Dr Mrinalini is one of the best doctors I have ever met
        in life . She has magic in her hands ! She is highly
        professional and excellent in her work! Will always be
        grateful to her for instilling back that confidence within
        me! Her team is really helpful and friendly too. Special
        thanks to Heena and Soni for all there cooperation
        throughout !</p>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12 TstmnlItem">
        <div className="row align-items-center pb-2">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-sm-8 col-8">
        <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/google.png'} alt="google" width={64} height={21}/>
        <div className="TstName">Pallavi Sharma</div>
        <div className="testimonialsRating">
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-4 text-end"><div className="UserTag">PS</div></div>
        </div>
        <p>Dr Mrinalini is one of the best doctors I have ever met
        in life . She has magic in her hands ! She is highly
        professional and excellent in her work! Will always be
        grateful to her for instilling back that confidence within
        me! Her team is really helpful and friendly too. Special
        thanks to Heena and Soni for all there cooperation
        throughout !</p>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12 TstmnlItem">
        <div className="row align-items-center pb-2">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-sm-8 col-8">
        <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/google.png'} alt="google" width={64} height={21}/>
        <div className="TstName">Pallavi Sharma</div>
        <div className="testimonialsRating">
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-4 text-end"><div className="UserTag">PS</div></div>
        </div>
        <p>Dr Mrinalini is one of the best doctors I have ever met
        in life . She has magic in her hands ! She is highly
        professional and excellent in her work! Will always be
        grateful to her for instilling back that confidence within
        me! Her team is really helpful and friendly too. Special
        thanks to Heena and Soni for all there cooperation
        throughout !</p>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12 TstmnlItem">
        <div className="row align-items-center pb-2">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-sm-8 col-8">
        <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/google.png'} alt="google" width={64} height={21}/>
        <div className="TstName">Pallavi Sharma</div>
        <div className="testimonialsRating">
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-4 text-end"><div className="UserTag">PS</div></div>
        </div>
        <p>Dr Mrinalini is one of the best doctors I have ever met
        in life . She has magic in her hands ! She is highly
        professional and excellent in her work! Will always be
        grateful to her for instilling back that confidence within
        me! Her team is really helpful and friendly too. Special
        thanks to Heena and Soni for all there cooperation
        throughout !</p>
    </div>
       </div>
        </div>
        </div>
        <div className="text-center"><Link href="/testimonials"><a className="BtnRdMore">View All</a></Link></div>
</section>


</>
  )
}
 
export default TestimonialsSection