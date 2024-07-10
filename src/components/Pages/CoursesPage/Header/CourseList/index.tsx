import * as React from 'react';
import { Grid } from '@mui/material';
import CourseCard from './CourseCard';

interface CourseListProps {}

const CourseList: React.FC<CourseListProps> = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={3}>
        <CourseCard
          category={'dad'}
          title={'dadasdasd'}
          lessons={12}
          duration={'12h'}
          imageUrl="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
        />
      </Grid>

      <Grid item xs={12} sm={4} md={3}>
        <CourseCard
          category={'dad'}
          title={'dadasdasd'}
          lessons={12}
          duration={'12h'}
          imageUrl="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
        />
      </Grid>

      <Grid item xs={12} sm={4} md={3}>
        <CourseCard
          category={'dad'}
          title={'dadasdasd'}
          lessons={12}
          duration={'12h'}
          imageUrl="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
        />
      </Grid>

      <Grid item xs={12} sm={4} md={3}>
        <CourseCard
          category={'dad'}
          title={'dadasdasd'}
          lessons={12}
          duration={'12h'}
          imageUrl="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
        />
      </Grid>

      <Grid item xs={12} sm={4} md={3}>
        <CourseCard
          category={'dad'}
          title={'dadasdasd'}
          lessons={12}
          duration={'12h'}
          imageUrl="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
        />
      </Grid>

      <Grid item xs={12} sm={4} md={3}>
        <CourseCard
          category={'dad'}
          title={'dadasdasd'}
          lessons={12}
          duration={'12h'}
          imageUrl="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
        />
      </Grid>
    </Grid>
  );
};

export default CourseList;
