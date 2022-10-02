import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import type { Course } from '../../types/course'
import type { Tag } from '../../types/tag'
import type { ModalVideoConfig } from '../../types/modal-video-config'

type Props = {
  course: Course,
  onClick: Function
}

export default function CourseCard({
  course: {
    name,
    url,
    thumbnail,
    tags,
    favorite,
  },
  onClick,
}: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => onClick({ url, title: name })}>
        <CardMedia
          component="img"
          height="140"
          image={`https://img.youtube.com/vi/${thumbnail}/0.jpg`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={0.6}>
              {tags.map((tag: Tag, index: number) => (
                <Chip key={`CourseTag__${index}__${tag.text}`} label={tag.text} />
              ))}
              </Stack>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
