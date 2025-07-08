import { Box, createTheme, Image, MantineProvider, Title } from "@mantine/core";
import { AppShell, Group } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { NavbarSimple } from "./components/navbar";
import Root from "./pages";
import MainLogo from "./assets/icon-96x96.png";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import "./App.css";
import { Link, Router } from "wouter";
import AppContextProvider from "./hooks/app-context";
import "./assets/Oswald-VariableFont_wght.ttf";
import { useHashLocation } from "wouter/use-hash-location";

const theme = createTheme({
  fontFamily: 'Oswald, "Arial Narrow", Roboto, sans-serif',
  primaryColor: "orange",
  breakpoints: {
    xs: "36em", // Mantine Default: 36em
    sm: "48em", // Mantine Default: 48em
    md: "62em", // Mantine Default: 62em
    lg: "90em", // Mantine Default: 75em
    xl: "114em", // Mantine Default: 88em
  },
});

function App() {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Router hook={useHashLocation} base="/">
        <AppContextProvider>
          <Notifications />
          <ModalsProvider>
            <AppShell
              header={{ height: { sm: 0, md: 60 } }}
              footer={{ height: { base: 50, sm: 50, md: 0 } }}
              padding={0}
            >
              <AppShell.Header visibleFrom="md">
                <Group
                  h="100%"
                  px="md"
                  gap={5}
                  align="center"
                  justify="space-between"
                  style={{ flex: 1 }}
                  wrap="nowrap"
                >
                  <Group justify="center" gap={5}>
                    <Link
                      style={{
                        display: "flex",
                        textDecoration: "none",
                        color: "white",
                        alignItems: "center",
                      }}
                      href="/"
                    >
                      <Group gap={5}>
                        <Image h={40} w="auto" fit="contain" src={MainLogo} />
                        <Title fontFamily="Anton" order={2}>
                          KTVault
                        </Title>
                      </Group>
                    </Link>
                  </Group>
                  <Box>
                    <NavbarSimple />
                  </Box>
                </Group>
              </AppShell.Header>
              <AppShell.Main>
                <Root />
              </AppShell.Main>
              <AppShell.Footer hiddenFrom="md">
                <NavbarSimple />
              </AppShell.Footer>
            </AppShell>
          </ModalsProvider>
        </AppContextProvider>
      </Router>
    </MantineProvider>
  );
}

export default App;
