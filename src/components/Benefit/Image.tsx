import { Box, Flex } from '@chakra-ui/react';
import { default as NextImage } from 'next/image';
import { ImageProps } from 'types/image';

const Image = ({ image }: { image: ImageProps }) => {
  return (
    <Flex width="100%" justify="center">
      <Box
        position="relative"
        width={['40%']}
        height={[120, 200, 200, 250]}
        borderRadius={5}
        overflow="hidden"
        filter="brightness(0) invert(1)"
      >
        <NextImage
          src={`/images/benefits/${image.src}`}
          alt={image.alt}
          layout="fill"
          objectFit="contain"
        />
      </Box>
    </Flex>
  );
};

export default Image;
