import { Flex } from '@chakra-ui/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Item from './Item';

const SellerCarousel = () => {
  return (
    <Flex
      w="100%"
      minH="530px"
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
            title="Plano Starter"
            subtitle="Para investidores conservadores"
            highPrice="189,90"
            discount="18%"
            price="159,90"
            description={[
              'Pagamento mensal',
              'Acesso ao robô lucrativo',
              'Acesso ao minicurso',
              'Suporte 24 horas',
              'Lucre por 1 mês',
            ]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            title="Plano Pro"
            subtitle="Para investidores ambiciosos"
            highPrice="413,86"
            discount="38%"
            price="299,90"
            description={[
              'Pagamento a cada 3 meses.',
              'Acesso ao robô lucrativo.',
              'Acesso ao minicurso.',
              'Prioridade no suporte.',
              'Lista vip para novos jogos.',
              'Grupo reservado no Telegram.',
            ]}
            isPrincipal
            monthlyPrice="99,90/mês*"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            title="Plano Vip Exclusive"
            subtitle="Para investidores ousados"
            highPrice="705,43"
            discount="68%"
            price="419,90"
            description={[
              'Pagamento a cada 6 meses.',
              'Acesso ao robô lucrativo.',
              'Acesso ao minicurso.',
              'Prioridade máxima no suporte 24h.',
              'Acesso exclusivo para novas oportunidades e jogos.',
              'Acesso a comunidade Vip Exclusive.',
              'Acesso antecipado a novas oportunidades de mercado.',
            ]}
            monthlyPrice="69,90/mês*"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default SellerCarousel;
