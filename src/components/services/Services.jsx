import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>JavaScript</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Excellent handling of Variables and Data Types</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Good knowledge and working with functions</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Excellent knowledge and extensive experience in working with
                loops
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>A large number of projects with loops and arrays</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Basic knowledge and use of Asynchronous programming</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>React</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Experienced and good handling of components</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Precise and clean JSX syntax writing</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Good handling and necessary experience in working with Hooks
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Knowing and working with the Context API</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>A small number of projects with React Router</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Implementation and quick navigation in Libraries</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>CSS/SCSS</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>A large number of projects done in pure CSS</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Excellent knowledge of flex and good knowledge of grid</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Work with simple and complex animations</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Frequent use and work with pseudo-classes</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Mediocre experience with designing for tablets and phones</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
