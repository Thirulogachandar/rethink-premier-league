import {
  Box,
  Flex,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

const TopScorerSection = () => {
  const topScorerData = [
    { name: "Bruno Fernandes", goals: "12" },
    { name: "Mason Mount", goals: "11" },
    { name: "Romelu Lukaku", goals: "10" },
    { name: "Cristano Ronaldo", goals: "8" },
    { name: "Trevoh Chalobah", goals: "6" },
    { name: "James Ward-Prowse", goals: "4" },
    { name: "Kante", goals: "2" },
  ];
  return (
    <Box boxShadow="md" p={2} py={4} borderRadius="1rem">
      <Flex
        background="linear-gradient(90deg, rgba(82,10,104,1) 0%, rgba(76,21,140,1) 100%)"
        w="100%"
        borderRadius="1rem"
        p={3}
        position="relative"
        pb={0}
      >
        <Image
          boxSize="120px"
          src="https://resources.premierleague.com/premierleague/photos/players/250x250/p205651.png"
        />
        <Flex direction="column" justify="center" mx={2}>
          <Box color="white" fontSize="xl">
            Gabriel Jesus
          </Box>
          <Box color="white" fontSize="2xl">
            16 GOALS
          </Box>
        </Flex>
        <Image
          boxSize="30px"
          src="https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_96x96.png"
          position="absolute"
          right="5%"
          top="10%"
        />
      </Flex>

      <Table>
        <Tbody>
          {topScorerData.map((data) => (
            <Tr>
              <Td>{data.name}</Td>
              <Td textAlign="right">{data.goals} GOALS</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
export default TopScorerSection;
