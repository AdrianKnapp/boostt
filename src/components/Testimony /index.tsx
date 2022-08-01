import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { FaYoutube } from 'react-icons/fa';
import { theme } from 'styles/theme';
import { ImageProps } from 'types/image';

type TestimonyProps = {
  thumbnail: ImageProps;
  video: {
    src: string;
  };
};

const Testimony = ({ thumbnail, video }: TestimonyProps) => {
  return (
    <Box
      height={[100, 130, 200]}
      overflow="hidden"
      position="relative"
      borderRadius={5}
      cursor="pointer"
      role="group"
    >
      <Box
        color={theme.colors.background}
        opacity={0.6}
        position="absolute"
        mx="auto"
        zIndex={200}
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        fontSize={[30, 40, 50]}
        _groupHover={{ color: '#FF0000 !important' }}
        transition=".2s"
      >
        <FaYoutube />
      </Box>
      <Image
        src={thumbnail.src}
        alt={thumbnail.alt}
        width={thumbnail.width}
        height={thumbnail.height}
        layout="responsive"
      />
    </Box>
  );
};

export default Testimony;
