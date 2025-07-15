import {
  AspectRatio,
  Box,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Progress,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import classes from "./home.module.css";
import MainLogo from "../../assets/icon-96x96.png";
import { useCallback, useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import { Link } from "wouter";
import useSWR from "swr";
import { fetchFactions } from "../../hooks/use-api/fetchers";
import news from "../../data/news.json";
import { sortBy } from "lodash";

function News() {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return news?.map((newsItem) => (
    <Card fluid>
      <Title order={3}>{newsItem.title}</Title>
      <Text size="sm" pb="md">
        {new Date(newsItem.date).toLocaleDateString("en-US", options)}
      </Text>
      <Text>{newsItem.content}</Text>
    </Card>
  ));
}

export default function Home() {
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

  const sortedFactions = sortBy(
    factions.slice(0, factions?.length - 1),
    "factionname"
  );

  return (
    <>
      <Box shadow="md" className={classes.wrapper}>
        <div className={classes.inner}>
          <Group gap={0} justify="center">
            <Image
              alt="App Logo"
              h={80}
              w="auto"
              fit="contain"
              src={MainLogo}
            />
            <Title mb="md" className={classes.title}>
              KTVault
            </Title>
          </Group>
          <Container className={classes.description} size={640}>
            <Text ta="center">
              KTVault is a kill team reference tool and content vault for
              forgotten teams and content. It aims to keep all teams playable
              even if they've been fully retired from the game.
            </Text>
          </Container>
        </div>
      </Box>
      <Container py="md" fluid>
        <Stack>
          <Title ta="center">Factions</Title>
          <Carousel
            slideSize={{ base: "100%", sm: "50%", md: "33%", lg: "25%" }}
            slideGap="md"
            initialSlide={0}
          >
            {sortedFactions?.map((faction) => (
              <Carousel.Slide>
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
                      <AspectRatio ratio={1}>
                        <Image
                          fit="cover"
                          style={{ objectPosition: "top", height: "100%" }}
                          radius="sm"
                          src={`/img/portraits/${faction.factionid}/${faction.factionid}.jpg`}
                        />
                      </AspectRatio>
                    </Grid.Col>
                    <Grid.Col span={7}>
                      <Stack gap="sm">
                        <Title order={3}>{faction.factionname}</Title>
                        <Text
                          size="sm"
                          lineClamp={5}
                          dangerouslySetInnerHTML={{
                            __html: `${faction.description}`,
                          }}
                        ></Text>
                      </Stack>
                    </Grid.Col>
                  </Grid>
                </Card>
              </Carousel.Slide>
            ))}
          </Carousel>
          <Title ta="center">Latest News</Title>
        </Stack>
      </Container>
      <Container pb="md">
        <News />
      </Container>
    </>
  );
}
