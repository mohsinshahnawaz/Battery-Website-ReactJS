import { Box } from "@mui/material";
import React from "react";
import "./BatteriesBannerMain.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from "@mui/material";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import BannerIconOne from "../../../assets/images/cell-one.jpg";
import BannerIconTwo from "../../../assets/images/cell-two.jpg";
import BannerIconThree from "../../../assets/images/cell-three.jpg";
import BannerIconFour from "../../../assets/images/B2.jpg";
export default function BatteriesBannerMain() {
  return (
    <Box component="div" className="batteries-banner-container">
      <Box component="div" className="category-box">
  
       <Box className="category-items">
        <Box>Category 1</Box>
        <Box style={{marginLeft:"5px"}}>
          <IconButton>
            <ArrowForwardIosIcon/>
          </IconButton>
        </Box>
       </Box>
       <Box className="category-items">
        <Box>Category 2</Box>
        <Box>
          <IconButton>
            <ArrowForwardIosIcon/>
          </IconButton>
        </Box>
       </Box>
       <Box className="category-items">
        <Box>Category 3</Box>
        <Box>
          <IconButton>
            <ArrowForwardIosIcon/>
          </IconButton>
        </Box>
       </Box>
      </Box>
      <Box component="div" className="banners-carousel">
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay, Navigation]}
          direction="vertical"
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
            <img src={BannerIconOne} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BannerIconTwo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BannerIconThree} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BannerIconFour} alt="" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}
