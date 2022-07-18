import { Box, Image, useMediaQuery } from "@chakra-ui/react";

const NavBar = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");

  return isMobile ? (
    <Image src="/assets/plLogo.png" w="40px" />
  ) : (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="250px"
      background="#37003C"
      height="100vh"
      color="white"
    >
      <Box my={10}>
        <Image src="https://assets.turbologo.com/blog/en/2020/01/19084653/Premier-League-symbol-958x575.png" />
      </Box>

      <Box background="#633c67" borderLeft="5px solid #e606ff" p={5}>
        Overview
      </Box>
      <Box p={5}>Shop</Box>
      <Box p={5}>settings</Box>
      <Box p={5}>Fantasy</Box>
    </Box>
  );
};
export default NavBar;
