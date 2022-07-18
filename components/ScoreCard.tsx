import { Box, Flex, Grid, GridItem, Heading, Image } from "@chakra-ui/react";

import { LatestFixtureInterface } from "../types/latestFixture";
interface scoreCardInterface {
  scoreData: LatestFixtureInterface;
}
const ScoreCard = (props: scoreCardInterface) => {
  return (
    <Box
      border="1px solid #b4a6b421"
      p={10}
      borderRadius="1.5rem"
      boxShadow="md"
    >
      <Flex justify="space-between">
        <Box>
          {props.scoreData.date} | {props.scoreData.stadium}
        </Box>
        <Box>{props.scoreData.matchTime}</Box>
      </Flex>
      <Flex mt={10} justify="space-between">
        <Box>
          <Image
            boxSize="60px"
            objectFit="cover"
            src={props.scoreData.homeTeamImage}
            alt="arsenal"
          />
          <Box fontSize="xl">{props.scoreData.homeTeamName}</Box>
        </Box>
        <Flex align="center">
          <Box width="150px">
            <Heading textAlign={"right"} fontSize="5xl">
              {props.scoreData.homeTeamScore}
            </Heading>
          </Box>
          <Heading mx={5}> - </Heading>
          <Box width="150px">
            <Heading fontSize="5xl">{props.scoreData.awayTeamScore}</Heading>
          </Box>
        </Flex>
        <Box>
          <Image
            boxSize="60px"
            objectFit="cover"
            src={props.scoreData.awayTeamImage}
            alt="Dan Abramov"
          />
          <Box fontSize="xl">{props.scoreData.awayTeamName}</Box>
        </Box>
      </Flex>
      <Flex justify="space-between">
        <Box>
          {props.scoreData.homeTeamScorerDetails &&
            props.scoreData.homeTeamScorerDetails.map(
              (player) => `${player.playerName}(${player.time}), `
            )}
        </Box>
        <Box>
          {props.scoreData.awayTeamScorerDetails &&
            props.scoreData.awayTeamScorerDetails.map(
              (player) => `${player.playerName}(${player.time}), `
            )}
        </Box>
      </Flex>
    </Box>
  );
};
export default ScoreCard;
