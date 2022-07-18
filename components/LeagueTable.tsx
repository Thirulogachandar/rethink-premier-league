import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import teamList from "../data/teamList";

const LeagueTable = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <TableContainer
      boxShadow="md"
      border="1px solid #b4a6b421"
      borderRadius="1rem"
      py={4}
    >
      <Table variant="striped" colorScheme={"gray"}>
        <TableCaption mt={0}>
          <Button
            variant="link"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? "show less" : "show more"}
          </Button>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>club</Th>
            <Th isNumeric>MP</Th>
            <Th isNumeric>W</Th>
            <Th isNumeric>D</Th>
            <Th isNumeric>L</Th>
            <Th isNumeric>GF</Th>
            <Th isNumeric>GA</Th>
            <Th isNumeric>GD</Th>
            <Th isNumeric>Pts</Th>
          </Tr>
        </Thead>
        <Tbody>
          {showMore
            ? teamList.map((team) => (
                <Tr key={team.teamId}>
                  <Td>{team.teamName}</Td>
                  <Td>10</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                </Tr>
              ))
            : teamList.slice(0, 8).map((team) => (
                <Tr key={team.teamId}>
                  <Td>{team.teamName}</Td>
                  <Td>10</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                </Tr>
              ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default LeagueTable;
