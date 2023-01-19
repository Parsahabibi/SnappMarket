import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
type Props = {
    handleClose: Function | any;
    open: boolean;
    handleDeleteBasket: Function | any;
    totalCount: number
}

const ModalDeleteBasket = ({ handleClose, open, handleDeleteBasket, totalCount }: Props) => {

    return (
        <Grid>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Grid mt={4} display={'flex'} flexDirection={{ xs: 'column', sm: 'row' }} alignItems={'center'} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                    <Grid mr={2.5} width={'50px'} height={'50px'} borderRadius={'50%'} bgcolor={'rgb(231,226,254)'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <DeleteIcon style={{ width: '40px', height: '40px', color: 'rgb(51,123,240)' }} />
                    </Grid>
                    <Grid display={'flex'} flexDirection={{ xs: 'column' }} alignItems={{ xs: 'center', sm: 'flex-start' }} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                        <DialogTitle id="alert-dialog-title">
                            <Typography sx={{ fontSize: '1.9rem', fontWeight: 500, color: 'rgb(33,33,33)' }}> {"خالی کردن سبد خرید"}</Typography>
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <Typography textAlign={'center'} sx={{ fontSize: '1.4rem', color: 'rgb(33,33,33)' }}> {"آیا از خالی کردن سبد خرید خود اطمینان دارید؟"}</Typography>
                            </DialogContentText>
                        </DialogContent>
                    </Grid>
                </Grid>

                <DialogActions>
                    {totalCount >= 1 ? <Button sx={{
                        marginRight: '1.5rem',
                        color: "#fff",
                        backgroundColor: "primary.main",
                        border: "0.01rem solid rgb(230,235,254)",
                        borderRadius: "0.5rem",
                        padding: { xs: '0 1.5rem', sm: "0 5.6rem" },
                        height: "4.4rem",
                        fontWeight: "500",
                        fontSize: "1.2rem",
                        "&:hover": {
                            backgroundColor: "#2006F5",
                            color: "white",
                        },
                    }} onClick={handleDeleteBasket}>{'بله, حذف شود'}</Button> : <Button disabled sx={{
                        marginRight: '1.5rem',
                        color: "#000",
                        backgroundColor: "lightGray",
                        border: "0.01rem solid rgb(230,235,254)",
                        borderRadius: "0.5rem",
                        padding: { xs: '0 1.5rem', sm: "0 5.6rem" },
                        height: "4.4rem",
                        fontWeight: "500",
                        fontSize: "1.2rem",
                       
                    }} onClick={handleDeleteBasket}>{'بله, حذف شود'}</Button>}
                    <Button sx={{
                        margin: '1rem ',
                        color: "primary.main",
                        backgrond: "white",
                        border: "0.11rem solid rgb(230,235,254)",
                        borderRadius: "0.5rem",
                        padding: { xs: '0 4.5rem', sm: "0 8.6rem" },
                        height: "4.4rem",
                        fontWeight: "500",
                        fontSize: "1.2rem",
                        "&:hover": {
                            background: "gray",
                            color: "white",
                        },
                    }} onClick={handleClose} autoFocus>
                        {'لغو'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    )
}

export default ModalDeleteBasket