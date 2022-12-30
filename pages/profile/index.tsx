import { Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Account from '../../Components/AccountMobileMenu/Account'

type Props = {}

const Profile = (props: Props) => {
  return (
    <Grid>
        <Account/>
    </Grid>
  )
}

export default Profile