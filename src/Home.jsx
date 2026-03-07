
import React from 'react'
import {useState,useEffect} from "react"
import {Link} from 'react-router-dom'
function Home() {
const [data,setData]=useState([])
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(x=>x.json())
  .then(r=>{
    setData(r)
    console.log(r)
  })
},[])
  return (
    <>
      <section>
        <div className="p-4">
          <div className="container">
            <div className="row g-0">

              <div className="col-md-6">
                <div
                  className="inline-part"
                  style={{
                    backgroundImage:
                      'url(https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/08/shutterstock_357792800-1536x1024.jpg)',
                  }}
                >
                  <div className="left-side">
                    <button className="red-block">Breaking</button>
                    <p className="bigwriting1"><Link to={`news/${data[0]?.id}`} style={{textDecoration:"none",color:"white"}}>{data[0]?.name}</Link></p>
                    <div className="inline-section">
                      <p>Shane Doe</p>
                      <p>August 14, 2016</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div
                  className="inline-part"
                  style={{
                    backgroundImage:
                      'url(https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/05/shutterstock_180272480-1536x1024.jpg)',
                  }}
                >
                  <div className="left-side">
                    <button className="red-block">Breaking</button>
                    <p className="bigwriting2"><Link to={`news/${data[1]?.id}`} style={{textDecoration:"none",color:"white"}}>{data[1]?.name}</Link></p>
                    <div className="inline-section">
                      <p>Shane Doe</p>
                      <p>August 14, 2016</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div
                  className="inline-part"
                  style={{
                    backgroundImage:
                      'url(https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/05/shutterstock_362367734-scaled-1557x2048.jpg)',
                  }}
                >
                  <div className="left-side">
                    <button className="red-block">Breaking</button>
                    <p className="bigwriting2"><Link to={`news/${data[2]?.id}`} style={{textDecoration:"none",color:"white"}}>{data[2]?.name}</Link></p>
                    <div className="inline-section">
                      <p>Shane Doe</p>
                      <p>August 14, 2016</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

