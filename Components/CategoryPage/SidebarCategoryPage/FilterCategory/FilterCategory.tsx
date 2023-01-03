import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Grid, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { dataFilterSidebar } from '../../../../Data/DataSidebarCategory/DataSidebarCategory';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
type Props = {}
const StyledTextField = styled(TextField)(({ theme }) => ({
    height: "4rem",
    width:'80%',
    background: "white",
    borderRadius: "0.8rem",
    "& label": {
        ...theme.typography["body1"],
        color: "rgb(141,141,141)",
    },
    "& .MuiOutlinedInput-root": {
        borderRadius: "0.8rem",
        height: "4rem",
        fontSize: "1.3rem",
    },
}));
const FilterCategory = (props: Props) => {
    const [firstAccordion, setFirstAccordion] = useState(false)
    const [secondaryAccordion, setSecondaryAccordion] = useState(false)
    const [thirdAccordion, setThirdAccordion] = useState(false)
    
    const handleAccordion = (id: number) => {
        if (id === 1) {
            setFirstAccordion(!firstAccordion)
        }
        else if (id === 4) {
            setSecondaryAccordion(!secondaryAccordion)
        }
        else if (id === 21) {
            setThirdAccordion(!thirdAccordion)

        }
    }

    return (
        <Grid>
            {dataFilterSidebar.slice(0, 1).map(item => (
                <Grid border={'0.1rem solid rgba(163, 163, 163, 0.25)'} bgcolor={'common.white'} borderRadius={'0.5rem'} p={'0.5rem 0px'}>
                    <AccordionSummary onClick={() => handleAccordion(item.id)}
                        expandIcon={firstAccordion ? <KeyboardArrowUpIcon style={{ width: '30px', height: '30px' }} /> : <ExpandMoreIcon style={{ width: '30px', height: '30px' }} />}
                    >
                        <Typography fontSize={'1.4rem'} fontWeight={'bold'} color={'rgb(26,28,35)'}>{item.title}</Typography>
                    </AccordionSummary>
                    {firstAccordion ? <AccordionDetails style={{ maxHeight: '200px' }} >
                        <FormGroup>
                            {item.subset.map(item => (
                                <FormControlLabel sx={{ m: '0px -1rem 0px 0px', color: 'rgb(117,117,117)', fontSize: '1.4rem', fontWeight: '300' }} control={<Checkbox />} label={item.checkbox} />
                            ))}

                        </FormGroup>
                    </AccordionDetails> : ''}
                </Grid>
            ))}
            {dataFilterSidebar.slice(1, 2).map(item => (
                <Grid my={1} border={'0.1rem solid rgba(163, 163, 163, 0.25)'} bgcolor={'common.white'} borderRadius={'0.5rem'} p={'0.5rem 0px'}>
                    <AccordionSummary onClick={() => handleAccordion(item.id)}
                        expandIcon={secondaryAccordion ? <KeyboardArrowUpIcon style={{ width: '30px', height: '30px' }} /> : <ExpandMoreIcon style={{ width: '30px', height: '30px' }} />}
                    >
                        <Typography fontSize={'1.4rem'} fontWeight={'bold'} color={'rgb(26,28,35)'}>{item.title}</Typography>
                    </AccordionSummary>
                    {secondaryAccordion ? <>
                        <Grid>
                            {/* <TextField sx={{ mx: '15px', width: '80%' }} /> */}
                            <StyledTextField
                                placeholder="جست و جوی برند"
                                fullWidth
                                sx={{
                                    display: "flex",
                                    position: "relative",
                                    alignSelf: "center",
                                    m: "0px 16px 5px 0px",
                                }}
                            ></StyledTextField>
                        </Grid>
                        <Grid borderBottom={' 0.1rem solid rgb(235, 236, 242)'} p={'0.2rem 0px'} />
                        <AccordionDetails style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                            <FormGroup>
                                {item.subset.map(item => (
                                    <FormControlLabel sx={{ mx: '-10px' }} control={<Checkbox />} label={item.checkbox} />
                                ))}

                            </FormGroup>
                        </AccordionDetails></> : ''}
                </Grid>
            ))}
            {dataFilterSidebar.slice(2, 3).map(item => (
                <Grid my={1} border={'0.1rem solid rgba(163, 163, 163, 0.25)'} bgcolor={'common.white'} borderRadius={'0.5rem'} p={'0.5rem 0px'}>
                    <AccordionSummary onClick={() => handleAccordion(item.id)}
                        expandIcon={thirdAccordion ? <KeyboardArrowUpIcon style={{ width: '30px', height: '30px' }} /> : <ExpandMoreIcon style={{ width: '30px', height: '30px' }} />}
                    >
                        <Typography fontSize={'1.4rem'} fontWeight={'bold'} color={'rgb(26,28,35)'}>{item.title}</Typography>
                    </AccordionSummary>
                    {thirdAccordion ? <>
                        <Grid>
                            {/* <TextField sx={{ mx: '15px', width: '80%' }} /> */}
                            <StyledTextField
                                placeholder="جست و جوی نوع"
                                fullWidth
                                sx={{
                                    display: "flex",
                                    position: "relative",
                                    alignSelf: "center",
                                    m: "0px 16px 5px 0px",
                                }}
                            ></StyledTextField>
                        </Grid>
                        <Grid borderBottom={' 0.1rem solid rgb(235, 236, 242)'} p={'0.2rem 0px'} />
                        <AccordionDetails style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                            <FormGroup>
                                {item.subset.map(item => (
                                    <FormControlLabel sx={{ mx: '-10px' }} control={<Checkbox />} label={item.checkbox} />
                                ))}

                            </FormGroup>
                        </AccordionDetails></> : ''}
                </Grid>
            ))}
        </Grid>
    )
}

export default FilterCategory