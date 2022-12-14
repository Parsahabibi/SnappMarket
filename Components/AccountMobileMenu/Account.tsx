import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import data from "./DataAccountMobileMenu"
interface Props {

}

const Account = (props: Props) => {
    return (
        <Grid>
            <Grid container width={"100%"} bgcolor={"rgb(255,255,255)"}>
                <Grid pt={2} pr={3}>
                    <ArrowForwardIcon style={{ width: 20, height: 20 }} />
                </Grid>
                <Grid pt={2} pr={10}>
                    <Typography variant='h3'>حساب کاربری</Typography>
                </Grid>
            </Grid>
            <Grid>
                {
                    data.map(item =>
                        <Grid pt={3.25} key={item.id} container alignItems={'flex-start'}>
                            <Grid pr={2} pl={2}>
                                {
                                    item.icon
                                }
                            </Grid>
                            <Grid borderBottom={0.5} borderColor={'rgb(242, 242, 242)'} pb={3.25}>
                                <Typography variant='h2'>
                                    {item.title}
                                </Typography>
                            </Grid>
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
    )
}

export default Account
