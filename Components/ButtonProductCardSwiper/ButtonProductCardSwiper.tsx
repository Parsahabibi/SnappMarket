import React from 'react'
import  Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
type Props = {}

const ButtonProductCardSwiper = (props: Props) => {
  return (
    <Grid>
        <Button variant='outlined' sx={{fontSize:'10px',padding:'0 1rem',height:'2rem'}}>{'افزودن به سبد '}</Button>
    </Grid>
  )
}

export default ButtonProductCardSwiper