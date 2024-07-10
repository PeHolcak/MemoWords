import * as React from 'react';
import { CardContent, CardMedia, Typography, Box } from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { routes } from '@constants/routes';

import * as S from './styled';

interface CourseCardProps {
  category: string;
  title: string;
  lessons: number;
  duration: string;
  imageUrl: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  category,
  title,
  lessons,
  duration,
  imageUrl
}) => {
  return (
    <Link href={routes.course('d52as5da2csc56sc')}>
      <motion.div whileHover={{ scale: 1.05 }}>
        <S.StyledCard>
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt={title}
          />
          <CardContent>
            <Typography variant="body2" component="p">
              {category}
            </Typography>
            <Typography variant="h6" component="span" sx={{ mt: 1 }}>
              {title}
            </Typography>
            <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
              <LayersIcon sx={{ mr: 1 }} />
              <Typography variant="body2">{lessons} Lessons</Typography>
              <AccessTimeIcon sx={{ ml: 2, mr: 1 }} />
              <Typography variant="body2">{duration}</Typography>
            </Box>
          </CardContent>
        </S.StyledCard>
      </motion.div>
    </Link>
  );
};

export default CourseCard;
