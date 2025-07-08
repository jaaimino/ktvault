import { ActionIcon, Card, Group, Image, Menu, Stack, Text, Title } from "@mantine/core";
import { Link, useLocation } from "wouter";
import classes from './rosters.module.css';
import { API_PATH } from "../../hooks/use-api";
import { IconCards, IconCopy, IconDotsVertical, IconEye, IconFileImport, IconPhoto, IconStar, IconStarFilled, IconTrash } from "@tabler/icons-react";

export default function RosterCard(props) {
    const { roster, editable, onDelete = () => { }, onDeploy = () => { }, onCopy = () => {} } = props;
    const [, navigate] = useLocation();
    return (
        <Card key={roster.rosterid} p="md" radius="sm" component={Link} className={classes.card} href={`/r/${roster.rosterid}`}>
            <Group justify="space-between" wrap="nowrap">
                <Title textWrap="pretty" order={3}>{roster.rostername}</Title>
                <Menu withinPortal position="bottom-end" shadow="sm">
                    <Menu.Target>
                        <ActionIcon variant="subtle" color="gray" onClick={(event) => { event.preventDefault(); event.stopPropagation() }}>
                            <IconDotsVertical />
                        </ActionIcon>
                    </Menu.Target>

                    <Menu.Dropdown onClick={(event) => { event.preventDefault(); event.stopPropagation() }}>
                        <Menu.Item leftSection={<IconEye />} onClick={() => navigate(`/r/${roster.rosterid}`)}>
                            View
                        </Menu.Item>

                        {!!editable && <Menu.Item
                            onClick={() => onDeploy(roster.rosterid)}
                            leftSection={<IconCards />}
                        >
                            Deploy
                        </Menu.Item>}
                        <Menu.Item leftSection={<IconPhoto />} onClick={() => navigate(`/r/${roster.rosterid}/g`)}>
                            Photo Gallery
                        </Menu.Item>
                        <Menu.Item leftSection={<IconCopy />} onClick={() => onCopy(roster)}>
                            Duplicate Roster
                        </Menu.Item>
                        {!!editable && <Menu.Item
                            onClick={() => onDelete(roster)}
                            leftSection={<IconTrash />}
                            color="red"
                        >
                            Delete
                        </Menu.Item>}
                    </Menu.Dropdown>
                </Menu>
            </Group>
            <Stack mt="md">
                <Image radius="sm" src={`${API_PATH}/rosterportrait.php?rid=${roster.rosterid}`} />
                <Group justify="space-between" gap={5}>
                    <Group>
                        {!!roster.spotlight ? <IconStarFilled /> : <IconStar />}
                        <Group gap={5}><IconEye />{roster.viewcount.toString()}</Group>
                        <Group gap={5}><IconFileImport />{roster.importcount.toString()}</Group>
                    </Group>
                    <Group>
                        <Text><Link href={`/fa/${roster.factionid}/kt/${roster.killteamid}`}>{roster.killteamname} <sup>{roster.edition}</sup></Link> by <Link href={`/u/${roster.username}`}>{roster.username}</Link></Text>
                    </Group>
                </Group>
            </Stack>
        </Card>
    );
}