import { useState, useRef } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Card,
  Box,
} from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";

const QRGenerator = () => {
  const [text, setText] = useState("");
  const qrRef = useRef(null);

  const handleDownload = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <Container
      sx={{
        textAlign: "center",
        mt: 5,
        border: 2,
        margin: 2,
        minHeight: "500px",
      }}
    >
      <Typography variant="h4" color="primary" textAlign="center" gutterBottom>
        QR Code Generator
      </Typography>

      {/* Input Field */}
      <TextField
        label="Enter text or URL"
        variant="outlined"
        fullWidth
        sx={{ mb: 3 }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* QR Code Display */}
      {text && (
        <Card
          ref={qrRef}
          sx={{
            display: "inline-block",
            p: 3,
            boxShadow: 3,
            borderRadius: 2,
            bgcolor: "background.paper",
            mb: 2,
          }}
        >
          <QRCodeCanvas value={text} size={200} />
        </Card>
      )}

      <Box>
        {/* Download Button */}
        {text && (
          <Button variant="contained" color="primary" onClick={handleDownload}>
            Download QR Code
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default QRGenerator;
