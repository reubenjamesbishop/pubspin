"use client";

import { AppShell, Burger, Group, Title, NavLink } from "@mantine/core";

import { IconHome2 } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { UserMenu } from "../UserMenu/UserMenu";

interface PubspinAppshellProps {
  children: React.ReactNode;
  aside?: React.ReactNode;
}
export default function PubspinAppshell(props: PubspinAppshellProps) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title>PubSpin</Title>
          <UserMenu />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>{props.children}</AppShell.Main>
      <AppShell.Aside>{props.aside}</AppShell.Aside>
    </AppShell>
  );
}

function Navbar() {
  return (
    <>
      <NavLink
        href="/dashboard"
        label="Home"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
        active
        variant="filled"
      />
      <NavLink
        href="/dashboard/prizes"
        label="Prizes"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      />
      <NavLink
        href="/dashboard/settings"
        label="Settings"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      />
      <NavLink
        href="/dashboard/insights"
        label="Insights"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      />
    </>
  );
}
