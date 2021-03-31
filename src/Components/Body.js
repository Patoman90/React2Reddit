import React from 'react';
import { BodyStyles } from '../assets/BodyStyles';
import {Grid,Button, Card, CardActions, CardContent, CardMedia, Typography, Container} from '@material-ui/core';


const cards = [1, 2, 3, 4, 5, 6, 7, 8];

export const ContentBody = () => {
  const classes = BodyStyles();

  return (
    <main>
        <div className={classes.container}>
          <Container maxWidth='sm'>
            <Typography className={classes.title} variant='h4' align='center' color='textPrimary' gutterBottom>
              Post title 
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify='center'>
                  <Grid item>
                      <Button variant="outlined" color="primary">Add Post +</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="secondary">Delete Post -</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">Edit Post +</Button>
                  </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={1}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">Post Heading</Typography>
                  <Typography> Post description</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button size="small" color="primary">Comments</Button>
                  <Button size="small" color="primary">Comment +</Button>
                  <Button size="small" color="secondary">Delete -</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          </Grid>
        </Container>
    </main>
  );
}