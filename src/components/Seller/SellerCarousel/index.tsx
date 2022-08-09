import { Flex } from '@chakra-ui/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Item from './Item';

const SellerCarousel = () => {
  return (
    <Flex
      w="100%"
      minH="60vh"
      borderRadius={5}
      position="relative"
      overflow="hidden"
    >
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: false }}
        modules={[Pagination, Autoplay, Navigation]}
        className="seller-swiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        navigation
      >
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default SellerCarousel;
