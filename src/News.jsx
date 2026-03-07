import React,{useState,useEffect} from 'react'
import "./News.css"
import {useParams,useNavigate} from 'react-router-dom'
function News() {
const params=useParams()
const [data,setData]=useState({name:"Downloading..."})
const navigate=useNavigate()
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users/"+params.id)
  .then(x=>x.json())
  .then(r=>{
    setData(r)
    console.log(r)
  })
},[])

  return (
    <>
      <section style={{ marginTop: "50px" }}>
        <div>
          <div className="container">
            <div className="head-second">
              <button className="red-block" onClick={()=> navigate(-1)}>Back</button>
              <p className="writing-box">
              {data?.name}
              </p>
              <p className="writing-box2">
                {data?.phone}
              </p>
              <ul className="ul-box">
                <li>
                  By <span className="different-writing">{data.company?.name} </span>
                </li>
                <li>August 14, 2016</li>
              </ul>
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="icon-box"
                  style={{ backgroundColor: "#3059B0" }}
                >
                  <div className="d-flex justify-content-center align-items-center inline-small">
                    <i className="fa-brands fa-facebook-f"></i>
                    Facebook
                  </div>
                </button>

                <button
                  className="icon-box"
                  style={{ backgroundColor: "#56ACF0" }}
                >
                  <div className="d-flex justify-content-center align-items-center inline-small">
                    <i className="fa-brands fa-x-twitter"></i>
                    Twitter
                  </div>
                </button>

                <button className="icon-box2">+</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "50px", marginBottom: "50px" }}>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 main-part">
                <div
                  className="main-photo-div"
                  style={{ width: "100%" }}
                >
                  <img
                    src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/08/shutterstock_357792800-768x512.jpg"
                    className="main-photo"
                    alt=""
                  />
                </div>

                <div>
                  <p
                    className="paragraph"
                    style={{ marginTop: "30px" }}
                  >
                    More off this less hello salamander lied porpoise much over
                    tightly circa horse taped so innocuously outside crud
                    mightily rigorous negative one inside gorilla and drew
                    humbly shot tortoise inside opaquely.
                  </p>
                  <p className="paragraph">
                    Coquettish darn pernicious foresaw therefore much amongst
                    lingeringly shed much due antagonistically alongside so
                    then more and about turgid wrote so stunningly this that
                    much slew.
                  </p>
                </div>

                <div className="hand-writing-part">
                  <p className="hand-writing">
                    Craft beer elit seitan exercitation, photo booth et 8-bit
                    kale chips proident chillwave deep v laborum. Aliquip veniam
                    delectus.
                  </p>
                  <p className="hand-writing">{data.company?.name}</p>
                </div>

                <div>
                  <p className="paragraph">
                    That far ground rat pure from newt far panther crane
                    lorikeet overlay alas cobra across much gosh less goldfinch
                    ruthlessly alas examined and that more and the ouch jeez.
                  </p>

                  <h2
                    className="paragraph2"
                    style={{ marginBottom: "26px" }}
                  >
                    Inside The Town Hall
                  </h2>

                  <p className="paragraph">
                    Forbade panther desolately iguanodon alas in goodness
                    goodness re-laid when wishful but yet and trim hey went the
                    tamarin some during obsessively into far notwithstanding.
                  </p>

                  <div className="row">
                    <div className="col-md-5 text-center">
                      <img
                        src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/05/shutterstock_405585007-2048x1363.jpg"
                        style={{ width: "100%" }}
                        alt=""
                      />
                      <p className="paragraph3">
                        Flying drone photography
                      </p>
                    </div>

                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                      <p className="paragraph">
                        More off this less hello salamander lied porpoise much
                        over tightly circa horse taped so innocuously outside
                        crud mightily rigorous negative one inside gorilla and
                        drew humbly shot tortoise inside opaquely.
                      </p>
                    </div>
                  </div>

                  <p className="paragraph">
                    Tonx cray commodo, exercitation you probably haven’t heard
                    of them beard cred.
                  </p>

                  <div className="row">
                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                      <p className="paragraph">
                        Compactly shortsighted gosh across mandrill adjusted
                        less more a immoral surprisingly ladybug far thanks physic pill much insincere festive some gosh less or and irrespective that forward sure jubilant reined more less firm sure.
                      </p>
                    </div>

                    <div className="col-md-5 text-center">
                      <img
                        src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/05/shutterstock_69579202-2048x1365.jpg"
                        style={{ width: "100%" }}
                        alt=""
                      />
                      <p className="paragraph3">My lovely workplace</p>
                    </div>
                  </div>
<p className="paragraph">One much huge mockingly caught fox eel some when the dazed outside as dear abominable ouch objectively mindfully indisputably darn and goodness less vulture a more astride on one ouch.</p>
<p className="paragraph">Like less whale into ripely echidna ape oh regarding toucan the some reset much pill one and less in fought beside bestial out reran wetted grimaced within woolly some salmon the a kangaroo led. Immoral surprisingly ladybug far thanks physic pill much insincere festive. Quizzically pinched excluding timorous poured slovene less rooster much.</p>
                  <h2
                    className="paragraph2"
                    style={{ marginBottom: "26px" }}
                  >
                    Dream of Success
                  </h2>

                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ width: "100%" }}
                  >
                    <img
                      src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/05/shutterstock_437021746-2048x1365.jpg"
                      style={{ width: "90%" }}
                      alt=""
                    />
                  </div>

                  <p className="paragraph3 text-center">
                    Build own laptop screen
                  </p>

                  <div className="division-part">
                    <div style={{display:"flex",gap:"5px"}}>
                    <button className="last-button">{data?.username}</button>
                    <button className="last-button">{data?.username}</button>
                    <button className="last-button">{data?.username}</button>
 </div>
  <div
                      className="d-flex rounded-icon-groups-bottom"
                      style={{ gap: "5px" }}
                    >
                      <div className="round-div1">
                        <i className="fa-solid fa-heart"></i>163
                      </div>
                      <div className="round-div">
                        <i className="fa-brands fa-facebook-f"></i>
                      </div>
                      <div className="round-div">
                        <i className="fa-brands fa-x-twitter"></i>
                      </div>
                      <div className="round-div">
                        <i className="fa-brands fa-pinterest-p"></i>
                      </div>
                      <div className="round-div">
                        <i className="fa-regular fa-envelope"></i>
                      </div>
                    </div>
 </div>
                   
                  </div>
                  <div className="latets-gray-part-in-the-bottom">
<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<img src="https://media.istockphoto.com/id/652924830/photo/portrait-of-beautiful-woman.jpg?s=612x612&w=0&k=20&c=-KYZEiqm7UwVUX_dT5eAhkr4xPW274zbyg3rWbUF-mA=" alt="" className="rounded-photo-latest-gray-part"/>
</div>
<div>
  <h3>{data.company?.name}</h3>
  <span className="paragraph-latest">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</span>
  <div className="latest-small-icon-group">
<i className="fa-brands fa-facebook-f"></i>
<i className="fa-brands fa-x-twitter"></i>
<i className="fa-brands fa-instagram"></i>
  </div>
</div>
                  </div>
                  <div>
                    <div>
                    <h4>Related Posts</h4>
                    <div className="progress-bar-container">
  <div className="progress-bar" style={{width: "20%"}}></div>
</div>
</div>
<div>
  <div>
    <div className="row">

<div className="col-md-4">

  <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginBottom:"100px"}} className="news-box-parts">
    <img src="https://t4.ftcdn.net/jpg/02/11/11/05/360_F_211110579_BEBolZ22ZTHCEhfnDTSPzWLPLc1iJXWK.jpg" style={{width:"100%",objectPosition:"center",height:"150px",marginTop:"50px",marginBottom:"20px"}} />  
    <h6>{data.company?.catchPhrase}</h6>
</div>
 
</div>
<div className="col-md-4">

  <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginBottom:"100px"}} className="news-box-parts">
    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/9c/a8/9e/want-to-spend-a-lovely.jpg?w=900&h=500&s=1" style={{width:"100%",objectPosition:"center",height:"150px",marginTop:"50px",marginBottom:"20px"}} />
    <h6>{data.company?.catchPhrase}</h6>
  </div>

</div>
<div className="col-md-4">

  <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginBottom:"100px"}} className="news-box-parts">
    <img src="https://www.pmcgroup.com.tr/ajan360-content/uploads/2022/04/apartman-kurallari-855x855.jpg" style={{width:"100%",objectPosition:"center",height:"150px",marginTop:"50px",marginBottom:"20px"}} />
    <h6>{data.company?.catchPhrase}</h6>

</div>

    </div>
    <div>
      <div>
                    <h4><span style={{color:"red",marginRight:"10px"}}>5</span>Comments</h4>
                    <div className="progress-bar-container">
  <div className="progress-bar" style={{width: "20%"}}></div>
</div>
</div>
<div>

  <div className="comment-section-parts">
    <div>
      <img src="https://cheerup2.theme-sphere.com/beauty/wp-content/uploads/sites/3/2016/05/Sam-Doe_avatar_1464381137.jpg" className="small-photo-of-comment-parts" />
    </div>
    <div className="writing-part-of-comments">
<div className="header-part-of-comments">
<ul className="the-main-ul-of-header-comments">
  <li><h3>Same Doe</h3></li>
  <li className="second-li-of-comments">9 years ago</li>
</ul>
<div className="the-right-of-header-of-comments">
  <i className="fa-solid fa-share icon-share-of-comments"></i>
  <span className="orange-part-of-comments">reply</span>
</div>
</div>
<span className="paragraph" style={{paddingLeft:"2rem"}}>That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.</span>
    </div>
  </div>
 <div className="underline-of-comments"></div>
  <div className="comment-section-parts" style={{paddingLeft:"50px"}}>
    <div>
      <img src="https://cheerup2.theme-sphere.com/beauty/wp-content/uploads/sites/3/2016/05/Sam-Doe_avatar_1464381137.jpg" className="small-photo-of-comment-parts" />
    </div>
    <div className="writing-part-of-comments">
<div className="header-part-of-comments">
<ul className="the-main-ul-of-header-comments">
  <li><h3>Same Doe</h3></li>
  <li className="second-li-of-comments">9 years ago</li>
</ul>
<div className="the-right-of-header-of-comments">
  <i className="fa-solid fa-share icon-share-of-comments"></i>
  <span className="orange-part-of-comments">reply</span>
</div>
</div>
<span className="paragraph" style={{paddingLeft:"2rem"}}>That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.</span>
    </div>
  </div>
   <div className="underline-of-comments"></div>
     <div className="comment-section-parts">
    <div>
      <img src="https://cheerup2.theme-sphere.com/beauty/wp-content/uploads/sites/3/2016/05/Sam-Doe_avatar_1464381137.jpg" className="small-photo-of-comment-parts" />
    </div>
    <div className="writing-part-of-comments">
<div className="header-part-of-comments">
<ul className="the-main-ul-of-header-comments">
  <li><h3>Same Doe</h3></li>
  <li className="second-li-of-comments">9 years ago</li>
</ul>
<div className="the-right-of-header-of-comments">
  <i className="fa-solid fa-share icon-share-of-comments"></i>
  <span className="orange-part-of-comments">reply</span>
</div>
</div>
<span className="paragraph" style={{paddingLeft:"2rem"}}>That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.</span>
    </div>
  </div>
 <div className="underline-of-comments"></div>
   <div className="comment-section-parts">
    <div>
      <img src="https://cheerup2.theme-sphere.com/beauty/wp-content/uploads/sites/3/2016/05/Sam-Doe_avatar_1464381137.jpg" className="small-photo-of-comment-parts" />
    </div>
    <div className="writing-part-of-comments">
<div className="header-part-of-comments">
<ul className="the-main-ul-of-header-comments">
  <li><h3>Same Doe</h3></li>
  <li className="second-li-of-comments">9 years ago</li>
</ul>
<div className="the-right-of-header-of-comments">
  <i className="fa-solid fa-share icon-share-of-comments"></i>
  <span className="orange-part-of-comments">reply</span>
</div>
</div>
<span className="paragraph" style={{paddingLeft:"2rem"}}>That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.</span>
    </div>
  </div>
 <div className="underline-of-comments"></div>
   <div className="comment-section-parts" style={{paddingLeft:"50px"}}>
    <div>
      <img src="https://cheerup2.theme-sphere.com/beauty/wp-content/uploads/sites/3/2016/05/Sam-Doe_avatar_1464381137.jpg" className="small-photo-of-comment-parts" />
    </div>
    <div className="writing-part-of-comments">
<div className="header-part-of-comments">
<ul className="the-main-ul-of-header-comments">
  <li><h3>Same Doe</h3></li>
  <li className="second-li-of-comments">9 years ago</li>
</ul>
<div className="the-right-of-header-of-comments">
  <i className="fa-solid fa-share icon-share-of-comments"></i>
  <span className="orange-part-of-comments">reply</span>
</div>
</div>
<span className="paragraph" style={{paddingLeft:"2rem"}}>That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.</span>
    </div>
  </div>
   <div className="underline-of-comments"></div>
</div>
</div>


<div>
  <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"32px"}}>
<h4>WRITE A COMMENT</h4>
<div className="underline"></div>
<div className="row div-of-own-opinions" style={{width:"100%", marginTop:"32px"}}>
  <div className="col-md-4">
<div className="d-flex justify-content-center align-items-center">
    <input type="text" placeholder="Name" className="write-own-opinions-parts"/>
 </div>
  </div>
   <div className="col-md-4">
    <div className="d-flex justify-content-center align-items-center">
    <input type="email" placeholder="Email" className="write-own-opinions-parts"/>
    </div>
   </div>
   
    <div className="col-md-4">
       <div className="d-flex justify-content-center align-items-center">
      <input type="text" placeholder="Website" className="write-own-opinions-parts"/>
   </div>
    </div>
</div>
<div style={{width:"100%",paddingLeft:"0.75rem",paddingRight:"0.75rem"}}>
<textarea className="textarea-of-your-opinion" placeholder="Enter your comment here.."></textarea>
</div>
<div style={{width:"100%"}}>
<div className="d-flex justify-content-start align-items-start flex-column" style={{width:"100%"}}>
  <div className="d-flex justify-content-start align-items-center" style={{width:"100%",paddingLeft:"0.75rem",paddingTop:"32px"}}>
    <div className="square-of-own-opinions"></div><span className="small-paragraph-of-own-opinions">Save my name, email, and website in this browser for the next time I comment.</span>
    </div>
        <button className="latest-button-of-own-opinions">post comment</button>
</div>
</div>
</div>

</div>

  </div>
</div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 side-part">
                <div className="head-group text-center">
                  <h5 style={{ fontWeight: 700 }}>LATEST</h5>
                  <div className="underline"></div>
                </div>

                <div style={{ marginTop: "50px" }}>
                  <div className="layerd-photo-div1"></div>
                  <h2>
                    3 Outfits That Will Amaze You on Coming Holiday
                  </h2>
                  <ul className="ul-box">
                    <li>
                      By{" "}
                      <span className="different-writing">Shane Doe </span>
                    </li>
                    <li>August 14, 2016</li>
                  </ul>
                </div>
                 <div style={{ marginTop: "50px" }}>
                  <div className="layerd-photo-div2"></div>
                  <h2>
                    3 Outfits That Will Amaze You on Coming Holiday
                  </h2>
                  <ul className="ul-box">
                    <li>
                      By{" "}
                      <span className="different-writing">Shane Doe </span>
                    </li>
                    <li>August 14, 2016</li>
                  </ul>
                </div>
                 <div style={{ marginTop: "50px" }}>
                  <div className="layerd-photo-div3"></div>
                  <h2>
                    3 Outfits That Will Amaze You on Coming Holiday
                  </h2>
                  <ul className="ul-box">
                    <li>
                      By{" "}
                      <span className="different-writing">Shane Doe </span>
                    </li>
                    <li>August 14, 2016</li>
                  </ul>
                </div>
                 <div style={{ marginTop: "50px" }}>
                  <div className="layerd-photo-div4"></div>
                  <h2>
                    3 Outfits That Will Amaze You on Coming Holiday
                  </h2>
                  <ul className="ul-box">
                    <li>
                      By{" "}
                      <span className="different-writing">Shane Doe </span>
                    </li>
                    <li>August 14, 2016</li>
                  </ul>
                </div>
          <div className="d-flex justify-content-center align-items-center flex-column" style={{position:"sticky",top:"0px"}}>
  <div className="gray-input-box  text-center d-flex flex-column">
    <h4 className="gray-input-big-writing">Your daily updates</h4>
    <p className="gray-input-writing text-center">Subscribe now. We’ll make sure you never miss a thing</p>
    <input type="text" placeholder="Your email adress.." className="gray-inline-input"></input>
    <button className="gray-input-button">subscribe</button>
  </div>
  <div className="logos-div">
<h4>Follow us</h4>
<div className="underline"></div>
<div className="logos-group">
  <li className="group-type-li">
    <ul className="group-type-ul">
      <button className="first-logo-button">
      <i className="fa-brands fa-facebook-f inline-small-logo"></i>
      <span className="inline-small-writing1">1.1k</span>
      <span className="inline-small-writing2">Fans</span>
    </button>
  </ul>
    <ul className="group-type-ul">
      <button className="second-logo-button">
      <i className="fa-brands fa-pinterest-p inline-small-logo"></i>
      <span className="inline-small-writing1">1.1k</span>
      <span className="inline-small-writing2">Fans</span>
    </button>
  </ul>
  </li>
  <li className="group-type-li">
    <ul className="group-type-ul">
      <button className="third-logo-button">
      <i className="fa-brands fa-x-twitter inline-small-logo"></i>
      <span className="inline-small-writing1">1.1k</span>
      <span className="inline-small-writing2">Fans</span>
      </button>
    </ul>
    <ul className="group-type-ul">
      <button className="fourth-logo-button">
      <i className="fa-brands fa-instagram inline-small-logo"></i>
      <span className="inline-small-writing1">1.1k</span>
      <span className="inline-small-writing2">Fans</span>
    </button>
  </ul>
  </li>
</div>
  </div>
  <img src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2017/03/tema.jpg" className="latest-main-photo-company" />
  <div className="finish-part-of-the-side d-flex justify-content-center align-items-center flex-column">
<h4>Categories</h4>
<div className="underline"></div>
<div className="latest-li-group-of-the-site">
  <ul className="list-group list-group-flush custom-circle-list">
  <li className="list-group-item">{data?.address?.street} <span className="latest-small-writing">8()</span></li>
  <li className="list-group-item">{data?.address?.street} <span className="latest-small-writing">10()</span></li>
  <li className="list-group-item">{data?.address?.street} <span className="latest-small-writing">8()</span></li>
  <li className="list-group-item">{data?.address?.street} <span className="latest-small-writing">11()</span></li>
  <li className="list-group-item">{data?.address?.street} <span className="latest-small-writing">8()</span></li>
</ul>
</div>
  </div>
 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="latest-part-of-the-site">
<div className="container">

<div className="row"> 
<div className="col-md-4 col-12">
  <div className="latest-black-part-of-the-end">
    <img src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2017/03/default-footer-2.png" style={{width:"205px",marginBottom:"18px"}} />
    <span className="writing-of-the-latest-part-black">{data.company?.catchPhrase}</span>
  <div className="the-latest-logo-divs-of-black">
    <div className="the-latest-logo-div-of-black">
      <i className="fa-brands fa-facebook-f"></i>
    </div>
    <div className="the-latest-logo-div-of-black">
      <i className="fa-brands fa-x-twitter"></i>
    </div>
    <div className="the-latest-logo-div-of-black">
      <i className="fa-brands fa-instagram"></i>
    </div>
    <div className="the-latest-logo-div-of-black">
      <i className="fa-brands fa-pinterest-p"></i>
    </div>
    <div className="the-latest-logo-div-of-black">
      <i className="fa-brands fa-tiktok"></i>
    </div>
  </div>
  <div>
  <span className="the-smallest-writing-of-black-part1">{data?.email}<span className="the-smallest-writing-of-black-part2"> {data?.website}</span></span>
  </div>
  </div>
</div>
<div className="col-md-4 col-12">
  <div className="latest-black-part-of-the-end1">
    <h5 style={{color:"white",fontWeight:"700"}}>{data.company?.bs}</h5>
    <div className="the-latest-part-of-the-black-end">
      <div className="img-part-of-the-end-black">
        <img src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/08/shutterstock_357792800-1536x1024.jpg" style={{width:"110px",height:"73px"}} />
      </div>
      <div>
        <ul className="the-latest-ul-of-black-part">
          <li className="the-white-writing-in-end">{data.company?.catchPhrase}</li>
          <li className="the-second-li-of-the-black">{data?.phone}</li>
        </ul>
      </div>
    </div>
    <div className="the-latest-part-of-the-black-end">
      <div className="img-part-of-the-end-black">
        <img src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/08/shutterstock_357792800-1536x1024.jpg" style={{width:"110px",height:"73px"}} />
      </div>
      <div>
        <ul className="the-latest-ul-of-black-part">
          <li className="the-white-writing-in-end">{data.company?.catchPhrase}</li>
          <li className="the-second-li-of-the-black">{data?.phone}</li>
        </ul>
      </div>
    </div>
       <div className="the-latest-part-of-the-black-end">
      <div className="img-part-of-the-end-black">
        <img src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/08/shutterstock_357792800-1536x1024.jpg" style={{width:"110px",height:"73px"}} />
      </div>
      <div>
        <ul className="the-latest-ul-of-black-part">
          <li className="the-white-writing-in-end">{data.company?.catchPhrase}</li>
          <li className="the-second-li-of-the-black">{data?.phone}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div className="col-md-4 col-12">
  <div className="latest-black-part-of-the-end1">
    <h5 style={{color:"white",fontWeight:"700"}}>{data.company?.bs}</h5>
    <div className="the-latest-part-of-the-black-end">
      <div className="img-part-of-the-end-black">
        <img src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/08/shutterstock_357792800-1536x1024.jpg" style={{width:"110px",height:"73px"}} />
      </div>
      <div>
        <ul className="the-latest-ul-of-black-part">
          <li className="the-white-writing-in-end">{data.company?.catchPhrase}</li>
          <li className="the-second-li-of-the-black">{data?.phone}</li>
        </ul>
      </div>
    </div>
    <div className="the-latest-part-of-the-black-end">
      <div className="img-part-of-the-end-black">
        <img src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/08/shutterstock_357792800-1536x1024.jpg" style={{width:"110px",height:"73px"}} />
      </div>
      <div>
        <ul className="the-latest-ul-of-black-part">
          <li className="the-white-writing-in-end">{data.company?.catchPhrase}</li>
          <li className="the-second-li-of-the-black">{data?.phone}</li>
        </ul>
      </div>
    </div>
       <div className="the-latest-part-of-the-black-end">
      <div className="img-part-of-the-end-black">
        <img src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/08/shutterstock_357792800-1536x1024.jpg" style={{width:"110px",height:"73px"}} />
      </div>
      <div>
        <ul className="the-latest-ul-of-black-part">
          <li className="the-white-writing-in-end">{data.company?.catchPhrase}</li>
          <li className="the-second-li-of-the-black">{data?.phone}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>

</div>
</section>

      <div className="fixed-group">
        <p
          className="text-center fixed-group-p"
          style={{
            fontSize: "13px",
            fontWeight: 500,
            marginBottom: "30px",
          }}
        >
          SHARE
        </p>

        <div className="d-flex flex-column justify-content-center align-items-center">
          <div
            className="little-round-icon-box shadow-sm"
            style={{ color: "#125CB6" }}
          >
            <i className="fa-brands fa-facebook-f"></i>
          </div>

          <div
            className="little-round-icon-box shadow-sm"
            style={{ color: "#0B9FC5" }}
          >
            <i className="fa-brands fa-x-twitter"></i>
          </div>

          <div
            className="little-round-icon-box shadow-sm"
            style={{ color: "#CA2128" }}
          >
            <i className="fa-brands fa-pinterest-p"></i>
          </div>

          <div
            className="little-round-icon-box shadow-sm"
            style={{ color: "#000000" }}
          >
            <i className="fa-solid fa-envelope"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default News

