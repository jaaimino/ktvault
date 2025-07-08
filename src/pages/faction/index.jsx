import { Link, useRoute } from "wouter";
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
import classes from "./faction.module.css";
import useSWR from "swr";
import { fetchFaction } from "../../hooks/use-api/fetchers";

export default function Faction() {
  const [, params] = useRoute("/fa/:factionId");
  const { data: faction, isFetching: isFetchingFaction } = useSWR(
    [
      "https://raw.githubusercontent.com/vjosset/killteamjson/refs/heads/main/kt24.json",
      params?.factionId,
    ],
    fetchFaction
  );
  if (isFetchingFaction) {
    return <LoadingOverlay visible={isFetchingFaction} />;
  }
  if (!faction) {
    return;
  }
  const cards = faction.killteams
    ?.filter((killteam) => killteam.edition === "kt24")
    ?.map((killteam) => (
      <Card
        key={killteam.killteamid}
        className={classes.card}
        p="md"
        radius="sm"
        component={Link}
        href={`/fa/${faction.factionid}/kt/${killteam.killteamid}`}
      >
        <Stack>
          <AspectRatio ratio={900 / 600} maw={1000} mx="auto">
            <Image
              fit="cover"
              style={{ objectPosition: "top" }}
              radius="sm"
              src={`/img/portraits/${faction.factionid}/${killteam.killteamid}/${killteam.killteamid}.jpg`}
            />
          </AspectRatio>
          <Title order={3}>{killteam.killteamname}</Title>
          <Text
            lineClamp={4}
            dangerouslySetInnerHTML={{ __html: `${killteam.description}` }}
          ></Text>
        </Stack>
      </Card>
    ));
  return (
    <Container px="md" pb="md" fluid>
      <Stack>
        <SimpleGrid my="md" cols={{ base: 1, sm: 2 }} spacing="md">
          <Image
            fit="cover"
            style={{ objectPosition: "top" }}
            h={300}
            radius="sm"
            src={`/img/portraits/${params?.factionId}/${params?.factionId}.jpg`}
          />
          <Stack justify="flex-start" align="flex-start" grow={1}>
            <Title>{faction?.factionname}</Title>
            <Text>
              <div
                dangerouslySetInnerHTML={{ __html: `${faction.description}` }}
              />
            </Text>
          </Stack>
        </SimpleGrid>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3, xl: 4 }}>{cards}</SimpleGrid>
      </Stack>
    </Container>
  );
}
