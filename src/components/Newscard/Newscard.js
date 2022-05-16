import React from 'react'
import {Card,CardActions,CardActionArea,CardClasses,CardMedia,Button,Typography, CardContent} from '@mui/material'
import { useEffect ,createRef} from 'react'
import { useState } from 'react'
function Newscard({data:{description,publishedAt,source,title,url,urlToImage},i,activeart}) {
  
  const [elRefs, setelRefs] = useState([])
  const rollRef = ((ref)=>window.scroll(0,ref.current.offsetTop - 50))
  useEffect(()=>{
    setelRefs((ref)=>Array(20).fill().map((_,j)=>ref[j] || createRef()))

  })
  useEffect(()=>{
    if(i===activeart && elRefs[activeart]){
      rollRef(elRefs[activeart])
    }

  },[i,activeart,elRefs])
  return (
    <Card ref={elRefs[i]} style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}  className={activeart===i?"cardbtm":null} >
      <CardActionArea href={url} target='_blank'>
        <CardMedia image={urlToImage} style={{height:250}}/>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:'7px 10px '}}>
          <Typography variant='body2' color="textSecondary" component='h2'>{(new Date(publishedAt)).toDateString()}</Typography>
          <Typography variant='body2' color="textSecondary" component='h2'>{source.name}</Typography>
        </div>
        <Typography style={{padding:'0 10px'}} gutterBottom variant='h5'>{title}</Typography>
        <CardContent>
        <Typography variant='body2' color="textSecondary" component='p'>{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:'7px 10px'}}>
        <Button size='small' color="primary" >Learn More</Button>
        <Typography variant='h5' color="textSecondary" >{i+1}</Typography>
      </CardActions>
    </Card>
  )
}

export default Newscard