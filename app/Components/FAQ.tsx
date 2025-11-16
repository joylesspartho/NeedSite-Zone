'use client';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FAQ.css';

export default function FAQ() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4 text-center fw-bold">
            Frequently Asked Questions
          </h2>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How long will it take to get a new website?
              </Accordion.Header>
              <Accordion.Body>
                Typically, it takes 4-6 weeks depending on the complexity and
                requirements of your website.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How much does a new website cost?
              </Accordion.Header>
              <Accordion.Body>
                The cost varies based on features, design, and functionality. We
                provide custom quotes tailored to your needs.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Why do I need a well designed website?
              </Accordion.Header>
              <Accordion.Body>
                A well-designed website builds trust, improves user experience,
                and helps convert visitors into customers.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                What is responsive web design?
              </Accordion.Header>
              <Accordion.Body>
                Responsive design ensures your website looks great and works
                well on all devices, from phones to desktops.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                How else can you help me grow my website?
              </Accordion.Header>
              <Accordion.Body>
                We offer SEO, content creation, and digital marketing services
                to boost your online presence.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>What are your payment steps?</Accordion.Header>
              <Accordion.Body>
                We usually require a deposit upfront, with the remaining balance
                paid upon project completion.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>
                Do you offer domain registration and website hosting services?
              </Accordion.Header>
              <Accordion.Body>
                Yes, we can assist you with domain registration and recommend
                reliable hosting providers.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>
                Can you help my current site look more professional?
              </Accordion.Header>
              <Accordion.Body>
                Absolutely! We offer redesign and improvement services to
                upgrade your existing website.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>Do I own my website?</Accordion.Header>
              <Accordion.Body>
                Yes, once the project is complete and paid for, the website and
                its content belong to you.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
