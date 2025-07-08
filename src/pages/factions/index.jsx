import {
  AspectRatio,
  Card,
  Container,
  Image,
  LoadingOverlay,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import classes from "./factions.module.css";
import { Link } from "wouter";
import useSWR from "swr";
import { fetchFactions } from "../../hooks/use-api/fetchers";

export default function Factions() {
  const { data: factions, isFetching: isFetchingFactions } = useSWR(
    "https://raw.githubusercontent.com/vjosset/killteamjson/refs/heads/main/kt24.json",
    fetchFactions
  );

  if (isFetchingFactions) {
    return <LoadingOverlay visible={isFetchingFactions} />;
  }

  if (!factions?.length) {
    return;
  }

  const cards = factions?.map((faction) => (
    <Card
      key={faction.factionid}
      p="md"
      radius="sm"
      component={Link}
      className={classes.card}
      href={`/fa/${faction.factionid}`}
    >
      <Stack>
        <Title order={2}>{faction.factionname}</Title>
        <AspectRatio ratio={900 / 600} maw={1000} mx="auto">
          <Image
            radius="sm"
            src={`/img/portraits/${faction.factionid}/${faction.factionid}.jpg`}
          />
        </AspectRatio>
        <Text
          lineClamp={4}
          dangerouslySetInnerHTML={{ __html: `${faction.description}` }}
        ></Text>
      </Stack>
    </Card>
  ));

  return (
    <Container py="md" px="md" fluid>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3, xl: 4 }}>{cards}</SimpleGrid>
    </Container>
  );
}
