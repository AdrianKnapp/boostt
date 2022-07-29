import { Flex } from '@chakra-ui/react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Item from './Item';

const Carousel = () => {
  return (
    <Flex
      w="100%"
      h="70vh"
      borderRadius={5}
      position="relative"
      overflow="hidden"
    >
      <Swiper
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{ height: '95%', margin: 'auto' }}>
          <Item />
        </SwiperSlide>
        <SwiperSlide style={{ height: '95%', margin: 'auto' }}>
          <Item />
        </SwiperSlide>
        <SwiperSlide style={{ height: '95%', margin: 'auto' }}>
          <Item />
        </SwiperSlide>
      </Swiper>
      <Flex
        position="absolute"
        width="100%"
        height="130%"
        top={0}
        bottom={0}
        margin="auto 0"
        boxShadow="inset 0px 0px 25px 20px #121412"
        zIndex={200}
        pointerEvents="none"
      />
    </Flex>
  );
};

export default Carousel;
