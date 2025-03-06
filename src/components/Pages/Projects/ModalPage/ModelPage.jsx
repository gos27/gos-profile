import { useState } from "react";
import {
  Modal,
  Container,
  Box,
  Button,
  Typography,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const ModalPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Typography variant="h4" color="primary" textAlign="center" gutterBottom>
        Modal Page
      </Typography>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        {/* Open Modal Button */}
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Open Modal
        </Button>

        {/* Modal Component */}
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <Card
              sx={{
                width: 400,
                padding: 3,
                boxShadow: 5,
                position: "relative",
                bgcolor: "background.paper",
                borderRadius: 3,
              }}
            >
              {/* Close Button */}
              <IconButton
                sx={{ position: "absolute", top: 8, right: 8 }}
                onClick={handleClose}
              >
                <Close />
              </IconButton>

              <CardContent>
                <Typography variant="h5" textAlign="center" gutterBottom>
                  <h1>Hello Abolade</h1>
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>

                <Box textAlign="center" mt={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Modal>
      </div>
    </Container>
  );
};

export default ModalPage;
