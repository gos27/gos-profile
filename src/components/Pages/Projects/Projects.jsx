import React from "react";
import { Brightness4 } from "@mui/icons-material";
import { useColorMode } from "../../../ThemeContext";
import { Box, Container, IconButton } from "@mui/material";
import Accordion from "./Accordion/CustomAccordion";
import GithubFinder from "./GithubFinder/GithubFinder";
// import ImageSlider from "./ImageSlider/ImageSlider";
// import LoadMoreData from "./LoadMoreData/LoadMoreData";
import ModalPage from "./ModalPage/ModelPage";
import ScrollIndicator from "./ScrollIndicator/ScrollIndicator";
import GenerateRandomColor from "./GenerateRandomColor/GenerateRandomColor";
import QRGenerator from "./QRGenerator/QRGenerator";
import ScrollToSection from "./ScrollToSection/ScrollToSection";
import ScrollToTopAndBottom from "./ScrollToTopAndBottom/ScrollToTopAndBottom";
import Search from "./Search/Search";
import StarRating from "./Search/StarRating/StarRating";
import TabTest from "./TabIndex/TabTest";
import TreeView from "./TreeView/TreeView";
import menus from "./TreeView/data";

const Projects = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", justifyContent: "flex-end", py: 2 }}>
        <IconButton onClick={toggleColorMode} color="inherit">
          <Brightness4 />
        </IconButton>
      </Box>
      <TreeView menus={menus} />
      <TabTest />
      <StarRating />
      <Search />
      <ScrollToTopAndBottom />
      <GenerateRandomColor />
      <ScrollToSection />
      <QRGenerator />
      <ModalPage />
      <Accordion />
      <GithubFinder />
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}
      {/* <LoadMoreData /> */}
      <ScrollIndicator />
    </Container>
  );
};

export default Projects;
