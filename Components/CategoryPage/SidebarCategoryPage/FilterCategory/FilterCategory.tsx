import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { dataFilterSidebar } from '../../../../Data/DataSidebarCategory/DataSidebarCategory';

type Props = {}

const FilterCategory = (props: Props) => {
  return (
    <Grid>
         {dataFilterSidebar.slice(0,1).map(item => (
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{maxHeight:'200px',overflowY:'scroll'}}>
                        <FormGroup >
                            {item.subset.map(item=>(
                                <FormControlLabel control={<Checkbox  />} label={item.checkbox}/>
                            ))}
                            
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
            ))}
            {dataFilterSidebar.slice(1,3).map(item => (
                <Accordion  style={{margin:'10px 0'}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <TextField/>
                    <AccordionDetails style={{maxHeight:'200px',overflowY:'scroll'}}>
                        <FormGroup>
                            {item.subset.map(item=>(
                                <FormControlLabel control={<Checkbox  />} label={item.checkbox}/>
                            ))}
                            
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
            ))}
    </Grid>
  )
}

export default FilterCategory