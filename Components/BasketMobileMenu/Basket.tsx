import React, { useState } from 'react'
import { ButtonBase, Button, Grid, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Image from 'next/image';
import LinearProgress from '@mui/material/LinearProgress';
import Link from 'next/link';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';
import Divider from '@mui/material/Divider';
import { addItemToCart, clearCart, decreaseItemFromCart } from "../../redux/Slice/Slice";
import { useSelector, useDispatch } from "react-redux";
import ModalDeleteBasket from '../BasketModal/ModalDeleteBasket';
type Props = {}

const Basket = (props: Props) => {

    const [progress, setProgress] = React.useState(0);
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart);
    const totalCount = cartItems.reduce((prev: any, p: any) => prev + p.count, 0);
    const totalPrice = cartItems.reduce((prev: any, p: any) => prev + p.price * p.count, 0);
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
    const handleDeleteBasket = () => {
        dispatch(clearCart())

    }
    const [openModal, setOpenModal] = React.useState(false);

    const handleClickOpen = () => {
        setOpenModal(!openModal);
    };

    const handleClose = () => {
        setOpenModal(!openModal);
    };
    return (
        <Grid bgcolor={"white"} position={'relative'}>
            <Grid position={'fixed'} right={0} left={0}>
                <Grid container alignItems={"center"} justifyContent={"space-around"} pt={2} pb={2} borderBottom={0.5} borderColor={'rgb(200,200,200)'} bgcolor={'rgb(255,255,255)'}>
                    <Link href={'/'}>
                        <ArrowForwardIcon sx={{ width: 24, height: 24, }} />
                    </Link>
                    <Typography variant='h3' sx={{ display: "flex", alignItems: "center", pr: 2.5, pl: 2.5 }}>سبد خرید من ({totalCount} کالا)</Typography>
                    <Typography sx={{ cursor: 'pointer' }}  onClick={handleClickOpen}>
                        <DeleteForeverOutlinedIcon sx={{ width: 24, height: 24 }} />
                        <ModalDeleteBasket open={openModal} handleClose={handleClose} handleDeleteBasket={handleDeleteBasket} totalCount={totalCount}/>
                    </Typography>

                </Grid>
                <Grid pt={1} pb={1} borderBottom={0.5} borderColor={'rgb(200,200,200)'} bgcolor={'rgb(255,255,255)'}>
                    <Grid container justifyContent={"space-between"} pr={1.5} pl={1.5}>
                        <Typography variant='subtitle2' color={'rgb(150,150,150)'} >مبلغ سفارش</Typography>
                        <Typography color={'success.main'} variant='subtitle1'>{totalPrice}</Typography>
                    </Grid>
                    <Grid pt={0.5} pb={0.5} pr={2.7} width={"93%"}>
                        <LinearProgress style={{ height: "7px", borderRadius: "5px", backgroundColor: "rgb(240,240,240)" }} color='success' variant="determinate" value={progress} />
                    </Grid>
                    <Grid container justifyContent={"space-between"} pr={1.5} pl={1.5}>
                        <Typography variant='subtitle2' color={'rgb(150,150,150)'} >هزینه ارسال</Typography>
                        <Typography color={'success.main'} variant='subtitle1'>رایگان</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid mb={10} pt={18}>
                {cartItems.length ? (
                    <>
                        {cartItems.map((p: any) => (
                            <Grid key={p.id}>
                                <Grid container pr={1.5} pt={2} height={'max-content'}>
                                    <Grid width={70} height={100} container alignItems={"center"}>
                                        <Image width={70} height={70} src={p.image} alt={p.name} />
                                    </Grid>
                                    <Grid pr={2}>
                                        <Grid>
                                            <Typography variant='h3' maxWidth={190} pb={2}>
                                                {p.title}
                                            </Typography>
                                        </Grid>
                                        <Grid container alignItems={"center"} pb={0.5}>
                                            <Grid bgcolor={"secondary.main"} ml={1} container justifyContent={"center"} alignItems={"center"} sx={{ width: 30, height: 20, color: "common.white", borderRadius: "5px", textAlign: "center" }}>
                                                <Typography variant='caption' color={"common.white"}>
                                                    {p.Discount}
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{ textDecoration: "line-through", textDecorationColor: "rgb(180,180,180)" }}>
                                                <Typography color={"rgb(180,180,180)"}>{p.price}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid sx={{ display: "flex", alignItems: "baseline" }} gap={0.5}>
                                            <Typography variant='h3'>{p.price}</Typography>
                                            <Typography variant='subtitle1'>تومان</Typography>
                                        </Grid>
                                        <Grid mb={2} borderRadius={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} maxWidth={"11rem"} bgcolor={"primary.main"} >
                                            <Grid>
                                                <Button onClick={() => dispatch(decreaseItemFromCart(p))}>
                                                    {p.count === 1 ? <DeleteForeverOutlinedIcon style={{ color: "white", width: "21px", height: "21px" }} /> : <Typography style={{ width: "20px", height: "20px" }} variant='h2' color={"common.white"}><RemoveIcon /></Typography>}
                                                </Button>
                                            </Grid>
                                            <Typography variant='h2' color={"white"}>
                                                {p.count}
                                            </Typography>
                                            <Grid pt={0.5}>
                                                <Button onClick={() => dispatch(addItemToCart(p))}>
                                                    <Typography color={"common.white"}><AddIcon sx={{ width: "20px", height: "20px" }} /></Typography>
                                                </Button>
                                            </Grid>

                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Divider />
                            </Grid>
                        ))}
                    </>
                ) : (
                    <Typography>
                        {"سبد خرید شما خالی می باشد"}
                    </Typography>
                )}

            </Grid>
            <Grid bgcolor={"white"} container justifyContent={"space-between"} position={"fixed"} bottom={0} pl={2} pr={2} pb={1.5} pt={1} borderTop={0.5} borderColor={'rgb(200,200,200)'}>
                <Grid>
                    <Typography sx={{ fontSize: "1.7rem" }} pt={1} variant='h2' >
                        {totalPrice}تومان
                    </Typography>
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