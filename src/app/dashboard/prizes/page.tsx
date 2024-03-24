import { Stack, Title, Group, Button, TextInput, rem } from "@mantine/core";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import PrizesTable from "./components/PrizesTable";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/get-prizes?pubID=1");
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default async function Prizes() {
  // const { prizes } = await getData();
  // console.log(prizes.rows);
  // const data = prizes.rows;
  const data = MOCK_PRIZE_DATA;

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

        {/* <PrizesTable data={MOCK_PRIZE_DATA} /> */}
        <PrizesTable data={data} />
      </Stack>
    </>
  );
}

const MOCK_PRIZE_DATA = [
  {
    prize_id: 1,
    name: "50% Off Next Drink",
    description: "Get 50% off your next drink purchase",
    status: "Available",
    date_added: "2024-03-23",
    payout_frequency: "1 in 100",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
  },
  {
    prize_id: 2,
    name: "Free Dessert",
    description: "Enjoy a complimentary dessert with your meal",
    status: "Paused",
    date_added: "2024-03-20",
    payout_frequency: "One-time",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
  },
  {
    prize_id: 3,
    name: "25% Off Entire Bill",
    description: "Receive a 25% discount on your entire bill",
    status: "Available",
    date_added: "2024-03-15",
    payout_frequency: "1 in 100",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
  },
  {
    prize_id: 4,
    name: "Free Pub Game Entry",
    description: "Enter our pub game event for free",
    status: "Available",
    date_added: "2024-03-10",
    payout_frequency: "One-time",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
  },
  {
    prize_id: 5,
    name: "10% Off Weekend Special",
    description: "Get a 10% discount on our weekend specials",
    status: "Available",
    date_added: "2024-03-05",
    payout_frequency: "1 in 100",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
  },
  {
    prize_id: 6,
    name: "Buy One Get One Free",
    description: "Receive a free item when you purchase one",
    status: "Available",
    date_added: "2024-03-01",
    payout_frequency: "One-time",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
  },
  {
    prize_id: 7,
    name: "Free Beer",
    description: "Enjoy a complimentary beer of your choice",
    status: "Available",
    date_added: "2024-02-28",
    payout_frequency: "One-time",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
  },
  {
    prize_id: 8,
    name: "20% Off Appetizers",
    description: "Get 20% off all appetizers on the menu",
    status: "Available",
    date_added: "2024-02-25",
    payout_frequency: "1 in 100",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
  },
  {
    prize_id: 9,
    name: "Pub Quiz Winner",
    description: "Win a pub quiz and receive a special prize",
    status: "Available",
    date_added: "2024-02-20",
    payout_frequency: "One-time",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
  },
  {
    prize_id: 10,
    name: "Free Shot",
    description: "Receive a complimentary shot of your choice",
    status: "Available",
    date_added: "2024-02-15",
    payout_frequency: "One-time",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
  },
  {
    prize_id: 11,
    name: "30% Off Burger Night",
    description: "Get 30% off on our burger special night",
    status: "Available",
    date_added: "2024-02-10",
    payout_frequency: "1 in 100",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
  },
  {
    prize_id: 12,
    name: "Trivia Night Entry",
    description: "Enter our weekly trivia night for free",
    status: "Available",
    date_added: "2024-02-05",
    payout_frequency: "One-time",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
  },
  {
    prize_id: 13,
    name: "Free Nachos",
    description: "Enjoy a complimentary plate of nachos",
    status: "Available",
    date_added: "2024-02-01",
    payout_frequency: "One-time",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
  },
  {
    prize_id: 14,
    name: "Buy One Get One Cocktail",
    description: "Receive a free cocktail when you purchase one",
    status: "Available",
    date_added: "2024-01-27",
    payout_frequency: "One-time",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
  },
  {
    prize_id: 15,
    name: "15% Off Wine Night",
    description: "Get 15% off on our wine special night",
    status: "Available",
    date_added: "2024-01-23",
    payout_frequency: "1 in 100",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
  },
  {
    prize_id: 16,
    name: "Pub Membership Discount",
    description: "Get a discount when you sign up for our pub membership",
    status: "Available",
    date_added: "2024-01-20",
    payout_frequency: "One-time",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
  },
  {
    prize_id: 17,
    name: "Beer Bucket",
    description: "Enjoy a bucket of beers with your friends",
    status: "Available",
    date_added: "2024-01-15",
    payout_frequency: "One-time",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
  },
  {
    prize_id: 18,
    name: "20% Off Bar Tab",
    description: "Get 20% off your total bar tab",
    status: "Available",
    date_added: "2024-01-10",
    payout_frequency: "1 in 100",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
  },
  {
    prize_id: 19,
    name: "Live Music VIP Pass",
    description: "Receive VIP access to our live music event",
    status: "Available",
    date_added: "2024-01-05",
    payout_frequency: "One-time",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
  },
  {
    prize_id: 20,
    name: "Beer Pong Champion",
    description: "Win our beer pong tournament and receive a special prize",
    status: "Available",
    date_added: "2024-01-01",
    payout_frequency: "One-time",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
  },
];
