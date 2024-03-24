import { Stack, Title, Group, Button, TextInput, rem } from "@mantine/core";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import PrizesTable from "./components/PrizesTable";

export default function Prizes() {
  return (
    <>
      <Stack p="xl">
        <Group justify="space-between">
          <Title my="md">Manage prizes</Title>
          <Button leftSection={<IconPlus />}>Add a prize</Button>
        </Group>
        <TextInput
          placeholder="Search"
          leftSection={
            <IconSearch
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
        />
        <PrizesTable />
      </Stack>
    </>
  );
}
