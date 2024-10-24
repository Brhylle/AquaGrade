import { Box, Text } from "@chakra-ui/react";

const Footer = ({ isDarkMode }) => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      py="4"
      paddingLeft={"20px"}
      px={{ base: '4', md: '8' }}
      bg={isDarkMode ? "black" : "white"}  // Dynamically set background color
      color={isDarkMode ? "white" : "gray.800"}  // Dynamically set text color
      textAlign="left"
    >
      <Text className="text-xxs p-2">
      © 2024 AquaGrade. All Rights Reserved.
      </Text>
    </Box>
  );
};

export default Footer;
