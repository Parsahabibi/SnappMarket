import { Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Profile = (props: Props) => {
  return (
    <Grid>
        <Typography p={'50px'}>عه چه بعد شد فعلا فرصت نشده اینجا رو بزنم برو به صفحه اصلی</Typography>
        <Link href={'/'}>
           <Button variant='outlined'> خانه</Button>
        </Link>
    </Grid>
  )
}

export default Profile