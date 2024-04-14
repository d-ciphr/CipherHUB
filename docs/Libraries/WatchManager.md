# WatchManager
This is a system that allows any rig to track and look at potential targets.
<video width="755" height="240" controls>
  <source src="https://i.gyazo.com/08f590cfa0ecfa141626a9564654b22e.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

----
## Methods and Constructors
### **Constructors**
#### WatchManager.new(Rig)
- Takes a `Model` as a parameter. The Model has three requirements to function properly: It must have a `BasePart` named "Head", An `Attachment` named "NeckRigAttachment" or "FaceCenterAttachment", and have a PrimaryPart set.
> Usage:
```lua
-- Modules
local WatchManager = require(game:GetService("ReplicatedStorage").WatchManager)

local Rig = workspace.Rig
local Watcher = WatchManager.new(Rig)
```
Returns a `Watcher` class, which can use the methods listed below.
----

### **Methods**

#### Watcher:SetLooking(Part)
- Takes a `BasePart` as a parameter.
> Does not return a value. The rig will look at the BasePart. If the Rig was not looking at anything before, it will gradually look over at the target.
----
#### Watcher:CanSee(Target)
- Takes a `BasePart` or `Model` as a parameter.
> Returns a `boolean` indicating whether the Rig can see the target from the Rig's PrimaryPart.
----
#### Watcher:GetNearestCharacter(NCParams)
- See [NCParams](DynaNPC.md/#ncparams) for more info.
> Gets the nearest character with parameters. (See above for the parameters.) May not return a character.
----
#### Watcher:TweenWeight(TargetWeight, tweenInfo?)
- Takes a `number` and `TweenInfo` as parameters.
> The number cannot be less than 0, or greater than 1.
Tweens the weight of the IK on the rig. 1 having complete control over the rig, while 0 has no control.
----
#### Watcher:AutoCleanup(Object, AutoCleanup)
- See [HandleCleanup](DynaNPC.md/#npchandlecleanupobject-autocleanup) for more info.
- Takes an `instance`, `table`, or `thread` as the first parameter. The second parameter is a `boolean`.
> Binds an object to be automatically cleaned up upon the NPC's destruction. If AutoCleanup is explicitly defined as `false`, then it'll remove it from the auto-cleanup if it's already bound.
- If the parameter being passed is a `table`, the table must have a `:Destroy()` method, or it will not be automatically cleaned up.
----
#### Watcher:Destroy()
- Does not have any parameters.
> Cleans up the watcher and deletes the IK from memory. This is automatically called if the IK created by this class, or the NPC tied to this class are destroyed.
----