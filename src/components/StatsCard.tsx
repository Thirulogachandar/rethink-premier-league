import {
  Tbody,
  Box,
  Heading,
  Table,
  Tr,
  Td,
  TableCaption,
  Button,
  Thead,
  TableContainer,
} from "@chakra-ui/react";
import { gameStatInterface } from "../types/latestFixture";
import range from "lodash/range";
import { useState } from "react";

interface StatCardInterface {
  statData: gameStatInterface[];
}
const StatsCard = (props: StatCardInterface) => {
  const [showMore, setShowMore] = useState(false);
  const check = (index) => {
    console.log(index);
    if (index < 5) return true;
    if (showMore) return true;
    return false;
  };
  return (
    <TableContainer boxShadow="md" borderRadius="1rem" px={3} pt={3}>
      <Table>
        <Tbody>
          {props.statData.map((stat, index) => (
            <Tr display={check(index) ? "Inlineblock" : "none"}>
              <Td textAlign="center">{stat.home}</Td>
              <Td textAlign="center" fontWeight="semibold">
                {stat.statType}
              </Td>
              <Td textAlign="center">{stat.away}</Td>
            </Tr>
          ))}
        </Tbody>
        <TableCaption p={0} mb={4}>
          <Button
            variant="link"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? "show less" : "show more"}
          </Button>
        </TableCaption>
      </Table>
    </TableContainer>
  );
};
export default StatsCard;
