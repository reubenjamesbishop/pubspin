import { Stack, Button, Title, rem } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { QRCode } from "react-qrcode-logo";

interface QRSummaryProps {
  brandColor: string;
}

export default function QRSummary(props: QRSummaryProps) {
  return (
    <Stack style={{ border: "0px solid red" }}>
      <Title>My PubSpin QR Code</Title>
      <QRCode
        value="http://localhost:5173/spin/saracens"
        size={300}
        quietZone={0}
        logoImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmHkm4rT1FxpREhje0zCXq7vi4cEWz9K2H1ZBoA1H1768SIuMKT2qOypb7OLYwiR1Nww&usqp=CAU"
        logoWidth={100}
        eyeColor={props.brandColor}
        eyeRadius={0}
      />
      <Button
        variant="outline"
        leftSection={
          <IconDownload style={{ width: rem(16), height: rem(16) }} />
        }
      >
        Download QR Code
      </Button>
    </Stack>
  );
}
