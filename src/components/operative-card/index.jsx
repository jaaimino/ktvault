import { ActionIcon, Card, Collapse, Group, Image, Menu, Paper, SimpleGrid, Stack, Table, Text, Title, UnstyledButton, Checkbox } from "@mantine/core";
import { IconArrowBigRight, IconCamera, IconChevronDown, IconChevronUp, IconCrosshair, IconDice, IconDotsVertical, IconDroplet, IconEdit, IconShield, IconSwords, IconTrash, IconTriangleInverted, IconUser, IconUserBolt } from "@tabler/icons-react";
import { API_PATH } from "../../hooks/use-api";
import { modals } from "@mantine/modals";
import parseWeaponRules from "./parser";
import React from "react";
import { UpdateOperativePotraitModal, UpdateWoundsModal } from "./modals";
import { useSettings } from "../../hooks/use-settings";

export default function OperativeCard(props) {
    const {
        operative,
        collapsible,
        editable, onEdit = () => { },
        onDelete = () => { },
        woundTracker, onUpdateWounds = () => { },
        orderTracker, onUpdateOrder = () => { },
        activationTracker, onUpdateActivation = () => { }
    } = props;
    const [opened, setOpened] = React.useState(true);
    const [settings] = useSettings();
    const [imageExpire, setImageExpire] = React.useState(true);
    const getStatusColor = () => {
        if (operative.curW <= 0) {
            return "var(--mantine-color-gray-6)";
        }
        if (operative.curW < operative.W / 2) {
            return "var(--mantine-color-red-6)";
        }
        return "var(--mantine-color-orange-8)";
    }
    const operativeStatGrid = 2;
    if (!operative) {
        return <></>;
    }
    const handleShowUpdateOperativePortrait = () => {
        modals.open({
            modalId: "update-operative-portrait",
            size: "xl",
            title: <Title order={2}>{operative.opname}</Title>,
            children: <UpdateOperativePotraitModal operative={operative} onClose={(expire) => setImageExpire(expire)} />
        });
    }
    const showUpdateWounds = () => modals.open({
        size: "auto",
        withCloseButton: false,
        centered: true,
        modalId: 'update-wounds',
        title: <Title px="md" order={3}>Update Wounds</Title>,
        children: (
            <UpdateWoundsModal operative={operative} onClose={(wounds) => onUpdateWounds(wounds)} />
        ),
    });
    const showSpecialRules = (weaponName, weapon, profile) => modals.open({
        size: "lg",
        title: <Title order={3}>{weaponName}</Title>,
        children: (
            <Stack>{parseWeaponRules(operative.edition, weapon, profile).map((rule) => (
                <Stack gap="sm">
                    <Title order={4}><span dangerouslySetInnerHTML={{ __html: rule.rulename }} /></Title>
                    <Text><span dangerouslySetInnerHTML={{ __html: rule.ruletext }} /></Text>
                </Stack>
            ))}</Stack>
        ),
    });
    const getOrderIconPath = (operative) => {
        return "/img/icons/" + (operative.oporder === 'engage' ? "Engage" : "Conceal") + (operative.activated === 1 ? "White" : "Orange") + ".png";
    }
    const renderWeapon = (weapon) => {
        if (weapon?.profiles?.length > 1) {
            return (
                <>
                    {weapon.profiles.length > 1 && <Table.Tr key={weapon.wepid}>
                        <Table.Td>
                            <span>
                                {weapon.weptype === "M" ?
                                    <IconSwords color=" var(--mantine-color-orange-8)" size={20} /> : <IconCrosshair color=" var(--mantine-color-orange-8)" size={20} />}
                                <span style={{ marginLeft: '5px' }}>{weapon.wepname}</span>
                            </span>
                        </Table.Td>
                    </Table.Tr>}
                    {weapon.profiles.map((profile) => (
                        <Table.Tr key={profile.profileid}>
                            <Table.Td>- {profile.name} <span role="button" onClick={() => showSpecialRules(`${weapon.wepname} - ${profile.name}`, weapon, profile)} style={{ textDecoration: 'underline', cursor: 'pointer', userSelect: 'none' }}>
                                {profile.SR ? <span dangerouslySetInnerHTML={{ __html: `(${profile.SR})` }} /> : ''}
                            </span>
                            </Table.Td>
                            <Table.Td style={{ textAlign: 'center' }}>{profile.A}</Table.Td>
                            <Table.Td style={{ textAlign: 'center' }}>{profile.BS}</Table.Td>
                            <Table.Td style={{ textAlign: 'center' }}>{profile.D}</Table.Td>
                        </Table.Tr>
                    ))}
                </>
            )
        }
        return (
            <>
                <Table.Tr key={weapon.wepid}>
                    <Table.Td>
                        <span>
                            {weapon.weptype === "M" ?
                                <IconSwords color=" var(--mantine-color-orange-8)" size={20} /> : <IconCrosshair color=" var(--mantine-color-orange-8)" size={20} />}
                            <span style={{ marginLeft: '5px' }}>
                                {weapon.wepname} <span role="button" onClick={() => showSpecialRules(weapon.wepname, weapon, weapon.profiles[0])} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                                    {weapon.profiles[0].SR ? <span dangerouslySetInnerHTML={{ __html: `(${weapon.profiles[0].SR})` }} /> : ''}
                                </span>
                            </span>
                        </span>
                    </Table.Td>
                    <Table.Td style={{ textAlign: 'center' }}>{weapon.profiles[0].A}</Table.Td>
                    <Table.Td style={{ textAlign: 'center' }}>{weapon.profiles[0].BS}</Table.Td>
                    <Table.Td style={{ textAlign: 'center' }}>{weapon.profiles[0].D}</Table.Td>
                </Table.Tr>
            </>
        )
    }
    return (
        <Card padding="xs">
            <Stack gap="xs">
                <Stack style={{ cursor: collapsible ? 'pointer' : 'inherit' }} withBorder={opened} inheritPadding>
                    {/* Card Title */}
                    <Group justify="space-between" wrap="nowrap">
                        <Group gap={5} flex={1} wrap="nowrap">
                            {/* Op Order and Activation */}
                            <Stack>
                                {activationTracker ? (<Checkbox checked={operative.activated === 1} onClick={(event) => onUpdateActivation(event.target.checked ? 1 : 0)} />) :""}
                                {orderTracker ? (<Image src={getOrderIconPath(operative)} h={25} onClick={() => onUpdateOrder(operative.oporder === 'engage' ? 'conceal' : 'engage')} />) :""}
                            </Stack>
                            {/* Op Name/Type */}
                            <Stack gap={5} flex={1}>
                                <Title onClick={() => collapsible ? setOpened(!opened) : null} textWrap="pretty" order={3}>{settings.opnamefirst === "y" ? operative.opname : operative.optype || operative.opname}</Title>
                                <Text size="sm">{(settings.opnamefirst === "y" || !operative.optype) ? operative.optype : operative.opname}</Text>
                            </Stack>
                        </Group>
                        {!!collapsible && <>{opened ? <IconChevronDown onClick={() => collapsible ? setOpened(!opened) : null} /> : <IconChevronUp onClick={() => collapsible ? setOpened(!opened) : null} />}</>}
                        {!!editable && <Menu withinPortal position="bottom-end" shadow="sm">
                            {/* Op Actions Menu */}
                            <Menu.Target>
                                <ActionIcon variant="subtle" color="gray" onClick={(event) => event.preventDefault()}>
                                    <IconDotsVertical />
                                </ActionIcon>
                            </Menu.Target>
                            <Menu.Dropdown>
                                {!!editable && <>
                                    <Menu.Item
                                        onClick={() => onEdit(operative)}
                                        leftSection={<IconEdit />}
                                    >
                                        Edit
                                    </Menu.Item>
                                    <Menu.Item
                                        onClick={() => handleShowUpdateOperativePortrait()}
                                        leftSection={<IconCamera />}
                                    >
                                        Edit Portrait
                                    </Menu.Item>
                                    <Menu.Item
                                        onClick={() => onDelete(operative)}
                                        leftSection={<IconTrash />}
                                        color="red"
                                    >
                                        Delete
                                    </Menu.Item>
                                </>}
                            </Menu.Dropdown>
                        </Menu>}
                    </Group>
                </Stack>
                <Collapse in={opened} spacing="xs">
                    <Stack>
                        <Stack>
                            <SimpleGrid cols={{ base: 2 }} spacing="xs">
                                {/* Op Portrait */}
                                <Image
                                    onClick={() => modals.open({
                                        size: "xl",
                                        title: <Title order={2}>{operative.opname}</Title>,
                                        children: <Image
                                            fit="cover"
                                            style={{ objectPosition: "top" }}
                                            radius="sm"
                                            src={operative.rosteropid ? `${API_PATH}/operativeportrait.php?roid=${operative.rosteropid}&expire=${imageExpire}` : `/img/portraits/${operative.factionid}/${operative.killteamid}/${operative.fireteamid}/${operative.opid}.jpg`}
                                        />
                                    })}
                                    fit="cover"
                                    style={{ objectPosition: "top", cursor: 'pointer' }}
                                    h={140} radius="sm"
                                    src={operative.rosteropid ? `${API_PATH}/operativeportrait.php?roid=${operative.rosteropid}&expire=${imageExpire}` : `/img/portraits/${operative.factionid}/${operative.killteamid}/${operative.fireteamid}/${operative.opid}.jpg`}
                                />
                                {/* Op Stats */}
                                <SimpleGrid cols={{ base: operativeStatGrid }} spacing={5}>
                                    <Paper><Stack h="100%" justify="center" align="center" gap={5}><Text fw={700}>APL</Text><Group gap={2}><IconTriangleInverted color=" var(--mantine-color-orange-8)" size={20} /><Text fw={700}>{operative.APL}</Text></Group></Stack></Paper>
                                    <Paper><Stack h="100%" justify="center" align="center" gap={5}><Text fw={700}>{operative?.edition !== "kt21" ? "MOVE" : "MV"}</Text> <Group gap={0}>{operative?.edition !== "kt21" && <IconArrowBigRight color=" var(--mantine-color-orange-8)" size={20} />}<Text fw={700}><span dangerouslySetInnerHTML={{ __html: `${operative.M}` }} /></Text></Group></Stack></Paper>
                                    {operative?.edition === "kt21" && <Paper><Stack h="100%" justify="center" align="center" gap={5}><Text fw={700}>GA</Text> <Group gap={2}><IconUser color=" var(--mantine-color-orange-8)" size={20} /><Text fw={700}>{operative.GA}</Text></Group></Stack></Paper>}
                                    {operative?.edition === "kt21" && <Paper><Stack h="100%" justify="center" align="center" gap={5}><Text fw={700}>DF</Text> <Group gap={2}><IconDice color=" var(--mantine-color-orange-8)" size={20} /><Text fw={700}>{operative.DF}</Text></Group></Stack></Paper>}
                                    <Paper><Stack h="100%" justify="center" align="center" gap={5}><Text fw={700}>{operative?.edition !== "kt21" ? "SAVE" : "SV"}</Text> <Group gap={2}><IconShield color=" var(--mantine-color-orange-8)" size={20} /><Text fw={700}>{operative.SV}</Text></Group></Stack></Paper>
                                    {woundTracker ?
                                        (<Paper style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <UnstyledButton color="white" variant="subtle" style={{ padding: 0 }} onClick={showUpdateWounds}>
                                                <Stack justify="center" align="center" gap={5}>
                                                    <Text fw={700}>{operative?.edition !== "kt21" ? "WOUND" : "WND"}</Text>
                                                    <Group gap={2}>{operative?.edition !== "kt21" && <IconDroplet color={getStatusColor()} size={20} />}<Text fw={700}>{`${operative.curW}/${operative.W}`}</Text></Group>
                                                </Stack>
                                            </UnstyledButton>
                                        </Paper>)
                                        :
                                        (<Paper>
                                            <Stack h="100%" justify="center" align="center" gap={5}>
                                                <Text fw={700}>{operative?.edition !== "kt21" ? "WOUND" : "WND"}</Text>
                                                <Group gap={2}>{operative?.edition !== "kt21" && <IconDroplet color=" var(--mantine-color-orange-8)" size={20} />}<Text fw={700}>{operative.W}</Text></Group>
                                            </Stack>
                                        </Paper>
                                    )}
                                </SimpleGrid>
                            </SimpleGrid>
                        </Stack>
                        <Paper px="xs">
                            {/* Weapons */}
                            <Stack>
                                <Table horizontalSpacing={2} style={{ fontSize: '14px', marginLeft: '-2px' }}>
                                    <Table.Thead>
                                        <Table.Tr>
                                            <Table.Th>WEAPONS</Table.Th>
                                            <Table.Th style={{ textAlign: 'center' }}>ATK</Table.Th>
                                            <Table.Th style={{ textAlign: 'center' }}>HIT</Table.Th>
                                            <Table.Th style={{ textAlign: 'center' }}>DMG</Table.Th>
                                        </Table.Tr>
                                    </Table.Thead>
                                    <Table.Tbody>
                                        {operative.weapons.map((weapon) => (
                                            <>{renderWeapon(weapon)}</>
                                        ))}
                                    </Table.Tbody>
                                </Table>
                            </Stack>
                        </Paper>
                        {(!!operative?.uniqueactions?.length || !!operative?.abilities?.length) && <Paper p="xs"><SimpleGrid cols={{ base: (operative?.uniqueactions?.length && operative?.abilities?.length) ? 2 : 1 }}>
                            {!!operative?.uniqueactions?.length && <Stack gap="xs">
                                {/* Unique Actions */}
                                <Text size="sm" fw={700}>ACTIONS</Text>
                                <Group gap="xs">
                                    {operative?.uniqueactions?.map((ability) => (
                                        <Text
                                            style={{ textDecoration: 'underline', cursor: 'pointer', userSelect: 'none' }}
                                            onClick={() => {
                                                modals.open({
                                                    size: "lg",
                                                    title: <Title order={2}>{ability.title} {ability.AP ? `(${ability.AP} AP)` : ''}</Title>,
                                                    children: (
                                                        <div dangerouslySetInnerHTML={{ __html: `${ability.description}` }} />
                                                    ),
                                                });
                                            }}
                                        >
                                            {ability.title} {ability.AP ? `(${ability.AP} AP)` : ''}
                                        </Text>
                                    ))}
                                </Group>
                            </Stack>}
                            {!!operative?.abilities?.length && <Stack gap="xs">
                                {/* Abilities */}
                                <Text size="sm" fw={700}>ABILITIES</Text>
                                <Group gap="xs">
                                    {operative?.abilities?.map((ability) => (
                                        <Text
                                            role="button"
                                            style={{ textDecoration: 'underline', cursor: 'pointer', userSelect: 'none' }}
                                            onClick={() => {
                                                modals.open({
                                                    size: "lg",
                                                    title: <Title order={2}>{ability.title}</Title>,
                                                    children: (
                                                        <div dangerouslySetInnerHTML={{ __html: `${ability.description}` }} />
                                                    ),
                                                });
                                            }}
                                        >
                                            {ability.title}
                                        </Text>
                                    ))}
                                </Group>
                            </Stack>}
                        </SimpleGrid></Paper>}
                        {!!operative?.equipments?.length && <Paper p="xs"><Stack gap="xs">
                            {/* Equipment/Options */}
                            <Text size="sm" fw={700}>EQUIPMENT</Text>
                            <Group gap="xs">
                                {operative?.equipments?.map((equip) => (
                                    <Text
                                        role="button"
                                        style={{ textDecoration: 'underline', cursor: 'pointer', userSelect: 'none' }}
                                        onClick={() => {
                                            modals.open({
                                                size: "lg",
                                                title: <Title order={2}>{equip.eqname}</Title>,
                                                children: (
                                                    <div dangerouslySetInnerHTML={{ __html: `${equip.eqdescription}` }} />
                                                ),
                                            });
                                        }}
                                    >
                                        {equip.eqname}
                                    </Text>
                                ))}
                            </Group>
                        </Stack></Paper>}
                        {/* Op Keywords */}
                        <Text px={2} size="xs">{operative.keywords}</Text>
                    </Stack>
                </Collapse>
            </Stack>
        </Card>
    );
}