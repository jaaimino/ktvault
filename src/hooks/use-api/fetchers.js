import { find, keyBy, orderBy } from "lodash";
import { request } from ".";
import customFactions from "../../data/compendium2024.json";
import universalEquipment from "../../data/universal_equipment.json";
import tacops from "../../data/tacops.json";

export async function fetchFactions(url) {
  const factions = await request(url);
  const customTeamsByFaction = keyBy(customFactions, "factionid");
  const mergedFactions = factions
    .filter((faction) => faction?.factionid !== "HBR")
    .map((faction) => {
      return {
        ...faction,
        killteams: faction?.killteams
          ? orderBy(
              [
                ...faction.killteams,
                ...(
                  customTeamsByFaction?.[faction?.factionid]?.killteams || []
                )?.map((team) => ({ ...team, isCustom: true })),
              ],
              ["edition", "killteamname"],
              ["desc", "asc"]
            )
          : undefined,
      };
    });
  return mergedFactions;
}

export async function fetchFaction([url, factionId]) {
  const factions = await request(url);
  const faction = find(factions, { factionid: factionId });
  const customTeamsByFaction = keyBy(customFactions, "factionid");
  const mergedFaction = {
    ...faction,
    killteams: orderBy(
      [
        ...faction.killteams,
        ...(customTeamsByFaction?.[faction?.factionid]?.killteams || [])?.map(
          (team) => ({ ...team, isCustom: true })
        ),
      ],
      ["edition", "killteamname"],
      ["desc", "asc"]
    ),
  };
  return mergedFaction;
}

const addUniversalData = (team) => {
  const teamTacops = new Set(team?.fireteams?.[0]?.archetype?.split("/"));
  const mergedTeam = {
    ...team,
    equipments: [
      ...team?.equipments?.filter((equip) => equip.killteamid !== "ALL"),
      ...universalEquipment,
    ],
    tacops: tacops.filter((op) => teamTacops.has(op.archetype)),
  };
  return mergedTeam;
};

export async function fetchKillteam([url, factionId, killteamId]) {
  const factions = await request(url);
  const faction = find(factions, { factionid: factionId });
  const killteam = find(faction?.killteams, { killteamid: killteamId });
  const customTeamsByFaction = keyBy(customFactions, "factionid");
  const customTeam = keyBy(
    customTeamsByFaction?.[factionId]?.killteams,
    "killteamid"
  )?.[killteamId];
  const isCustom = !!customTeam;
  const team = isCustom ? { ...customTeam, isCustom: true } : killteam;
  return addUniversalData(team);
}

export async function fetchRoster([, rosterId]) {
  return await request(`/roster.php?rid=${rosterId}&loadrosterdetail=1`);
}
