import React, { useState } from "react";
import { Container, Typography, Tabs, Tab, Box, Paper } from "@mui/material";

const TabIndex = ({ tabsContent, onChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setActiveTab(newIndex);
    if (onChange) {
      onChange(tabsContent[newIndex]);
    }
  };

  return (
    <Container
      sx={{
        textAlign: "center",
        mt: 5,
        border: 2,
        margin: 2,
        minHeight: "230px",
      }}
    >
      <Typography variant="h4" color="primary" textAlign="center" gutterBottom>
        Tab Index
      </Typography>
      <Paper elevation={3} sx={{ width: "100%", p: 2 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          {tabsContent.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>
        <Box p={2} sx={{ minHeight: "100px" }}>
          {tabsContent[activeTab] && tabsContent[activeTab].content}
        </Box>
      </Paper>
    </Container>
  );
};

export default TabIndex;
