import { Container, Stack, Text, Title } from "@mantine/core";

export default function Rules() {
  return (
    <Container py="md">
      <Title order={1}>Quick Reference</Title>
      <Text>This section serves as a quick reference to use while playing games of kill team.</Text>
       <Title order={2}>Operative stats</Title>
<ul>
  <li><b>APL (Action point limit):</b> The total cost of actions an operative can perform during its activation, and a stat used to determine control of markers. Some rare rules change an operative’s APL. Regardless of how many APL stat changes an operative is affected by, the total can never be more than -1 or +1 from its normal APL. This takes precedence over all stat changes.
If an operative has an APL of 2, and two rules say to add 1 to the operative’s APL, it would have an APL of 3.</li>

<li>Move: The operative’s move distance, used when performing the Reposition, Fall Back and Charge actions. An operative’s Move stat can never be changed to less than 4”. This takes precedence over all stat changes.
If an operative’s stats are changed during an action, apply the change once the action has been completed.</li>

<li>Save: The result required for successful defence dice whenever another operative is shooting the operative.
Note that a higher numbered Hit and Save stat is worse because your chance of rolling a success decreases. This is important if a rule requires you to improve or worsen such a stat. For example, a 4+ Hit stat worsened by 1 is 5+.</li>

<li>Wounds: The operative’s starting number of wounds, which is reduced as damage is inflicted upon it.</li>
</ul>
 <Title order={2}>Weapon stats</Title>
The kill team selection pages in your kill team’s rules specify what weapons an operative has. If it doesn’t specify, an operative has all the weapons on its datacard.
 - Weapon type:  are ranged weapons for whenever an operative is shooting,  are melee weapons for whenever an operative is fighting or retaliating.
Atk: The number of attack dice to roll whenever an operative uses this weapon.
Hit: The result required for successful attack dice whenever an operative uses this weapon.
Dmg: The damage each attack dice inflicts with this weapon. The first value is its Normal Dmg stat (damage from a normal success), the second value is its Critical Dmg stat (damage from a critical success).
Sometimes different weapons will have the same primary name but different secondary names, represented in brackets, e.g. “plasma gun (standard)” and “plasma gun (supercharge)”. These are effectively separate profiles of the same weapon, but used as different weapons. If a rule refers to just the primary name, it includes all weapons with that primary name.
<Title order={2}>Universal Actions</Title>
Actions have effects () and conditions ().  are conditions that must be fulfilled for the operative to perform that action, whilst  are effects when an operative is performing that action, including any requirements when doing so. There are four different types of actions: universal, unique, mission and free.

<Text>Universal actions are the most common actions you will use and can be performed by all operatives unless specified otherwise. The main universal actions can be found below.
Unique actions are rarer actions in your kill team’s rules. Only specified operatives can perform them.
Mission actions are specific to the mission or killzone you are playing. If there are any, they will be in your mission pack, killzone rules or the equipment you’ve selected.
Free actions can only be performed when another rule specifies, and the following rules apply:
The conditions of the action must be met.
It does not cost the operative any additional AP to perform the action.
The operative would still count as performing the action for all other rules purposes. For example, if it performed the action during its activation, it wouldn’t be able to perform it again during that activation.
If an operative performs a free action outside of their activation, it does not prevent them from performing that action during their activation, or vice versa.</Text>

<Title order={3}>Reposition</Title>
Reposition 1AP
Move the active operative up to its Move stat to a location it can be placed. This must be done in one or more straight-line increments, and increments are always rounded up to the nearest inch.
It cannot move within control range of an enemy operative, unless one or more other friendly operatives are already within control range of that enemy operative, in which case it can move within control range of that enemy operative but cannot finish the move there.
An operative cannot perform this action while within control range of an enemy operative, or during the same activation in which it performed the Fall Back or Charge action.
Moving in increments allows for greater precision and clarity.

Heavy terrainThe operative has a Move stat of 6”. It first moves in a straight-line increment of 2” to clear the corner of a wall. It then moves in a straight-line increment of 4” — the remaining distance it can move without exceeding its Move stat.
These movements are made in straight-line increments, instead of curving around the corner.

Heavy terrainThe operative first moves in a straight-line increment of 0.5” to clear the corner of a wall, but as increments are rounded up, this is treated as 1”. It then moves in a straight-line increment of 2.75”, but again, this is rounded up to 3”. It has moved 4” in total.
Dash
Dash
1AP
The same as the Reposition action, except don’t use the active operative’s Move stat – it can move up to 3” instead. In addition, it cannot climb during this move, but it can drop and jump.
An operative cannot perform this action while within control range of an enemy operative, or during the same activation in which it performed the Charge action.
Since operatives cannot perform the same action more than once in their activation, Dash actions are the way operatives can move a greater distance.

<Title order={3}>Fall Back</Title>
Fall Back 2AP
The same as the Reposition action, except the active operative can move within control range of an enemy operative, but cannot finish the move there.
An operative cannot perform this action unless an enemy operative is within its control range. It cannot perform this action during the same activation in which it performed the Reposition or Charge action.
If an operative is activated within the control range of an enemy operative, the Fall Back action is a way to withdraw. It costs 2AP, so most operatives will not be able to perform more actions in that activation.

<Title order={3}>Charge</Title>
Charge 1AP
The same as the Reposition action, except the active operative can move an additional 2”.
It can move, and must finish the move, within control range of an enemy operative. If it moves within control range of an enemy operative that no other friendly operatives are within control range of, it cannot leave that operative’s control range.
An operative cannot perform this action while it has a Conceal order, if it’s already within control range of an enemy operative, or during the same activation in which it performed the Reposition, Dash or Fall Back action.
Charge actions allow operatives to effectively pin down enemies, but since they need to be in an engagement order to do so, they may become vulnerable to enemy shooting.

<Title order={3}>Pick Up Marker</Title>
Pick Up Marker
1AP
Remove a marker the active operative controls that the Pick Up Marker action can be performed upon. That operative is now carrying, contesting and controlling that marker.
An operative cannot perform this action while within control range of an enemy operative, or while it’s already carrying a marker.
If the Pick Up Marker action can be performed on a marker, it will be specified elsewhere, such as in your mission pack.

<Title order={3}>Place Marker</Title>
Place Marker
1AP
Place a marker the active operative is carrying within its control range.
If an operative carrying a marker is incapacitated (see damage on pg 47), it must perform this action before being removed from the killzone, but does so for 0AP. This takes precedence over all rules that prevent it from doing so.
An operative cannot perform this action during the same activation in which it already performed the Pick Up Marker action (unless incapacitated).
Similarly, if there is any marker carried by the operative, it will be specified elsewhere.

<Title order={3}>Shoot</Title>
Shoot
1AP
Shoot with the active operative by following the sequence below. The active operative’s player is the attacker. The selected enemy operative’s player is the defender.
An operative cannot perform this action while it has a Conceal order, or while within control range of an enemy operative.
To no one’s surprise, Kill Team can be a very lethal game, so if you frequently lose operatives to enemy shooting, consider playing more defensively, placing your operatives in cover and using a Conceal order.

1. Select Weapon
The attacker selects one ranged weapon () to use that their operative has and collects their attack dice — a number of D6 equal to the weapon’s Atk stat.
2. Select Valid Target
The attacker selects an enemy operative that’s a valid target and has no friendly operatives within its control range.

If the intended target has an Engage order, it’s a valid target if it’s visible to the active operative.

If the intended target has a Conceal order, it’s a valid target if it’s visible to the active operative and not in cover.

An operative is visible if the active operative can see it. An operative is in cover if there’s intervening terrain within its control range. However, it cannot be in cover while within 2” of the active operative.

An operative cannot be in cover from and obscured by the same terrain feature. If it would be, the defender must select one of them (cover or obscured) for that sequence when their operative is selected as the valid target.

In some very rare cases, you will be both the attacker and the defender, such as when resolving a shot against a friendly operative as a result of the Blast rule. When this occurs, you roll both the attack and defense dice (not your opponent).

3. Roll Attack Dice
The attacker rolls their attack dice. Each result that equals or beats the weapon’s Hit stat is a success and is retained. Each result that doesn’t is a fail and is discarded. Each result of 6 is always a critical success. Each other success is a normal success. Each result of 1 is always a fail.

If the target operative is obscured:

The attacker must discard one success of their choice instead of retaining it.
All the attacker’s critical successes are retained as normal successes and cannot be changed to critical successes (this takes precedence over all other rules).
An operative is obscured if there’s intervening Heavy terrain. However, it cannot be obscured by intervening Heavy terrain that’s within 1” of either operative.

Obscuration makes it less effective to shoot at an enemy operative if there are large obstructions in the way. However, it is ignored when operatives are in such obstructions; imagine them peeking around corners or windows.

4. Roll Defence Dice
The defender collects three defence dice. If the target operative is in cover, they can retain one normal success without rolling it – this is known as a cover save. They roll the remainder.

Each result that equals or beats the target’s Save stat is a success and is retained. Each result that doesn’t is a fail and is discarded. Each result of 6 is always a critical success. Each other success is a normal success. Each result of 1 is always a fail.

Remember, being in cover in this step usually applies to operatives with an Engage order, as a Conceal order would have prevented them from being a valid target before.

5. Resolve Defence Dice
The defender allocates all their successful defence dice to block successful attack dice.

A normal success can block a normal success.
Two normal successes can block a critical success.
A critical success can block a normal success or a critical success.
6. Resolve Attack Dice
All successful unblocked attack dice inflict damage on the target operative.

A normal success inflicts damage equal to the weapon’s Normal Dmg stat.
A critical success inflicts damage equal to the weapon’s Critical Dmg stat.
Any operatives that were incapacitated (see damage on pg 47) are removed after the active operative has finished the action.

Some weapons fire multiple times in the same action, like those with the Area and Torrent weapon rules (pg. 111). Therefore, operatives do not withdraw until the entire action is resolved.

<Title order={3}>Fight</Title>
Fight
1AP
Fight with the active operative by following the sequence below. The active operative’s player is the attacker. The selected enemy operative’s player is the defender.
An operative cannot perform this action unless an enemy operative is within its control range.
Unlike shooting, combat is a brutal back-and-forth. Be careful when choosing whom you fight, as they will fight back.

1. Select Enemy Operative
The attacker selects an enemy operative within the active operative’s control range to fight against. That enemy operative will retaliate in this action.

The difference between a fighting operative and a retaliating one is important. The fighting operative is the active operative, while the retaliating operative is the chosen enemy operative.

2. Select Weapons
Both players select one melee weapon () to use that their operative has and collect their attack dice — a number of D6 equal to the weapon’s Atk stat.

If a rule indicates that an operative cannot retaliate, you can still fight against them, but no attack dice can be gathered or resolved for them.

3. Roll Attack Dice
Both players roll their attack dice simultaneously. Each result that equals or beats their selected weapon’s Hit stat is a success and is retained. Each result that doesn’t is a fail and is discarded. Each result of 6 is always a critical success. Each other success is a normal success. Each result of 1 is always a fail.

While a friendly operative is assisted by other friendly operatives, improve the Hit stat of its melee weapons by 1 for each doing so. For a friendly operative to assist them, it must be within control range of the enemy operative in that fight and not within control range of another enemy operative.

Having multiple friendly operatives in the control range of an enemy operative does not allow them to fight all at once, but having assistance makes it more likely to succeed on attack dice.

4. Resolve Attack Dice
Starting with the attacker, the players alternate resolving one of their successful unblocked attack dice. The players repeat this process until one player has resolved all their dice (in which case their opponent resolves all their remaining dice), or one operative in that fight is incapacitated (see damage on pg 47). When a player resolves a dice, they must strike or block with it.

Striking directly inflicts damage, making it an effective way to harm enemies.

If they strike, inflict damage on the enemy operative, then discard that dice.

A normal success inflicts damage equal to the weapon’s Normal Dmg stat.
A critical success inflicts damage equal to the weapon’s Critical Dmg stat.
Blocking doesn’t stop a strike that’s already happening; it stops a success that is still unresolved.

If they block, they can allocate that dice to block one of their opponent’s unresolved successes.

A normal success can block a normal success.
A critical success can block a normal success or a critical success.
You can still block even if your opponent has no unresolved successes left. This is useful if you don’t want to incapacitate the enemy operative yet.

<Title order={3}>Counteract</Title>
Counteract
0AP
When you would activate a ready friendly operative, if all your operatives are expended but your opponent still has ready operatives, you can select an expended friendly operative with an Engage order to perform a 1AP action for free (Excluding Guard). Each operative can only counteract once per turning point, and cannot move more than 2", or must be set up wholly within 2" if it’s removed and set up again, while counteracting (this is not a change to its Move stat, and takes precedence over all other rules). Counteracting is optional, so you can choose not to. In either case, activation alternates back to your opponent afterwards.

Counteracting isn’t an activation, it’s instead of activating. This difference is important; for instance, it means action restrictions won’t apply.
    </Container>
  );
}
