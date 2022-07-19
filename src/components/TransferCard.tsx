import { Avatar, Box, Flex } from "@chakra-ui/react";

const TransferCard = () => {
  return (
    <Box boxShadow="md" p={5} borderRadius="1rem" my={2}>
      <Flex alignItems="center" justify="space-between" mb={5}>
        <Flex>
          <Avatar name="messi" />
          <Box ml={2}>
            <Box>Messi</Box>
            <Box>31 years old</Box>
          </Box>
        </Flex>
        <Box>
          <Box>18 hours ago</Box>
          <Box>on Loan jun 2022</Box>
        </Box>
      </Flex>
      <Flex justify="space-between">
        <Box>transfer fee US $44M</Box>
        <Box>
          <Avatar
            size="xs"
            mr={2}
            name="messi"
            src="https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_96x96.png"
          />
          <Avatar size="xs" mr={2} name=">" />
          <Avatar
            size="xs"
            name="messi"
            src="https://ssl.gstatic.com/onebox/media/sports/logos/C3J47ea36cMBc4XPbp9aaA_96x96.png"
          />
        </Box>
      </Flex>
    </Box>
  );
};
export default TransferCard;
