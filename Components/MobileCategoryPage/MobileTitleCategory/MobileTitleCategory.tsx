import { Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
interface MobileTitleCategoryPropsType {
    title: string,
    link: string
}

const MobileTitleCategory = ({title, link}: MobileTitleCategoryPropsType ) => {
  return (
    <Grid container px={'1.2rem'} mt={2}>
            <Grid display={'flex'} item xs={12} pb={2} justifyContent={'space-between'}>
                <Grid>
                    <Typography fontWeight={600} fontSize={'1.4rem'}>
                        {title}
                    </Typography>
                </Grid>
                <Link href={link}>
                    <Grid display={'flex'} alignItems={'center'} fontWeight={500} color={'primary.main'} sx={{cursor: 'pointer'}}>
                        <Typography fontSize={'1.4rem'}>
                          همه
                        </Typography>
                        <ArrowBackIosIcon/>
                    </Grid>
                </Link>
            </Grid>
        
        </Grid>
  )
}

export default MobileTitleCategory