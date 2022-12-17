import { Grid, InputAdornment, TextField, Typography } from '@mui/material'
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,

};

type Props = {}

const LoginModal = (props: Props) => {

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState({})
    const limit = 11
  
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setValue({ ...value, [e.target.name]: e.target.value })
                
    }
    console.log(value)


    return (
        <Grid>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 500 }}>
                    <Grid display={'flex'} flexDirection={'column'}>
                        <Grid display={'flex'} justifyContent={'center'} position={'relative'}>
                            <Button style={{ position: 'absolute', left: '-10%', top: '-60%' }} color={'info'} onClick={handleClose}><CloseIcon style={{ width: '30px', height: '30px' }} /></Button>
                            <Typography fontSize={'1.6rem'}>{'برای ثبت سفارش باید وارد شوید'}</Typography>
                        </Grid>
                        <Typography pt={4} textAlign={'center'} m={'2.4rem 0px 1.8rem'} fontSize={'1.4rem'} color={'info.light'}>{'شماره موبایل خود را وارد کنید تا کد تایید برایتان ارسال شود'}</Typography>
                        <Typography pt={1} pr={6}>{'موبایل *'}</Typography>
                        <Grid display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
                            <TextField
                                sx={{ m: 1, width: '80%' }}
                                placeholder='شماره موبایل'
                                onChange={handleChange}
                                inputProps={{
                                    maxLength: limit
                                }}
                            value={value.name}
                            name={'number'}

                            />
                        </Grid>
                        <Grid display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            {limit === 11 ? <Button sx={{ m: 1, width: '80%', bgcolor: 'red' }}>{'ارسال کد تایید'}</Button> : <Button sx={{ m: 1, width: '80%' }} >{'ارسال کد تایید'}</Button>}
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </Grid>
    )
}

export default LoginModal