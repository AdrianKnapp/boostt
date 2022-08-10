import { Grid, GridItem } from '@chakra-ui/react';
import Benefit from 'components/Benefit';
import Container from 'components/Container';
import Spacer from 'components/Spacer';
import benefitsData from 'mocks/benefits';

const Benefits = () => {
  return (
    <Container direction="column">
      <Spacer>O que é essa tecnologia?</Spacer>
      <Grid
        templateColumns={['repeat(1, 1fr)', null, 'repeat(2, 1fr)']}
        width="100%"
        gap={5}
      >
        {benefitsData.map(({ title, description, icon, image }) => (
          <GridItem>
            <Benefit
              title={title}
              description={description}
              icon={icon}
              image={image}
              key={title}
            />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Benefits;
