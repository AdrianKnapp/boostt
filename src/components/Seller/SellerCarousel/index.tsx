import { Flex } from '@chakra-ui/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Item from './Item';

const SellerCarousel = () => {
  return (
    <Flex
      w="100%"
      minH="430px"
      borderRadius={5}
      position="relative"
      overflow="hidden"
    >
      <Swiper
        speed={400}
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
          <Item
            title="Assinatura mensal"
            subtitle="Para investidores conservadores"
            highPrice="223,86"
            discount="40%"
            lowPrice="159,90"
            description={['Acesso ao robô e ao minicurso', 'Pagamento mensal']}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            title="Assinatura trimestral"
            subtitle="Para investidores ambiciosos"
            highPrice="335,86"
            discount="40%"
            lowPrice="239,90"
            description={[
              'Acesso ao robô e ao minicurso',
              '40% off',
              'Pagamento de 3 em 3 meses',
            ]}
            isPrincipal
            monthlyPrice="79,90/mês*"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default SellerCarousel;
