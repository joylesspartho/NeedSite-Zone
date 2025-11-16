'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TimeLine.css';

export default function TimeLine() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-timeline">
              <a href="#" className="timeline">
                <div className="timeline-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="timeline-content">
                  <h3 className="title">Discovery & Business Analysis</h3>
                  <p className="description">
                    We begin by understanding your goals, target audience, and
                    challenges to create a clear project roadmap that aligns
                    with your business objectives.
                  </p>
                </div>
              </a>
              <a href="#" className="timeline">
                <div className="timeline-icon">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <div className="timeline-content">
                  <h3 className="title">User Experience (UX)</h3>
                  <p className="description">
                    Map out user journeys and wireframes to ensure every
                    interaction feels intuitive, engaging, and effortless for
                    your audience.
                  </p>
                </div>
              </a>
              <a href="#" className="timeline">
                <div className="timeline-icon">
                  <i className="fa-solid fa-puzzle-piece"></i>
                </div>
                <div className="timeline-content">
                  <h3 className="title">User Interface Design (UI)</h3>
                  <p className="description">
                    We transform ideas into visually stunning, brand-aligned
                    interfaces that deliver clarity, consistency, decent and a modern
                    digital experience.
                  </p>
                </div>
              </a>
              <a href="#" className="timeline">
                <div className="timeline-icon">
                  <i className="fa-solid fa-code"></i>
                </div>
                <div className="timeline-content">
                  <h3 className="title">Development</h3>
                  <p className="description">
                    Our developers bring the design to life using clean,
                    scalable, and high-performance code built on the latest web
                    technologies.
                  </p>
                </div>
              </a>
              <a href="#" className="timeline">
                <div className="timeline-icon">
                  <i className="fa-solid fa-rocket"></i>
                </div>
                <div className="timeline-content">
                  <h3 className="title">Launch & Optimization</h3>
                  <p className="description">
                     We begin by understanding your goals, target audience, and
                    challenges to create a clear project roadmap that aligns
                    with your business objectives.
                  </p>
                </div>
              </a>
              <a href="#" className="timeline">
                <div className="timeline-icon">
                  <i className="fa-solid fa-box-open"></i>
                </div>
                <div className="timeline-content">
                  <h3 className="title">Testing & Final Delivery</h3>
                  <p className="description">
                    Every feature is thoroughly tested for usability, security,
                    and responsiveness before final handover — ensuring a
                    flawless launch.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
