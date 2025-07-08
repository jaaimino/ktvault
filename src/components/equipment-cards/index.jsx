import { Card, Checkbox, Group, SimpleGrid, Stack, Title } from "@mantine/core";
import classes from './equipment-card.module.css';
import React from "react";

export default function EquipmentCards(props) {
    const { equipment: groupedEquipment, selectable = false, onSelect = () => { } } = props;
    return (
        <Stack my="md">
            {Object.keys(groupedEquipment)?.map((key) => {
                const equipment = groupedEquipment[key];
                return (
                    <>
                        <Title order={2}>{key}</Title>
                        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                            {equipment.map((equip) => (
                                <>
                                    {selectable ? <Card className={classes.root} onClick={() => onSelect(equip, !equip.selected)}>
                                        <Stack align="flex-start">
                                            <Group>
                                                <Checkbox.Indicator checked={!!equip.selected} />
                                                <Title className={classes.label} order={4}>{equip.eqname}</Title>
                                            </Group>
                                            <div dangerouslySetInnerHTML={{ __html: `${equip.eqdescription}` }} />
                                        </Stack>
                                    </Card> : <Card>
                                        <Stack align="flex-start">
                                            <Title order={3}>{equip.eqname}</Title>
                                            <div dangerouslySetInnerHTML={{ __html: `${equip.eqdescription}` }} />
                                        </Stack>
                                    </Card>}
                                </>
                            ))}
                        </SimpleGrid>
                    </>
                )
            })}
        </Stack>
    );
}