'use client';

import Navbar from './../Components/Navbar';
import Hero from './../Components/Hero';
import Card from './../Components/Card';
import ExpandingCard from './../Components/ExpandingCard';
import PillCard from './../Components/PillCard';
import Footer from './../Components/Footer';
import dynamic from 'next/dynamic';

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);


export default function Pricing() {
  return (
    <>
      <Navbar />
      <Hero HeroHeadingText="Service" />
      <section className="container py-4">
        <div className="row">
          <div className="col-md-5 order-md-1 order-2">
            <div className="container">
              <Player
                className="lottieimg border"
                autoplay
                loop
                src="/web design.json"
                style={{ height: '300px', width: '250px' }}
              />
            </div>
          </div>
          <div className="col-md-6 order-md-1 order-1 p-4  d-flex align-items-center">
            <p className="text-justify ">
              We build fast, mobile-friendly, and SEO-optimized websites. From
              corporate and schools to restaurants and e-commerce—our solutions
              fit all industries. Let us be your trusted digital partner in
              building a powerful online presence.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-4 bg-">
        <div className="row ">
          <div className="col-12 col-md-12 col-lg shadow">
            <Card
              title="Built for Growth"
              body="Custom websites tailored for small and growing businesses. We design sleek, professional, and mobile-friendly sites that boost your online presence and help you attract more clients."
              symbol="fa-rocket"
            />
          </div>

          <div className="col-12 col-md-12 col-lg shadow">
            <Card
              title="Smart Solutions for Education"
              body="We handle updates, security, backups, and performance checks—so your site stays safe, fast, and functional while you focus on your business."
              symbol="fa-tools"
            />
          </div>

          <div className="col-12 col-md-12 col-lg shadow">
            {' '}
            <Card
              title="Sell Smarter. Grow Faster."
              body="Need something unique? We build custom web features and tools that perfectly match your business workflow and goals."
              symbol="fa-lightbulb"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-12 col-lg shadow">
            <Card
              title="Look Great on Every Device"
              body="We design websites that look and perform perfectly across desktops, tablets, and smartphones — ensuring a seamless experience for every user."
              symbol="fa-desktop"
            />
          </div>

          <div className="col-12 col-md-12 col-lg shadow">
            {' '}
            <Card
              title="Tailored to Your Needs"
              body="Launch an online store that’s secure, scalable, and optimized for sales. From product pages to checkout, we design every step to turn visitors into loyal customers."
              symbol="fa-store"
            />
          </div>
        </div>
      </section>
      <section className="py-4">
        <h1 className="text-center fw-bold pb-4 lead text-decoration-underline">
          Our complete Task
        </h1>
        <ExpandingCard />
      </section>
      <section className="py-4 bg-secondary-subtle">
        <h1 className="text-center fw-bold pb-4 lead text-decoration-underline">
          Our Expertise
        </h1>
        <PillCard />
      </section>
      <p className="text-justify container py-4 ">
        At NeedSite Zone, we’re committed to delivering comprehensive web
        solutions that fit your unique needs—whether you’re launching a
        brand-new website, refreshing an old one, or optimizing for better
        visibility and performance. Our expert team combines creativity,
        technology, and strategy to help your business grow, engage your
        audience, and stay ahead in the digital world. Let us be your trusted
        partner in building a strong online presence that drives real results.
      </p>

      <Footer />
    </>
  );
}
