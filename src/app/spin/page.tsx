"use client";

import {
  Container,
  Title,
  Button,
  Image,
  Text,
  Stack,
  Space,
} from "@mantine/core";
import { useState } from "react";

const MOCK_PRIZES = [
  "free beer",
  "free lunch",
  "free dessert",
  "free glass of wine",
  "free soft drink",
  "nothing, sorry",
];

const MAX_ITERATIONS = 15;
const SPIN_DELAY_MS = 100;

export default function Spin() {
  const [prize, setPrize] = useState<null | string>(null);

  async function handleSpin() {
    for (let i = 0; i < MAX_ITERATIONS; i++) {
      var item = MOCK_PRIZES[Math.floor(Math.random() * MOCK_PRIZES.length)];
      setPrize(item);
      await new Promise((r) => setTimeout(r, SPIN_DELAY_MS));
    }
  }

  return (
    <>
      <Container size="sm" style={{ border: "0px solid red" }}>
        <Stack p="xl" align="center" pt={"100px"}>
          <Title order={1}>PubSpin at TBD</Title>
          <Image
            src={
              "https://saracensheadhotel.com.au/wp-content/uploads/2022/06/Saracens-Hotel-Header2.png"
            }
            style={{ width: "250px" }}
          />

          {prize !== null ? (
            <>
              <Text size="sm">Youve won...</Text>
              <Text size={"30px"} fw={700}>
                a {prize}!
              </Text>

              <Space h={"xl"} />
              <Text c="dimmed" size="sm">
                Please show the front bar to claim your prize
              </Text>
            </>
          ) : (
            <Button onClick={handleSpin} variant="outline">
              Click to spin
            </Button>
          )}
        </Stack>
      </Container>
    </>
  );
}
