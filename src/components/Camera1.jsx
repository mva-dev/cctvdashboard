import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material'
import vid1 from '../media/vid1.mp4'
const Camera1 = () => {
  return (
    <>
      <Grid container mx={1} my={1} spacing={2}> {/*grid container for camera preview and graph */}

        <Grid item xs={12} md={6}>     {/*camera preview grid item */}
          <Card sx={{ bgcolor: "#FFFFFF", marginRight: 5 }}>
            <CardMedia
              component="video"
              autoPlay
              controls
              height='400'
              src={vid1}
              // image={img1}
              alt='camera stream'
            />
            <CardContent >
              <Typography gutterBottom variant='h6' component='div'>
                Camera 1
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis finibus dignissim. Sed sit amet gravida sem. Aliquam in nibh eu purus ultricies porttitor. Proin interdum suscipit lacus, a consequat lectus porta non. Sed ullamcorper pretium fringilla. Phasellus nec mi neque. Mauris iaculis quam et metus consequat fringilla. Maecenas nec orci eu massa aliquam dictum at id libero.

                Morbi vel magna quis lectus faucibus bibendum. Nulla varius nulla ut ipsum condimentum, ac pellentesque magna egestas. Integer ullamcorper dignissim turpis vel vestibulum. Nam vulputate feugiat libero, vehicula vestibulum elit. Donec quis purus eget sapien consequat convallis nec eu libero. Vivamus vitae tempor felis. Sed maximus dapibus porttitor.

                Nulla dignissim consequat lectus ac commodo. In hac habitasse platea dictumst. Nullam non ligula urna. In vitae facilisis purus. Fusce enim magna, vehicula sit amet dapibus vel, iaculis vitae massa. Donec placerat dignissim auctor. Proin mauris elit, mollis sit amet viverra vel, auctor vel augue. Vestibulum aliquet enim eget velit auctor, ac mattis enim iaculis. Sed quis auctor nunc, vel tristique nibh.

                Nulla et feugiat dolor. In egestas diam fermentum mi mollis, sit amet ornare diam vulputate. Donec eu erat vestibulum mauris vehicula pharetra. Phasellus et nisi nibh. Sed rutrum convallis enim non ultrices. Cras egestas sed tellus sagittis rhoncus. Sed vel felis tempus sem tempor efficitur. Fusce mattis nibh id sem mattis, ac mattis est ultrices. Ut feugiat ultricies convallis. Morbi risus dolor, semper ac sapien in, pellentesque pulvinar sem. Maecenas aliquam velit at velit hendrerit, eu ornare neque interdum. Ut non porta sem. Quisque sit amet purus vehicula, tristique dolor eu, malesuada magna. Maecenas nibh nibh, auctor ac fringilla vel, scelerisque sit amet metus.

                Pellentesque ac mi fringilla, vestibulum purus at, tempus nibh. Quisque eu malesuada lectus, a venenatis erat. Aliquam in lectus justo. Maecenas scelerisque finibus bibendum. Suspendisse bibendum erat vel elementum suscipit. Donec gravida metus eget massa posuere consequat. Proin imperdiet quam sed leo auctor laoreet. Nam ut ultricies orci, ut accumsan sapien. Suspendisse quis est mollis, egestas quam sit amet, fermentum nibh. Vestibulum porta massa sit amet elementum vulputate. Sed ultricies eleifend elit, fermentum scelerisque ligula iaculis porta. Suspendisse convallis tortor eu ullamcorper mattis. In magna mauris, porttitor non orci sit amet, porta maximus tortor. Aliquam iaculis efficitur nisl, id accumsan libero.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis finibus dignissim. Sed sit amet gravida sem. Aliquam in nibh eu purus ultricies porttitor. Proin interdum suscipit lacus, a consequat lectus porta non. Sed ullamcorper pretium fringilla. Phasellus nec mi neque. Mauris iaculis quam et metus consequat fringilla. Maecenas nec orci eu massa aliquam dictum at id libero.

                Morbi vel magna quis lectus faucibus bibendum. Nulla varius nulla ut ipsum condimentum, ac pellentesque magna egestas. Integer ullamcorper dignissim turpis vel vestibulum. Nam vulputate feugiat libero, vehicula vestibulum elit. Donec quis purus eget sapien consequat convallis nec eu libero. Vivamus vitae tempor felis. Sed maximus dapibus porttitor.

                Nulla dignissim consequat lectus ac commodo. In hac habitasse platea dictumst. Nullam non ligula urna. In vitae facilisis purus. Fusce enim magna, vehicula sit amet dapibus vel, iaculis vitae massa. Donec placerat dignissim auctor. Proin mauris elit, mollis sit amet viverra vel, auctor vel augue. Vestibulum aliquet enim eget velit auctor, ac mattis enim iaculis. Sed quis auctor nunc, vel tristique nibh.

                Nulla et feugiat dolor. In egestas diam fermentum mi mollis, sit amet ornare diam vulputate. Donec eu erat vestibulum mauris vehicula pharetra. Phasellus et nisi nibh. Sed rutrum convallis enim non ultrices. Cras egestas sed tellus sagittis rhoncus. Sed vel felis tempus sem tempor efficitur. Fusce mattis nibh id sem mattis, ac mattis est ultrices. Ut feugiat ultricies convallis. Morbi risus dolor, semper ac sapien in, pellentesque pulvinar sem. Maecenas aliquam velit at velit hendrerit, eu ornare neque interdum. Ut non porta sem. Quisque sit amet purus vehicula, tristique dolor eu, malesuada magna. Maecenas nibh nibh, auctor ac fringilla vel, scelerisque sit amet metus.

                Pellentesque ac mi fringilla, vestibulum purus at, tempus nibh. Quisque eu malesuada lectus, a venenatis erat. Aliquam in lectus justo. Maecenas scelerisque finibus bibendum. Suspendisse bibendum erat vel elementum suscipit. Donec gravida metus eget massa posuere consequat. Proin imperdiet quam sed leo auctor laoreet. Nam ut ultricies orci, ut accumsan sapien. Suspendisse quis est mollis, egestas quam sit amet, fermentum nibh. Vestibulum porta massa sit amet elementum vulputate. Sed ultricies eleifend elit, fermentum scelerisque ligula iaculis porta. Suspendisse convallis tortor eu ullamcorper mattis. In magna mauris, porttitor non orci sit amet, porta maximus tortor. Aliquam iaculis efficitur nisl, id accumsan libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis finibus dignissim. Sed sit amet gravida sem. Aliquam in nibh eu purus ultricies porttitor. Proin interdum suscipit lacus, a consequat lectus porta non. Sed ullamcorper pretium fringilla. Phasellus nec mi neque. Mauris iaculis quam et metus consequat fringilla. Maecenas nec orci eu massa aliquam dictum at id libero.

                Morbi vel magna quis lectus faucibus bibendum. Nulla varius nulla ut ipsum condimentum, ac pellentesque magna egestas. Integer ullamcorper dignissim turpis vel vestibulum. Nam vulputate feugiat libero, vehicula vestibulum elit. Donec quis purus eget sapien consequat convallis nec eu libero. Vivamus vitae tempor felis. Sed maximus dapibus porttitor.

              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>     {/*graphs grid item */}
          <Grid container direction="column" spacing={2}>  {/*graphs container aligned vertically */}
            <Grid item>                {/*People in stores bar graph*/}
              <Card sx={{ bgcolor: "#FFFFFF", marginRight: 5 }}>
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    People in stores
                  </Typography>
                  <BarChart
                    yAxis={[
                      {
                        label: 'People count'
                      }
                    ]}
                    xAxis={[
                      {
                        id: 'barCategories',
                        data: ['08:00', '09:00', '10:00', '11:00', '12:00'],
                        scaleType: 'band',
                        label: 'Time in Hrs',
                        dataKey: 'time'
                      }
                    ]}
                    series={[
                      {
                        data: [30, 40, 15, 20, 10],
                        color: '#76b7b2'
                      }
                    ]}
                    // width={500}
                    height={250}

                  // {...chartSetting}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item>             {/*Emotional Intensity Distribution pie chart grid item */}
              <Card sx={{ bgcolor: "#FFFFFF", marginRight: 5 }}>
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    Emotional Intensity Distribution
                  </Typography>
                  <PieChart
                    colors={['#538cc6', '#33ff99', '#a3a375', '#ffa64d', '#ff99dd']}
                    series={[
                      {
                        data: [
                          { id: 0, value: 25, label: 'Joy' },
                          { id: 1, value: 15, label: 'Anxious' },
                          { id: 2, value: 30, label: 'Surprise' },
                          { id: 3, value: 10, label: 'fear' },
                          { id: 4, value: 20, label: 'anger' },
                        ],
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                      },
                    ]}
                    // width={400}
                    height={200}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item>             {/*People per location pie chart grid item */}
              <Card sx={{ bgcolor: "#FFFFFF", marginRight: 5 }}>
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    People per location
                  </Typography>
                  <PieChart
                    series={[
                      {
                        data: [
                          { id: 0, value: 25, label: 'Near Entrance' },
                          { id: 1, value: 15, label: 'Middle' },
                          { id: 2, value: 30, label: 'End' },
                        ],
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                      },
                    ]}
                    // width={400}
                    height={200}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item>                {/*People per product bar graph*/}
              <Card sx={{ bgcolor: "#FFFFFF", marginRight: 5 }}>
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    People per product
                  </Typography>
                  <BarChart
                    yAxis={[
                      {
                        label: 'People count'
                      }
                    ]}
                    xAxis={[
                      {
                        id: 'barCategories',
                        data: ['Adidas', 'Nike', 'Puma', 'Levis', 'Spunk'],
                        scaleType: 'band',
                        label: 'Products',
                        dataKey: 'time'
                      }
                    ]}
                    series={[
                      {
                        data: [30, 40, 15, 20, 10],
                        color: '#76b7b2'
                      }
                    ]}
                    // width={500}
                    height={250}

                  // {...chartSetting}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item>                {/*Dwell time per product bar graph*/}
              <Card sx={{ bgcolor: "#FFFFFF", marginRight: 5 }}>
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    Dwell time per product
                  </Typography>
                  <BarChart
                    yAxis={[
                      {
                        label: 'Time in Hrs'
                      }
                    ]}
                    xAxis={[
                      {
                        id: 'barCategories',
                        data: ['Adidas', 'Nike', 'Puma', 'Levis', 'Spunk'],
                        scaleType: 'band',
                        label: 'Products',
                        dataKey: 'time'
                      }
                    ]}
                    series={[
                      {
                        data: [3, 4, 1, 2, 1],
                        color: '#76b7b2'
                      }
                    ]}
                    // width={500}
                    height={250}

                  // {...chartSetting}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

      </Grid>



    </>
  )
}

export default Camera1