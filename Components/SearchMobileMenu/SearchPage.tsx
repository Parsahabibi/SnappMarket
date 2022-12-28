import React from 'react'
import { Grid, styled, TextField, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import dataSearch, { dataCard } from './DataSearchMobileMenu';
import Link from 'next/link';
import Image from 'next/image';


type Props = {}

const Search = (props: Props) => {

    const handleChange = ()=>{

    }


    const handleClear = ()=>{
        
    }


    const StyledTextField = styled(TextField)(({ theme }) => ({
        width: "100%",
        // height: "4.8rem",
        background: "rgb(248, 249, 253)",
        borderRadius: "0.8rem",
        // border:"0.1rem solid rgb(230, 230, 230)",

        "& label": {
            ...theme.typography["body1"],
            // color: "white",
        },
        "& .MuiOutlinedInput-root": {
            fontSize: "1.4rem",
            color: 'rgb(125 ,125 ,125)',
            borderRadius: "0.8rem",
            height: '4.0rem',
            '& fieldset': {
                borderColor: 'rgb(248, 249, 253)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(248, 249, 253)',
            },
        },
    }));

    return (
        <Grid overflow={"auto"}>
            <Grid bgcolor={"common.white"} container alignItems={"center"} justifyContent={"center"} pt={1} pb={1} borderBottom={0.25} borderColor={'rgb(230, 230, 230)'}>
                <ArrowForwardIcon style={{ width: "24px", height: "24px" }} />
                <Grid pr={1.25} width={"85%"}>
                    <StyledTextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        defaultValue=" جست و جو در برند یا محصول"
                        InputProps={{
                            endAdornment: <SearchIcon style={{ margin: "0 15px", width: "24px", height: "24px" }} />
                        }}
                    />
                </Grid>
            </Grid>
            <Grid bgcolor={"common.white"} sx={{ display: "flex", alignItems: "center", overflowX: "auto" }}>
                {
                    dataCard.map(item =>
                        <Grid key={item.id}>
                            <Grid mr={1.5} mt={1.5} mb={1.5} width={"32.1rem"} border={1} borderColor={"rgb(202, 211, 254)"} borderRadius={'0.8rem'} p={2} sx={{ display: "flex", alignItems: "center" }}>
                                <Grid>
                                    <Grid>
                                        {item.discount === '' ?
                                            <Grid ml={2} sx={{ display: "flex" }}>
                                                <Grid width={"228px"} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                    <Image style={{ width: '44px', height: '44px' }} src={item.image} alt={'panir'} />
                                                    <Typography variant='h3' pr={1}>
                                                        {item.title}
                                                    </Typography>
                                                </Grid>
                                                <Grid sx={{ display: "flex", alignItems: "center" }}>
                                                    <Typography variant='h3'>
                                                        {item.price}
                                                    </Typography>
                                                    <Typography>تومان</Typography>
                                                </Grid>
                                            </Grid> :
                                            <Grid sx={{ display: "flex", alignItems: "center" }}>
                                                <Grid width={"408px"} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                    <Image style={{ width: '44px', height: '44px' }} src={item.image} alt={'panir'} />
                                                    <Typography variant='h3' pr={1}>
                                                        {item.title}
                                                    </Typography>
                                                </Grid>
                                                <Grid pr={2} container alignItems={"center"}>
                                                    {item.discount < 10 ?
                                                        <Grid border={0.5} borderColor={"rgb(223, 29, 23)"} borderRadius={'0.4rem'} p={0.5} container alignItems={"center"} justifyContent={"center"} bgcolor={"common.white"} width={20} height={20}>
                                                            <Typography color={"secondary.main"}>
                                                                %{item.discount}
                                                            </Typography>
                                                        </Grid> :
                                                        <Grid borderRadius={'0.4rem'} ml={0.5} p={0.5} container alignItems={"center"} justifyContent={"center"} bgcolor={"secondary.main"} width={20} height={20}>
                                                            <Typography color={"common.white"}>
                                                                %{item.discount}
                                                            </Typography>
                                                        </Grid>
                                                    }
                                                    {/* parsa */}
                                                    <Grid sx={{ textDecoration: "line-through" }}>
                                                        <Typography variant='subtitle2'>
                                                            {item.oprice}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid container alignItems={"center"} pt={0.5}>
                                                        <Typography variant='h3'>
                                                            {item.price}
                                                        </Typography>
                                                        <Typography>تومان</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                }
                <Grid mr={1} ml={1.5} border={1} borderColor={"rgb(202, 211, 254)"} borderRadius={"0.8rem"}>
                    <Link href={'/'}>
                        <Grid p={2.4}>
                            <Typography variant='subtitle2' color={"primary.main"} style={{ border: "1px solid rgb(202, 211, 254)", borderRadius: "3.2rem", width: "85px", padding: "10px" }}>مشاهده همه</Typography>
                        </Grid>
                    </Link>
                </Grid>
            </Grid>
            <Grid mt={2} pt={3.5} bgcolor={"common.white"}>
                <Grid pr={3}>
                    <Typography variant='h2' color={'rgb(48,53,75)'}>
                        جستجوهای پرطرفدار
                    </Typography>
                </Grid>
                <Grid pt={2.5} pb={1} sx={{ display: "flex", alignItems: "center", overflow: "auto" }} mr={2} pl={2} gap={1.2}>
                    {
                        dataSearch.map(item =>
                            <Link href={'/'} key={item.id}>
                                <Grid width={"auto"} sx={{ display: "flex", alignItems: "center" }} border={1} borderColor={"rgb(155, 158, 174)"} borderRadius={'2.4rem'} pr={1.2} pl={1} pt={0.75} pb={0.75}>
                                    <Typography width={"auto"} sx={{ pl: 0.5 }} variant='subtitle2'>{item.name}</Typography>
                                    <KeyboardArrowLeftIcon />
                                </Grid>
                            </Link>
                        )
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Search