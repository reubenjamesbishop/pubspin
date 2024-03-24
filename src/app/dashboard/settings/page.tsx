"use client";

import { useState } from "react";
import { ColorInput, Grid, Text, Title, Divider } from "@mantine/core";

import QRSummary from "./components/QRSummary";

export default function Settings() {
  const [brandColor, setBrandColor] = useState("#5018ab");
  return (
    <Grid>
      <Grid.Col span={6}>
        <Title order={1}>Settings</Title>
        <Text size="xs" c="dimmed">
          Organisation ID
        </Text>
        <Title order={3}>abc-xyz-123</Title>
        <Text size="xs" c="dimmed">
          Pub name
        </Text>
        <Title order={3}>The saracens</Title>
        <Text size="xs" c="dimmed">
          Pub name
        </Text>
        <Title order={3}>The saracens</Title>
        <Divider my={"xl"} />
        <Text size="xs" c="dimmed">
          Brand color
        </Text>
        <ColorInput value={brandColor} onChange={setBrandColor} />
      </Grid.Col>
      <Grid.Col span={6} p={"xl"}>
        <QRSummary brandColor={brandColor} />
      </Grid.Col>
    </Grid>
  );
}
