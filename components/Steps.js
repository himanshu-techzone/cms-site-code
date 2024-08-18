import Image from 'next/image'
// import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { Form, Button, Row, Spinner } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {useRouter} from 'next/router';
// function firststep(type){
// }
export function Steps() {

  const [ser, dataSet] = useState(null)
  const handleClick = (e, path, dataurl, check) => {
    e.preventDefault()
    var getwidth = $( document ).width();
  if(getwidth <= 820){
    $('.hide-mb-button').hide();
    if (check == 'first') {
      // alert(check);
      // $(".helpStepsItem").removeClass("active");
      $("#data").val(path);
      var catName = $("#data").val();
      $("#stepOne").removeClass("active show");
      $("#stepTwo").addClass("active show");
      if (path == catName) {
        // var name = 'face';
        $(".first" + catName).addClass("active");
      }
      
    } else if (check == 'second') {
      // alert(check);
      // $(".helpStepsItemsec").removeClass("active");
      $("#seconddata").val(path);
      var catSecName = $("#seconddata").val();
      if (path == catSecName) {
        // var name = 'face';
        $(".first" + catSecName).addClass("active");
      }
      $("#treatment_step").val(dataurl);
      setTreatment(dataurl);
      $("#stepTwo").removeClass("active show");
      $("#stepOne").removeClass("active show");
      $("#stepThree").addClass("active show");
    }
    // $("#stepTwo").addClass("active show");
    dataSet(path);
    // $("#stepOne").removeClass("active show");
  }else{
    $('.hide-mb-button').show();
    if (check == 'first') {
      // alert(check);
      $(".helpStepsItem").removeClass("active");
      $("#data").val(path);
      var catName = $("#data").val();
      if (path == catName) {
        // var name = 'face';
        $(".first" + catName).addClass("active");
      }
    } else if (check == 'second') {
      // alert(check);
      $(".helpStepsItemsec").removeClass("active");
      $("#seconddata").val(path);
      var catSecName = $("#seconddata").val();
      if (path == catSecName) {
        // var name = 'face';
        $(".first" + catSecName).addClass("active");
      }
      $("#treatment_step").val(dataurl);
      setTreatment(dataurl);
    }
  }
    // $(".helpStepsItem").removeClass("active");

    // alert(name);
  }
  const handleClicksd = (e, path) => {

    if (path == 'second') {
      var getdata = $("#data").val();
      if (!$(".helpStepsItem").hasClass('active')) {
        // alert('hi')
        $("#showmessage").html('<span>Please Select Service</span>');
        $("#showmessagesec").html(' ');
        e.preventDefault()
        return false;
      }
      $("#stepOne").removeClass("active show");
      $("#stepTwo").addClass("active show");
    } else if (path == 'third') {
      var getdata = $("#seconddata").val();
      if (!$(".helpStepsItemsec").hasClass('active')) {
        // alert('hi')
        $("#showmessagesec").html('<span>Please Select Service</span>');
        $("#showmessage").html(' ');
        e.preventDefault()
        return false;
      }
      $("#stepTwo").removeClass("active show");
      $("#stepOne").removeClass("active show");
      $("#stepThree").addClass("active show");
    } else if (path == 'first') {
      $(".helpStepsItem").removeClass("active");
      $("#stepThree").removeClass("active show");
      $("#stepTwo").removeClass("active show");
      $("#stepOne").addClass("active show");
    }
    dataSet(getdata)

  }


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [treatment, setTreatment] = useState("");
  const [Uniqid, SetUid] = useState("");
  const [captcha_cp, setCaptcha] = useState("");
  const [startDate, setStartDate] = useState("");
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0;
  };
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

  const handleSubmitStep  = e => {

    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
  };

  const [validated, setValidated] = useState(false);

  function checkdata_step(event) {
    var validformname_step = false;
    var validformemail_step = false;
    var validformdate_step = false;
    var validformmobile_step = false;
    var validformCaptcha_step = false;
    var capminlenth = 6;
    var phoneminLength = 10;
    var phonemaxLength = 12;
    var emailExp = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email.length == 0) {
      document.getElementById("showemailmsg_step").innerHTML = 'This field is required.';
      // document.getElementById("email").classList.add("errorsection");
      $("#email_step").addClass("errorsection");
      $("#email_step").removeClass("validsection");
      event.preventDefault();
      event.stopPropagation();
    } else if (!emailExp.test(email)) {
      document.getElementById("showemailmsg_step").innerHTML = 'Please Enter Valid Email ID.';
      // document.getElementById("email").classList.add("errorsection");
      $("#email_step").addClass("errorsection");
      $("#email_step").removeClass("validsection");
      event.preventDefault();
      event.stopPropagation();
      // event.preventDefault();
      // return false;
    } else {
      document.getElementById("showemailmsg_step").innerHTML = '';
      $("#email_step").addClass("validsection");
      $("#email_step").removeClass("errorsection");
      setValidated(true);
      var validformemail_step = true;
    }

    // Name validation
    var name_regex = /^[a-zA-Z ]+$/
    if (name.length == 0) {
      document.getElementById('name_step').classList.add('errorsection');
      document.getElementById("shownamemsg_step").innerHTML = 'This field is required.';
      $("#name_step").addClass("errorsection");
      $("#name_step").removeClass("validsection");
      event.preventDefault();
      event.stopPropagation();
    } else if (!name_regex.test(name)) {
      document.getElementById("shownamemsg_step").innerHTML = 'The Input Value is not Correct';
      $("#name_step").addClass("errorsection");
      $("#name_step").removeClass("validsection");
    } else {
      document.getElementById("shownamemsg_step").innerHTML = ' ';
      $("#name_step").addClass("validsection");
      $("#name_step").removeClass("errorsection");
      setValidated(true);
      var validformname_step = true;
    }

    var mobile_regex = /^[0-9]*$/
    if (mobile == '') {
      document.getElementById("validphone_step").innerHTML = 'This field is required.';
      document.getElementById("phone_step").classList.add("errorsection");
      document.getElementById("phone_step").classList.remove("validsection");
      event.preventDefault();
      event.stopPropagation();
    } else if (mobile.length < phoneminLength) {
      document.getElementById("validphone_step").innerHTML = 'Please Enter More Than 9 Number.';
      document.getElementById("phone_step").classList.add("errorsection");
      document.getElementById("phone_step").classList.remove("validsection");
      event.preventDefault();
    } else if (mobile.length > phonemaxLength) {
      document.getElementById("validphone_step").innerHTML = 'Please Enter Less Than 12 Number.';
      document.getElementById("phone_step").classList.add("errorsection");
      document.getElementById("phone_step").classList.remove("validsection");
      event.preventDefault();
    } else if (!mobile_regex.test(mobile)) {
      document.getElementById("validphone_step").innerHTML = 'Please Enter Number Value.';
      document.getElementById("phone_step").classList.add("errorsection");
      document.getElementById("phone_step").classList.remove("validsection");
      event.preventDefault();
    }
    else {
      document.getElementById("validphone_step").innerHTML = '';
      document.getElementById("phone_step").classList.add("validsection");
      document.getElementById("phone_step").classList.remove("errorsection");
      setValidated(true);
      var validformmobile_step = true;
    }


    // var date_regex = /^\d{2}\-\d{2}\-\d{4}$/;
    // var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (startDate == '') {
      document.getElementById("validdate_step").innerHTML = 'This field is required.';
      $("#date_step").addClass("errorsection");
      $("#date_step").removeClass("validsection");
      event.preventDefault();
      event.stopPropagation();
      // }else if(!(date_regex.test(startDate))) {
      // document.getElementById("validdate_step").innerHTML = 'Please Select Valid Date.';
      //     $("#date").addClass("errorsection");
      //     $("#date").removeClass("validsection");
      // event.preventDefault();
    } else {
      document.getElementById("validdate_step").innerHTML = ' ';
      $("#date_step").addClass("validsection");
      $("#date_step").removeClass("errorsection");
      setValidated(true);
      var validformdate_step = true;
    }

    if (captcha_cp == '') {
      document.getElementById("validcaptcha_step").innerHTML = 'This field is required.';
      $("#captcha_step").addClass("errorsection");
      $("#captcha_step").removeClass("validsection");
      event.preventDefault();
      event.stopPropagation();
    }else {
      document.getElementById("validcaptcha_step").innerHTML = ' ';
      $("#captcha_step").addClass("validsection");
      $("#captcha_step").removeClass("errorsection");
      setValidated(true);
      var validformCaptcha_step = true;
    }
    if (validformname_step === true && validformemail_step === true && validformdate_step === true && validformmobile_step === true && validformCaptcha_step == true) {
      saveappointment();
    }


  }

  const [captchaCode, captcha] = useState(null);

  const fetchMAPI = useCallback(async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/googlecaptcha`)
    response = await response.json()
    captcha(response)
    SetUid(response.uniqid);
  }, [])
  useEffect(() => {
    fetchMAPI();
  }, [fetchMAPI])

  function saveappointment() {
    
    let data = { name, email, mobile, startDate, message, treatment, captcha_cp, Uniqid, request_url, referral_url, source_type}
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/appointment`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)

    }).then((result) => {
      if(result.status == 401){
        document.getElementById("validcaptcha_step").innerHTML = 'Captcha Not Valid';
      }else if(result.status == 200){
        window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`;
      }
    })
  }


  // Start Date
  // const [startDate, setStartDate] = useState(new Date());
  // const isWeekday = (date) => {
  //     const day = getDay(date);
  //     return day !== 0 && day !== 6; 
  //   };
  // End Date
  // var ser = '';

  const [serName, Service] = useState(null)
  const fetchMyAPI = useCallback(async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/service-category-icon`)
    response = await response.json()
    Service(response)
  }, [])
  useEffect(() => {
    fetchMyAPI()
  }, [fetchMyAPI])

  const cat = serName?.data;
  // console.log(cat);
  return (
    <>
      <input type="hidden" id="data"></input>
      <input type="hidden" id="seconddata"></input>
      <section className='sectionSpace helpSteps'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="SctnHdng text-center">First step to a new look</div>

              <div className="tab-content helpStepsTab">
                <div className="tab-pane fade show active" id="stepOne" role="tabpanel" aria-labelledby="stepOne-tab">
                  <ul className="nav stepTabs TabsBrdr justify-content-center" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link btn-primary active disabled" id="stepOne-tab" data-bs-toggle="tab" data-bs-target="#stepOne" type="button" role="tab" aria-controls="stepOne" aria-selected="false"> </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link btn-primary disabled" id="stepTwo-tab" data-bs-toggle="tab" data-bs-target="#stepTwo" type="button" role="tab" aria-controls="stepTwo" aria-selected="false"> </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link btn-primary disabled" id="stepThree-tab" data-bs-toggle="tab" data-bs-target="#stepThree" type="button" role="tab" aria-controls="stepThree" aria-selected="false"> </button>
                    </li>
                  </ul>
                  <p className='text-center'>Step 1 of 3</p>
                  <div className="row text-center row-cols-2 row-cols-sm-5 row-cols-md-5 row-cols-lg-5 row-cols-xl-5">
                    {cat?.map((post) => {
                      return (
                        <div className={`col helpStepsItem first${post.url}`} onClick={(e) => handleClick(e, `${post.url}`, `${post.service_name}`, `first`)} key={post.id}>
                          <div className="circleBox">
                            <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/backend/service/image/' + post?.service_icon} className="img-fluid" alt="" width={101} height={124} /></div>
                          <p>{post.service_name}</p>
                        </div>
                      )
                    })}

                  </div>
                  <ul className="nav stepTabs justify-content-center" role="tablist">
                    <li className="nav-item" role="presentation">
                      <div id="showmessage"></div>
                      <button className="BtnRdMore hide-mb-button" id="stepTwo-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls="stepTwo" onClick={(e) => handleClicksd(e, "second")} aria-selected="false">NEXT</button>
                    </li>
                  </ul>
                </div>

                <div className="tab-pane fade" id="stepTwo" role="tabpanel" aria-labelledby="stepTwo-tab">
                  <ul className="nav stepTabs TabsBrdr justify-content-center" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link btn-primary active disabled" id="stepOne-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls="stepOne" aria-selected="false"> </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link btn-primary disabled" id="stepTwo-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls="stepTwo" aria-selected="false"> </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link btn-primary disabled" id="stepThree-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls="stepThree" aria-selected="false"> </button>
                    </li>
                  </ul>
                  <p className='text-center'>Step 2 of 3</p>


                  {/* Face Tabs Start */}

                  {cat?.map((post) => {
                    if (post.url === ser) {
                      return (
                        <div className="row text-center row-cols-2 row-cols-sm-4 row-cols-md-4 row-cols-lg-5 row-cols-xl-5" key={post?.ser_id}>
                          {post?.sub.map((serv) => {
                            return (
                              <div className={`col helpStepsItemsec first${serv.url}`} onClick={(e) => handleClick(e, `${serv.url}`, `${serv.service_name}`, `second`)} key={serv?.ser_id}>
                                <div className="circleBox"><Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/backend/service/image/' + serv?.service_icon} className="img-fluid" alt="brow lift" width={101} height={124} /></div>
                                <p>{serv.service_name}</p>
                              </div>
                            )
                          })}
                        </div>

                      )
                    }
                  })}
                  {/* Face Tabs End */}

                  <ul className="nav stepTabs justify-content-center" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="BtnRdMore hide-mb-button" id="stepOne-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls="stepOne" onClick={(e) => handleClicksd(e, "first")} aria-selected="false">BACK</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="BtnRdMore hide-mb-button" id="stepThree-tab" data-bs-toggle="tab" type="button" role="tab" onClick={(e) => handleClicksd(e, "third")} aria-controls="stepThree" aria-selected="false">NEXT</button>
                      </li>
                  </ul>
                      <div id="showmessagesec"></div> 
                </div>

                <div className="tab-pane fade" id="stepThree" role="tabpanel" aria-labelledby="stepThree-tab">
                  <ul className="nav stepTabs TabsBrdr justify-content-center" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link btn-primary active disabled" id="stepOne-tab" data-bs-toggle="tab" data-bs-target="#stepOne" type="button" role="tab" aria-controls="stepOne" aria-selected="false"> </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link btn-primary disabled" id="stepTwo-tab" data-bs-toggle="tab" data-bs-target="#stepTwo" type="button" role="tab" aria-controls="stepTwo" aria-selected="false"> </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link btn-primary disabled" id="stepThree-tab" data-bs-toggle="tab" data-bs-target="#stepThree" type="button" role="tab" aria-controls="stepThree" aria-selected="false"> </button>
                    </li>
                  </ul>
                  <p className='text-center'>Step 3 of 3</p>
                  <form id="formSubmit" className="formBox" noValidate method="post" validated={validated} onSubmit={handleSubmitStep}>
                    <Row>
                      <Form.Group className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12' controlId="name_step">
                        <Form.Control
                          required
                          type="text"
                          name="name"
                          placeholder="Name*"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          className='infld'
                        />
                        <div id="shownamemsg_step"></div>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' controlId="email_step">
                        <Form.Control
                          required
                          type="email"
                          name="email"
                          placeholder="Email*"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          className='infld'
                        />
                        <div id="showemailmsg_step"></div>
                      </Form.Group>

                      <Form.Group className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' controlId="phone_step">
                        <Form.Control
                          type="text"
                          placeholder="Phone*"
                          onChange={(e) => {
                            setMobile(e.target.value);
                          }}
                          name="phone"
                          className='infld'
                        />
                        <div id="validphone_step"></div>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' controlId="date_step">
                        {/* <DatePicker selected={startDate} onChange={(date,Date) => setStartDate(date)} /> */}

                        <DatePicker
                          selected={startDate}
                          onChange={(date, Date) => setStartDate(date)}
                          minDate={new Date()}
                          name="date"
                          autoComplete='Off'
                          filterDate={isWeekday}
                          placeholderText='Date*'
                          dateFormat="dd-MM-yyyy"
                          howDisabledMonthNavigation
                          className="infld date"
                        />
                        <div id="validdate_step"></div>
                      </Form.Group>

                      <Form.Group className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' controlId="treatment_step">
                        <Form.Control
                          type="text"
                          placeholder="Treatment*"
                          readOnly={true}
                          name="treatment"
                          className='infld'
                        />
                        <div id="validTreatment_step"></div>
                      </Form.Group>

                    </Row>
                    <Form.Group className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 cstmCal' controlId="frmValMessage">
                      <Form.Control as="textarea" rows="4"
                        placeholder="Message" name="message"
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                        className='infld'
                      />
                    </Form.Group>
                    <Row>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className='pb-2'>
                        <div className='align-items-start row pb-2'>
                  <div className='col-lg-4 col-md-6 col-sm-6 col-xs-6 d-flex form-input'>
                    <Image src={`data:image/jpeg;base64,${captchaCode?.captchashows}`} className="img-fluid" alt="" width={350} height={88} />

                    <Button className='my-form-btn home-form-btn' type="button" onClick={(e) => {
                      fetchMAPI();
                    }} variant="BtnSubmit"><i className="fa fa-refresh" aria-hidden="true"></i></Button>
                  </div>

           
                  
                  <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 form-input'>
                    <Form.Group className='' controlId="captcha_step">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Captcha*"
                        onChange={(e) => {
                          setCaptcha(e.target.value);
                        }}
                        maxLength="6"
                        name="captcha_value"
                        className='infld my-0'
                      />
                      <input type="hidden" id="uid" value={captchaCode?.uniqid}></input>
                      <div id="validcaptcha_step"></div>
                    </Form.Group>
                  </div>

                  

                </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-grid">
                        <Button type="button" onClick={(e) => {
                          checkdata_step(e);
                        }} variant="BtnSubmit">SUBMIT</Button>
                        {/* <div className='text-center'><Spinner animation="border" size="sm" /></div> */}

                      </div>
                    </Row>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Steps