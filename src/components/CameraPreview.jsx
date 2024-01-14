import React from 'react'
import { Grid, Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'
import img1 from '../media/img51.png'
import vid1 from '../media/vid1.mp4'
import img2 from '../media/img52.jpg'
import img3 from '../media/img53.avif'
import DateTimePickerComponent from './DateTimePickerComponent'
import { ButtonGroupComponent } from './ButtonGroupComponent'
import { Link } from 'react-router-dom'

export const CameraPreview = () => {
    return (
        <>
            <DateTimePickerComponent />
            <ButtonGroupComponent />
            <Grid container my={4} sx={{ marginLeft: "15px" }}>
                <Grid item xs>
                    <Box width='400px'>
                        <Card sx={{ bgcolor:"#FFFFFF"}}>
                            <CardMedia
                                component="video"
                                autoPlay
                                controls
                                // height='400'
                                src={vid1}
                                alt='camera stream'
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component='div'>
                                    Camera 1
                                </Typography>
                                <Typography variant='body2' color='text.secondary'>
                                    React is a javascript library for building user interfaces. React can be used as a base in the developement of single-page or mobile applications.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to='/camera1'>
                                    <Button>More</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box width='400px'>
                        <Card sx={{ bgcolor:"#FFFFFF"}}>
                            <CardMedia
                                component="video"
                                autoPlay
                                controls
                                // height='400'
                                src={vid1}
                                alt='camera stream'
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component='div'>
                                    Camera 2
                                </Typography>
                                <Typography variant='body2' color='text.secondary'>
                                    React is a javascript library for building user interfaces. React can be used as a base in the developement of single-page or mobile applications.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button>More</Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box width='400px'>
                        <Card sx={{ bgcolor:"#FFFFFF"}}>
                            <CardMedia
                                component="video"
                                autoPlay
                                controls
                                // height='400'
                                src={vid1}
                                alt='camera stream'
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component='div'>
                                    Camera 3
                                </Typography>
                                <Typography variant='body2' color='text.secondary'>
                                    React is a javascript library for building user interfaces. React can be used as a base in the developement of single-page or mobile applications.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button>More</Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>

            </Grid>
        </>

    )
}
