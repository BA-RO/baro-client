import Grid from './Grid';
import GridItem from './GridItem';
import { type Meta } from '@storybook/react';

const meta: Meta<typeof Grid> = {
  title: 'Grid',
  component: Grid,
};

export default meta;

export function Default() {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      justifyItems="end"
      alignItems="center"
      alignContent="center"
    >
      <GridItem
        width="28px"
        height="28px"
        rowStart={2}
        columnStart={2}
        columnEnd={4}
      >
        1-1
      </GridItem>
      <GridItem width="28px" height="28px">
        1-2
      </GridItem>
      <GridItem width="28px" height="28px">
        1-3
      </GridItem>
      <GridItem width="28px" height="28px">
        2-1
      </GridItem>
      <GridItem width="28px" height="28px">
        2-2
      </GridItem>
      <GridItem width="28px" height="28px">
        2-3
      </GridItem>
      <GridItem width="28px" height="28px">
        3-1
      </GridItem>
    </Grid>
  );
}
