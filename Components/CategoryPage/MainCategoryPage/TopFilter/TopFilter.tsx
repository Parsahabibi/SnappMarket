import { Grid, List, ListItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import { dataFilterCategoryPage } from '../../../../Data/DataFilterCategoryPage/DataFilterCategoryPage'

type Props = {
    id: number
}

const TopFilter = ({id}: Props) => {
    const [active, setActive] = useState(id);

  
    const styling: any = {
        transition:'background 180ms ease-in-out 0s, color 180ms ease-in-out 0s',
        backgroundColor:'rgba(75, 104, 251, 0.06)',
        color:'primary.main',
        borderColor:'rgba(5, 44, 240, 0.24)',
        
    }
    const handleActive = (id: number) => {
        setActive(id)
    }
    console.log(active);
    return (
        <Grid display={'flex'} alignItems={'center'} sx={{overflowX:'scroll',borderTopLeftRadius:'0.4rem',borderTopRightRadius:'0.4rem',border:'0.1rem solid rgb(238, 238, 238)',lineHeight:1.5,bgcolor:'common.white'}}mt={2} >
            <Typography fontSize={'1.3rem'} m={'0px 1rem 0px 0.8rem'}color={'rgb(26, 28, 35)'}>{'مرتب سازی بر اساس :'}</Typography>
           <Grid width={'70%'}>
           <List style={{display:'flex'}} >
                {dataFilterCategoryPage.map(item => (
                    <ListItem  key={item.id} onClick={() => handleActive(item.id)} style={{ padding: '0.5rem', cursor: 'pointer' }}>
                          {active === item.id ?   <Typography sx={{cursor:'pointer'}} p={'0.5rem 1rem'} fontSize={'1.3rem'} borderRadius={'2.3rem'} color={'common.white'} bgcolor={'rgb(85, 111, 247)'}  width={'max-content'}>{item.title}</Typography> :<Typography  sx={{cursor:'pointer'}} p={'0.5rem 1rem'} fontSize={'1.3rem'} borderRadius={'2.3rem'}    width={'max-content'} color={' rgb(64, 64, 64)'}>{item.title}</Typography>}
                       
                    </ListItem>
                ))}
            </List>
           </Grid>
        </Grid>
    )
}

export default TopFilter