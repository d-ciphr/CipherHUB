# CipherLib
This is a library of modules I've created to expedite and provide more creative freedom to the user.
Can be used to make loading and reading data from modules easy.
You can access a module under it as such:

----
## Why use a loader?
Because a loader can hold the data for the modules.
It provides readability, and dynamically scales to the modules and
folders below it. Because of the way it's structured, it's easy to
add/remove your own custom modules.
----
## Usage
> 
```lua
local loader = require(Path.To.Module)
local module = loader.module
	
-- If there is a folder, you do this instead:
local sub_module = loader.Folder.module
```
----
## How do I add/remove my own modules?
It's as easy as dragging and dropping it underneath the loader.
If you want the module to only be accessible on the client, add the
`ClientOnly` tag to the module so that it may only be considered by
the client when being loaded. The same works vice-versa with the
`ServerOnly` tag. Adding them to folders will affect all of the modules
underneath it, so keep that in mind!
----
## Default Modules
Modules that come with the library at start.

### LOADER

#### loader.SwitchCase
- `function`
> Emulates C++'s Switch Case in LuaU. Documentation is provided in the
module itself.
----
#### loader.YieldInstance
- `function`
> A unique version of WaitForChild(). 
Creates an instance if the server calls this method and does not find an instance of that name. 
Otherwise it will yield if it's on the client. Excellent for modules that are used by both the
Client and the Server, and handle cross-server communication.
----
### CLIENT_UTILS

#### CLIENT_UTILS.AnimationHandler
- `AnimationHandler`
> An animation handler I've designed that makes loading and adding animations effortless.
Currently lacks documentation. This will be updated in the future.
----
#### CLIENT_UTILS.EasyRig
- `EasyRig`
> An easy way to instantiate rigs into the workspace. Has its own methods to manage animations
effortlessly.
----
#### CLIENT_UTILS.CloneModel
- `function`
> Allows you to clone instances regardless of whether they're archivable or not.
----
#### CLIENT_UTILS.CutsceneHandler <span class="badge client-only"></span>
- `function`
> Handles Cutscenes that can manipulate your camera. Look under the "Cutscenes" folder for more info.
----
#### CLIENT_UTILS.Icon <span class="badge client-only"></span>
- `Icon`
> A modified version of the [TopBar Plus](https://1foreverhd.github.io/TopbarPlus/) module. Allows you to
create an easily customizable top-bar at the top of your screen. Scales to any device.
----
#### CLIENT_UTILS.Parallax
- `Parallax`
> A module that handles UI parallax scrolling. Can be customized to fit any speed and background.
Changing the backgroundTransparency the Parallax is tied to will automatically adjust the transparency
of the Parallax.
----
#### CLIENT_UTILS.Typer
- `Typer`
> Allows you to easily create a typing animated effect to make text more visually interesting.
Has two [SmartSignals](SmartSignal.md).
----
#### CLIENT_UTILS.UI_SOUND
- `UI_SOUND`
> A module that allows you to easily reference and play/stop audio.
Purely used from an organization standpoint.
----
#### CLIENT_UTILS.ViewportModel
- `ViewportModelClass`
> A modified version of the [ViewportModel](https://gist.github.com/EgoMoose/2fd62ee98754380f6d839267ffe4f588) class.
Allows you to handle displaying models of any size in a viewport.
Comes with a few methods to make things like manual rotation, and automatic rotation simple.