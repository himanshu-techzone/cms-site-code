import React from "react"
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {

  return (
    <>
      <footer id="FooterBx">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-xl-3 offset-xl-0 col-lg-3 offset-lg-0 col-md-10 offset-md-1 col-sm-10 offset-sm-1 mb-md-3">
              <Link href="/">
                <a>
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_BASE_URL +
                      "/images/aestiva-logo-black.png"
                    }
                    alt="Aestiva"
                    width={247}
                    height={87}
                  />
                </a>
              </Link>
              <p style={{ padding: "1rem 0 0 0" }}>
                Aestiva Clinic provides a wide range of plastic and cosmetic
                surgery treatments in Delhi. ‘Aestiva’ is a Latin word which is
                related to Summer. Dr. Mrinalini specifically chose this name
                because summer is the best season to flaunt one’s beauty in
                various aspects. The definition of ‘perfect beauty’ can be
                different for each individual both in regards of facial features
                or body shape.{" "}
              </p>
              <p>
                Monday to Saturday : 10:00am - 7:00pm |
                <br className="b-line" style={{ display: "none" }}></br> Sunday :
                Closed
              </p>
              <div>
                <Link href="/book-an-appointment">
                  <a className="BtnRdMore">BOOK AN APPOINTMENT</a>
                </Link>
              </div>
            </div>

            <div className="col-xl-8 offset-xl-1 col-lg-8 offset-lg-1 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                  <div className="ftrHD">Useful Links</div>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/dr-mrinalini-sharma">
                        <a>Dr. Mrinalini Sharma</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/plastic-surgeon-in-delhi">
                        <a>Plastic Surgeon in Delhi</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-clinic">
                        <a>Aestiva Centre</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a>Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/clinic-images">
                        <a>Aestiva Gallery</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/videos">
                        <a>Videos</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/real-results">
                        <a>Real Results</a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/testimonials" as={`/testimonials`}>
                        <a> Written Testimonials</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/video-testimonials">
                        <a>Video Testimonials</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <a>Blogs</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/request-a-callback">
                        <a>Request A Callback</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="ftrHD">Our Services</div>
                  <ul>
                    <li>
                      <Link href="/face">
                        <a>Face</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/body">
                        <a>Body</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/hair">
                        <a>Hair</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/breas-t">
                        <a>Breas-t</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/non-surgical-treatment">
                        <a>Non-Surgical Treatments</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 fcontact">
                  <div className="ftrHD">Contact Us</div>

                  <p>
                    <b>Aestiva Plastic Surgery Centre</b>
                  </p>

                  <p>
                    E 33, Paryavaran Complex,
                    <br />
                    IGNOU Road, Neb Sarai,
                    <br />
                    New Delhi 110030
                  </p>
                  <p>
                    Phone :
                    <Link href="Tel:+7982544598">
                      <a>+91 7982544598</a>
                    </Link>, 
                    <Link href="Tel:+918447652698">
                      <a>+91 8447652698</a>
                    </Link>, <Link href="Tel:+919899904515">
                      <a>+91 9899904515</a>
                    </Link>
                    <br />
                    Email :{" "}
                    <Link href="Mailto:info@aestiva.in">
                      <a>info@aestiva.in</a>
                    </Link>
                  </p>
                  <div className="ftrHD FtrSocialLinks">
                    Follow Us On&nbsp;
                    <Link href="https://www.facebook.com/aestivaclinic/">
                      <a className="fcbk" target="_blank">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </Link>
                    <Link href="https://www.instagram.com/aestivaplasticsurgery/">
                      <a className="instgrm" target="_blank">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </Link>
                    <Link href="https://twitter.com/AestivaClinic/">
                      <a className="twitb" target="_blank">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </Link>
                    <Link href="https://www.youtube.com/c/AestivaClinic">
                      <a className="waves-effect waves-dark ytb" target="_blank">
                        <i className="fa fa-youtube-play"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid copyright">
          <p>
            Disclaimer: All the general information, graphics, and videos provided
            on the website (www.aestiva.in) are solely to create awareness among
            people and is not intended to be taken as medical advice. The results
            also vary from patient to patient, depending upon their health
            condition and body anatomy. If you are interested in finding out more,
            please contact us today for a personal consultation.
          </p>
        </div>
      </footer>
      <div className="fbottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-12 text-md-start text-center">
              <a href="#">Terms &amp; Conditions</a> |{" "}
              <a href="#">Legal Disclaimer</a> | <a href="#">Privacy Policy</a>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12 text-md-end text-center">
              © Copyright 2022-24, Aestiva | All Rights Reserved. Powered by{" "}
              <a
                href="https://www.digilantern.com/"
                target="_blank"
                rel="noreferrer"
                className="orangeTxt"
              >
                DigiLantern
              </a>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="nav-link top_book d-md-none d-lg-none d-xl-none col-sm-block ftrFixMenu">
        <div className="row align-items-center">
          <div className="col">
            <Link href="Tel:+917982544598">
              <a>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <p>Call Us</p>
              </a>
            </Link>
          </div>
          <div className="col" style={{ background: "#4b74af" }}>
            <Link href="Mailto:info@aestiva.in">
              <a>
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <p>Email Us</p>
              </a>
            </Link>
          </div>
          <div className="col">
            <Link href="/book-an-appointment">
              <a>
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <p>Appointment</p>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Link href="#">
        <a id="scroll">
          <span></span>
        </a>
      </Link>
      <div className="whatsappiconwrap">
        <a href="https://api.whatsapp.com/send?phone=918447652698&text=Hello this is the starting message">
          <i className="fa fa-whatsapp"></i>
        </a>
      </div>

      <Script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" strategy="lazyOnload"></Script>
      <Script
        src={process.env.NEXT_PUBLIC_BASE_URL + "/js/custom.js"}
        strategy="lazyOnload"
      ></Script>
    </>
  );
}

export default Footer