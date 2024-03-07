import * as React from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';

function Posts({posts}) {

  return (
    <Grid
      item
      xs={12}
      md={12}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      {posts.map((post, index) => (
        <>
          <Markdown className="markdown" key={index}>
            {post}
          </Markdown>

          {index !== posts.length - 1 && <Divider/>}
        </>

      ))}
    </Grid>
  );
}

export default Posts;
