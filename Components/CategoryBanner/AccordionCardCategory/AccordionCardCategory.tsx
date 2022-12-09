import React, { useState } from 'react'
import { Grid, Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import { dataCard } from '../../../Data/DataCategoryCard/DataCategoryCard';
import CategoryCard from '../CategoryCard/CategoryCard';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
type Props = {}

const AccordionCardCategory = (props: Props) => {

    const [show, setShow] = useState(false)
    const [title,setTitle]=useState('بیشتر')
    const [icon,setIcon]=useState(<KeyboardDoubleArrowDownIcon/>)
    const handleShowCard = () => {
        setShow(!show)
        if(show){
            setTitle('بیشتر')
            setIcon(<KeyboardDoubleArrowDownIcon/>)
        }
        else{
            setTitle('کمتر')
            setIcon(<KeyboardDoubleArrowUpIcon/>)
        }
    }

    return (
        <Grid item  xs={12}>
            {show ?
                 <Grid  item xs={12}  my={{xs:15,md:6,lg:4}}  display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'} gap={{ xs: '12px',md:'6px', lg: '10px' }} >
                 {dataCard.slice(4,20).map(item=>(
                   <Grid key={item.id} width={{md:'230px',lg:'280px'}} height={{xs:'88px',md:'20px'}} m={'0 0 120px 0'}>
                     <CategoryCard  title={item.title} image={item.image} priceReduction={item.priceReduction}/>
                   </Grid>
                 ))}
               </Grid>:
                ''}
            <Grid mt={{xs:'120px',md:5}} display={'flex'} justifyContent={'center'}  >
                <Button onClick={handleShowCard}>
                   <Grid sx={{color:'rgb(117, 117, 117)',transition: 'width 2s, height 4s'}}>
                   <Typography sx={{fontWeight:'bold',fontSize:'14px'}}>{`مشاهده دسته بندی های ${title}`}</Typography>
                    <Typography>{icon}</Typography>
                   </Grid>
                </Button>
            </Grid>
        </Grid >
    )
}

export default AccordionCardCategory