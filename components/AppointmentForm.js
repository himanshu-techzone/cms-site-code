// import '../../node_modules/ngx-bootstrap/datepicker/bs-datepicker.css'
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { Form, Button, Row, Spinner } from "react-bootstrap";
import {useRouter} from 'next/router';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function AppointmentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [captcha_cp, setCaptcha] = useState("");
  const [startDate, setStartDate] = useState("");
  const [Uniqid, SetUid] = useState("");
  const [referral_url, setReffer] = useState("");
  const source_type = 'Website';
  const router = useRouter();
  const request_url = router.asPath;
  const Setitem = useCallback(()=>{
    let response = localStorage.getItem('it')
    setReffer(response);
})
useEffect(() => {
    // Perform localStorage action
    Setitem()
  }, [Setitem]);
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0;
  };


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
    // var uid_get =  $("#uid").val();

    var validformname = false;
    var validformemail = false;
    var validformdate = false;
    var validformmobile = false;
    var validformCaptcha = false;
    var capminlenth = 6;
    var phoneminLength = 10;
    var phonemaxLength = 12;
    var captchacheck = $("#capctacheck").val();
    // alert(captchacheck);
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

    // var date_regex = /^\d{2}\-\d{2}\-\d{4}$/;
    // var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (startDate == "") {
      document.getElementById("validdate").innerHTML =
        "This field is required.";
      $(".date").addClass("errorsection");
      $(".date").removeClass("validsection");
      event.preventDefault();
      event.stopPropagation();
    } else {
      document.getElementById("validdate").innerHTML = " ";
      $(".date").addClass("validsection");
      // $(".date").removeClass("errorsection");
      setValidated(true);
      var validformdate = true;
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

    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    // setValidated(true);

    if (
      validformname === true &&
      validformemail === true &&
      validformdate === true &&
      validformmobile === true &&
      validformCaptcha === true
    ) {
      saveappointment();
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

  function saveappointment() {
    // console.log(message)
    let data = { name, email, mobile, startDate, message, captcha_cp, Uniqid, request_url, referral_url, source_type };
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/appointment`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      // response =  result.json()
      // console.log(result,'hh');
      if (result.status == 401) {
        document.getElementById("validcaptcha").innerHTML = "Captcha Not Valid";
      } else if (result.status == 200) {
        window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`;
      }
    });
  }
  return (
    <>
     
      <section className="sectionSpace pd-top sctnAppointmentBox">
        <div className="container">
          <div className="SctnHdng text-center">Book An Appointment</div>
          <p className="text-center">
            <strong>Clinic Timings</strong>
            <br />
            Monday to Saturday : 10:00am - 7:00pm | Sunday : Closed
          </p>
          <input
            type="hidden"
            value={captchaCode?.captchashow}
            id="capctacheck"
          />
          <Form
            noValidate
            method="post"
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Row>
              <Form.Group
                className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                controlId="name"
              >
                <Form.Control
                  required
                  type="text"
                  name="name"
                  placeholder="Name*"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="infld"
                />
                <div id="shownamemsg"></div>
              </Form.Group>

              <Form.Group
                className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                controlId="email"
              >
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Email*"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="infld"
                />
                <div id="showemailmsg"></div>
              </Form.Group>
            </Row>
            <Row>
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
                  name="phone"
                  className="infld"
                />
                <div id="validphone"></div>
              </Form.Group>

              <Form.Group
                className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                controlId="date"
              >
                {/* <DatePicker selected={startDate} onChange={(date,Date) => setStartDate(date)} /> */}

                <DatePicker
                  selected={startDate}
                  onChange={(date, Date) => setStartDate(date)}
                  minDate={new Date()}
                  name="date"
                  filterDate={isWeekday}
                  autoComplete="Off"
                  placeholderText="Date*"
                  daysOfWeekDisabled='0'
                  dateFormat="dd-MM-yyyy"
                  howDisabledMonthNavigation
                  className="infld date"
                />
                <div id="validdate"></div>
              </Form.Group>
            </Row>
            <Form.Group
              className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 cstmCal"
              controlId="frmValMessage"
            >
              <Form.Control
                as="textarea"
                rows="4"
                placeholder="Message"
                name="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="infld"
              />
            </Form.Group>
            <Row>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="align-items-start row pb-2">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 d-flex form-input">
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
                        fetchMyAPI();
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
                        maxLength="6"
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
                  className="home-form-btn"
                  type="button"
                  onClick={(e) => {
                    checkdata(e);
                  }}
                  variant="BtnSubmit"
                >
                  SUBMIT
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

export default AppointmentForm;
