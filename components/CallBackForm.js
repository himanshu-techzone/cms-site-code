// import '../../node_modules/ngx-bootstrap/datepicker/bs-datepicker.css'
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { Form, Button, Row, Spinner } from "react-bootstrap";
import {useRouter} from 'next/router';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function CallBackForm() {
  const [name, setcbName] = useState("");
  const [mobile, setcbMobile] = useState("");
  const [captcha_cp, setCaptcha] = useState("");
  const [Uniqid, SetUid] = useState("");
  const [referral_url, setReffer] = useState("");
  const source_type = 'Website';
  const router = useRouter();
  const Setitem = useCallback(()=>{
    let response = localStorage.getItem('it')
    setReffer(response);
})
useEffect(() => {
    // Perform localStorage action
    Setitem()
  }, [Setitem]);
  const request_url = router.asPath;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      mobile,
    };
  };

  const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {

  function checkdataCb(event) {
    var validformname_cb = false;
    var validformmobile_cb = false;
    var validformCaptcha_cb = false;
    var capminlenth = 6;
    var phoneminLength = 10;
    var phonemaxLength = 12;
    var emailExp =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // Name validation
    var name_regex = /^[a-zA-Z ]+$/;
    if (name.length == 0) {
      document.getElementById("name_cb").classList.add("errorsection");
      document.getElementById("shownamemsg_cb").innerHTML =
        "This field is required.";
      $("#name_cb").addClass("errorsection");
      $("#name_cb").removeClass("validsection");
      event.preventDefault();
      event.stopPropagation();
    } else if (!name_regex.test(name)) {
      document.getElementById("shownamemsg_cb").innerHTML =
        "The Input Value is not Correct";
      $("#name_cb").addClass("errorsection");
      $("#name_cb").removeClass("validsection");
    } else {
      document.getElementById("shownamemsg_cb").innerHTML = " ";
      $("#name_cb").addClass("validsection");
      $("#name_cb").removeClass("errorsection");
      setValidated(true);
      var validformname_cb = true;
    }

    var mobile_regex = /^[0-9]*$/;
    if (mobile == "") {
      document.getElementById("validphone_cb").innerHTML =
        "This field is required.";
      document.getElementById("phone_cb").classList.add("errorsection");
      document.getElementById("phone_cb").classList.remove("validsection");
      event.preventDefault();
      event.stopPropagation();
    } else if (mobile.length < phoneminLength) {
      document.getElementById("validphone_cb").innerHTML =
        "Please Enter More Than 9 Number.";
      document.getElementById("phone_cb").classList.add("errorsection");
      document.getElementById("phone_cb").classList.remove("validsection");
      event.preventDefault();
    } else if (mobile.length > phonemaxLength) {
      document.getElementById("validphone_cb").innerHTML =
        "Please Enter Less Than 12 Number.";
      document.getElementById("phone_cb").classList.add("errorsection");
      document.getElementById("phone_cb").classList.remove("validsection");
      event.preventDefault();
    } else if (!mobile_regex.test(mobile)) {
      document.getElementById("validphone_cb").innerHTML =
        "Please Enter Number Value.";
      document.getElementById("phone_cb").classList.add("errorsection");
      document.getElementById("phone_cb").classList.remove("validsection");
      event.preventDefault();
    } else {
      document.getElementById("validphone_cb").innerHTML = "";
      document.getElementById("phone_cb").classList.add("validsection");
      document.getElementById("phone_cb").classList.remove("errorsection");
      setValidated(true);
      var validformmobile_cb = true;
    }

    if (captcha_cp == "") {
      document.getElementById("validcaptcha").innerHTML =
        "This field is required.";
        document.getElementById("validcaptcha1").innerHTML =
        "";
      $("#captcha").addClass("errorsection");
      $("#captcha").removeClass("validsection");
      event.preventDefault();
      event.stopPropagation();
    } else {
      document.getElementById("validcaptcha").innerHTML = " ";
      $("#captcha").addClass("validsection");
      $("#captcha").removeClass("errorsection");
      setValidated(true);
      var validformCaptcha_cb = true;
    }

    if (
      validformname_cb === true &&
      validformmobile_cb === true &&
      validformCaptcha_cb === true
    ) {
      savecallback();
    }
  }

  const [captchaCode, captcha] = useState(null);

  const fetchMyAPI = useCallback(async () => {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/googlecaptcha`
    );
    response = await response.json();
    captcha(response);
    SetUid(response.uniqid);
  }, []);
  useEffect(() => {
    fetchMyAPI();
  }, [fetchMyAPI]);

  // function validatefunction() {
  //   document.getElementById("name").style.backgroundColor="red";
  // }
  function savecallback() {
    let data = { name, mobile, captcha_cp, Uniqid, request_url, referral_url, source_type };
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/callback`, {
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
  return (
    <>
      <section className="sectionSpace z-class p-3 sctnAppointmentBox">
        <div className="container">
          <Form
            noValidate
            method="post"
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Row className="justify-content-start align-items-start">
              <Form.Group
                className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 input1"
                controlId="name_cb"
              >
                <Form.Control
                  required
                  type="text"
                  name="name"
                  placeholder="Name*"
                  onChange={(e) => {
                    setcbName(e.target.value);
                  }}
                  className="infld mt-0"
                />
                <div id="shownamemsg_cb"></div>
              </Form.Group>

              <Form.Group
                className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 input1"
                controlId="phone_cb"
              >
                <Form.Control
                  type="text"
                  placeholder="Phone*"
                  onChange={(e) => {
                    setcbMobile(e.target.value);
                  }}
                  name="phone"
                  className="infld mt-0"
                />
                <div id="validphone_cb"></div>
              </Form.Group>

              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="align-items-start row pb-2">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 d-flex cap-p form-input">
                    <Image
                      src={`data:image/jpeg;base64,${captchaCode?.captchashows}`}
                      className="img-fluid "
                      alt=""
                      width={350}
                      height={88}
                    />

                    <Button
                      className="my-form-btn home-form-btn"
                      type="button"
                      onClick={(e) => {
                        fetchMyAPI();
                      }}
                      variant="BtnSubmit"
                    >
                      <i className="fa fa-refresh" aria-hidden="true"></i>
                    </Button>
                    <div id="validcaptcha1"></div>
                  </div>
                  

                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 cap-p form-input n-pad">
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

              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-grid">
                <Button
                  className="btn-class"
                  type="button"
                  onClick={(e) => {
                    checkdataCb(e);
                  }}
                  variant="BtnSubmit"
                >
                  Request a Callback
                </Button>
                {/* <div className='text-center'><Spinner animation="border" size="sm" /></div> */}
              </div>
            </Row>
          </Form>
        </div>
      </section>
    </>
  );
}

export default CallBackForm;
