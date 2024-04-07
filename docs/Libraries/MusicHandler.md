# MusicHandler
This is a music player that handles the playback of music.
Allows for complete control over traditional features that modern music players have,
like Shuffle, Loop, and song indexing. 

The music player in [Observation Room](/CipherHUB/Portfolio/Groups/Frost%20Fox%20Studio/ObservationRoom).
<video width="755" height="240" controls>
  <source src="https://i.gyazo.com/2cd4ee2c19a0793607cf3f8cbe4000a8.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

----
## Configurable Tables
### **Configs**
> *These are properties that can be edited via MusicPlayer.Config
These are the default values:*
```lua
AutoShuffle = false; --// Shuffles playlist on a new list automatically.
Crossfade = nil; --// If this is a number, when a song is this many seconds away from ending, it will gradually begin to fade into the next song.
Looping = false; --// If this is true, it will loop the song indefinitely.
AutoPlay = true; --// Automatically plays the next song after a song ends.
Sensitivity = 0.25; --// If you're using the visualizer add-on, this is the loudness the music player must reach to fire the visualizer effect.
```

----
## Methods and Constructors
### **Constructors**
#### MusicHandler.new(Rig, Configs?)
- Takes an `Instance` as a parameter.
> Usage:
```lua
-- Modules
local MusicHandler = require(game:GetService("ReplicatedStorage").MusicHandler)

-- Instances
local PlayerGUI = game:GetService("Players").LocalPlayer.PlayerGUI

-- NPCs
local Player = MusicHandler.new(Rig)
```
Creates a sound under the Instance, and returns a `MusicPlayer` class, which can use the methods listed below.
----

### **Methods**

#### Player:SetParent(NewParent?)
- Takes an `Instance` as a parameter.
> Moves the sound tied to this music player under the instance passed.
----
#### Player:SetMusicGroup(NewGroup?)
- Takes a `SoundGroup` as a parameter.
> Switches the sound tied to this music player's sound group to the target group.
----
#### Player:GetSongInfo()
- Does not have any parameters.
> Returns the song data stored in the [Vars](#playervars) table.
----
#### Player:Play()
- Does not have any parameters.
> Returns a `boolean` indicating whether the player could play/resume the current song.
----
#### Player:Pause()
- Does not have any parameters.
> Pauses the song. The play method will resume the song at this position.
----
#### Player:Stop()
- Does not have any parameters.
> Stops the song completely.
----
#### Player:SetTimePosition(TimePosition?)
- Takes a `number` as a parameter.
> Jumps to a certain time position in a song. Defaults to 0.
----
#### Player:SetIndex(NewIndex)
- Takes a `number` as a parameter.
> Jumps to a specific index in the music player's list. If the number is less than 1, it will
automatically jump to the last song in the playlist. If the number is bigger than the playlist's length,
it will jump to the first song in the playlist. Returns a `boolean` indicating whether the current song
changed.
----
#### Player:Next()
- Does not have any parameters.
> Moves onto the next song in the playlist.
----
#### Player:Previous()
- Does not have any parameters.
> Moves back a song in the playlist.
----
#### Player:Shuffle(MaintainIndex?)
- Takes a `boolean` as a parameter.
> Shuffles the playlist. If the parameter passed is true, it will not switch the song upon being shuffled.
----
#### Player:Destroy()
- Does not have any parameters.
> Destroys the player and the sound tied to it, cleaning them up from memory.
----
### **Events**
See [SmartSignal](SmartSignal.md) for more info.

#### Player.OnTick
- Returns : `number`
> Fires whenever the song's time position changes. Returns the remaining time of the song.
----
#### Player.OnInfo
- Returns: `ProductInfo`
> See [ProductInfo](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#GetProductInfo) for more information.
----
#### Player.OnBeat <span class="badge client-only"></span>
- Returns: `number`
> Fires whenever the Music Player exceeds the music player's sensitivity config. Does not fire on server.
----
#### Player.PlaylistEnded
- Does not return any values.
> Fires whenever the playlist ends or loops back to the first song.
----
#### Player.Config.Changed
- Returns: `Key`, `NewValue`, `OldValue`
> See [ProxyTable](ProxyTable.md) for more info.
----
### **Properties**
Properties of the music player.

#### Player.Sound
- `Sound`
> The sound tied to this music player. Destroying this will automatically clean up the music player.

----
#### Player.Vars
- `table`
> Contains a table of variables the music player uses.
```lua
Playlist = {}; -- Playing songs.
DefaultPlaylist = {}; -- Default playlist.
Index = 1; -- Index of currently playing song in the table. (Roblox's array index starts at 1 instead of 0)
Playing = false; -- Determines if the playlist is currently playing a song or not.
Data = nil; -- Contains the song data.
```

----
#### Player.Config
- `ProxyTable`
> A table containing the current [configuration](#configs) of the Music Player.