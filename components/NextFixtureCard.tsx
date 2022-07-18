import { Box, Image, Flex } from "@chakra-ui/react";

const NextFixtureCard = () => {
  return (
    <Box
      border="1px solid #b4a6b421"
      minWidth="280px"
      borderRadius="1rem"
      boxShadow="md"
      p={5}
      textAlign="center"
    >
      <Flex justify="space-around" align="center">
        <Box>
          <Image
            boxSize="60px"
            objectFit="cover"
            src="https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_96x96.png"
            alt="arsenal"
          />
          <Box>Asernal</Box>
        </Box>
        <Box>VS</Box>
        <Box>
          <Image
            boxSize="60px"
            objectFit="cover"
            src="https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_96x96.png"
            alt="arsenal"
          />
          <Box>Asernal</Box>
        </Box>
      </Flex>
      <Box>sun 7:30pm IST</Box>
      <Box>Emirates stadium </Box>
    </Box>
  );
};
export default NextFixtureCard;
