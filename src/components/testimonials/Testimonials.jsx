import React from "react"
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"
const data = [
  {
    avatar: AVTR1,
    name: "Avatar 1",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Debitis",
  },
  {
    avatar: AVTR2,
    name: "Avatar 2",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Debitis",
  },
  {
    avatar: AVTR3,
    name: "Avatar 3",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Debitis",
  },
  {
    avatar: AVTR4,
    name: "Avatar 4",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Debitis",
  },
]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from cLients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        Pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar 1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
