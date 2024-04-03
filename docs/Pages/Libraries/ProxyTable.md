# ProxyTable
A module that allows you to easily create and manage Proxy Tables, an effective way to
detect changes in tables.
<video width="755" height="240" controls>
  <source src="https://i.gyazo.com/c2e8d9cbf1b15a829139506bf0ef9870.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

----
## Methods and Constructors
### **Constructors**
#### ProxyManager.new(Data)
- Takes a `table` as a parameter. The `table` stores data in any way. It does not have to be a dictionary
to detect changes.
> Usage:
```lua
-- Modules
local ProxyManager = require(game:GetService("ReplicatedStorage").ProxyManager)

local ProxyTable = ProxyManager.new({
	Name = "Cool Name";
	Health = 30;
	MaxHealth = 50;
})
```
Returns a `ProxyTable` class, which can use the methods listed below.
----

### **Methods**

#### ProxyTable:Destroy()
- Does not have any parameters.
> Cleans up the Proxy Table from memory. All signals are automatically disconnected.
----

### **Events**
See [SmartSignal](SmartSignal.md) for more info.

#### ProxyTable.Changed
- Returns: `any`, `any`, `any`
> Fires whenever the `ProxyTable` is changed. Returns the key, new value, and old value.
----