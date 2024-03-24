import { Stack, Button, Title, rem, TextInput, Paper } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { QRCode } from "react-qrcode-logo";

interface QRSummaryProps {
  brandColor: string;
}

export default function QRSummary(props: QRSummaryProps) {
  const SPIN_URL = "https://pubspin.vercel.app/spin";

  return (
    <Stack align="center" style={{ border: "0px solid red" }}>
      <QRCode
        value={SPIN_URL}
        eyeColor={props.brandColor}
        size={250}
        quietZone={0}
        eyeRadius={0}
      />
      <TextInput value={SPIN_URL} style={{ width: "100%" }} />
      <Button
        variant="outline"
        style={{ width: "100%" }}
        leftSection={
          <IconDownload style={{ width: rem(16), height: rem(16) }} />
        }
      >
        Download QR Code
      </Button>
    </Stack>
  );
}
