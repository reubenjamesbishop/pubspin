"use client";

import { useState } from "react";
import {
  Stack,
  ColorInput,
  Title,
  Tabs,
  rem,
  Divider,
  Group,
  Text,
  Grid,
  TextInput,
  FileInput,
  Switch,
} from "@mantine/core";

import QRSummary from "./components/QRSummary";

import { IconPhoto } from "@tabler/icons-react";

export default function Settings() {
  return (
    <Stack p={"xl"}>
      <Stack gap={0}>
        <Title order={1}>Settings</Title>
        <Text size="xs" c="dimmed">
          Manage all your settings in one place
        </Text>
      </Stack>
      <Divider my="md" />
      <Tabs defaultValue={"brand"}>
        <Tabs.List>
          <Tabs.Tab
            value="general"
            leftSection={
              <IconPhoto style={{ width: rem(16), height: rem(16) }} />
            }
          >
            General
          </Tabs.Tab>
          <Tabs.Tab
            value="brand"
            leftSection={
              <IconPhoto style={{ width: rem(16), height: rem(16) }} />
            }
          >
            Brand
          </Tabs.Tab>
          <Tabs.Tab
            value="notifications"
            leftSection={
              <IconPhoto style={{ width: rem(16), height: rem(16) }} />
            }
          >
            Notifications
          </Tabs.Tab>
          <Tabs.Tab
            value="billing"
            leftSection={
              <IconPhoto style={{ width: rem(16), height: rem(16) }} />
            }
          >
            Billing
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="general">
          <GeneralSettings />
        </Tabs.Panel>
        <Tabs.Panel value="brand">
          <BrandSettings />
        </Tabs.Panel>
        <Tabs.Panel value="notifications">
          <NotificationSettings />
        </Tabs.Panel>
        <Tabs.Panel value="billing">
          <BillingSettings />
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

interface SettingWrapperProps {
  title: string;
  description?: string;
  content: React.ReactNode;
}

function SettingWrapper(props: SettingWrapperProps) {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 9 }}>
        <Stack gap={0}>
          <Title order={4}>{props.title}</Title>
          <Text c="dimmed" size="xs">
            {props.description}
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 3 }}>{props.content}</Grid.Col>
    </Grid>
  );
}

function BrandSettings() {
  const [brandColor, setBrandColor] = useState("#5018ab");
  return (
    <>
      <Stack gap={"md"} py={"xl"}>
        <SettingWrapper
          title="Pub display name"
          description="This is the name of your pub"
          content={<TextInput value={"saracens"} disabled />}
        />
        <Divider my={"xl"} />
        <SettingWrapper
          title="Some setting"
          description="Some description of what it does"
          content={<Switch label="some kind of label" />}
        />
        <Divider my={"xl"} />
        <SettingWrapper
          title="Pub logo"
          description="This will be the logo"
          content={<FileInput placeholder="saracens_logo.png" />}
        />
        <Divider my={"xl"} />
        <SettingWrapper
          title="Brand color"
          description="The overall primary color of your brand"
          content={<ColorInput value={brandColor} onChange={setBrandColor} />}
        />
        <Divider my={"xl"} />
        <SettingWrapper
          title="QR Code Appearance"
          description="Your PubSpin QR code for display at your bar counter"
          content={<QRSummary brandColor={brandColor} />}
        />
      </Stack>
    </>
  );
}

function GeneralSettings() {
  return (
    <>
      <Title>General settings</Title>
    </>
  );
}

function NotificationSettings() {
  return (
    <>
      <Title>Notification settings</Title>
    </>
  );
}

function BillingSettings() {
  return (
    <>
      <Title>Billing settings</Title>
    </>
  );
}
