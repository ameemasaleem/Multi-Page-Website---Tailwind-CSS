import React from 'react'

const HomeContent = () => {
  return (
    <div>
        <section className="Hero" style={{
          backgroundImage: "url('dress image 6.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
          // height: "500px",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          }}>
<div>
    <h1 className="fade-in homeContent">Welcome to Dress World</h1>
    <p>Your one-stop shop for the best dresses</p>
    <button>Shop Now</button>
</div>
        </section>
    </div>
  )
}

export default HomeContent