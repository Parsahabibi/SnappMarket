import { Grid, List, ListItem, Typography } from '@mui/material'
import { textAlign } from '@mui/system'
import React, { useState } from 'react'
import { DataNavbarMobileCategory } from '../../../Data/DataNavbarMobileCategoryPage/DataNavbarMobileCategoryPage'

type Props = {
    id: number
}

const NavbarMobileCategoryPage = (props: Props) => {
    const [active, setActive] = useState();

  
    const styling: any = {
        transition:'background 180ms ease-in-out 0s, color 180ms ease-in-out 0s',
        backgroundColor:'rgba(75, 104, 251, 0.06)',
        color:'primary.main',
        borderColor:'rgba(5, 44, 240, 0.24)',
        
    }
    const handleActive = (id: number) => {
        setActive(id)
    }

    return (
        <Grid height={'5.6rem'} bgcolor={'common.white'} px={'2rem'}>
            <List style={{ display: 'flex', justifyContent: 'flex-start', overflowX: 'scroll' }}>
                {
                    DataNavbarMobileCategory.map(item => (
                        <ListItem key={item.id} onClick={() => handleActive(item.id)} style={{ padding: '0.5rem', cursor: 'pointer' }}>
                           {active === item.id ?  <Typography sx={styling}  fontSize={'1.2rem'} fontWeight={500} p={'0.6rem 1.6rem'} borderRadius={'1.6rem'} border={'0.1rem solid rgb(230, 230, 230)'} height={'3.4rem'} width={'max-content'}>{item.title}</Typography> :<Typography   fontSize={'1.2rem'} fontWeight={500} p={'0.6rem 1.6rem'} borderRadius={'1.6rem'} border={'0.1rem solid rgb(230, 230, 230)'} height={'3.4rem'} width={'max-content'}>{item.title}</Typography>}
                        </ListItem>
                    ))
                }
            </List>
        </Grid>
    )
}

export default NavbarMobileCategoryPage