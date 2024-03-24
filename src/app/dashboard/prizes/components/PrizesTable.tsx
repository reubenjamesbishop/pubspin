"use client";

import {
  Title,
  Table,
  Text,
  Button,
  Drawer,
  Stack,
  Container,
  Divider,
  rem,
  TextInput,
  Group,
  Image,
  Indicator,
  Center,
} from "@mantine/core";

import { Prize } from "../types";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import PrizeDrawerContent from "./PrizeDrawerContent";

interface PrizesTableProps {
  data: Prize[];
}

export default function PrizesTable(props: PrizesTableProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedRowData, setSelectedRowData] = useState<Prize | null>(null);
  const handleIdClick = (row: Prize) => {
    console.log(row);
    setSelectedRowData(row);
    open();
  };

  const rows = props.data.map((row) => (
    <Table.Tr key={row.prize_id} onClick={() => handleIdClick(row)}>
      <Table.Td>
        <Stack gap={0}>
          <Text size="s" fw={600}>
            {row.name}
          </Text>
          <Text c="dimmed" size="xs">
            {row.description}
          </Text>
        </Stack>
      </Table.Td>
      <Table.Td>
        {row.status === "Available" ? (
          <>
            <Center
              style={{ border: "0px solid red", justifyContent: "start" }}
            >
              <Indicator processing color="green" />
              <Text size="xs" c="darkgreen" ml={15}>
                live
              </Text>
            </Center>
          </>
        ) : (
          <Center style={{ border: "0px solid red", justifyContent: "start" }}>
            <Indicator color="grey" />
            <Text size="xs" c="grey" ml={15}>
              paused
            </Text>
          </Center>
        )}
      </Table.Td>
      <Table.Td>{row.date_added}</Table.Td>
      <Table.Td>{row.payout_frequency}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Table verticalSpacing={"md"} withRowBorders={true} highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Prize</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Date added</Table.Th>
            <Table.Th>Payout frequency</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <Drawer opened={opened} onClose={close} position="right">
        <PrizeDrawerContent rowData={selectedRowData} />
      </Drawer>
    </>
  );
}
