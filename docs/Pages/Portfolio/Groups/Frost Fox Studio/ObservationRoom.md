# Observation Room
An adventure/vibe game underneath Frost Fox Studio.
The main draw to this game is the large open environment. I am responsible for all of the programming and UI design.

Has many features that are either upcoming, or complete.<br>
Including but not limited to:

- A unique loading and title screen.
- A music player and visualizer. (Cave crystals pulse to the music.)
- Regional Music, Ambience, and Lighting.
- Numerous NPC vendors with their own shops and unique dialogue.
- An emote wheel.
- Animated seats players can sit on.
- A dynamic settings system.
- A flexible lighting system that utilizes [CollectionService](https://create.roblox.com/docs/reference/engine/classes/CollectionService) to promote organization.
- Unique tools that add different ways to experience the game.
- Custom prompts that allow for more unique interactions without sacrificing visibility.

You can look at the game [here](https://www.roblox.com/games/9549672163/Observation-Room-alpha-0-1-4).

----
## My contribution
I'm responsible for all of the programming, and all of the UI work.
You can see my impact in the credits of this game on the main menu.

----
## Media
<div class="image-viewer">
    <div class="image-container">
        <div class="nav-button left" onclick="navigate(-1)">&#10094;</div>
        <img id="currentImage" class="display-image" src="/Images/Or1.png" alt="Main Display" style="opacity: 1;"/>
        <img id="nextImage" class="display-image" style="opacity: 0; position: absolute; top: 0; left: 0;" src="" alt="" />
        <video id="videoPlayer" style="opacity: 0; position: absolute; top: 0; left: 0; width: 100%; height: 100%;" controls>
            <source src="" type="video/mp4">
        </video>
        <div class="nav-button right" onclick="navigate(1)">&#10095;</div>
    </div>
    <div class="thumbnails">
        <img src="/Images/Or1.png" alt="UI Menu"/>
        <img src="/Images/Or2.png" alt="Emote Menu"/>
		<img data-video-src="https://i.gyazo.com/e611a185e2a50bc721f61abef525164b.mp4" src="/Images/placeholder_for_video.jpg" alt="Sample Video"/>
        <img src="/Images/Or3.png" alt="Settings Menu"/>
        <img src="/Images/Or4.png" alt="Music Player"/>
    </div>
</div>