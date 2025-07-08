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
import { IconCheck, IconX } from "@tabler/icons-react";
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
    <Container py="md">
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
            <div>
              <Title order={3}>Community</Title>
              This is a community run project. To get involved, you can visit
              one of the links below.
              <ul>
                <li>
                  <a href="https://github.com/jaaimino/ktvault" target="_blank">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel value="settings">
          <Stack py="md">
            <Stack>
              <SimpleGrid spacing="md" cols={{ base: 1, md: 2 }}>
                <Stack>
                  <Title order={3}>Homebrew</Title>
                  <Text>Shows homebrew teams and scenarios if enabled.</Text>
                  <SegmentedControl
                    value={settings?.homebrew?.toString()}
                    onChange={(value) => updateSettings("homebrew", value === "true")}
                    color="orange"
                    data={[
                      {
                        value: "true",
                        label: (
                          <Center style={{ gap: 10 }}>
                            <IconCheck
                              style={{ width: rem(16), height: rem(16) }}
                            />
                            <span>Yes</span>
                          </Center>
                        ),
                      },
                      {
                        value: "false",
                        label: (
                          <Center style={{ gap: 10 }}>
                            <IconX
                              style={{ width: rem(16), height: rem(16) }}
                            />
                            <span>No</span>
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
