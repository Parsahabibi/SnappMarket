import React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
type Props = {
  title: string
  icon: any,
  bgcolor: string,
  value:string
}

const ButtonProductCardSwiper = ({ title, icon, bgcolor,value }: Props) => {
  return (
    <Grid>
      <Button variant='outlined' sx={{ color: bgcolor, cursor: 'pointer' }}>{title} {icon} {value}</Button>
    </Grid>
  )
}

export default ButtonProductCardSwiper