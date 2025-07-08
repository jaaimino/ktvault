import { Container, Stack, Text, Title } from "@mantine/core";

export default function Rules() {
  return (
    <Container py="md">
      <Title order={2}>Datacards</Title>
      <Text>Datacards contain specific rules for each operative, including key stats.</Text>
 <Title order={3}>Agent type</Title>
 <Title order={3}>Operative stats</Title>
<ul>
<li>APL (Action point limit): The total cost of actions an operative can perform during its activation, and a stat used to determine control of markers. Some rare rules change an operative’s APL. Regardless of how many APL stat changes an operative is affected by, the total can never be more than -1 or +1 from its normal APL. This takes precedence over all stat changes.
If an operative has an APL of 2, and two rules say to add 1 to the operative’s APL, it would have an APL of 3.</li>

<li>Move: The operative’s move distance, used when performing the Reposition, Fall Back and Charge actions. An operative’s Move stat can never be changed to less than 4”. This takes precedence over all stat changes.
If an operative’s stats are changed during an action, apply the change once the action has been completed.</li>

<li>Save: The result required for successful defence dice whenever another operative is shooting the operative.
Note that a higher numbered Hit and Save stat is worse because your chance of rolling a success decreases. This is important if a rule requires you to improve or worsen such a stat. For example, a 4+ Hit stat worsened by 1 is 5+.</li>

Wounds: The operative’s starting number of wounds, which is reduced as damage is inflicted upon it.

   </ul>
    
<Title order={3}>Weapon stats</Title>
<ul>
  <li>The kill team selection pages in your kill team’s rules specify what weapons an operative has. If it doesn’t specify, an operative has all the weapons on its datacard.</li>
 <li>- Weapon type:  are ranged weapons for whenever an operative is shooting,  are melee weapons for whenever an operative is fighting or retaliating.</li>
Atk: The number of attack dice to roll whenever an operative uses this weapon.
Hit: The result required for successful attack dice whenever an operative uses this weapon.
Dmg: The damage each attack dice inflicts with this weapon. The first value is its Normal Dmg stat (damage from a normal success), the second value is its Critical Dmg stat (damage from a critical success).
Sometimes different weapons will have the same primary name but different secondary names, represented in brackets, e.g. “plasma gun (standard)” and “plasma gun (supercharge)”. These are effectively separate profiles of the same weapon, but used as different weapons. If a rule refers to just the primary name, it includes all weapons with that primary name.
 </ul>
 <Title order={3}>Additional rules</Title>
Additional rules the operative has.
Unique actions that can be performed by the operative. Actions are explained here.
 Keywords
Used to identify the operative for rules – some rules will only affect operatives with the relevant keywords.
Shown in KEYWORD BOLD font.
Keywords in orange with a skull symbol, e.g. TEMPESTUS AQUILON, are faction keywords – used to identify all operatives from that kill team.
 Bases
Bases size in mm.

Key Principles
Bases
All operatives are on bases. The base is an important part of the miniature for rules purposes, in particular measuring distances. Each operative’s base size is specified on its datacard. The sides of different bases can touch, but a base cannot be placed on another. Friendly operatives can move through other friendly operatives (the base and the miniature), but not through enemy operatives. Bases cannot move through terrain, or be over the edge of the killzone.

As you play through your first few games, you’ll gain better context for applying key principles, and can simply refer back to them when needed.

Control Range
Many rules relate to control range such as moving, fighting and using cover. Something is within an operative’s control range if it’s visible to and within 1" of that operative.

Control range between operatives is mutual, therefore operatives are within each other’s control range if one of them is visible to and within 1" of the other.

Imagine control range as an area of interaction the operative has with things close to it.

Control Range Example
Operatives A and B are within each other’s control range.

The terrain is within both operative B and C’s control range.

Because of the terrain, operative B is not visible to operative C, and vice versa, therefore they are not within each other’s control range.

Cover
Cover is determined from one operative to another, usually when one of them is shooting. An operative is in cover if there’s intervening terrain within its control range. However, it cannot be in cover within 2" of the other operative. Intervening is explained here.

An operative in cover with a Conceal order is not a valid target. An operative in cover with an Engage order is a valid target, but has a cover save (see Shoot action here).

Cover ExampleThere’s intervening terrain within operative A’s control range, therefore it’s in cover.
Cover ExampleThere’s intervening terrain, but it’s not within operative A’s control range, therefore it’s not in cover.
Cover ExampleThere’s terrain within operative A’s control range, but the terrain is not intervening, therefore it’s not in cover.
Cover ExampleThere’s intervening terrain within operative A’s control range, but operative B is within 2" of operative A, therefore it’s not in cover.
Damage
When damage is inflicted on an operative, reduce their wounds by that amount. An operative’s starting number of wounds is determined by its Wounds stat (see datacards). If an operative’s wounds are reduced to 0 or less, it’s incapacitated, then removed from the killzone.

While an operative has fewer than its starting wounds remaining, it’s wounded. While it has fewer than half its starting wounds remaining, it’s also injured. Subtract 2" from the Move stat of injured operatives and worsen the Hit stat of their weapons by 1.

Keep track of each operative’s remaining wounds with dice, tokens or by writing it down.

‘Incapacitated’ and ‘removed from the killzone’ are separate. Some rules take effect when an operative is incapacitated, but before it’s removed.

Datacards
Datacards contain specific rules for each operative, including key stats.

Dice (D6, D3)
Use 6-sided dice to determine the outcome of various rules. This will often require x+, where x is the lowest possible result, e.g., 3+. Sometimes a result within a range will be required, e.g., 1-3. Some rare rules require you to roll a D3. To do so, roll one D6 and halve the result (rounding up). Some require xD6 or xD3 (e.g., 2D6 or 3D3). Roll x number of dice and add the results together. Some require D6+x or D3+x (e.g., D6+2 or D3+3). Roll that dice and add x to the result.

Some rules allow you to re-roll a dice roll. You can never re-roll a dice roll more than once, and you cannot select the original result, even if the new result is worse. If it’s an attack or defence dice, you re-roll before it’s retained or discarded. If you can re-roll multiple different dice, you can do this in any order, including seeing the result of one re-roll before deciding on the next. If multiple players can re-roll dice at the same time (e.g., during a Fight action), they alternate either re-rolling a dice or passing until they both pass in succession, starting with the player with initiative (this takes precedence over initiative and rules that would happen at the same time).

For example, if a 4+ is required, a dice result of 4, 5 or 6 fulfils this, and if a 1-4 is required, a dice result of 1, 2, 3 or 4 fulfils this.

Distances
Various rules have a distance requirement in inches. When measuring to and from something, do so from the closest part of it. For an operative, do so from its base, ignoring all parts of its miniature. When measuring to and from an area of the killzone, measure the horizontal distance only (in other words, look from above to ignore the vertical distance).

If a rule requires something to be ‘within’ a distance, the requirement is fulfilled if any part of it is that distance or less. If a rule requires something to be ‘wholly within’ a distance, the requirement is fulfilled if every part of it is that distance or less. An operative is always within and wholly within distance requirements of itself and a marker it’s carrying. If an operative is carrying a marker, that marker is the same distance as that operative.

Operatives within a certain distance of an operative that’s carrying a marker are also within the same distance of that marker.

Distance ExampleDistance measuring example: Operative B is within 2" of operative A. The objective marker is within 2" of operative A. Operative C is wholly within 2" of operative A.
Equipment
Equipment are additional rules you can select before the battle, as specified in your game sequence (see equipment). Universal equipment can be selected for any kill team whereas faction equipment is specific. Each player cannot select each equipment option more than once per game.

Intervening
Rules such as cover and obscured require you to determine if something is intervening, e.g., terrain. Most of the time this is easily determined – if it’s between the operative and the intended target, it’s intervening. Sometimes this will be unclear, so we use targeting lines.

To use targeting lines, the operative’s player draws imaginary straight lines 1mm in diameter from any point of its base to every facing part of the intended target’s base. Anything at least one of these lines cross is intervening. Anything all of these lines cross is wholly intervening.

The operative’s player decides from which point of the base targeting lines are drawn from. This can allow the operative to get a more favourable targeting angle — imagine the operative leaning right or left as appropriate.

Intervening is usually determined from one operative to another, but some rare rules will require you to determine it from other things such as markers. In such instances, treat all parts of that thing as the ‘base’ when determining this.

Intervening ExampleTargeting lines cross terrain, therefore it’s intervening.
Intervening ExampleDue to where operative A’s player has decided to draw the targeting lines from, the terrain is not intervening.
Intervening Example
Most commonly, targeting lines can be drawn in a two-dimensional (top down) manner for ease. However, if there’s a difference in height between the operatives (e.g., one of them is on Vantage terrain), targeting lines should be drawn in a three-dimensional manner.

None of these targeting lines cross terrain feature A, therefore it’s not intervening.

Keywords
Keywords are an identification method for certain rules. You will most commonly use keywords with operatives (see datacards) – some rules will only affect operatives with the relevant keywords.

Some rare rules also have keywords, e.g., SUPPORT or STRATEGIC GAMBIT. These keywords mean nothing on their own, but other rules interact with them. Keywords are shown in KEYWORD BOLD font. Those in orange with a skull symbol, e.g., TEMPESTUS AQUILON, are faction keywords used to identify all operatives/rules from that kill team.

Markers
Markers are placed in precise locations (this must be a location in which they can be placed) and impact the game and operatives around them. They can be placed underneath operatives (temporarily remove operatives to do so), and operatives can be placed upon them. Objective markers are 40mm in diameter. All other markers are 20mm in diameter. Some markers are known as mission markers. This means nothing on its own, but other rules interact with it.

Operatives contest markers within their control range. Friendly operatives control a marker if the total APL of those contesting it is greater than that of enemy operatives, but control cannot change during an action. While an operative is carrying a marker (see Pick Up Marker here), it contests and controls that marker, and is the only operative that can.

Objective markers are the most common marker, representing vital locations in the killzone. Controlling them is often required to achieve victory.

It’s fine to use a miniature to represent a marker, but have a normal marker available if it creates rules issues (e.g., it’s too big).

Markers ExampleExample of markers in play. Only three operatives contest the objective marker, as it isn’t within control range of the orange operative on the left (the terrain feature prevents it from being visible). The total APL of the orange operatives contesting the objective marker is 2. The total APL of the white operatives contesting it is 4, so they control it.
Obscured
Obscured is determined from one operative to another, usually when one of them is shooting. An operative is obscured if there’s intervening Heavy terrain that’s more than 1” from both operatives. However, it cannot be obscured by intervening Heavy terrain that’s within 1” of either operative. Intervening is explained here.

When an operative is shooting, if the target operative is obscured:

The attacker must discard one success of their choice instead of retaining it.
All the attacker’s critical successes are retained as normal successes and cannot be changed to critical successes (this takes precedence over all other rules).
Obscured is when an operative is a valid target, but intervening obstacles (usually terrain) make it a less efficient target. Imagine the operative having to target the enemy through a ruin or distant window.

Obscured ExampleOperative B is visible to operative A through a window. However, there’s intervening Heavy terrain more than 1” from both operatives, therefore operative B is obscured.
Obscured ExampleThere’s intervening Heavy terrain, but it’s within 1” of A, therefore operative B is not obscured.
Obscured ExampleThere’s intervening Heavy terrain. Whilst parts of it are within 1” of the operatives, part of it isn’t, therefore operative B is obscured.
In other words, an operative being within 1" of a terrain feature doesn’t prevent the whole terrain feature from being obscuring, only the part within 1" of the operative.

Operatives
Operatives are the Citadel miniatures used in the game. Your operatives are friendly operatives, and your opponent’s operatives are enemy operatives.

Orders
Order
Engage: The operative can perform actions as normal and can counteract.
Order
Conceal: The operative cannot perform Shoot and Charge actions, and it cannot counteract. However, it’s not a valid target while it’s in cover.
Operatives are given a Conceal order when they are set up before the battle. You can change an operative’s order whenever it’s activated.

Order tokens have two sides. The lighter side shows an operative is ready (it can be activated in the Firefight phase) and the darker side shows an operative is expended (it has been activated in the Firefight phase).

Ploys
Players can spend CP on ploys to gain rules bonuses at the opportune moment. Unless otherwise specified, all ploys cost 1CP. There are two types of ploys:

Every strategy ploy is a STRATEGIC GAMBIT (used in the Gambit step of the Strategy phase). Some apply rules that are resolved “immediately”; otherwise, they apply rules that last until the end of the turning point.
Firefight ploys are used in the Firefight phase and apply rules as the ploy specifies.
All players have access to the Command Re-roll firefight ploy below and the ploys in their kill team’s rules. Other than Command Re-roll, each player cannot use each ploy more than once per turning point.

Command Re-Roll
1CP
Use this firefight ploy after rolling your attack or defence dice. You can re-roll one of those dice.
Precedence
Some rare rules will conflict with each other, so it must be established which takes precedence. In order of priority, a rule takes precedence if:

It specifically says so.
The online designer’s commentary says so.
It’s not found in the core book (i.e., other rules take precedence over core book rules).
It says "cannot".
The player with initiative decides.
Roll-off
If a rule requires a roll-off, both players roll one D6 and whoever has the highest wins the roll-off. If there’s a tie, roll-off again.

Tokens
Tokens are used to help you keep track of rules effects. They are often placed next to the relevant operative, but can be moved to make space for other operatives and markers as necessary. They are removed when the tracked rules effect ends.

Valid Target
Some rules require you to select a valid target for an operative. This is most common when an operative is shooting, but some rare rules require it too. If the intended target has an Engage order, it’s a valid target if it’s visible to the operative. If the intended target has a Conceal order, it’s a valid target if it’s visible to the operative and not in cover.

Visible
For something to be visible, the operative must be able to see it. To check visibility, look from behind the operative and determine if you can draw an unobstructed straight line 1mm in diameter from its head to any part of what it’s trying to see. Ignore operatives’ bases when determining this. An operative is always visible to itself. The enemy operative is visible in both images below, even when partially behind the nearby ruin.

Visible ExampleFull visibility example.
Visible ExamplePartial visibility example.
Killzone Floor
The killzone floor is the lowest level of the killzone (i.e., the game board). Anything that’s on a marker that’s on the killzone floor is also on the killzone floor.
    </Container>
  );
}
