import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./News.css";

function News() {
  const { id } = useParams();
  const [data, setData] = useState({ name: "Downloading..." });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [id]);

  const SocialButton = ({ color, icon, label, href = "#" }) => (
    <a href={href} target="_blank" rel="noreferrer">
      <button className="icon-box" style={{ backgroundColor: color }}>
        <div className="d-flex justify-content-center align-items-center">
          <i className={`fa-brands ${icon}`}></i>
          {label}
        </div>
      </button>
    </a>
  );

  const CommentItem = ({ indent = false }) => (
    <>
      <div className="comment" style={indent ? { paddingLeft: "50px" } : {}}>
        <div>
          <img
            src="https://cheerup2.theme-sphere.com/beauty/wp-content/uploads/sites/3/2016/05/Sam-Doe_avatar_1464381137.jpg"
            className="comment-photo"
            alt=""
          />
        </div>
        <div className="comment-body">
          <div className="comment-header">
            <ul className="comment-meta">
              <li><h3>Same Doe</h3></li>
              <li className="comment-time">9 years ago</li>
            </ul>
            <div>
              <i className="fa-solid fa-share comment-share-icon"></i>
              <span className="comment-reply">reply</span>
            </div>
          </div>
          <span className="paragraph" style={{ paddingLeft: "2rem" }}>
            That far ground rat pure from newt far panther crane lorikeet overlay
            alas cobra across much gosh less goldfinch ruthlessly alas examined
            and that more and the ouch jeez.
          </span>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );

  const FooterNewsItem = () => (
    <Link to={`/news/${id}`} className="footer-news-link">
      <div className="footer-news-item">
        <div className="footer-news-img">
          <img
            src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/08/shutterstock_357792800-1536x1024.jpg"
            style={{ width: "110px", height: "73px" }}
            alt=""
          />
        </div>
        <ul className="footer-news-ul">
          <li className="footer-news-title">{data.company?.catchPhrase}</li>
          <li className="footer-news-date">{data?.phone}</li>
        </ul>
      </div>
    </Link>
  );

  const relatedImages = [
    "https://t4.ftcdn.net/jpg/02/11/11/05/360_F_211110579_BEBolZ22ZTHCEhfnDTSPzWLPLc1iJXWK.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/9c/a8/9e/want-to-spend-a-lovely.jpg?w=900&h=500&s=1",
    "https://www.pmcgroup.com.tr/ajan360-content/uploads/2022/04/apartman-kurallari-855x855.jpg",
  ];

  const sidebarLatest = [
    { cls: "layerd-photo-div1", postId: 1 },
    { cls: "layerd-photo-div2", postId: 2 },
    { cls: "layerd-photo-div3", postId: 3 },
    { cls: "layerd-photo-div4", postId: 4 },
  ];

  const footerSocials = ["fa-facebook-f", "fa-x-twitter", "fa-instagram", "fa-pinterest-p", "fa-tiktok"];
  const fixedSocials = [
    { color: "#125CB6", icon: "fa-facebook-f" },
    { color: "#0B9FC5", icon: "fa-x-twitter" },
    { color: "#CA2128", icon: "fa-pinterest-p" },
    { color: "#000000", icon: "fa-envelope", solid: true },
  ];

  return (
    <>
   
      <section style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="head-second">
            <button className="red-block" onClick={() => navigate(-1)}>Back</button>
            <p className="writing-box">{data?.name}</p>
            <p className="writing-box2">{data?.phone}</p>
            <ul className="ul-box">
              <li>By <span className="different-writing">{data.company?.name}</span></li>
              <li>August 14, 2016</li>
            </ul>
            <div className="d-flex justify-content-center align-items-center">
              <SocialButton color="#3059B0" icon="fa-facebook-f" label="Facebook" href="https://facebook.com" />
              <SocialButton color="#56ACF0" icon="fa-x-twitter" label="Twitter" href="https://twitter.com" />
              <button className="icon-box2">+</button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "50px", marginBottom: "50px" }}>
        <div className="container">
          <div className="row">

            <div className="col-md-8 main-part">
              <div className="main-photo-div" style={{ width: "100%" }}>
                <img
                  src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/08/shutterstock_357792800-768x512.jpg"
                  className="main-photo"
                  alt=""
                />
              </div>

              <p className="paragraph" style={{ marginTop: "30px" }}>
                More off this less hello salamander lied porpoise much over tightly
                circa horse taped so innocuously outside crud mightily rigorous
                negative one inside gorilla and drew humbly shot tortoise inside opaquely.
              </p>
              <p className="paragraph">
                Coquettish darn pernicious foresaw therefore much amongst lingeringly
                shed much due antagonistically alongside so then more and about turgid
                wrote so stunningly this that much slew.
              </p>

              <div className="quote-block">
                <p className="hand-writing">
                  Craft beer elit seitan exercitation, photo booth et 8-bit kale chips
                  proident chillwave deep v laborum. Aliquip veniam delectus.
                </p>
                <p className="hand-writing">{data.company?.name}</p>
              </div>

              <p className="paragraph">
                That far ground rat pure from newt far panther crane lorikeet overlay
                alas cobra across much gosh less goldfinch ruthlessly alas examined
                and that more and the ouch jeez.
              </p>

              <h2 className="paragraph2" style={{ marginBottom: "26px" }}>Inside The Town Hall</h2>

              <p className="paragraph">
                Forbade panther desolately iguanodon alas in goodness goodness re-laid
                when wishful but yet and trim hey went the tamarin some during obsessively
                into far notwithstanding.
              </p>

              <div className="row">
                <div className="col-md-5 text-center">
                  <img src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/05/shutterstock_405585007-2048x1363.jpg" style={{ width: "100%" }} alt="" />
                  <p className="paragraph3">Flying drone photography</p>
                </div>
                <div className="col-md-5 d-flex justify-content-center align-items-center">
                  <p className="paragraph">
                    More off this less hello salamander lied porpoise much over tightly
                    circa horse taped so innocuously outside crud mightily rigorous
                    negative one inside gorilla and drew humbly shot tortoise inside opaquely.
                  </p>
                </div>
              </div>

              <p className="paragraph">Tonx cray commodo, exercitation you probably haven't heard of them beard cred.</p>

              <div className="row">
                <div className="col-md-5 d-flex justify-content-center align-items-center">
                  <p className="paragraph">
                    Compactly shortsighted gosh across mandrill adjusted less more a immoral
                    surprisingly ladybug far thanks physic pill much insincere festive some
                    gosh less or and irrespective that forward sure jubilant reined more less firm sure.
                  </p>
                </div>
                <div className="col-md-5 text-center">
                  <img src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/05/shutterstock_69579202-2048x1365.jpg" style={{ width: "100%" }} alt="" />
                  <p className="paragraph3">My lovely workplace</p>
                </div>
              </div>

              <p className="paragraph">One much huge mockingly caught fox eel some when the dazed outside as dear abominable ouch objectively mindfully indisputably darn and goodness less vulture a more astride on one ouch.</p>
              <p className="paragraph">Like less whale into ripely echidna ape oh regarding toucan the some reset much pill one and less in fought beside bestial out reran wetted grimaced within woolly some salmon the a kangaroo led.</p>

              <h2 className="paragraph2" style={{ marginBottom: "26px" }}>Dream of Success</h2>

              <div className="d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
                <img src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/05/shutterstock_437021746-2048x1365.jpg" style={{ width: "90%" }} alt="" />
              </div>
              <p className="paragraph3 text-center">Build own laptop screen</p>

              <div className="division-part">
                <div style={{ display: "flex", gap: "5px" }}>
                  {[data?.username, data?.username, data?.username].map((tag, i) => (
                    <Link to={`/tag/${tag}`} key={i}>
                      <button className="last-button">{tag}</button>
                    </Link>
                  ))}
                </div>
                <div className="d-flex rounded-icon-groups-bottom" style={{ gap: "5px" }}>
                  <div className="round-div1"><i className="fa-solid fa-heart"></i>163</div>
                  {["fa-facebook-f", "fa-x-twitter", "fa-pinterest-p"].map((icon) => (
                    <a href="#" key={icon} target="_blank" rel="noreferrer">
                      <div className="round-div"><i className={`fa-brands ${icon}`}></i></div>
                    </a>
                  ))}
                  <a href={`mailto:${data?.email}`}>
                    <div className="round-div"><i className="fa-regular fa-envelope"></i></div>
                  </a>
                </div>
              </div>

              <div className="author-box">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img
                    src="https://media.istockphoto.com/id/652924830/photo/portrait-of-beautiful-woman.jpg?s=612x612&w=0&k=20&c=-KYZEiqm7UwVUX_dT5eAhkr4xPW274zbyg3rWbUF-mA="
                    alt=""
                    className="author-photo"
                  />
                </div>
                <div>
                  <h3>{data.company?.name}</h3>
                  <span className="paragraph-latest">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                  </span>
                  <div className="author-socials">
                    {["fa-facebook-f", "fa-x-twitter", "fa-instagram"].map((icon) => (
                      <a href="#" key={icon} target="_blank" rel="noreferrer">
                        <i className={`fa-brands ${icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4>Related Posts</h4>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: "20%" }}></div>
                </div>
                <div className="row">
                  {relatedImages.map((src, i) => (
                    <div className="col-md-4" key={i}>
                      <Link to={`/news/${i + 1}`} className="related-post-link">
                        <div className="news-box-parts" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: "100px" }}>
                          <img src={src} style={{ width: "100%", objectPosition: "center", height: "150px", marginTop: "50px", marginBottom: "20px" }} alt="" />
                          <h6>{data.company?.catchPhrase}</h6>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4><span style={{ color: "red", marginRight: "10px" }}>5</span>Comments</h4>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: "20%" }}></div>
                </div>
                <CommentItem />
                <CommentItem indent />
                <CommentItem />
                <CommentItem />
                <CommentItem indent />
              </div>

              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "32px" }}>
                <h4>WRITE A COMMENT</h4>
                <div className="underline"></div>
                <div className="row div-of-own-opinions" style={{ width: "100%", marginTop: "32px" }}>
                  {["Name", "Email", "Website"].map((ph, i) => (
                    <div className="col-md-4" key={i}>
                      <div className="d-flex justify-content-center align-items-center">
                        <input type={ph === "Email" ? "email" : "text"} placeholder={ph} className="write-own-opinions-parts" />
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ width: "100%", paddingLeft: "0.75rem", paddingRight: "0.75rem" }}>
                  <textarea className="textarea-of-your-opinion" placeholder="Enter your comment here.."></textarea>
                </div>
                <div style={{ width: "100%" }}>
                  <div className="d-flex justify-content-start align-items-start flex-column" style={{ width: "100%" }}>
                    <div className="d-flex justify-content-start align-items-center" style={{ width: "100%", paddingLeft: "0.75rem", paddingTop: "32px" }}>
                      <div className="square-of-own-opinions"></div>
                      <span className="small-paragraph-of-own-opinions">
                        Save my name, email, and website in this browser for the next time I comment.
                      </span>
                    </div>
                    <button className="latest-button-of-own-opinions">post comment</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 side-part">
              <div className="head-group text-center">
                <h5 style={{ fontWeight: 700 }}>LATEST</h5>
                <div className="underline"></div>
              </div>

              {sidebarLatest.map(({ cls, postId }) => (
                <Link to={`/news/${postId}`} key={postId} className="sidebar-post-link">
                  <div style={{ marginTop: "50px" }}>
                    <div className={cls}></div>
                    <h2>3 Outfits That Will Amaze You on Coming Holiday</h2>
                    <ul className="ul-box">
                      <li>By <span className="different-writing">Shane Doe </span></li>
                      <li>August 14, 2016</li>
                    </ul>
                  </div>
                </Link>
              ))}

              <div className="d-flex justify-content-center align-items-center flex-column side__bar">
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <div className="gray-input-box text-center d-flex flex-column">
                    <h4 className="gray-input-big-writing">Your daily updates</h4>
                    <p className="gray-input-writing text-center">Subscribe now. We'll make sure you never miss a thing</p>
                    <input type="text" placeholder="Your email address.." className="gray-inline-input" />
                    <button className="gray-input-button">subscribe</button>
                  </div>

                  <div className="logos-div">
                    <h4>Follow us</h4>
                    <div className="underline"></div>
                    <div className="logos-group">
                      <li className="group-type-li">
                        {[
                          { cls: "first-logo-button", icon: "fa-facebook-f", href: "https://facebook.com" },
                          { cls: "second-logo-button", icon: "fa-pinterest-p", href: "https://pinterest.com" },
                        ].map(({ cls, icon, href }) => (
                          <ul className="group-type-ul" key={icon}>
                            <a href={href} target="_blank" rel="noreferrer">
                              <button className={cls}>
                                <i className={`fa-brands ${icon} inline-small-logo`}></i>
                                <span className="inline-small-writing1">1.1k</span>
                                <span className="inline-small-writing2">Fans</span>
                              </button>
                            </a>
                          </ul>
                        ))}
                      </li>
                      <li className="group-type-li">
                        {[
                          { cls: "third-logo-button", icon: "fa-x-twitter", href: "https://twitter.com" },
                          { cls: "fourth-logo-button", icon: "fa-instagram", href: "https://instagram.com" },
                        ].map(({ cls, icon, href }) => (
                          <ul className="group-type-ul" key={icon}>
                            <a href={href} target="_blank" rel="noreferrer">
                              <button className={cls}>
                                <i className={`fa-brands ${icon} inline-small-logo`}></i>
                                <span className="inline-small-writing1">1.1k</span>
                                <span className="inline-small-writing2">Fans</span>
                              </button>
                            </a>
                          </ul>
                        ))}
                      </li>
                    </div>
                  </div>

                  <img src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2017/03/tema.jpg" className="latest-main-photo-company" alt="" />

                  <div className="finish-part-of-the-side d-flex justify-content-center align-items-center flex-column">
                    <h4>Categories</h4>
                    <div className="underline"></div>
                    <ul className="list-group list-group-flush custom-circle-list">
                      {[8, 10, 8, 11, 8].map((count, i) => (
                        <Link to={`/category/${data?.address?.street}`} key={i} className="category-link">
                          <li className="list-group-item">
                            {data?.address?.street}
                            <span className="latest-small-writing">{count}()</span>
                          </li>
                        </Link>
                      ))}
                    </ul>
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
                <Link to="/"><img src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2017/03/default-footer-2.png" style={{ width: "205px", marginBottom: "18px" }} alt="" /></Link>
                <span className="writing-of-the-latest-part-black">{data.company?.catchPhrase}</span>
                <div className="the-latest-logo-divs-of-black">
                  {footerSocials.map((icon) => (
                    <a href="#" key={icon} target="_blank" rel="noreferrer">
                      <div className="the-latest-logo-div-of-black">
                        <i className={`fa-brands ${icon}`}></i>
                      </div>
                    </a>
                  ))}
                </div>
                <span className="the-smallest-writing-of-black-part1">
                  <a href={`mailto:${data?.email}`} className="footer-email-link">{data?.email}</a>
                  <a href={`https://${data?.website}`} target="_blank" rel="noreferrer" className="the-smallest-writing-of-black-part2"> {data?.website}</a>
                </span>
              </div>
            </div>

            {[0, 1].map((col) => (
              <div className="col-md-4 col-12" key={col}>
                <div className="latest-black-part-of-the-end1">
                  <h5 style={{ color: "white", fontWeight: "700" }}>{data.company?.bs}</h5>
                  <FooterNewsItem />
                  <FooterNewsItem />
                  <FooterNewsItem />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="fixed-group">
        <p className="text-center" style={{ fontSize: "13px", fontWeight: 500, marginBottom: "30px" }}>SHARE</p>
        <div className="d-flex flex-column justify-content-center align-items-center">
          {fixedSocials.map(({ color, icon, solid }) => (
            <a href="#" key={icon} target="_blank" rel="noreferrer">
              <div className="little-round-icon-box shadow-sm" style={{ color }}>
                <i className={`fa-${solid ? "solid" : "brands"} ${icon}`}></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default News;