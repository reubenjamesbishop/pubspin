"use client";

import { createClient } from "../../utils/supabase/client";

import {
  Menu,
  Group,
  Text,
  Avatar,
  useMantineTheme,
  ActionIcon,
  rem,
} from "@mantine/core";
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
} from "@tabler/icons-react";

export function UserMenu() {
  const supabase = createClient();
  const theme = useMantineTheme();

  async function handleSignout() {
    alert("signing out");
    const { error } = await supabase.auth.signOut();
    // TODO: Fix delay. I think it stays logged in b/c JWT is still valid until it's expired.
  }

  return (
    <Group justify="center">
      <Menu
        withArrow
        width={300}
        position="bottom"
        transitionProps={{ transition: "pop" }}
        withinPortal
      >
        <Menu.Target>
          <ActionIcon variant="default" radius={"xl"}>
            <Avatar variant="transparent" />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>
            <div>
              <Text fw={500}>Nancy Eggshacker</Text>
              <Text size="xs" c="dimmed">
                neggshaker@mantine.dev
              </Text>
            </div>
          </Menu.Item>

          <Menu.Divider />

          <Menu.Item
            leftSection={
              <IconHeart
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
                color={theme.colors.red[6]}
              />
            }
          >
            Liked posts
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconStar
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
                color={theme.colors.yellow[6]}
              />
            }
          >
            Saved posts
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconMessage
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
                color={theme.colors.blue[6]}
              />
            }
          >
            Your comments
          </Menu.Item>

          <Menu.Label>Settings</Menu.Label>
          <Menu.Item
            leftSection={
              <IconSettings
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Account settings
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconSwitchHorizontal
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Change account
          </Menu.Item>
          <Menu.Item
            onClick={handleSignout}
            leftSection={
              <IconLogout
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Logout
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item
            leftSection={
              <IconPlayerPause
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Pause subscription
          </Menu.Item>
          <Menu.Item
            color="red"
            leftSection={
              <IconTrash
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Delete account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
