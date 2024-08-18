import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import Header from "../components/header";
import styles from "../styles/contact-us.module.css";
import Footer from "../components/footer";
// import AppointmentForm from '../components/AppointmentForm'
import { Form, Button, Row, Spinner } from "react-bootstrap";
import { useRouter } from "next/router";
import React, { useEffect, useState, useCallback } from "react";

export default function ContactUs({postData}) {
  const data = postData;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [captcha_cp, setCaptcha] = useState("");
  const [Uniqid, SetUid] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
  };

  const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {

  function checkdata(event) {
    var validformname = false;
    var validformemail = false;
    var validformmobile = false;
    var capminlenth = 6;
    var phoneminLength = 9;
    var phonemaxLength = 12;
    var emailExp =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email.length == 0) {
      document.getElementById("showemailmsg").innerHTML =
        "This field is required.";
      // document.getElementById("email").classList.add("errorsection");
      $("#email").addClass("errorsection");
      $("#email").removeClass("validsection");
      event.preventDefault();
      event.stopPropagation();
    } else if (!emailExp.test(email)) {
      document.getElementById("showemailmsg").innerHTML =
        "Please Enter Valid Email ID.";
      // document.getElementById("email").classList.add("errorsection");
      $("#email").addClass("errorsection");
      $("#email").removeClass("validsection");
      event.preventDefault();
      event.stopPropagation();
      // event.preventDefault();
      // return false;
    } else {
      document.getElementById("showemailmsg").innerHTML = "";
      $("#email").addClass("validsection");
      $("email").removeClass("errorsection");
      setValidated(true);
      var validformemail = true;
    }

    // Name validation
    var name_regex = /^[a-zA-Z ]+$/;
    if (name.length == 0) {
      document.getElementById("name").classList.add("errorsection");
      document.getElementById("shownamemsg").innerHTML =
        "This field is required.";
      $("#name").addClass("errorsection");
      $("#name").removeClass("validsection");
      event.preventDefault();
      event.stopPropagation();
    } else if (!name_regex.test(name)) {
      document.getElementById("shownamemsg").innerHTML =
        "The Input Value is not Correct";
      $("#name").addClass("errorsection");
      $("#name").removeClass("validsection");
    } else {
      document.getElementById("shownamemsg").innerHTML = " ";
      $("#name").addClass("validsection");
      $("#name").removeClass("errorsection");
      setValidated(true);
      var validformname = true;
    }

    var mobile_regex = /^[0-9]*$/;
    if (mobile == "") {
      document.getElementById("validphone").innerHTML =
        "This field is required.";
      document.getElementById("phone").classList.add("errorsection");
      document.getElementById("phone").classList.remove("validsection");
      event.preventDefault();
      event.stopPropagation();
    } else if (mobile.length < phoneminLength) {
      document.getElementById("validphone").innerHTML =
        "Please Enter More Than 9 Number.";
      document.getElementById("phone").classList.add("errorsection");
      document.getElementById("phone").classList.remove("validsection");
      event.preventDefault();
    } else if (mobile.length > phonemaxLength) {
      document.getElementById("validphone").innerHTML =
        "Please Enter Less Than 12 Number.";
      document.getElementById("phone").classList.add("errorsection");
      document.getElementById("phone").classList.remove("validsection");
      event.preventDefault();
    } else if (!mobile_regex.test(mobile)) {
      document.getElementById("validphone").innerHTML =
        "Please Enter Number Value.";
      document.getElementById("phone").classList.add("errorsection");
      document.getElementById("phone").classList.remove("validsection");
      event.preventDefault();
    } else {
      document.getElementById("validphone").innerHTML = "";
      document.getElementById("phone").classList.add("validsection");
      document.getElementById("phone").classList.remove("errorsection");
      setValidated(true);
      var validformmobile = true;
    }
    if (captcha_cp == "") {
      document.getElementById("validcaptcha").innerHTML =
        "This field is required.";
      $("#captcha").addClass("errorsection");
      $("#captcha").removeClass("validsection");
      event.preventDefault();
      event.stopPropagation();
    } else {
      document.getElementById("validcaptcha").innerHTML = " ";
      $("#captcha").addClass("validsection");
      $("#captcha").removeClass("errorsection");
      setValidated(true);
      var validformCaptcha = true;
    }

    if (
      validformname === true &&
      validformemail === true &&
      validformmobile === true &&
      validformCaptcha === true
    ) {
      savecontact();
    }
  }
  const [captchaCode, captcha] = useState(null);

  const fetchMAPI = useCallback(async () => {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/googlecaptcha`
    );
    response = await response.json();
    captcha(response);
    SetUid(response.uniqid);
  }, []);
  useEffect(() => {
    fetchMAPI();
  }, [fetchMAPI]);

  function savecontact() {
    console.log(message);
    let data = { name, email, mobile, message, captcha_cp, Uniqid };
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contacts`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      if (result.status == 401) {
        document.getElementById("validcaptcha").innerHTML = "Captcha Not Valid";
      } else if (result.status == 200) {
        window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`;
      }
    });
  }

  // const [data, dataSet] = useState(null);
  // const router = useRouter();
  // const url = router.asPath;
  // const type = router.pathname;
  // const fetchMyAPI = useCallback(async () => {
  //   let response = await fetch(
  //     `${process.env.NEXT_PUBLIC_API_BASE_URL}/seo-tag` + url
  //   );
  //   response = await response.json();
  //   dataSet(response);
  // }, []);

  // useEffect(() => {
  //   fetchMyAPI();
  // }, [fetchMyAPI]);

  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);

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

      <section className="breadcrum-section">
        <div className="container-fluid text-center">
          <div className="row p-3 content">
            <div className="col-lg-12">
              <h2>Contact Us</h2>
            </div>
            <div className="col-lg-12">
              <p>Home | Contact us</p>
            </div>
          </div>
        </div>
      </section>

      <section className="AboutBanner hide-banner p-0 ServicePageBanner SmalBannerSize">
        <Image
          src={process.env.NEXT_PUBLIC_BASE_URL + "/images/1i.jpg"}
          className="img-fluid"
          alt="Contact Us"
          layout="responsive"
          width={1366}
          height={447}
        />
        <div className="AboutBannerCont hide-class">
          <div className="AbtBnrCaption">
            <div className="AboutBannerHD hide-class">Contact Us</div>
            <div className="breadcrmb hide-class">
              <Link href="/">
                <a>Home</a>
              </Link>
              / Contact Us
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ContactUsPage}>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
              {/* <h3>Get In Touch</h3> */}
              <Form
                noValidate
                method="post"
                validated={validated}
                onSubmit={handleSubmit}
              >
                <Form.Group
                  className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  controlId="name"
                >
                  <Form.Control
                    required
                    type="text"
                    placeholder="Full name*"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="infld"
                  />
                  <div id="shownamemsg"></div>
                </Form.Group>
                <Row>
                  <Form.Group
                    className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                    controlId="email"
                  >
                    <Form.Control
                      required
                      type="text"
                      placeholder="Email*"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="infld"
                    />
                    <div id="showemailmsg"></div>
                  </Form.Group>

                  <Form.Group
                    className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                    controlId="phone"
                  >
                    <Form.Control
                      required
                      type="text"
                      placeholder="Phone*"
                      onChange={(e) => {
                        setMobile(e.target.value);
                      }}
                      className="infld"
                    />
                    <div id="validphone"></div>
                  </Form.Group>
                </Row>

                <Form.Group
                  className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  controlId="frmValMessage"
                >
                  <Form.Control
                    as="textarea"
                    rows="4"
                    placeholder="Message"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    className="infld"
                  />
                </Form.Group>
                <Row>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="align-items-start row pb-2">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 d-flex form-input">
                        <Image
                          src={`data:image/jpeg;base64,${captchaCode?.captchashows}`}
                          className="img-fluid"
                          alt=""
                          width={350}
                          height={88}
                        />

                        <Button
                          className="my-form-btn home-form-btn"
                          type="button"
                          onClick={(e) => {
                            fetchMAPI();
                          }}
                          variant="BtnSubmit"
                        >
                          <i className="fa fa-refresh" aria-hidden="true"></i>
                        </Button>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-input">
                        <Form.Group className="" controlId="captcha">
                          <Form.Control
                            required
                            type="text"
                            placeholder="Captcha*"
                            onChange={(e) => {
                              setCaptcha(e.target.value);
                            }}
                            maxlength="6"
                            name="captcha_value"
                            className="infld my-0"
                          />
                          <input
                            type="hidden"
                            id="uid"
                            value={captchaCode?.uniqid}
                          ></input>
                          <div id="validcaptcha"></div>
                        </Form.Group>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-grid">
                    <Button
                      type="submit"
                      onClick={(e) => {
                        checkdata(e);
                      }}
                      variant="BtnSubmit"
                    >
                      SUBMIT
                    </Button>
                  </div>
                </Row>
              </Form>
            </div>

            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
              <div className={styles.contactUsInfobx}>
                <h3>Contact Info</h3>
                <div className={styles.contactUsInfoRow}>
                  <div
                    className={`${styles.contactUsInfoClmn} ${styles.cntctIconBx}`}
                  >
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div className={styles.contactUsInfoClmn}>
                    <span className="cntAdrsHd">
                      Aestiva Plastic Surgery Centre
                    </span>
                    <p>
                      E 33, Paryavaran Complex,
                      <br />
                      IGNOU Road, Neb Sarai,
                      <br />
                      New Delhi 110030
                    </p>
                  </div>
                </div>
                <div className={styles.contactUsInfoRow}>
                  <div
                    className={`${styles.contactUsInfoClmn} ${styles.cntctIconBx}`}
                  >
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <div className={styles.contactUsInfoClmn}>
                    <span className="cntAdrsHd">Phone</span>
                    <p>
                      <a href="Tel:+917982544598">+91 7982544598</a><br/>
                      <a href="Tel:+918447652698">+91 8447652698</a>
                    </p>
                  </div>
                </div>

                <div className={styles.contactUsInfoRow}>
                  <div
                    className={`${styles.contactUsInfoClmn} ${styles.cntctIconBx}`}
                  >
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  </div>
                  <div className={styles.contactUsInfoClmn}>
                    <span className="cntAdrsHd">Email</span>
                    <p>
                      <a href="Mailto:info@aestiva.in">info@aestiva.in</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56090.038444591606!2d77.14651047331448!3d28.5208558601221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1e67637b1e5%3A0x9ffc8333b06cc738!2sAestiva+Plastic+Surgery+-+Hymenoplasty%2C+Revirgination%2C+Vaginoplasty+Vaginal+Tightening+%26+Restoration!5e0!3m2!1sen!2sin!4v1538653301536"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

ContactUs.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Header />
      {page}
      <Footer />
    </Layout>
  );
};

export async function getServerSideProps(){
  const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/seo-tag/`+'contact',
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
