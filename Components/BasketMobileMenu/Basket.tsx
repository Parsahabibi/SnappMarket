import React, { useState } from 'react'
import { ButtonBase, Button, Grid, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import dataBasket from "./DataBasketMobileMenu"
import Image from 'next/image';
import LinearProgress from '@mui/material/LinearProgress';
import Link from 'next/link';
type Props = {}

const Basket = (props: Props) => {

    const [progress, setProgress] = React.useState(0);

    // React.useEffect(() => {
    //     const timer = setInterval(() => {
    //         setProgress((oldProgress) => {
    //             if (oldProgress === 100) {
    //                 return 0;
    //             }
    //             const diff = Math.random() * 5;
    //             return Math.min(oldProgress + diff, 100);
    //         });
    //     }, 500);

    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, []);

    const [count, setCount] = useState(1)

    return (
        <Grid bgcolor={"white"}>
            <Grid container alignItems={"center"} justifyContent={"space-around"} pt={2} pb={2} borderBottom={0.5} borderColor={'rgb(200,200,200)'} bgcolor={'rgb(255,255,255)'}>
                <Link href={'/'}>
                    <ArrowForwardIcon sx={{ width: 24, height: 24, }} />
                </Link>
                <Typography variant='h3' sx={{ display: "flex", alignItems: "center", pr: 2.5, pl: 2.5 }}>سبد خرید من (1 کالا)</Typography>
                {/* count */}
                <DeleteForeverOutlinedIcon sx={{ width: 24, height: 24 }} />
            </Grid>
            <Grid pt={1} pb={1} borderBottom={0.5} borderColor={'rgb(200,200,200)'} bgcolor={'rgb(255,255,255)'}>
                <Grid container justifyContent={"space-between"} pr={1.5} pl={1.5}>
                    <Typography variant='subtitle2' color={'rgb(150,150,150)'} >مبلغ سفارش</Typography>
                    <Typography color={'success.main'} variant='subtitle1'>200,000</Typography>
                </Grid>
                <Grid pt={0.5} pb={0.5} pr={2.7} width={"93%"}>
                    <LinearProgress style={{ height: "7px", borderRadius: "5px", backgroundColor: "rgb(240,240,240)" }} color='success' variant="determinate" value={progress} />
                </Grid>
                <Grid container justifyContent={"space-between"} pr={1.5} pl={1.5}>
                    <Typography variant='subtitle2' color={'rgb(150,150,150)'} >هزینه ارسال</Typography>
                    <Typography color={'success.main'} variant='subtitle1'>رایگان</Typography>
                </Grid>
            </Grid>
            <Grid>
                {
                    dataBasket.map(item =>
                        <Grid key={item.id} container pr={1.5} pt={2}>
                            <Grid width={70} height={131} container alignItems={"center"}>
                                <Image width={70} height={70} src={item.image} alt={item.name} />
                            </Grid>
                            <Grid pr={2}>
                                <Grid>
                                    <Typography variant='h3' maxWidth={190} pb={2}>
                                        {item.name}
                                    </Typography>
                                </Grid>
                                <Grid container alignItems={"center"} pb={0.5}>
                                    <Grid bgcolor={"secondary.main"} ml={1} container justifyContent={"center"} alignItems={"center"} sx={{ width: 30, height: 20, color: "common.white", borderRadius: "5px", textAlign: "center" }}>
                                        <Typography variant='caption' color={"common.white"}>
                                            {item.discount}
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{ textDecoration: "line-through", textDecorationColor: "rgb(180,180,180)" }}>
                                        <Typography color={"rgb(180,180,180)"}>{item.oprice}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid sx={{ display: "flex", alignItems: "baseline" }} gap={0.5}>
                                    <Typography variant='h3'>{item.price}</Typography>
                                    <Typography variant='subtitle1'>تومان</Typography>
                                </Grid>
                                <Grid mb={30} borderRadius={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} maxWidth={"10rem"} bgcolor={"primary.main"}>
                                    <Button>
                                        {count === 1 ? <DeleteForeverOutlinedIcon style={{ color: "white", paddingBottom: "1px", width: "21px", height: "21px" }} /> : <Typography style={{ width: "20px", height: "20px" }} variant='h2' color={"common.white"}>-</Typography>}
                                    </Button>
                                    <Typography variant='h2' color={"white"}>
                                        {count}
                                    </Typography>
                                    <Button>
                                        <Typography variant='h1' color={"common.white"}>+</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                }
            </Grid>
            <Grid bgcolor={"white"} container justifyContent={"space-between"} position={"fixed"} bottom={0} pl={2} pr={2} pb={1.5} pt={1} borderTop={0.5} borderColor={'rgb(200,200,200)'}>
                <Grid>
                    {
                        dataBasket.map(item =>
                            <Typography sx={{ fontSize: "1.7rem" }} pt={1} variant='h2' key={item.id}>
                                {item.price}تومان
                            </Typography>
                        )
                    }
                    <Typography variant='subtitle2' color={"primary.main"}>حداقل سفارش 100,000 تومان</Typography>
                </Grid>
                <ButtonBase sx={{
                    color: "common.white",
                    backgroundColor: "primary.main",
                    borderRadius: "1rem",
                    height: "4.8rem",
                    padding: "0.8rem 0.8rem",
                    minWidth: "48%",
                    marginTop: "0.5rem",
                }}>
                    <Typography color={"common.white"} variant='h3'>ورود / عضویت</Typography>
                </ButtonBase>
            </Grid>
        </Grid>
    )
}

export default Basket