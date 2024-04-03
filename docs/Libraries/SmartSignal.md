# SmartSignal
This is a system that handles bindable events, and allows you to type-cast to them so that
you can allow Intellisense to fill-in the blanks. Reduce the amount of pain and frustration that
may come with working with other people.
<video width="755" height="240" controls>
  <source src="https://i.gyazo.com/c4d654c0a21944f842d6587cc11df653.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

----
## Methods and Constructors
### **Constructors**
#### SmartSignal.new(...)
- Takes a `tuple` as a parameter. The `tuple` is not used for anything other than type-casting.
> Usage:
```lua
-- Modules
local SmartSignal = require(game:GetService("ReplicatedStorage").SmartSignal)

local Signal = DynaNPC.new(Rig)
```
Returns a `Signal` class, which can use the methods listed below.
----

### **Methods**

#### Signal:Connect(callback)
- Takes a `function` as a parameter.
> Returns a `RBXScriptSignal`. The callback function will be fired whenever Signal:Fire() is called.
----
#### Signal:ConnectParallel(callback)
- Takes a `function` as a parameter.
> Returns a `RBXScriptSignal`. The callback function will be fired whenever Signal:Fire() is called.
----
#### Signal:Once(callback)
- Takes a `function` as a parameter.
> Returns a `RBXScriptSignal`. The callback function will be fired whenever Signal:Fire() is called.
----
#### Signal:Wait(callback?)
- Takes a `function` as a parameter.
> If you passed a function, it will automatically run it and return its result once the event fires. Otherwise, it will return a `tuple`.
Like Signal:Once(), but yields the script until the event fires.
----
#### Signal:Fire(...)
- Takes a `tuple` as a parameter.
> Does not return a value. Fires the event.
----
#### Signal:Destroy()
- Does not have any parameters.
> Cleans up the event from memory. All signals are automatically disconnected.
----