"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[934],{3325:function(t,s,l){var n=l(5893),a=l(7294),d=l(5675),o=(l(4298),l(5447)),i=l(4051),c=l(3680),r=l(9198),m=l.n(r);l(8698);s.Z=function(){var t=function(t){0==h.length?(document.getElementById("showemailmsg").innerHTML="This field is required.",$("#email").addClass("errorsection"),document.getElementById("email").classList.remove("validsection"),t.preventDefault(),t.stopPropagation()):/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(h)?(document.getElementById("showemailmsg").innerHTML=" ",N(!0)):(document.getElementById("showemailmsg").innerHTML="Please Enter Valid Email ID.",$("#email").addClass("errorsection"),document.getElementById("email").classList.remove("validsection"),t.preventDefault(),t.stopPropagation()),0==l.length?(document.getElementById("name").classList.add("errorsection"),document.getElementById("shownamemsg").innerHTML="This field is required.",$("#name").addClass("errorsection"),document.getElementById("name").classList.remove("validsection"),t.preventDefault(),t.stopPropagation()):(document.getElementById("shownamemsg").innerHTML=" ",document.getElementById("name").classNameList.add("validsection"),document.getElementById("name").classNameList.remove("errorsection"),N(!0)),""==phone?(document.getElementById("validphone").innerHTML="This field is required.",document.getElementById("phone").classList.add("errorsection"),document.getElementById("phone").classList.remove("validsection"),e.preventDefault()):phone.length<9?(document.getElementById("validphone").innerHTML="Please Enter Valid Phone Number.",document.getElementById("phone").classList.add("errorsection"),document.getElementById("phone").classList.remove("validsection"),e.preventDefault()):(document.getElementById("validphone").innerHTML=" ",document.getElementById("phone").classList.add("validsection"),document.getElementById("phone").classList.remove("errorsection"));""==date?(document.getElementById("validdate").innerHTML="This field is required.",document.getElementById("date").classList.add("errorsection"),document.getElementById("date").classList.remove("validsection"),e.preventDefault()):/^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(date)?(document.getElementById("validdate").innerHTML=" ",document.getElementById("date").classList.add("validsection"),document.getElementById("date").classList.remove("errorsection")):(document.getElementById("validdate").innerHTML="Please Select Valid Date.",document.getElementById("date").classList.add("errorsection"),document.getElementById("date").classList.remove("validsection"),e.preventDefault())},s=(0,a.useState)(""),l=s[0],r=s[1],u=(0,a.useState)(""),h=u[0],g=u[1],p=(0,a.useState)(""),v=(p[0],p[1],(0,a.useState)("")),x=v[0],j=(v[1],(0,a.useState)(new Date)),y=j[0],f=j[1],I=(0,a.useState)(!1),E=I[0],N=I[1];return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("section",{className:"sectionSpace sctnAppointmentBox",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"SctnHdng text-center",children:"Book An Appointment"}),(0,n.jsxs)("p",{className:"text-center",children:[(0,n.jsx)("strong",{children:"Clinic Timings"}),(0,n.jsx)("br",{}),"Monday to Saturday : 10:00am - 7:00pm  |  Sunday : Closed"]}),(0,n.jsxs)(o.Z,{noValidate:!0,method:"post",validated:E,onSubmit:function(e){e.preventDefault();var t={name:l,email:h,message:x};console.log(t)},children:[(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(o.Z.Group,{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12",controlId:"name",children:[(0,n.jsx)(o.Z.Control,{required:!0,type:"text",name:"name",placeholder:"Name*",onChange:function(e){r(e.target.value)},className:"infld"}),(0,n.jsx)("div",{id:"shownamemsg"})]}),(0,n.jsxs)(o.Z.Group,{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12",controlId:"email",children:[(0,n.jsx)(o.Z.Control,{required:!0,type:"email",name:"email",placeholder:"Email*",onChange:function(e){g(e.target.value)},className:"infld"}),(0,n.jsx)("div",{id:"showemailmsg"})]})]}),(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(o.Z.Group,{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12",controlId:"phone",children:[(0,n.jsx)(o.Z.Control,{required:!0,type:"text",placeholder:"Phone*",name:"phone",className:"infld",maxLength:12}),(0,n.jsx)("div",{id:"validphone"})]}),(0,n.jsxs)(o.Z.Group,{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12",controlId:"date",children:[(0,n.jsx)(m(),{selected:y,onChange:function(e,t){return f(e)},minDate:new Date,name:"date",dateFormat:"d MMMM, yyyy",howDisabledMonthNavigation:!0}),(0,n.jsx)("div",{id:"validdate"})]})]}),(0,n.jsx)(o.Z.Group,{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 cstmCal",controlId:"frmValMessage",children:(0,n.jsx)(o.Z.Control,{as:"textarea",rows:"4",placeholder:"Message",name:"message",className:"infld"})}),(0,n.jsxs)(i.Z,{children:[(0,n.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12",children:(0,n.jsx)("div",{className:"pb-2",children:(0,n.jsx)(d.default,{src:"http://digilantern.co/aestiva-new/images/capcha.png",className:"img-fluid",alt:"",width:350,height:88})})}),(0,n.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-grid",children:(0,n.jsx)(c.Z,{type:"button",onClick:function(e){t(e)},variant:"BtnSubmit",children:"SUBMIT"})})]})]})]})})})}},449:function(e,t,s){var l=s(5893),n=s(1664),a=s(5675);t.Z=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{className:"sectionSpace SctnRealResults",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12",children:[(0,l.jsx)("div",{className:"SctnHdng",children:"Real Results"}),(0,l.jsx)("p",{children:"Result may vary person to person."}),(0,l.jsx)("p",{className:"pb-3",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the to standard dummy text ever since the 1500s."}),(0,l.jsx)("div",{children:(0,l.jsx)(n.default,{href:"/real-results",children:(0,l.jsx)("a",{className:"BtnRdMore",children:"View All"})})})," "]}),(0,l.jsx)("div",{className:"col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 py-2",children:(0,l.jsx)(n.default,{href:"/real-results",children:(0,l.jsx)("a",{children:(0,l.jsx)(a.default,{src:"http://digilantern.co/aestiva-new/images/result-1.jpg",alt:"",className:"img-fluid",layout:"responsive",width:413,height:310})})})}),(0,l.jsx)("div",{className:"col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 py-2",children:(0,l.jsx)(n.default,{href:"/real-results",children:(0,l.jsx)("a",{children:(0,l.jsx)(a.default,{src:"http://digilantern.co/aestiva-new/images/result-2.jpg",alt:"",className:"img-fluid",layout:"responsive",width:413,height:310})})})})]})})})})}}}]);