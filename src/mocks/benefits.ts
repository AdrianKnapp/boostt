import { AiOutlineFieldTime, AiOutlineSmile } from 'react-icons/ai';
import { MdOutlineWhatshot } from 'react-icons/md';
import { TbCurrencyDollar } from 'react-icons/tb';

const benefitsData = [
  {
    icon: TbCurrencyDollar,
    title: 'Robô com tecnologia nacional e estrangeira',
    description:
      'A Rocket Wins é uma empresa focada no desenvolvimento de um robô com tecnologia nacional e estrangeira   Nosso método visa identificar padrões de apostas capazes de alcançar lucros constantes e previsíveis.',
    image: {
      src: 'robo.svg',
      alt: 'Robô de tecnologia estrangeira.',
    },
  },
  {
    icon: AiOutlineSmile,
    title: 'Usabilidade fácil',
    description:
      'Sem a necessidade de ter conhecimento na área, conseguimos ajudar desde os leigos aos já experientes no ramo.',
    image: {
      src: 'easy.svg',
      alt: '',
    },
  },
  {
    icon: AiOutlineFieldTime,
    title: 'Funcionamento em tempo integral',
    description:
      'Uma vez ativada, nossa inteligência é capaz de operar 24h por dia, 7 dias por semana, emitindo os sinais oportunos para o sucesso.',
    image: {
      src: 'clock.svg',
      alt: '',
    },
  },
  {
    icon: MdOutlineWhatshot,
    title: 'Lançamento exclusivo',
    description:
      'A tecnologia mais inovadora do mercado acaba de chegar ao Brasil e você está tendo a chance de embarcar conosco nesse foguete rumo a lua. E aí? Vai ficar de fora?',
    image: {
      src: 'exclusive.svg',
      alt: '',
    },
  },
];

export default benefitsData;
