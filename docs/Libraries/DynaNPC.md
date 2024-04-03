# DynaNPC
This is a dynamic NPC system that handles all of the brunt and heavy lifting.
It will also handle garbage collection and memory de-allocation to save resources.
Features numerous different signals, and dynamic type casting.
All you need to do is provide it with a rig and it can do the rest!

<video width="755" height="240" controls>
  <source src="https://i.gyazo.com/579b7c897dd8211952e9207f6d5e4fa1.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

----
## Configurable Tables
### **Configs**
> *These are properties that can be edited via NPC.Config, or instantiated in the NPC.new constructor in a table.
Not including them in the table (or not giving a Config table at all) will leave them as the default values shown below:*
```lua
--// Debug Configs (DebugEnabled must be true to use any of the below)
DebugEnabled = true;
DB_LogConfigChanges = false; --// Logs changes to the config dictionary.
DB_LogStateOverwrites = false; --// Logs changes to the states dictionary.
DB_LogStateChanges = false; --// Logs changes to the NPC's states

--// Other stuff
WatchClosestPlayer = false; --// NPC will watch the closest player character to them.
AutoSpeed = false; --// A config value built into the Following state. The NPC character will speed up to catch up to a specific character.

--// Tools
CanEquipTools = false; --// Whether or not the NPC can hold onto tools.
CanPickupTools = false; --// Whether or not the NPC can pick up tools to begin with. (If they cannot equip a tool, but can pick up tools, they will store it in their backpack if they have one.)
HasBackpack = false; --// Whether or not the NPC has a backpack that can store items. Disabling this will cause the NPC to drop the items where they were picked up.

--// Destruction
DestroyRigWithModule = false; --// Whether calling the Destroy method on a NPC will destroy the rig it's tied to.
AutoDestroyOnDeath = false; --// Self-explanatory. The rig will automatically destroy on death.

--// Pathfinding
PathParams = {
	AgentCanClimb = true;
	AgentCanJump = true;

	WaypointSpacing = 4;
	Costs = {
		Avoid = math.huge;
}; --// Waypoint Parameters.
```

### **NCParams**
> *These are properties that can be passed to the GetNearestCharacter method of a NPC.
Not including them in the table (or not giving a NCParams table at all) will leave them as the default values shown below:*
```lua
MustBeVisible = false; --// Must be visible to the NPC's CanSee method.
OnlyPlayerCharacters = true; --// Will only consider Player Characters in the method.
MustBeAlive = false; --// Ignores rigs without Humanoids, or rigs with health below 0.

Position = Vector3.new(); --// Defaults to the rig's pivot position. The position to get the closest character to.
MaxDistance = math.huge; --// The maximum distance a character can be before they are ignored by the method.
```

----
## Methods and Constructors
### **Constructors**
#### DynaNPC.new(Rig, Configs?)
- Takes a `Model` and `Configs` table as parameters.
> Usage:
```lua
-- Modules
local DynaNPC = require(game:GetService("ReplicatedStorage").DynaNPC)

-- Instances
local Rig = game.workspace.Rig -- Can be any rig.

-- NPCs
local NPC = DynaNPC.new(Rig)
```
Returns a `NPC` class, which can use the methods listed below.
----

### **Methods**

#### NPC:SetWatching(Part?)
- Takes a `BasePart` as a parameter.
> Returns a `boolean` indicating whether the NPC has successfully switched targets.
----
#### NPC:CanSee(Target)
- Takes a `BasePart` or `Model` as a parameter.
> Returns a `boolean` indicating whether the NPC can see the model (any basepart under the model), or the target base part.
----
#### NPC:SetState(NewState, ...)
- Takes a `string` and a `tuple` as parameters.
> Switches the NPC's state to the name if it exists, and runs any additional parameters on said function. Otherwise it'll switch to the `None` state. Passes the `tuple` to the [LastParams](#npclastparams) table.
----
#### NPC:GetNearestCharacter(NCParams?)
- Takes a `NCParams` table as a parameter.
> Gets the nearest character with parameters. (See above for the parameters.) May not return a character.
----
#### NPC:GetBackpack()
- Does not have any parameters.
> Returns a NPC's backpack if it exists, or creates one (and returns it) if the NPC's HasBackpack config is enabled, and they don't have a backpack.
----
#### NPC:GetTool(ToolName?)
- Takes a `string` as a parameter.
> Returns a tool in the NPC's backpack (if they have one), or the tool they're holding. Essentially FindFirstChildWhichIsA("Tool") but you can specify the name if you want.
----
#### NPC:UseTool(ActivateTool?)
- Takes a `boolean` as a parameter.
> Activates the tool (or deactivates it if it's false), defaults to true. Does not return a value.
----
#### NPC:DropTool(TargetTool)
- Takes a `tool` as a parameter.
> Drops the tool from the NPC's inventory or hand. Does not return a value.
----
#### NPC:HandleCleanup(Object, AutoCleanup)
- Takes an `instance`, `table`, or `thread` as the first parameter. The second parameter is a `boolean`.
> Binds an object to be automatically cleaned up upon the NPC's destruction. If AutoCleanup is explicitly defined as `false`, then it'll remove it from the auto-cleanup if it's already bound.
- If the parameter being passed is a `table`, the table must have a `:Destroy()` method, or it will not be automatically cleaned up.
----
####  NPC:_DebugLog(LogText)
- Takes a `string` as a parameter.
> Logs text to the console. Will not log text if the NPC's DebugEnabled config is `false`.
----
### **Events**
See [SmartSignal](SmartSignal.md) for more info.

#### NPC.StateUpdated
- Returns : `string`
> Fires whenever the NPC's state changes at any point.
----
#### NPC.WaypointBegan
- Returns: `PathWaypoint`
> Fires whenever the NPC heads towards a waypoint.
----
#### NPC.ChrTouched
- Returns: `model`
> Fires whenever the NPC touches a humanoid rig.
----

#### NPC.Config.Changed
- Returns:` Key`, `NewValue`, `OldValue`
> See [ProxyTable](ProxyTable.md) for more info.
----
#### NPC.Events.Changed
- Returns: `Key`, `NewValue`, `OldValue`
> See [ProxyTable](ProxyTable.md) for more info.
----
### **Properties**
Properties of the NPC.

#### NPC.Rig
- `model`
> The rig the NPC was instantiated with.

----
#### NPC.Hum
- `humanoid`
> The humanoid of the rig the NPC was instantiated with.

----
#### NPC._AutoCleanup
- `table`
> A table containing all of the objects to be cleaned up upon the NPC's destruction.

----
#### NPC.Path
> A modified [SimplePath](https://grayzcale.github.io/simplepath/) module.

----
#### NPC.AnimHandler
> An animation handler I've designed.

----
#### NPC.Configs
- `table`
> Dictionary of values. Values can be overwritten directly and the Changed signal of this table will be fired.

----
#### NPC.State
- `string`
> Stores the current state of the NPC.

----
#### NPC.States
- `table`
> Dictionary of functions. Values can be overwritten directly and the Changed signal of this table will be fired.

----
#### NPC.LastParams
- `table`
> Stores the last tuple passed by the NPC's [SetState](#npcsetstatenewstate) method.