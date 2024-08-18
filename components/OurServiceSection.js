import Link from 'next/link'
// import Script from 'next/script'


export function OurServiceSection() {


const handleClick = (e, path) => {
e.preventDefault()
$(".tab-pane").removeClass("show active");
$(".tabLeftLink").removeClass("active");
if (path === "Rhinoplasty") {
  $("#Tb-one").addClass("show active");
  $("#one-tab").addClass("active");
}else if (path === "Breas-tSurgery") {
  $("#Tb-two").addClass("show active");
  $("#two-tab").addClass("active");
}else if (path === "TummyTuck") {
  $("#Tb-three").addClass("show active");
  $("#three-tab").addClass("active");
}else if (path === "Liposuction") {
  $("#Tb-four").addClass("show active");
  $("#four-tab").addClass("active");
}else if (path === "Blepharoplasty") {
  $("#Tb-five").addClass("show active");
  $("#five-tab").addClass("active");
}else if (path === "AsianEyeFoldSurgery") {
  $("#Tb-six").addClass("show active");
  $("#six-tab").addClass("active");
}else if (path === "BrazilianButtLift") {
  $("#Tb-seven").addClass("show active");
  $("#seven-tab").addClass("active");
}else if (path === "Ear-Reshaping") {
  $("#Tb-eight").addClass("show active");
  $("#eight-tab").addClass("active");
}
}

return (
<>

  <section className="sectionSpace OurServiceSctn">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xxl-2  col-xl-2 col-lg-12 col-md-12 col-sm-12 SrvcTabLftBx">

          <div className="SctnHdng">Our Services</div>

          <div className="nav flex-column nav-pills" id="tab" role="tablist" aria-orientation="vertical">

<a className="tabLeftLink active" id="six-tab" data-bs-toggle="pill" data-bs-target="#Tb-six" type="button" role="tab" aria-controls="Tb-six" aria-selected="false" onClick={(e) => handleClick(e, "AsianEyeFoldSurgery")}>Asian Eye Fold Surgery</a>
{/* <a className="tabLeftLink" id="five-tab" data-bs-toggle="pill" data-bs-target="#Tb-five" type="button" role="tab" aria-controls="Tb-five" aria-selected="false" onClick={(e) => handleClick(e, "Blepharoplasty")}>Blepharoplasty</a> */}
<a className="tabLeftLink" id="one-tab" data-bs-toggle="pill" data-bs-target="#Tb-one" type="button" role="tab" aria-controls="Tb-one" aria-selected="true" onClick={(e) => handleClick(e, "Rhinoplasty")}>Rhinoplasty</a>
<a className="tabLeftLink" id="eight-tab" data-bs-toggle="pill" data-bs-target="#Tb-eight" type="button" role="tab" aria-controls="Tb-eight" aria-selected="false" onClick={(e) => handleClick(e, "Ear-Reshaping")}>Ear Reshaping / Earlobe Repair</a>
<a className="tabLeftLink" id="two-tab" data-bs-toggle="pill" data-bs-target="#Tb-two" type="button" role="tab" aria-controls="Tb-two" aria-selected="false" onClick={(e) => handleClick(e, "Breas-tSurgery")}>Breas-t Surgery</a>
<a className="tabLeftLink" id="four-tab" data-bs-toggle="pill" data-bs-target="#Tb-four" type="button" role="tab" aria-controls="Tb-four" aria-selected="false" onClick={(e) => handleClick(e, "Liposuction")}>Liposuction</a>
<a className="tabLeftLink" id="three-tab" data-bs-toggle="pill" data-bs-target="#Tb-three" type="button" role="tab" aria-controls="Tb-three" aria-selected="false" onClick={(e) => handleClick(e, "TummyTuck")}>Tummy Tuck</a>
<a className="tabLeftLink" id="seven-tab" data-bs-toggle="pill" data-bs-target="#Tb-seven" type="button" role="tab" aria-controls="Tb-seven" aria-selected="false" onClick={(e) => handleClick(e, "BrazilianButtLift")}>Brazilian Butt Lift</a>

          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-none d-xl-block">
          <div className="nav flex-column facelftdot" id="tab" role="tablist" aria-orientation="vertical">
<a id="Rhinoplasty" data-toggle="tab" title="Rhinoplasty" className="dRhnplst" href="#" onClick={(e) => handleClick(e, "Rhinoplasty")}></a>
<a id="Breas-tSurgery" data-toggle="tab" title="Breas-t Surgery" className="dBrstSrgr" href="#" onClick={(e) => handleClick(e, "Breas-tSurgery")}></a>
<a id="TummyTuck" data-toggle="tab" title="Tummy Tuck" className="dTmmTuck" href="#" onClick={(e) => handleClick(e, "TummyTuck")}></a>
<a id="Liposuction" data-toggle="tab" title="Liposuction" className="dAbdmnplst" href="#" onClick={(e) => handleClick(e, "Liposuction")}></a>
{/* <a id="Blepharoplasty" data-toggle="tab" title="Blepharoplasty" className="dBlphrplst" href="#" onClick={(e) => handleClick(e, "Blepharoplasty")}></a> */}
<a id="AsianEyeFoldSurgery" data-toggle="tab" title="Asian Eye Fold Surgery" className="dAsnEyeFld active" href="#" onClick={(e) => handleClick(e, "AsianEyeFoldSurgery")}></a>
<a id="BrazilianButtLift" data-toggle="tab" title="Brazilian Butt Lift" className="dBrzln" href="#" onClick={(e) => handleClick(e, "BrazilianButtLift")}></a>
<a id="Ear-Reshaping" data-toggle="tab" title="Ear Reshaping / Earlobe Repair" className="dNnSrgcl" href="#" onClick={(e) => handleClick(e, "Ear-Reshaping")}></a>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12 SrvcTabContBx">
          <div className="tab-content" id="tabContent">
            <div className="tab-pane fade show active" id="Tb-six" role="tabpanel" aria-labelledby="four-tab">
            <div className="TabHdng">Asian Eye Fold Surgery</div>
            <div className="brdr"></div>
                <p>People of Asian families and of Western families have different defining features, such as the occurrence of an upper eyelids crease. There are about 50% Asians without an upper eyelid crease. Asian eyelid surgery is mostly required by Asians and Asian Americans, which helps them to create a more natural-looking crease above the eyelashes. The surgery helps one to look more awake as the eyes look bigger and wide open.</p>
                <div><Link href="/face/asian-double-eyelid-surgery"><a className="btnWhite">READ MORE</a></Link></div>
            </div>
            {/* <div className="tab-pane fade" id="Tb-five" role="tabpanel" aria-labelledby="four-tab">
            <div className="TabHdng">Blepharoplasty</div>
            <div className="brdr"></div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</p>
            <div><Link href="#"><a className="btnWhite">READ MORE</a></Link></div>
            </div> */}
            <div className="tab-pane fade" id="Tb-one" role="tabpanel" aria-labelledby="one-tab">
            <div className="TabHdng">Rhinoplasty</div>
            <div className="brdr"></div>
                <p>Nose reshaping surgery or rhinoplasty encompasses a variety of surgeries designed to correct deformities and intensify nasal proportions.The nose occupies a central position in the face and thereby lends a great deal to overall facial beauty and a pleasing look. A straight and symmetrical nose adds more attractiveness to one’s personality, while a crooked and deformed nose detracts from it.</p>
            <div><Link href="/face/nose-reshaping-surgery"><a className="btnWhite">READ MORE</a></Link></div>
            </div>
            <div className="tab-pane fade" id="Tb-eight" role="tabpanel" aria-labelledby="four-tab">
            <div className="TabHdng">Ear Reshaping / Earlobe Repair</div>
            <div className="brdr"></div>
                <p>Ear surgery is the most commonly performed cosmetic surgery which is used to alter the shape and size of the ears or bring them closer to the side of the head. This treatment improves the position, shape, and proportion of the ear. This surgery is safe and provides the best results if performed by an expert surgeon.</p>
                <div><Link href="/face/ear-reshaping-earlobe-repair"><a className="btnWhite">READ MORE</a></Link></div>
            </div>
            <div className="tab-pane fade" id="Tb-two" role="tabpanel" aria-labelledby="two-tab">
            <div className="TabHdng">Breas-t Surgery</div>
            <div className="brdr"></div>
                <p>Breas-t reduction surgery aims at removal of excess breas-t tissue, skin and fat to restore the ideal body proportions of a woman. Excessively large breas-ts can be a source of embarrassment and discomfiture. In addition to being aesthetically unappealing, they can also cause physical distress like chronic neck and shoulder pain.</p>
                <div><Link href="/breas-t/female-breas-t-reduction-surgery"><a className="btnWhite">READ MORE</a></Link></div>
            </div>
            <div className="tab-pane fade" id="Tb-four" role="tabpanel" aria-labelledby="four-tab">
            <div className="TabHdng">Liposuction</div>
            <div className="brdr"></div>
                <p>This method removes fat pockets that one is not able to remove after performing vigorous exercise or dieting. So, liposuction helps to achieve desired body shape by removing fat deposits that are present between the muscle and skin. This body contouring procedure permanently removes fatty tissues and the results are everlasting if the patient maintains his/her weight.</p>
                <div><Link href="/body/liposuction-surgery"><a className="btnWhite">READ MORE</a></Link></div>
            </div>
            <div className="tab-pane fade" id="Tb-three" role="tabpanel" aria-labelledby="three-tab">
            <div className="TabHdng">Tummy Tuck</div>
            <div className="brdr"></div>
                <p>Loose, unsightly bulges in the waist and tummy area are a common problem in women, especially after childbirth. Many men also experience sagging skin, or some may have exercise-resistant fat deposits around the stomach or abdominal area. This condition occurs due to loss of skin elasticity, weakening of the abdominal muscles caused by certain factors like aging, sudden weight loss, and bariatric surgery and pregnancy.</p>
                <div><Link href="/body/abdominoplasty-tummy-tuck-surgery"><a className="btnWhite">READ MORE</a></Link></div>
            </div>
            <div className="tab-pane fade" id="Tb-seven" role="tabpanel" aria-labelledby="four-tab">
            <div className="TabHdng">Brazilian Butt Lift</div>
            <div className="brdr"></div>
                <p>In modern times the importance of the perfect shape and appearance of the buttocks has dramatically increased. Factors like aging, pregnancy, weight gain and loss, genetics, and poor lifestyle can sometimes affect the shape and structure of the buttocks and make them look unappealing. Buttocks augmentation is the most popular cosmetic surgery performed to enhance the shape and structure of the sagging, small, or deflated buttocks. Buttocks augmentation surgery is done using fat grafting (Brazilian Butt lift) and sometimes using silicone implants to achieve a highly desirable and fuller rounder buttocks profile.</p>
                <div><Link href="/body/brazilian-butt-lift"><a className="btnWhite">READ MORE</a></Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
)
}

export default OurServiceSection