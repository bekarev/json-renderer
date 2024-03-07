import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Image({post, md}) {

  return (
    <Grid item xs={12} md={md}>
      <CardActionArea component="a" href="#">
        <Card sx={{display: 'flex'}}>
          <CardContent sx={{flex: 1}}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{width: 360, display: {xs: 'none', sm: 'block'}}}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

const Gallery = ({images = []}) => {
  const isLastPostWide = images.length % 2 === 1
  const firstPosts = images.slice(0,-1)
  const lastPost = images.slice(-1)?.[0]

  if (images.length === 0) return null

  return (
    <Grid container spacing={4}>
      {firstPosts.map((post, index) => <Image post={post} md={6} key={index}/>)}
      <Image post={lastPost} md={isLastPostWide ? 12 : 6}/>
    </Grid>)
}

export default Gallery;
