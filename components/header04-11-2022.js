import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
function Header() {
    return <>

        <Head>

            <link rel="icon" type="image/x-icon" href={process.env.NEXT_PUBLIC_BASE_URL + '/favicon.ico'}></link>
            <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" as="font" onLoad="this.onLoad=null;this.rel='stylesheet'" crossOrigin="anonymous" />
            {/* Start of preload images */}
            <link rel="preload" fetchpriority="high" as="image" imagesrcset="https://www.aestiva.in/_next/static/media/face_414.jpg 1x,
    https://www.aestiva.in/_next/static/media/face.jpg 2x" />
            <link rel="preload" fetchpriority="high" as="image" imagesrcset="https://www.aestiva.in/_next/static/media/body_414.jpg 1x,
    https://www.aestiva.in/_next/static/media/body.jpg 2x" />
            <link rel="preload" fetchpriority="high" as="image" imagesrcset="https://www.aestiva.in/_next/static/media/breas-t_414.jpg 1x,
    https://www.aestiva.in/_next/static/media/breas-t.jpg 2x" />
            <link rel="preload" fetchpriority="high" as="image" imagesrcset="https://www.aestiva.in/_next/static/media/non-surgical_414.jpg 1x,
    https://www.aestiva.in/_next/static/media/non-surgical.jpg 2x" />
            <link rel="preload" fetchpriority="high" as="image" imagesrcset="https://www.aestiva.in/_next/static/media/clinic_images_overlay_683.jpg 1x,
    https://www.aestiva.in/_next/static/media/clinic_images_overlay.jpg 2x" />
            <link rel="preload" fetchpriority="high" as="image" imagesrcset="https://www.aestiva.in/_next/static/media/dr-pic_336.jpg 1x,
    https://www.aestiva.in/images/dr-pic.jpg 2x" />
            <link rel="preload" fetchpriority="high" as="image" href="https://www.aestiva.in/_next/static/media/our-service-banner.jpg" type="image/jpg" />
            <link rel="preload" fetchpriority="high" as="image" href="https://www.aestiva.in:8080/backend/blog/1661256105.jpg" type="image/jpg" />
            <link rel="preload" fetchpriority="high" as="image" href="https://www.aestiva.in:8080/backend/blog/1654345026.jpeg" type="image/jpg" />
            <link rel="preload" fetchpriority="high" as="image" href="https://www.aestiva.in:8080/backend/blog/1654345195.jpeg" type="image/jpg" />
            <link rel="preload" fetchpriority="high" as="image" href="https://www.aestiva.in:8080/backend/blog/ clinic_images.jpg" type="image/jpg" />
            <link rel="preload" fetchpriority="high" as="image" imagesrcset="https://www.aestiva.in/_next/static/media/dr-mrinalini-sharma-delhi_414.jpg 1x,
    https://www.aestiva.in/images/dr-mrinalini-sharma-delhi.jpg.jpg 2x" />
            <link rel="preload" fetchpriority="high" as="image" imagesrcset="https://www.aestiva.in/_next/static/media/dr-mrinalini-sharma-3_414.jpg 1x,
    https://www.aestiva.in/images/dr-mrinalini-sharma-3.jpg 2x" />

            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-77811107-2" defer="defer" data-cfasync="false"></script>
            <script async type="text/javascript">
                window.dataLayer = window.dataLayer || [];
                function gtag(){`{dataLayer.push(arguments);}`}
                gtag('js', new Date());
                gtag('config', 'UA-77811107-2');
                gtag('config', 'AW-854769480');
            </script>
            {/* <!-- End of Gtag Code --> */}

            {/* <!-- Facebook Pixel Code --> */}
            <script async type="text/javaScript">
                !function (f, b, e, v, n, t, s) {`
            {
            if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}`}(window, document, 'Script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '689771972478628');
                fbq('track', 'PageView');
            </script>
            <noScript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none" data-src="https://www.facebook.com/tr?id=689771972478628&ev=PageView&noScript=1" class="lazyload"` }} />
            {/* <!-- End of Facebook Pixel Code --> */}

            {/* <!--  Website schema start here   --> */}
            <script async type="application/ld+json">
                {`{
                "@context": "http://schema.org",
                "@type": "WebSite",
                "url": "https://www.aestiva.in/"
                }`}
            </script>
            {/* <!-- Website schema end here --> */}

            {/* <!-- ORGANIZATION SCHEMA START --> */}
            <script async type="application/ld+json">
                {`{ "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Dr. Mrinalini Sharma",
            "legalName" : "Aestiva Centre",
            "url": "https://www.aestiva.in/",
            "logo": "https://www.aestiva.in/assets/home/images/logo.png",
            "foundingDate": "",
            "founders": [
            {
            "@type": "Person",
            "name": "Dr. Mrinalini Sharma"
            }],
            "address": {
            "@type": "PostalAddress",
            "streetAddress": " Saket Clinic, E 33, Paryavaran Complex",
            "addressLocality": "IGNOU Road, Neb Sarai",
            "addressRegion": "New Delhi",
            "postalCode": "110030",
            "addressCountry": "India"
            },
            "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Office",
            "telephone": "[+91 8447652698]",
            "email": "info@aestiva.in"
            },
            "sameAs": [
            "https://www.facebook.com/aestivaclinic/",
            "https://twitter.com/AestivaClinic/",
            "https://www.instagram.com/aestivaplasticsurgery/"
            ]}`}
            </script>
            {/* <!-- ORGANIZATION SCHEMA END --> */}
            {/* <!-- LOGO SCHEMA START --> */}
            <script async type="application/ld+json">
                {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://www.aestiva.in/",
            "logo": "https://www.aestiva.in/assets/home/images/logo.png"
            }`}
            </script>
            {/* <!-- LOGO SCHEMA END --> */}
            {/* <!--  SEARCHBOX SCHEMA START   --> */}
            <script async type="application/ld+json">
                {`{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.aestiva.in/"
            }`}
            </script>
            {/* <!-- SEARCHBOX SCHEMA END --> */}
            {/* <!-- LOCAL BUSINESS SCHEMA START --> */}
            <script async type="application/ld+json">
                {`{
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "image": [
        "https://www.aestiva.in/assets/home/clinic/4.jpg",
        "https://www.aestiva.in/assets/home/clinic/1.jpg",
        "https://www.aestiva.in/assets/home/clinic/11.jpg"
        ],
        "@id": "https://www.aestiva.in/",
        "name": "Dr. Mrinalini Sharma Cosmetic & Plastic Surgeon In Delhi",
        "address": {
        "@type": "PostalAddress",
        "streetAddress": "Saket Clinic, E 33, Paryavaran Complex",
        "addressLocality": "IGNOU Road, Neb Sarai",
        "addressRegion": "New Delhi",
        "postalCode": "110030",
        "addressCountry": "India"
        },
        "review": {
        "@type": "Review",
        "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9",
        "bestRating": "5"
        },
        "author": {
        "@type": "Person",
        "name": "Dr. Mrinalini Sharma"
        }
        },
        "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.5129753,
        "longitude": 77.2019064
        },
        "url": "https://www.aestiva.in/",
        "telephone": "+918447652698",
        "openingHoursSpecification":[
        {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        "opens": "10:00",
        "closes": "01:00"

        },
        {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],

        "opens": "16:30",
        "closes": "19:30"
        },
        {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "",
        "closes": ""
        }
        ]
        }`}
            </script>
            {/* <!--  LOCAL BUSINESS SCHEMA END   --> */}
            <script async type="application/ld+json">
                {`{
        "@context":"http://schema.org",
        "@type":"ItemList",
        "itemListElement":[
        {
            "@type":"SiteNavigationElement",
            "position":1,
            "name": "Home",
            "description": "Homes Desc...",
            "url":"https://www.aestiva.in/"
        },
        {
            "@type":"SiteNavigationElement",
            "position":2,
            "name": "About Doctor",
            "description": "About doctor desc...",
            "url":"https://www.aestiva.in/about-doctor/"
        },
        {
            "@type":"SiteNavigationElement",
            "position":3,
            "name": "About Clinic",
            "description": "About clinic desc...",
            "url":"https://www.aestiva.in/about-clinic/"
        },
        {
            "@type":"SiteNavigationElement",
            "position":4,
            "name": "Blog",
            "description": "Blog desc...",
            "url":"https://www.aestiva.in/blog/"
        },
        {
            "@type":"SiteNavigationElement",
            "position":5,
            "name": "Offers",
            "description": "Offers desc...",
            "url":"https://www.drparagtelang.com/offers"
        },
        {
            "@type":"SiteNavigationElement",
            "position":6,
            "name": "Videos",
            "description": "Videos desc...",
            "url":"https://www.aestiva.in/videos/"
        },
        {
            "@type":"SiteNavigationElement",
            "position":6,
            "name": " Real Results",
            "description": " Real Results desc...",
            "url":"https://www.aestiva.in/gallery/"
        },
        {
            "@type":"SiteNavigationElement",
            "position":7,
            "name": "Testimonials",
            "description": "Testimonials desc...",
            "url":"https://www.aestiva.in/testimonials/"
        },
        {
            "@type":"SiteNavigationElement",
            "position":8,
            "name": "Contact Us",
            "description": "Contact Us desc...",
            "url":"https://www.aestiva.in/contact/"
        }
        ]
        }`}
            </script>
            {/* <!--  SITE NAVIGATION SCHEMA END   --> */}
        </Head>
        <Script async src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" strategy="lazyOnload"></Script>
        <header>
            <div className="container-fluid">

                <div className="row align-items-center">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                        <Link href="/"><a>
                            <div className='headerLogo'><Image src={process.env.NEXT_PUBLIC_BASE_URL + '/images/aestiva-logo-white.png'} className="headerLogo" alt="aestiva.in" width={247} height={87} /></div>
                            <div className='logoscroll'><Image src={process.env.NEXT_PUBLIC_BASE_URL + '/images/aestiva-icon.png'} className="logoscroll" alt="aestiva.in" width={90} height={87} /></div>
                        </a></Link>
                    </div>
                    <div className="col-lg-10 col-md-7 col-sm-6 col-7">
                        <div className='hdrApntmntbx'><Link href="/book-an-appointment"><a className="BtnRdMore">BOOK AN APPOINTMENT</a></Link></div>
                        {/* Start Mobile Menu */}
                        <div className="mobile_navigation">
                            <nav className="main-nav float-right d-none d-lg-none">
                                <ul>
                                    <li>
                                        <Link href="/"><a className="mlogobx"><Image src={`data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAABXCAMAAADvTiOPAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAkxQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////jdOBtwAAAMR0Uk5TABJBaJCqv8uJc0IQCC1KYnqUWT8sIBQWHFCSfWkMZ1g+JA8lOEUFXo6HC9lDAQlgAoJ2ITU6NhNmoTApNFxWLyJjDTMoXUwai0YDMVIyozdUGBcEtj1XWnyDu/n/+sEHHpNsTrnX6OzmyRFuVW0KeCezBn9LFYX8PPv+0d/91GUfvYHwpvbe4871sJ5Axiu1vMVJ83kZxNyX7U1x8eF0e5+bX/RrJpl+2pEOI7Lr7sCv1tOWotCocK1bKt1EmC6KUWRTrH6NXcwAABHgSURBVHic3Vz5QxPHHh95BDByGAs0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`} className="headerLogo" alt="aestiva.in" width={247} height={87} /></a></Link>
                                    </li>
                                    <li><Link href="/"><a>Home</a></Link></li>
                                    <li className="drop-down"><Link href="#"><a>About Us</a></Link>
                                        <ul>
                                            <li><Link href="/about-doctor" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}><a>About Doctor</a></Link></li>
                                            <li><Link href="/about-clinic"><a> Aestiva Centre</a></Link></li>
                                        </ul>
                                    </li>

                                    <li className="drop-down">
                                        <Link href=""><a>Services</a></Link>

                                        <ul>
                                            <li className="drop-down">
                                                <Link href="/face"><a>Face</a></Link>
                                                <ul>
                                                    <li><Link href="/face/brow-lift"><a>Brow Lift</a></Link></li>
                                                    <li><Link href="/face/nose-reshaping-surgery"><a>Nose Surgery / Rhinoplasty</a></Link></li>
                                                    <li><Link href="/face/lip-reduction-plumping"><a>Lip Reduction / Plumping</a></Link></li>
                                                    <li><Link href="/face/ear-reshaping-earlobe-repair"><a>Ear Reshaping / Earlobe Repair</a></Link></li>
                                                    <li><Link href="/face/forehead-lift"><a>Forehead Lift</a></Link></li>
                                                    <li><Link href="/face/scar-correction"><a>Scar Correction</a></Link></li>
                                                    <li><Link href="/face/eyelid-surgery"><a>Eyelid / Blepharoplasty</a></Link></li>
                                                    <li><Link href="/face/asian-double-eyelid-surgery"><a>Asian Double Eyelid Surgery</a></Link></li>
                                                    <li><Link href="/face/dimple-creation-surgery"><a>Dimple Creation Surgery</a></Link></li>
                                                    <li><Link href="/face/lipopen-fat-grafting"><a>Lipopen Fat Grafting</a></Link></li>
                                                </ul>
                                            </li>
                                            <li className="drop-down"><Link href="/body"><a>Body</a></Link>
                                                <ul>
                                                    <li><Link href="/body/liposuction-surgery"><a>Liposuction</a></Link></li>
                                                    <li><Link href="/body/abdominoplasty-tummy-tuck-surgery"><a>Abdominoplasty / Tummy Tuck</a></Link></li>
                                                    <li><Link href="/body/brazilian-butt-lift"><a>Brazilian Butt Lift</a></Link></li>
                                                </ul>
                                            </li>
                                            <li className="drop-down"><Link href="/breas-t"><a>Breas-t</a></Link>
                                                <ul>
                                                    <li><Link href="/breas-t/female-breas-t-reduction-surgery"><a>Breas-t Reduction</a></Link></li>
                                                    <li><Link href="/breas-t/b-lift-surgery"><a>Breas-t Lift</a></Link></li>
                                                    <li><Link href="/breas-t/breas-t-implant-enlargement-surgery"><a>Breas-t Implants / Augmentation</a></Link></li>
                                                    <li><Link href="/breas-t/gynecomastia-surgery-male-breas-t-reduction"><a>Male Breas-t Reduction / Gynecomastia</a></Link></li>
                                                </ul>
                                            </li>
                                            <li className="drop-down"><Link href="/hair"><a>Hair </a></Link>
                                                <ul>
                                                    <li><Link href="/hair/mesotherapy-for-hair-fall"><a>Mesotherapy for Hair Fall</a></Link></li>
                                                    <li><Link href="/hair/hair-transplant"><a>Hair Transplant(FUE/FUT)</a></Link></li>
                                                </ul>
                                            </li>
                                            <li className="drop-down"><Link href="/non-surgical-treatment"><a>Non-Surgical</a></Link>
                                                <ul>
                                                    <li><Link href="/non-surgical-treatment/anti-wrinkle-injections"><a>Anti Wrinkle Injections</a></Link></li>
                                                    <li><Link href="/non-surgical-treatment/soft-tissue-fillers"><a>Dermal Fillers</a></Link></li>
                                                    <li><Link href="/non-surgical-treatment/chemical-peels"><a>Chemical Peels</a></Link></li>
                                                    <li><Link href="/non-surgical-treatment/vampire-face-lift"><a>Vampire Facelift</a></Link></li>
                                                    <li><Link href="/non-surgical-treatment/l-hair-removal"><a>Laser Hair Removal</a></Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="drop-down">
                                        <Link href="#"><a>Gallery</a></Link>
                                        <ul>
                                            <li><Link href="/clinic-images"><a>Aestiva Gallery</a></Link></li>
                                            <li><Link href="/videos"><a>Videos</a></Link></li>
                                            <li><Link href="/real-results"><a>Real Results</a></Link></li>
                                        </ul>
                                    </li>

                                    <li className="drop-down">
                                        <Link href="#"><a>Testimonial</a></Link>
                                        <ul>
                                            <li><Link href="/testimonials"><a>Written Testimonials</a></Link></li>
                                            <li><Link href="/video-testimonials"><a>Videos Testimonials</a></Link></li>
                                        </ul>
                                    </li>

                                    <li><Link href="/blog"><a>Blogs</a></Link></li>
                                    <li><Link href="/contact"><a>Contact Us</a></Link></li>
                                    <li><Link href="/request-a-callback"><a>Request a Callback</a></Link></li>
                                    <li><Link href="/book-an-appointment"><a>Book An Appointement</a></Link></li>

                                </ul>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <ul className="social-network socialsdmnu">
                                        <li><Link href="#"><a className="waves-effect waves-dark fbk" href='https://www.facebook.com/aestivaclinic/'><i className="fa fa-facebook"></i></a></Link></li>
                                        <li><Link href="#"><a className="waves-effect waves-dark int" href="https://www.instagram.com/aestivaplasticsurgery/"><i className="fa fa-instagram"></i></a></Link></li>
                                        <li><Link href='https://twitter.com/AestivaClinic/'><a className="twitb"><i className="fa fa-twitter" aria-hidden="true"></i></a></Link></li>
                                        <li><Link href="#"><a className="waves-effect waves-dark ytb" href="https://www.youtube.com/c/AestivaClinic"><i className="fa fa-youtube-play"></i></a></Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        {/* End Mobile Menu */}
                        {/* Start Desktop Menu */}
                        <nav className="navbar navbar-expand-md dsktp">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse  justify-content-end mnmenu" id="navbarCollapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><Link href="/"><a className="nav-link">Home</a></Link></li>
                                    <li className="nav-item dropdown"><Link href="#"><a className="nav-link dropdown-toggle" id="one" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About Us</a></Link>
                                        <div className="dropdown-menu" aria-labelledby="one">
                                            <ul>
                                                <li><Link href="/about-doctor"><a className="dropdown-item">About Doctor</a></Link></li>
                                                <li><Link href="/about-clinic" as={`/about-clinic`}><a className="dropdown-item"> Aestiva Centre</a></Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link href="/services">
                                            <a className="nav-link dropdown-toggle" id="two" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a></Link>
                                        <div className="dropdown-menu" aria-labelledby="two">
                                            <ul>
                                                <li>
                                                    <Link href="/face"><a className="dropdown-item">Face <i className="fa fa-caret-right darow" aria-hidden="true"></i></a></Link>
                                                    <ul className="ddrpdwn">
                                                        <li><Link href="/face/brow-lift"><a className="dropdown-item">Brow Lift</a></Link></li>
                                                        <li><Link href="/face/nose-reshaping-surgery"><a className="dropdown-item">Nose Surgery / Rhinoplasty</a></Link></li>
                                                        <li><Link href="/face/lip-reduction-plumping"><a className="dropdown-item">Lip Reduction / Plumping</a></Link></li>
                                                        <li><Link href="/face/ear-reshaping-earlobe-repair"><a className="dropdown-item">Ear Reshaping / Earlobe Repair</a></Link></li>
                                                        <li><Link href="/face/forehead-lift"><a className="dropdown-item">Forehead Lift</a></Link></li>
                                                        <li><Link href="/face/scar-correction"><a className="dropdown-item">Scar Correction</a></Link></li>
                                                        <li><Link href="/face/eyelid-surgery"><a className="dropdown-item">Eyelid / Blepharoplasty</a></Link></li>
                                                        <li><Link href="/face/asian-double-eyelid-surgery"><a className="dropdown-item">Asian Double Eyelid Surgery</a></Link></li>
                                                        <li><Link href="/face/dimple-creation-surgery"><a className="dropdown-item">Dimple Creation Surgery</a></Link></li>
                                                        <li><Link href="/face/lipopen-fat-grafting"><a className="dropdown-item">Lipopen Fat Grafting</a></Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/body"><a className="dropdown-item">Body <i className="fa fa-caret-right darow" aria-hidden="true"></i></a></Link>
                                                    <ul className="ddrpdwn">
                                                        <li><Link href="/body/liposuction-surgery"><a className="dropdown-item">Liposuction</a></Link></li>
                                                        <li><Link href="/body/abdominoplasty-tummy-tuck-surgery"><a className="dropdown-item">Abdominoplasty / Tummy Tuck</a></Link></li>
                                                        <li><Link href="/body/brazilian-butt-lift"><a className="dropdown-item">Brazilian Butt Lift</a></Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/hair"><a className="dropdown-item">Hair <i className="fa fa-caret-right darow" aria-hidden="true"></i></a></Link>
                                                    <ul className="ddrpdwn">
                                                        <li><Link href="/hair/mesotherapy-for-hair-fall"><a className="dropdown-item">Mesotherapy for Hair Fall</a></Link></li>
                                                        <li><Link href="/hair/hair-transplant"><a className="dropdown-item">Hair Transplant(FUE/FUT)</a></Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/breas-t"><a className="dropdown-item">Breas-t <i className="fa fa-caret-right darow" aria-hidden="true"></i></a></Link>
                                                    <ul className="ddrpdwn">
                                                        <li><Link href="/breas-t/female-breas-t-reduction-surgery"><a className="dropdown-item">Breas-t Reduction</a></Link></li>
                                                        <li><Link href="/breas-t/b-lift-surgery"><a className="dropdown-item">Breas-t Lift</a></Link></li>
                                                        <li><Link href="/breas-t/breas-t-implant-enlargement-surgery"><a className="dropdown-item">Breas-t Implants / Augmentation</a></Link></li>
                                                        <li><Link href="/breas-t/gynecomastia-surgery-male-breas-t-reduction"><a className="dropdown-item">Male Breas-t Reduction / Gynecomastia</a></Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/non-surgical-treatment"><a className="dropdown-item">Non-Surgical Treatments<i className="fa fa-caret-right darow" aria-hidden="true"></i></a></Link>
                                                    <ul className="ddrpdwn">
                                                        <li><Link href="/non-surgical-treatment/anti-wrinkle-injections"><a className="dropdown-item">Anti Wrinkle Injections</a></Link></li>
                                                        <li><Link href="/non-surgical-treatment/soft-tissue-fillers"><a className="dropdown-item">Dermal Fillers</a></Link></li>
                                                        <li><Link href="/non-surgical-treatment/chemical-peels"><a className="dropdown-item">Chemical Peels</a></Link></li>
                                                        <li><Link href="/non-surgical-treatment/vampire-face-lift"><a className="dropdown-item">Vampire Facelift</a></Link></li>
                                                        <li><Link href="/non-surgical-treatment/l-hair-removal"><a className="dropdown-item">Laser Hair Removal</a></Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>


                                    <li className="nav-item dropdown"><Link href="#"><a className="nav-link dropdown-toggle" id="Three" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Gallery</a></Link>
                                        <div className="dropdown-menu" aria-labelledby="Three">
                                            <ul>
                                                <li><Link href="/clinic-images"><a className="dropdown-item">Aestiva Gallery</a></Link></li>
                                                <li><Link href="/videos"><a className="dropdown-item">Videos</a></Link></li>
                                                <li><Link href="/real-results"><a className="dropdown-item">Real Results</a></Link></li>
                                            </ul>
                                        </div>
                                    </li>


                                    <li className="nav-item dropdown"><Link href="#"><a className="nav-link dropdown-toggle" id="Three" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Testimonials</a></Link>
                                        <div className="dropdown-menu" aria-labelledby="Three">
                                            <ul>
                                                <li><Link href="/testimonials"><a className="dropdown-item">Written Testimonials</a></Link></li>
                                                <li><Link href="/video-testimonials"><a className="dropdown-item">Video Testimonials</a></Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item"><Link href="/contact"><a className="nav-link">Contact Us</a></Link></li>
                                    <li className="nav-item"><Link href="/book-an-appointment"><a className="AppointmentLink">BOOK AN APPOINTMENT</a></Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Header
