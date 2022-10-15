import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DevToCard from "../components/DevToCard";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const DevTo = ({ className }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchDevTo() {
      const response = await fetch(
        "https://dev.to/api/articles?username=julio_santacruz"
      );
      const articles = await response.json();
      //console.log(articles);
      setUserData(articles);
    }

    fetchDevTo();
  }, []);
  //console.log(userData);
  return (
    <section className={className}>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          320: {
            width: 320,
            slidesPerView: 1,
          },
          // // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={8}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {userData?.map((post) => {
          return (
            <SwiperSlide key={post.id}>
              <DevToCard post={post} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default styled(DevTo)`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
`;
