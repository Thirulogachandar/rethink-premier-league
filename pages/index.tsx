import {
  Box,
  Button,
  Flex,
  Avatar,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { useEffect } from "react";
import LeagueTable from "../src/components/LeagueTable";
import NavBar from "../src/components/NavBar";
import ScoreCard from "../src/components/ScoreCard";
import { LatestFixture } from "../data/latestFixture";
import StatsCard from "../src/components/StatsCard";
import TransferCard from "../src/components/TransferCard";
import TopScorerSection from "../src/components/TopScorerSection";
import LatestNews from "../src/components/LatestNews";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../src/features/utils/music";

export default function Home() {
  const router = useRouter();
  const user = useSelector((state) => state.user.value);
  useEffect(() => {
    if (user.name === "") {
      router.push("/login");
    }
  }, []);
  if (user.name === "") return <></>;
  return (
    <Box>
      <NavBar />
      <Box ml={["0", "250px"]} p={[0, 2]} flex={1}>
        <Box ml={[2, 8]}>
          <Heading>Welcome back!</Heading>
          <Flex align="center" mt={2}>
            <Avatar mx={3} size="md" />
            <Heading fontSize="3xl" my={2}>
              {capitalizeFirstLetter(user.name)}
            </Heading>
          </Flex>
        </Box>
        <Grid templateColumns={["1fr", "1.5fr 1fr"]} gap={6} mx={[2, 8]} my={4}>
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
