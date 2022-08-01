import { Grid } from '@chakra-ui/react';
import Container from 'components/Container';
import Spacer from 'components/Spacer';
import Testimony from 'components/Testimony ';
import testimoniesData from 'mocks/testimonies';

const Testimonies = () => {
  return (
    <Container direction="column">
      <Spacer>Depoimentos</Spacer>
      <Grid
        templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={[3, 3, 5]}
        width="100%"
      >
        {testimoniesData.map((testimony) => (
          <Testimony
            key={testimony.video.src}
            thumbnail={testimony.thumbnail}
            video={testimony.video}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonies;
