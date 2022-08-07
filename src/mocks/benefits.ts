import { AiOutlineFieldTime } from 'react-icons/ai';
import { FaMoneyBill } from 'react-icons/fa';
import { MdOutlineWhatshot } from 'react-icons/md';
import { VscWorkspaceTrusted } from 'react-icons/vsc';

const benefitsData = [
  {
    icon: FaMoneyBill,
    title: 'A Rocket Wins é um robô de tecnologia estrangeira',
    description:
      'Desenvolvida por profissionais, para indentificar padrões de apostas capazes de alcançar lucros constantes e previsiveis.',
    image: {
      src: 'robo.svg',
      alt: 'Robô de tecnologia estrangeira.',
    },
  },
  {
    icon: VscWorkspaceTrusted,
    title: 'Usabilidade fácil',
    description:
      'Não requerindo qualquer tipo de conhecimento na área, sendo capaz de atender do leigo ao avançado.',
    image: {
      src: 'easy.svg',
      alt: '',
    },
  },
  {
    icon: AiOutlineFieldTime,
    title: 'Funcionamento em tempo integral',
    description:
      'Uma vez ativada, nossa inteligencia é capaz de operar 24h por dia, 7 dias por semana através de sinais oportunos.',
    image: {
      src: 'clock.svg',
      alt: '',
    },
  },
  {
    icon: MdOutlineWhatshot,
    title: 'Lançamento exclusivo',
    description:
      'Tenha acesso a tecnologia mais atual e inovadora do mercado, recém chegada no Brasil.',
    image: {
      src: 'exclusive.svg',
      alt: '',
    },
  },
];

export default benefitsData;
