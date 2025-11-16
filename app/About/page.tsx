'use client';
import Hero from './../Components/Hero';
import Navbar from './../Components/Navbar';
import Footer from './../Components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <Hero HeroHeadingText="About" />
      <h1 className="text-center pt-4 fw-bold lead text-decoration-underline">
        WHO WE ARE
      </h1>
      <p className="p-3">
        NeedSite Zone is a modern web design and development agency focused on
        delivering smart, secure, and responsive digital solutions. We believe
        in building more than just websites — we create platforms that elevate
        your brand and drive real results.
      </p>
      <section className="container py-4">
        <div className="row bg-secondary-subtle p-3">
          <div className="col-12 col-md-6  d-flex align-items-center justify-content-center">
            <h4 className="text-center pt-4 fw-bold lead text-decoration-underline">
              OUR MISSION
            </h4>
          </div>
          <div className="col-md-6">
            To empower businesses with high-performing, user-centric websites
            that are built for growth, engagement, and success. Every line of
            code we write and every pixel we place is designed with your goals
            in mind.
          </div>
        </div>
      </section>

      <section className="container py-4">
        <div className="row shadow p-3">
          <div className="col-12 col-md-6  d-flex align-items-center justify-content-center order-2 ">
            <h4 className="text-center pt-4 fw-bold lead text-decoration-underline ">
              WHAT WE DO
            </h4>
          </div>
          <div className="col-md-6 order-md-1 order-2 ">
            <p>
              We offer end-to-end web solutions tailored for businesses,
              schools, startups, and entrepreneurs. Our key services include:
            </p>
            <ul>
              <li>
                Business Website Development – Sleek, scalable sites to grow
                your brand
              </li>
              <br></br>
              <li>
                 School Website Design – Informative, user-friendly educational
                portals
              </li>
              <br></br>
              <li>
                 E-Commerce Development – Powerful online stores that drive
                conversions
              </li>
              <br></br>

              <li>
                 Website Maintenance – Ongoing care to keep your site secure
                and updated
              </li>
            </ul>
          </div>
        </div>
        <br></br>
        <div className="h-50  p-3" style={{border: '2px solid orange'}}>
          <h1 className="text-center fw-bold pb-4 lead text-decoration-underline">
            WHY US
          </h1>
        </div>
        <div
          className="d-flex flex-wrap justify-content-around gap-2"
          style={{
            position: 'relative',
            top: '-30px',
          
          }}
        >
          <span className="badge badge-pill p-3 shadow bg-white text-dark d-block" style={{border: '2px solid 	#a1ff79', }}>
            Custom, responsive design for all devices
          </span>

          <span className="badge  badge-pill p-3 shadow bg-white text-dark d-block" style={{border: '2px solid 	#a1ff79'}}>
            SEO-friendly development practices
          </span>
          <span className="badge  badge-pill p-3 shadow bg-white text-dark d-block" style={{border: '2px solid 	#a1ff79'}}>
            Fast and secure hosting solutions
          </span>
          <span className="badge badge-pill p-3 shadow bg-white text-dark d-block" style={{border: '2px solid 	#a1ff79'}}>
            Transparent communication and dedicated support
          </span>
          <span className="badge badge-pill p-3 shadow bg-white text-dark d-block" style={{border: '2px solid 	#a1ff79'}}>
            Focused on long-term digital success
          </span>
        </div>

        <div className="shadow p-3">
          <h4 className="text-center pt-4 fw-bold lead text-decoration-underline ">
            WHO WE WORK WITH
          </h4>
          <ul className="">
            <li> Small and medium businesses</li>
            <li> Educational institutions</li>
            <li> Local startups and entrepreneurs</li>
            <li> Nonprofits and community organizations</li>
          </ul>
        </div>

        <p className=" py-3">
          Whether you are just starting or scaling up, we have a solution that
          fits.
        </p>
      </section>

      <Footer />
    </>
  );
}
