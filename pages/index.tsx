import { Box, Button, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import * as React from "react";
import LeagueTable from "../components/LeagueTable";
import NavBar from "../components/NavBar";
import ScoreCard from "../components/ScoreCard";
import { LatestFixture } from "../data/latestFixture";
import StatsCard from "../components/StatsCard";
import TransferCard from "../components/TransferCard";
import TopScorerSection from "../components/TopScorerSection";
import LatestNews from "../components/LatestNews";

export default function Home() {
  return (
    <Box>
      <NavBar />
      <Box ml={["0", "250px"]} p={[0, 2]} flex={1}>
        <Grid templateColumns={["1fr", "1.5fr 1fr"]} gap={6} m={[2, 8]}>
          <GridItem w="100%">
            <ScoreCard scoreData={LatestFixture} />
            <Heading fontSize="3xl" my={2}>
              Stats
            </Heading>
            <StatsCard statData={LatestFixture.stats} />
          </GridItem>
          <GridItem w="100%">
            <Flex justify="space-between">
              <Heading fontSize="3xl" my={2}>
                Latest transfers
              </Heading>
              <Button variant="link">View All</Button>
            </Flex>
            <TransferCard />
            <TransferCard />
            <TransferCard />
            <TransferCard />
          </GridItem>
          <GridItem w="100%">
            <Heading fontSize="3xl" my={2}>
              LeagueTable
            </Heading>
            <LeagueTable />
          </GridItem>
          <GridItem w="100%">
            <Flex justify="space-between">
              <Heading fontSize="3xl" my={2}>
                Top scorer
              </Heading>
              <Button variant="link">View All</Button>
            </Flex>
            <TopScorerSection />
          </GridItem>
        </Grid>
        <LatestNews />
      </Box>
    </Box>
  );
}
