import { SimpleGrid } from '@chakra-ui/react';
import Container from 'components/Container';
import Spacer from 'components/Spacer';
import Testimony from 'components/Testimony ';
import testimoniesData from 'mocks/testimonies';

const Testimonies = () => {
  return (
    <Container direction="column">
      <Spacer>Depoimentos</Spacer>
      <SimpleGrid
        minChildWidth={['100px', '180px', '300px']}
        columns={[2, 2, 3]}
        spacing={5}
        width="100%"
      >
        {testimoniesData.map((testimony) => (
          <Testimony
            key={testimony.video.src}
            thumbnail={testimony.thumbnail}
            video={testimony.video}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Testimonies;
