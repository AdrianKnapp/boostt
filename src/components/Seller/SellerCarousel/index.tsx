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
            slidesPerView: 3,
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
            price="159,90"
            description={[
              'Pagamento mensal',
              'Acesso ao robô lucrativo',
              'Acesso ao minicurso',
              'Suporte 24 horas',
              'Lucre por 1 mês',
              '7 dias de garantia',
            ]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            title="Assinatura trimestral"
            subtitle="Para investidores ambiciosos"
            highPrice="335,86"
            discount="40%"
            price="239,90"
            description={[
              'Pagamento a cada 3 meses',
              'Acesso ao robô lucrativo',
              'Acesso ao minicurso',
              'Suporte 24 horas',
              'Lista vip para novos jogos',
              'Grupo vip no telegram',
              '7 dias de garantia',
            ]}
            isPrincipal
            monthlyPrice="79,90/mês*"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            title="Assinatura trimestral"
            subtitle="Para investidores ambiciosos"
            highPrice="704,85"
            discount="50%"
            price="469,90"
            description={[
              'Pagamento a cada 6 meses',
              'Acesso ao robô lucrativo',
              'Acesso ao minicurso',
              'Suporte 24 horas',
              'Lista vip para novos jogos',
              'Grupo vip no telegram',
              '7 dias de garantia',
            ]}
            monthlyPrice="78,0/mês*"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default SellerCarousel;
