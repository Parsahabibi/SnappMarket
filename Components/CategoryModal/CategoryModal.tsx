import Grid from "@mui/material/Grid";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Modal from "@mui/material/Modal";
import { Container } from "@mui/material";

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
      sx={{ position: "absolute", top: 225, p: "0 20px 20px 20px" }}
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
              width: "300px",
              height: "70px",
              ml: "20px",
              cursor: "pointer",
            }}
            color="primary.main"
          >
            <List sx={{ padding: "0" }}>
              <ListItem sx={{ padding: "0", margin: "0px" }}>
                * آرایشی و بهداشتی
              </ListItem>
              <ListItem
                sx={{
                  color: "rgb(175,175,175)",
                  padding: "10px 10px 0 0",
                  margin: "0px",
                }}
              >
                محصولات آرایشی
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Modal>
  );
};

export default CategoryModal;
