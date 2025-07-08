import { Link, useRoute } from "wouter";
import {
  AspectRatio,
  Card,
  Container,
  Flex,
  Grid,
  Group,
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
import { useSettings } from "../../hooks/use-settings";

export default function Faction() {
  const [, params] = useRoute("/fa/:factionId");
  const { data: faction, isFetching: isFetchingFaction } = useSWR(
    [
      "https://raw.githubusercontent.com/vjosset/killteamjson/refs/heads/main/kt24.json",
      params?.factionId,
    ],
    fetchFaction
  );
  const [settings] = useSettings();
  if (isFetchingFaction) {
    return <LoadingOverlay visible={isFetchingFaction} />;
  }
  if (!faction) {
    return;
  }
  const cards = faction.killteams
    ?.filter((killteam) => killteam.edition === "kt24")
    ?.filter((killteam) => (settings.homebrew ? true : !killteam.isCustom))
    ?.map((killteam) => (
      <Card
        key={killteam.killteamid}
        className={classes.card}
        p="sm"
        radius="sm"
        component={Link}
        href={`/fa/${faction.factionid}/kt/${killteam.killteamid}`}
      >
        <Grid>
          <Grid.Col span={5}>
            <Image
              h="100%"
              fit="cover"
              style={{ objectPosition: "top" }}
              radius="sm"
              src={`/img/portraits/${faction.factionid}/${killteam.killteamid}/${killteam.killteamid}.jpg`}
            />
          </Grid.Col>
          <Grid.Col span={7}>
            <Stack gap="sm">
              <Title order={3}>{killteam.killteamname}</Title>
              <Text
                size="sm"
                lineClamp={3}
                dangerouslySetInnerHTML={{ __html: `${killteam.description}` }}
              ></Text>
            </Stack>
          </Grid.Col>
        </Grid>
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
