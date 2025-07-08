import {
  Button,
  Center,
  Container,
  rem,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
  Title,
} from "@mantine/core";
import { IconIdBadge, IconList } from "@tabler/icons-react";
import { useSettings } from "../../hooks/use-settings";
import PWAInstallerPrompt from "../../components/install-prompt";

export default function Settings() {
  const [settings, setSettings] = useSettings();

  const updateSettings = (key, value) => {
    setSettings({
      ...settings,
      [key]: value,
    });
  };

  return (
    <Container py="md" fluid>
      <Tabs defaultValue="resources" gap={0}>
        <Tabs.List grow style={{ flexWrap: "nowrap" }}>
          <Tabs.Tab value="resources">Resources</Tabs.Tab>
          <Tabs.Tab value="settings">Settings</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="resources">
          <Stack my="md">
            <PWAInstallerPrompt
              render={({ onClick }) => (
                <Button onClick={onClick}>Install KTVault</Button>
              )}
              callback={() => {}}
            />
          </Stack>
          <Stack my="md">
            <Title order={3}>Community</Title>
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel value="settings">
          <Stack py="md">
            <Stack>
              <SimpleGrid spacing="md" cols={{ base: 1, md: 2 }}>
                <Stack>
                  <Title order={3}>Portraits</Title>
                  <Text>Displays the portraits for operatives if enabled.</Text>
                  <SegmentedControl
                    value={settings?.display}
                    onChange={(value) => updateSettings("display", value)}
                    color="orange"
                    data={[
                      {
                        value: "card",
                        label: (
                          <Center style={{ gap: 10 }}>
                            <IconIdBadge
                              style={{ width: rem(16), height: rem(16) }}
                            />
                            <span>Show</span>
                          </Center>
                        ),
                      },
                      {
                        value: "list",
                        label: (
                          <Center style={{ gap: 10 }}>
                            <IconList
                              style={{ width: rem(16), height: rem(16) }}
                            />
                            <span>Hide</span>
                          </Center>
                        ),
                      },
                    ]}
                  />
                </Stack>
              </SimpleGrid>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}
