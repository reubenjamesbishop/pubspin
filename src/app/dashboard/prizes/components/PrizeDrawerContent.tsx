import { Stack, Image, Title, Button, rem } from "@mantine/core";
import { IconPlayerPause, IconTrash } from "@tabler/icons-react";
import PrizeItemDescription from "./PrizeItemDescription";

import { Prize } from "../types";

interface PrizeDrawerContentProps {
  rowData: Prize | null;
}

export default function PrizeDrawerContent(props: PrizeDrawerContentProps) {
  return (
    <>
      <Stack p={"xl"}>
        <Image src={props.rowData?.avatar} style={{ borderRadius: "25px" }} />
        <Title order={1}>{props.rowData?.name}</Title>
        <PrizeItemDescription
          label="Description"
          value={props.rowData?.description}
        />
        <PrizeItemDescription
          label="Payour frequency"
          value={props.rowData?.payout_frequency}
        />
        <PrizeItemDescription label="Status" value={props.rowData?.status} />
        <PrizeItemDescription
          label="Date added"
          value={props.rowData?.date_added}
        />

        <Button
          variant="outline"
          leftSection={
            <IconPlayerPause style={{ width: rem(16), height: rem(16) }} />
          }
        >
          Pause this prize
        </Button>
        <Button
          variant="outline"
          color="red"
          leftSection={
            <IconTrash style={{ width: rem(16), height: rem(16) }} />
          }
        >
          Delete this prize
        </Button>
      </Stack>
    </>
  );
}
