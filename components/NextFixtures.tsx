import { Flex, Heading, Box } from "@chakra-ui/react";
import NextFixtureCard from "./NextFixtureCard";

const NextFixture = () => {
  return (
    <Box>
      <Heading>Next Fixture</Heading>
      <Flex justify="space-between">
        <NextFixtureCard />
        <NextFixtureCard />
      </Flex>
    </Box>
  );
};
export default NextFixture;
