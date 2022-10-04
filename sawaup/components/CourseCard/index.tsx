import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
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
  // TODO: the intention was to change the context with the favorite course
  // so that it could somehow display this information, as I didn't have it,
  // I chose to use the state locally, which meant some component from stateless to stateful
  const [cardFavorite, setCardFavorite] = useState(favorite)

  const handleFavorite = (e: any) => {
    e.stopPropagation()

    setCardFavorite(!cardFavorite)
  }

  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardActionArea onClick={() => onClick({ url, title: name })}>
        <CardMedia
          component="img"
          height="140"
          image={thumbnail}
          alt={name}
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

        <CardActions disableSpacing>
          <Tooltip title={cardFavorite ? 'Remove favorite' : 'Add favorite'}>
            <IconButton aria-label="add to favorites" onClick={handleFavorite}>
              {cardFavorite && <FavoriteIcon style={{ color: '#fb6262' }} />}
              {!cardFavorite && <FavoriteBorderIcon />}
            </IconButton>
          </Tooltip>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
