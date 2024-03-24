import { Stack, Text } from "@mantine/core";

export default function PrizeItemDescription({
  label,
  value,
}: {
  label: string;
  value: string | undefined;
}) {
  return (
    <Stack gap={0}>
      <Text size="xs">{label}</Text>
      <Text>{value}</Text>
    </Stack>
  );
}
