'use client';

import Navbar from './Components/Navbar';
import Button from './Components/Button';
import ThreeDCard from './Components/ThreeDCard';
import GrowCard from './Components/GrowCard';
import TimeLine from './Components/TimeLine';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import './Components/Homepageanimatedhero.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import dynamic from 'next/dynamic';

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);


export default function Home() {
  return (
    <>
      <Navbar />

      <div className="hero-section">
        {/* Background animated dots */}
        <div className="animated-bg"></div>

        <div className=" py-5">
          <div className="row container align-items-center">
            {/* Left Column: Text + Button */}
            <div className="col-12 col-md-12 col-lg-7 text-center text-md-left mb-4 mb-md-0">
              <h1 className="display-4 fw-bold text-white">
                We Build Beautiful Websites
              </h1>
              <p className="lead text-white">
                Designed with care for startups, schools, and local businesses
              </p>


              <Button text="Invoke"/>
            </div>

            {/* Right Column: Lottie Animation */}
            <div className="col-12 col-lg-5  text-center d-none d-lg-block">
              <Player
                className="lottieimg"
                autoplay
                loop
                src="/Maintenance-web.json"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="container py-4">
        <h1 className="text-center fw-bold lead">
          Digital Experiences That Connect, Inspire, and Deliver Results
        </h1>
        <p className="text-center">
          We craft digital solutions designed to empower your brand, energize
          your audience, and drive measurable success. Lay the groundwork for
          lasting growth with our cutting-edge digital services.
        </p>

        <div className="row">
          <div className="col-md">
            {' '}
            <ThreeDCard
              CardTopTitle={'Business Website'}
              CardBadgeText={'Clean. Responsive. Built for Growth.'}
              CardParagraphText={
                'We create sleek, high-performing websites tailored for small businesses that want to make a big impact. Whether you’re just starting out or scaling up, our business websites are designed to reflect your brand, engage your audience, and support your goals.'
              }
              CardSymbol="fa-solid fa-briefcase"
            />
          </div>

          <div className="col-md">
            {' '}
            <ThreeDCard
              CardTopTitle={'School Website'}
              CardBadgeText={'Clean. Responsive. Built for Education.'}
              CardParagraphText={
                'We design and develop custom websites for schools, colleges, and educational institutions that are easy to navigate, informative, and visually engaging. Our school websites are built to support communication, showcase achievements, and keep students and parents informed — all in one place.'
              }
              CardSymbol={'fa-solid fa-graduation-cap'}
            />
          </div>

          <div className="col-md">
            {' '}
            <ThreeDCard
              CardTopTitle={'Website Maintenance'}
              CardBadgeText={'Relable. Security. Up-to-Date'}
              CardParagraphText={
                'A great website doesn’t end at launch — it needs regular care to keep running smoothly. Our website maintenance service ensures your site stays secure, fast, and fully functional at all times. We take care of the technical side so you can focus on growing your business.'
              }
              CardSymbol={'fa-solid fa-wrench'}
            />
          </div>
          <div className="col-md">
            {' '}
            <ThreeDCard
              CardTopTitle={'E-Commerce Website Development'}
              CardBadgeText={'Sell Smarter. Grow Faster.'}
              CardParagraphText={
                'Launch a powerful online store that not only looks great but drives real sales. We build custom e-commerce websites that are secure, scalable, and designed to turn visitors into loyal customers'
              }
              CardSymbol={'fa-solid fa-bag-shopping'}
            />
          </div>
           <div className="col-md">
            {' '}
            <ThreeDCard
              CardTopTitle={'Content Creation for Business Goals'}
              CardBadgeText={'Creative. Engaging. Built for Success.'}
              CardParagraphText={
                'We craft SEO-optimized articles, videos, social media content, and product promotion to boost your brand’s visibility, engage your audience, and drive conversions. Let’s create content that builds trust and helps you achieve your marketing goals!'
              }
              CardSymbol={'fa-solid fa fa-pencil-alt'}
            />
          </div>
        </div>

        <h1 className="text-center fw-bold lead">
          Why trust our team to build the perfect website for your business?
        </h1>
        <p className="text-center">
          Each of our websites is responsive modren. we don`t cookies cutter
          tamplates. each of our sites has clearly distibguishing
          characteristics and attention to detail. in a nutshell, your website
          will be as unique as you are and it will be not overloded with
          hundreds of unnecessary features that you don`t need
        </p>

        <div className="row">
          <div className="col-md-4 mb-4">
            <GrowCard
              title="Responsive, modern built for your business"
              description="Your business is unique, and your website should be too, we tailor every website to fit your brand, industry, and audience, just a perfect fit for your goals."
              BGClass="gr-1"
              symbol="fas fa-desktop"
            />
          </div>

          <div className="col-md-4 mb-4">
            <GrowCard
              title="High performance, fast & secure"
              description="A slow or outdated websites can drive visitors away. we ensure your site is lightning-fast, fully optimized for SEO, and secure against cyber threats- so you stat ahaed of the competitention."
              BGClass="gr-2"
              symbol="fas fa-rocket"
            />
          </div>

          <div className="col-md-4 mb-4">
            <GrowCard
              title="Afordable pricing, no hidden costs"
              description="Quality doesnt have to break the bank. we offer transparent pricing with no hidden fees, ensuruing you get an exceptional website at a price that works for you"
              BGClass="gr-3"
              symbol="fas fa-check-circle"
            />
          </div>
        </div>
      </section>

      <section className="container py-4">
        <h1 className="text-center fw-bold lead">
          Your quick 6 step to digital growth
        </h1>
        <p className="text-center">
          supercharge your online growth with our proven process. as a trusted
          website development company, we guide your brand through every phase
          of business success.
        </p>
        <TimeLine />
      </section>
      <section className="container py-4">
        <FAQ />
      </section>

      <Footer />
    </>
  );
}
