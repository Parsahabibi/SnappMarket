import Grid from "@mui/material/Grid";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Modal from "@mui/material/Modal";
import { Container, Typography } from "@mui/material";
import Image from "next/image";
import image13 from '../../assets/Images/ImageBanner/image13.png'
type Props = {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
};

const CategoryModal = ({ onClose, open }: Props) => {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={onClose}
      sx={{ position: "absolute", top: 207, p: "0 20px 20px 20px" }}
    >
      <Container>
        <Grid
          sx={{
            bgcolor: "white",
            padding: "1.5rem 2rem 0.6rem",
            height: "auto",
            display: "flex",
            flexWrap: "wrap",
           
          }}
        >
          <Grid
            sx={{
              pr: "0.5rem",
              width: "992px",
              height: "auto",
              ml: "20px",
              cursor: "pointer",
              display: "flex",
              flexWrap: "wrap",
            }}
            color="primary.main"
          >
            <List
              sx={{
                padding: "0",
                fontSize: "1.4rem",
                width: "20rem",
                ml: "10px",
                p: "10px",
                position: 'relative',
                
              }}
            >
             
              <Grid display={'flex'} width={'100vh'} >
                <Grid display={'flex'} width={'50rem'} flexDirection={'column'} flexWrap={'wrap'}>
                  <ListItem sx={{ padding: "0", margin: "0px" }}>
                    <Grid width={5} height={5} bgcolor={'gray'} ml={1} borderRadius={'50%'} />
                    لبنیات
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "rgb(175,175,175)",
                      padding: "10px 10px 0 0",
                      margin: "0px",
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '100px'
                    }}
                  >
                    شیر، پنیر، ماست، دوغ، کره، کشک، بستنی، خامه، لبنیات
                  </ListItem>
                </Grid>
                <Grid display={'flex'} width={'50rem'} flexDirection={'column'} flexWrap={'wrap'}>
                  <ListItem sx={{ padding: "0", margin: "0px" }}>
                    <Grid width={5} height={5} bgcolor={'gray'} ml={1} borderRadius={'50%'} />
                    نوشیدنی
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "rgb(175,175,175)",
                      padding: "10px 10px 0 0",
                      margin: "0px",
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '190px'
                    }}
                  >
                    نوشابه، ماءالشعیر، آبمیوه، چای و دمنوش، نوشیدنی، آب، قهوه و هات چاکلت، نوشیدنی انرژی زا، شربت، عرقیجات
                  </ListItem>
                </Grid>

              </Grid>
              <Grid display={'flex'} width={'100vh'} mt={5}>
                <Grid display={'flex'} width={'50rem'} flexDirection={'column'} flexWrap={'wrap'}>
                  <ListItem sx={{ padding: "0", margin: "0px" }}>
                    <Grid width={5} height={5} bgcolor={'gray'} ml={1} borderRadius={'50%'} />
                    آرایشی و بهداشتی
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "rgb(175,175,175)",
                      padding: "10px 10px 0 0",
                      margin: "0px",
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '180px'
                    }}
                  >
                    شامپو و مراقبت مو، آرایش مو، بهداشت و مراقبت بدن، بهداشت دهان، اصلاح صورت و بدن، بهداشت جنسی، اسپری و ضدتعریق، محصولات آرایشی، بهداشت و مراقبت صورت، عطر و ادکلن، آرایشی و بهداشتی، بهداشت زنان
                  </ListItem>
                </Grid>
                <Grid width={'50rem'}display={'flex'} flexDirection={'column'}>
                  <ListItem sx={{ padding: "0", margin: "0px" }}>
                    <Grid width={5} height={5} bgcolor={'gray'} ml={1} borderRadius={'50%'} />
                    لوازم برقی و دیجیتال
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "rgb(175,175,175)",
                      padding: "10px 10px 0 0",
                      margin: "0px",
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '180px'
                    }}
                  >
                    باتری، محافظ و رابط، لوازم برقی خانه، نور و روشنایی، لوازم برقی آشپزخانه، لوازم برقی شخصی
                  </ListItem>
                </Grid>

                
              </Grid>
              <Grid 
               width={{xs:'84vw',lg:'77vw'}} display={'flex'} flexDirection={'row-reverse'}>
                  <Image src={image13} alt={'logo'} width={300} height={200} />
                </Grid>
            </List>
          </Grid>
        </Grid>
      </Container >
    </Modal >
  );
};

export default CategoryModal;
