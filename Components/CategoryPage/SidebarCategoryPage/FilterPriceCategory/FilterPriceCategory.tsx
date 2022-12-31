import { FormControlLabel, FormGroup, Grid, Slider, Switch, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const FilterPriceCategory = (props: Props) => {
   

    return (
        <Grid mt={'0.8rem'}>
            <FormGroup style={{ borderRadius: '0.5rem', direction: 'ltr', backgroundColor: 'white', border: '0.1rem solid rgba(163, 163, 163, 0.25)', margin: '1.6rem auto' }}>
                <FormControlLabel style={{ display: 'flex', justifyContent: 'space-around', }} control={<Switch />} label="فقط کالا های موجود" />
            </FormGroup>
            <FormGroup style={{ borderRadius: '0.5rem', direction: 'ltr', backgroundColor: 'white', border: '0.1rem solid rgba(163, 163, 163, 0.25)', margin: '1.6rem auto' }}>
                <FormControlLabel style={{ display: 'flex', justifyContent: 'space-around', }} control={<Switch />} label="فقط کالا های تخفیف دار" />
            </FormGroup>
            

        </Grid>
    )
}

export default FilterPriceCategory