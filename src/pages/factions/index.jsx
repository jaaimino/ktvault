import {
  AspectRatio,
  Card,
  Container,
  Grid,
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
import { sortBy } from "lodash";

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

  const sortedFactions = [
    ...sortBy(factions.slice(0, factions?.length - 1), "factionname"),
    ...factions.slice(factions?.length - 1, factions?.length),
  ];

  const cards = sortedFactions?.map((faction) => (
    <Card
      key={faction.factionid}
      p="sm"
      radius="sm"
      component={Link}
      className={classes.card}
      href={`/fa/${faction.factionid}`}
    >
      <Grid>
        <Grid.Col span={5}>
          <Image
            h="100%"
            fit="cover"
            style={{ objectPosition: "top" }}
            radius="sm"
            src={`/img/portraits/${faction.factionid}/${faction.factionid}.jpg`}
          />
        </Grid.Col>
        <Grid.Col span={7}>
          <Stack gap="sm">
            <Title order={3}>{faction.factionname}</Title>
            <Text
              size="sm"
              lineClamp={3}
              dangerouslySetInnerHTML={{ __html: `${faction.description}` }}
            ></Text>
          </Stack>
        </Grid.Col>
      </Grid>
    </Card>
  ));

  return (
    <Container py="md" px="md" fluid>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3, xl: 4 }}>{cards}</SimpleGrid>
    </Container>
  );
}
