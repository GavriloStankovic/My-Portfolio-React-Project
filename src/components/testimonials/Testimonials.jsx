import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Gavrilo is the type of person who cares about his work. He is constantly working on improving himself and further learning. In a year of learning through the Internet and courses, he reached an excellent level of knowledge.",
  },
  {
    avatar: AVTR2,
    name: "Shata Wale",
    review:
      "Above all, a team player, he always makes sure that everyone around him feels good. Always willing to listen, and always willing to help. If you decide to give it a chance, I'm sure it will be the right decision!",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "The path to becoming a programmer without university knowledge and a diploma is very demanding and difficult. You never gave up, with the right people and a good team the sky is the limit!",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Someone who has done more than 200 hackerrank tasks of all weights, just looking at Harvard's CS50 course. Someone who learned HTML, CSS, JavaScript through YouTube and React through an online course. Someone who has the desire to become a good fullstack developer as soon as possible!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
