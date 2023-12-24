import React from "react";
import logo from '../images/yashmanic.jpg';
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Yaswanth!";
const bio1 = "A frontend developer";
const bio2 = "specialised in Html CSS & Java Script";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

    <VStack>
  <Avatar height={100} width={100} src={logo}/>
  <Heading as='h4' noOfLines={1} size='md'>{greeting}</Heading>
    </VStack>
      <VStack spacing={6}>
    <Heading as='h1' noOfLines={1} size='3xl'>{bio1}</Heading>
        <Heading as='h1' noOfLines={1} size='3xl'>{bio2}</Heading>
        </VStack>
  </FullScreenSection>
);

export default LandingSection;
