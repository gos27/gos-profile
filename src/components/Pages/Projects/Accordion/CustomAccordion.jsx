import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import data from "./data";

const CustomAccordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const singleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const multiSelection = (currentId) => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(currentId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(currentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(copyMultiple);
  };

  const isItemExpanded = (itemId) =>
    enableMultiSelection ? multiple.includes(itemId) : selected === itemId;

  return (
    <Container
      sx={{
        background: "whitesmoke",
        padding: 3,
        border: "2px solid black",
        my: 2,
      }}
    >
      <Typography variant="h4" color="primary" textAlign="center" gutterBottom>
        Accordion
      </Typography>

      <Box sx={{ width: "100%", margin: "auto", mt: 4 }}>
        <Button
          variant={enableMultiSelection ? "contained" : "outlined"}
          color="primary"
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          sx={{
            mb: 2,
            mt: 2, // More spacing above
            display: "flex",
            justifyContent: "center", // Ensures text is centered
            transition: "0.3s", // Smooth hover effect
            "&:hover": {
              backgroundColor: enableMultiSelection
                ? "primary.dark"
                : "primary.light",
            },
          }}
        >
          {enableMultiSelection
            ? "Disable Multi Selection"
            : "Enable Multi Selection"}
        </Button>

        {data && data.length > 0 ? (
          data.map((item) => (
            <Accordion
              key={item.id}
              expanded={isItemExpanded(item.id)}
              onChange={() =>
                enableMultiSelection
                  ? multiSelection(item.id)
                  : singleSelection(item.id)
              }
              sx={{
                boxShadow: 2,
                borderRadius: "8px",
                mb: 1,
                "&.Mui-expanded": { margin: "8px 0" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ backgroundColor: "#f5f5f5" }}
              >
                <Typography variant="h6">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))
        ) : (
          <Typography variant="h5" color="error">
            No data found
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default CustomAccordion;
