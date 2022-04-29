import React from 'react'
import Newscard from '../Newscard/Newscard'
import { Grid, Grow, Typography } from '@mui/material'
import useStyles from './styles'
function Newscards({ data,activeart }) {
    console.log('data2', data)
    // const classes = useStyles()
    const infoCards = [
        { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
        { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
        { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
        { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
    ];
    if (!data.length) {
        return <Grow in>
            <Grid container alignItems='stretch' spacing={3} padding={10} style={{fontFamily:'sans-serif'}}>
                {
                    infoCards?.map((v, i) => (
                        <Grid xs={12} sm={6} md={4} lg={3} style={{display:'flex',color:'white'}} item>
                            <div style={{ backgroundColor: v.color ,display:'flex',flexDirection:'column',justifyContent:'space-between',height:'300px',alignItems:'center',padding:'20px',textAlign:'center'}} >
                                <Typography variant='h5' style={{fontSize:'18px',fontFamily:'cursive',fontWeight:'500'}} >{v.title}</Typography>
                                {v?.info ? <Typography variant='h6' style={{fontSize:'18px',fontFamily:'cursive',fontWeight:'100'}} >
                                    <strong style={{fontSize:'18px',fontFamily:'cursive',fontWeight:'500'}}>
                                        {
                                            v?.title?.split(' ')[2]


                                        }
                                        <br />
                                        {
                                            v?.info
                                        }
                                    </strong>
                                </Typography> : null}
                                <Typography variant='h6' style={{fontSize:'15px',fontFamily:'cursive',fontWeight:'500'}} >Trying saying :{v?.text}</Typography>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>
        </Grow>

    }

    return (

        <Grow in>
            <Grid padding={10} container alignItems='stretch' spacing={3}>
                {
                    data?.map((val, index) => {
                        return <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                            <Newscard data={val} i={index} activeart={activeart} />
                        </Grid>

                    })

                }

            </Grid>
        </Grow>
    )
}

export default Newscards