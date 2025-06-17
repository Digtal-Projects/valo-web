function restartAnimation1(id) {
    const el = document.getElementById(id);
    el.style.animation = "none";           
    void el.offsetWidth;                   
    el.style.animation = "fadeIn 1s ease-in-out forwards";  
}

function restartAnimation2(id) {
    const el = document.getElementById(id);
    el.style.animation = "none";          
    void el.offsetWidth;                  
    el.style.animation = "slideInLeft 1.3s ease-out forwards";
}

function restartAnimation3(id) {
    const el = document.getElementById(id);
    el.style.animation = "none";          
    void el.offsetWidth;                  
    el.style.animation = "popSlide 0.8s ease forwards";
}

function restartAnimation4(id) {
    const el = document.getElementById(id);
    el.style.animation = "none";          
    void el.offsetWidth;                  
    el.style.animation = "zoomFloatIn 1.2s ease-out forwards";
}

function highlightButton(button) {
            // Remove 'active' class from all buttons
            document.querySelectorAll('.button').forEach(btn => btn.classList.remove('active'));

            // Add 'active' class to the clicked button
            button.classList.add('active');
        }


const images = ["Themes/Banner (1).jpg",
  "Themes/Banner (2).jpg",
  "Themes/Banner (3).jpg",
  "Themes/Banner (4).jpg",
  "Themes/Banner (5).jpg",
  "Themes/Banner (6).jpg",
  "Themes/Banner (7).jpg",
  "Themes/Banner (8).jpg",
  "Themes/Banner (9).jpg",
  "Themes/Banner (10).jpg",
  "Themes/Banner (11).jpg",
  "Themes/Banner (12).jpg",
  "Themes/Banner (13).jpg"];

let index = 0;

const imageElement = document.getElementById("changingBanner");

function changeImage() {
  imageElement.style.opacity = 0;
  setTimeout(() => {
    index = (index + 1) % images.length;
    imageElement.src = images[index];
    imageElement.style.opacity = 1;
  }, 1000);
}

setInterval(changeImage, 6500);

document.getElementById("que1").addEventListener("click", function () {
  let paragraph = document.getElementById("paragraph1");
  paragraph.style.display = (paragraph.style.display === "none") ? "block" : "none";
  let arrow = document.getElementById("arrow1");
  arrow.textContent = (paragraph.style.display === "block") ? "▼" : "▶";
});

document.getElementById("que2").addEventListener("click", function () {
  let paragraph = document.getElementById("paragraph2");
  paragraph.style.display = (paragraph.style.display === "none") ? "block" : "none";
  let arrow = document.getElementById("arrow2");
  arrow.textContent = (paragraph.style.display === "block") ? "▼" : "▶";
});

document.getElementById("que3").addEventListener("click", function () {
  let paragraph = document.getElementById("paragraph3");
  paragraph.style.display = (paragraph.style.display === "none") ? "block" : "none";
  let arrow = document.getElementById("arrow3");
  arrow.textContent = (paragraph.style.display === "block") ? "▼" : "▶";
});

document.getElementById("que4").addEventListener("click", function () {
  let paragraph = document.getElementById("paragraph4");
  paragraph.style.display = (paragraph.style.display === "none") ? "block" : "none";
  let arrow = document.getElementById("arrow4");
  arrow.textContent = (paragraph.style.display === "block") ? "▼" : "▶";
});

document.getElementById("que5").addEventListener("click", function () {
  let paragraph = document.getElementById("paragraph5");
  paragraph.style.display = (paragraph.style.display === "none") ? "block" : "none";
  let arrow = document.getElementById("arrow5");
  arrow.textContent = (paragraph.style.display === "block") ? "▼" : "▶";
});

document.getElementById("que6").addEventListener("click", function () {
  let paragraph = document.getElementById("paragraph6");
  paragraph.style.display = (paragraph.style.display === "none") ? "block" : "none";
  let arrow = document.getElementById("arrow6");
  arrow.textContent = (paragraph.style.display === "block") ? "▼" : "▶";
});

document.getElementById("que7").addEventListener("click", function () {
  let paragraph = document.getElementById("paragraph7");
  paragraph.style.display = (paragraph.style.display === "none") ? "block" : "none";
  let arrow = document.getElementById("arrow7");
  arrow.textContent = (paragraph.style.display === "block") ? "▼" : "▶";
});

function changeToPhoenix() {
  document.getElementById("agentName").innerText = "Phoenix";
  document.getElementById("agentRole").innerText = "Duelist";
  document.getElementById("agentsPNG").src = "Agents PNG\\600px-Phoenix_Artwork.png";
  document.getElementById("ability1").src = "Abilities\\Phoenix_Blaze.png";
  document.getElementById("ability2").src = "Abilities\\Phoenix_Hot_Hands.png";
  document.getElementById("ability3").src = "Abilities\\Phoenix_Curveball.png";
  document.getElementById("ability4").src = "Abilities\\Phoenix_Run_it_Back.png";
  document.getElementById("agentBio").innerText = "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.";
  document.getElementById("ab1").innerText = "Blaze : ";
  document.getElementById("ab2").innerText = "Hot hands : ";
  document.getElementById("ab3").innerText = "Curveball : ";
  document.getElementById("ab4").innerText = "Run it Back : ";
  document.getElementById("ab1info").innerText = "Creates a wall of fire that blocks vision and damages players passing through it.Hold fire to bend the wall in the direction of your crosshair.";
  document.getElementById("ab2info").innerText = "Fire to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies. ALT FIRE to lob.";
  document.getElementById("ab3info").innerText = "Equip a fire orb that takes a curving path and detonates shortly after throwing.Fire to curve the flare orb to the left, detonating and blinding any player who sees the orb.";
  document.getElementById("ab4info").innerText = "Instantly place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to his location with full health.";
  document.getElementById("cost1").innerText = "150";
  document.getElementById("cost2").innerText = "200";
  document.getElementById("cost3").innerText = "250";
  document.getElementById("cost4").innerText = "6";
  document.getElementById("key1").innerText = "C";
  document.getElementById("key2").innerText = "E";
  document.getElementById("key3").innerText = "Q";
  document.getElementById("key4").innerText = "X";
  document.getElementById("mc1").innerText = "1";
  document.getElementById("mc2").innerText = "1";
  document.getElementById("mc3").innerText = "2";
  restartAnimation2("agentName"); 
  restartAnimation1("agentRole");  
  restartAnimation1("agentsPNG");
  restartAnimation1("agentBio");
  restartAnimation3("ability1");
  restartAnimation3("ability2");
  restartAnimation3("ability3");
  restartAnimation3("ability4");
  restartAnimation4("para1");
  restartAnimation4("para2");
  restartAnimation4("para3");
  restartAnimation4("para4");
}

function changeToYoru() {
  document.getElementById("agentName").innerText = "Yoru";
  document.getElementById("agentRole").innerText = "Duelist";
  document.getElementById("agentsPNG").src = "Agents PNG\\600px-Yoru_Artwork.png";
  document.getElementById("ability1").src = "Abilities\\128px-Yoru_Fakeout.png";
  document.getElementById("ability2").src = "Abilities\\Yoru_Blindside.png";
  document.getElementById("ability3").src = "Abilities\\Yoru_Gatecrash.png";
  document.getElementById("ability4").src = "Abilities\\Yoru_Dimensional_Rift.png";
  document.getElementById("agentBio").innerText = "Japanese native Yoru rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.";
  document.getElementById("ab1").innerText = "Fakeout : ";
  document.getElementById("ab2").innerText = "Blindside : ";
  document.getElementById("ab3").innerText = "Gatecrash : ";
  document.getElementById("ab4").innerText = "Dimensional Drift : ";
  document.getElementById("ab1info").innerText = "EQUIP an echo that transforms into a mirror image of Yoru when activated. Mirror images explode in a blinding flash when destroyed by enemies. ALT FIRE to place an inactive echo.";
  document.getElementById("ab2info").innerText = "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in the world.";
  document.getElementById("ab3info").innerText = "EQUIP to harness a rift tether. FIRE to send the tether out moving forward. ALT FIRE to place a tether in place. ACTIVATE to teleport to the tether's location. USE to trigger a fake teleport.";
  document.getElementById("ab4info").innerText = "EQUIP a mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside.";
  document.getElementById("cost1").innerText = "200";
  document.getElementById("cost2").innerText = "250";
  document.getElementById("cost3").innerText = "150";
  document.getElementById("cost4").innerText = "8";
  document.getElementById("key1").innerText = "C";
  document.getElementById("key2").innerText = "Q";
  document.getElementById("key3").innerText = "E";
  document.getElementById("key4").innerText = "X";
  document.getElementById("mc1").innerText = "1";
  document.getElementById("mc2").innerText = "2";
  document.getElementById("mc3").innerText = "2";
  restartAnimation2("agentName"); 
  restartAnimation1("agentRole");  
  restartAnimation1("agentsPNG");
  restartAnimation1("agentBio");
  restartAnimation3("ability1");
  restartAnimation3("ability2");
  restartAnimation3("ability3");
  restartAnimation3("ability4");
  restartAnimation4("para1");
  restartAnimation4("para2");
  restartAnimation4("para3");
  restartAnimation4("para4");
}

function changeToJett() {
  document.getElementById("agentName").innerText = "Jett";
  document.getElementById("agentRole").innerText = "Duelist";
  document.getElementById("agentsPNG").src = "Agents PNG\\600px-Jett_Artwork.png";
  document.getElementById("ability1").src = "Abilities\\Jett_Cloudburst.png";
  document.getElementById("ability2").src = "Abilities\\Jett_Updraft.png";
  document.getElementById("ability3").src = "Abilities\\Jett_Tailwind.png";
  document.getElementById("ability4").src = "Abilities\\Jett_Blade_Storm.png";
  document.getElementById("agentBio").innerText = "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.";
  document.getElementById("ab1").innerText = "Cloudburst : ";
  document.getElementById("ab2").innerText = "Updraft : ";
  document.getElementById("ab3").innerText = "Tailwind : ";
  document.getElementById("ab4").innerText = "Blade Storm : ";
  document.getElementById("ab1info").innerText = "Instantly throw your projectile that expands into a brief vision-blocking cloud on impact with a surface. Hold the ability key to curve the smoke in the direction of your crosshair.";
  document.getElementById("ab2info").innerText = "Instantly propel Jett high into the air.";
  document.getElementById("ab3info").innerText = "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward.";
  document.getElementById("ab4info").innerText = "Equip a set of highly accurate throwing knives that recharge on killing an opponent. Fire to throw a single knife at your target. Alternate fire to throw all remaining daggers at your target.";
  document.getElementById("cost1").innerText = "200";
  document.getElementById("cost2").innerText = "150";
  document.getElementById("cost3").innerText = "FREE";
  document.getElementById("cost4").innerText = "8";
  document.getElementById("key1").innerText = "C";
  document.getElementById("key2").innerText = "Q";
  document.getElementById("key3").innerText = "E";
  document.getElementById("key4").innerText = "X";
  document.getElementById("mc1").innerText = "2";
  document.getElementById("mc2").innerText = "1";
  document.getElementById("mc3").innerText = "1";
  restartAnimation2("agentName"); 
  restartAnimation1("agentRole");  
  restartAnimation1("agentsPNG");
  restartAnimation1("agentBio");
  restartAnimation3("ability1");
  restartAnimation3("ability2");
  restartAnimation3("ability3");
  restartAnimation3("ability4");
  restartAnimation4("para1");
  restartAnimation4("para2");
  restartAnimation4("para3");
  restartAnimation4("para4");
}

function changeToSova() {
  document.getElementById("agentName").innerText = "Sova";
  document.getElementById("agentRole").innerText = "Initiator";
  document.getElementById("agentsPNG").src = "Agents PNG\\600px-Sova_Artwork.png";
  document.getElementById("ability1").src = "Abilities\\Sova_Owl_Drone.png";
  document.getElementById("ability2").src = "Abilities\\Sova_Shock_Bolt.png";
  document.getElementById("ability3").src = "Abilities\\Sova_Recon_Bolt.png";
  document.getElementById("ability4").src = "Abilities\\Sova_Hunter's_Fury.png";
  document.getElementById("agentBio").innerText = "Sova's entire kit is built around finding the enemies and marking them for his allies. Teams that like to rely on complete information on enemies' movements and positioning will want to have a Sova in their ranks.";
  document.getElementById("ab1").innerText = "Owl Drone : ";
  document.getElementById("ab2").innerText = "Shock Bolt : ";
  document.getElementById("ab3").innerText = "Recon Bolt : ";
  document.getElementById("ab4").innerText = "Hunter's Fury : ";
  document.getElementById("ab1info").innerText = "Equip an owl drone. Fire to deploy and take control of movement of the drone. While in control of the drone, Fire to shoot a marking dart. This dart will reveal the location of any player struck by the dart.";
  document.getElementById("ab2info").innerText = "Equip a bow with a shock bolt. Fire to send the explosive bolt forward, detonating upon collision and damaging players nearby. Hold fire to extend the range of arrow. Alternate fire to add up to two bounces.";
  document.getElementById("ab3info").innerText = "Equip a bow with recon bolt. ctivating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. The bolt will scan 2 times.";
  document.getElementById("ab4info").innerText = "Equip a bow with three long-range, wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova. Dealing damage and revealing the location of enemies caught in the line.";
  document.getElementById("cost1").innerText = "400";
  document.getElementById("cost2").innerText = "150";
  document.getElementById("cost3").innerText = "Free";
  document.getElementById("cost4").innerText = "8";
  document.getElementById("key1").innerText = "C";
  document.getElementById("key2").innerText = "Q";
  document.getElementById("key3").innerText = "E";
  document.getElementById("key4").innerText = "X";
  document.getElementById("mc1").innerText = "1";
  document.getElementById("mc2").innerText = "2";
  document.getElementById("mc3").innerText = "1";
  restartAnimation2("agentName"); 
  restartAnimation1("agentRole");  
  restartAnimation1("agentsPNG");
  restartAnimation1("agentBio");
  restartAnimation3("ability1");
  restartAnimation3("ability2");
  restartAnimation3("ability3");
  restartAnimation3("ability4");
  restartAnimation4("para1");
  restartAnimation4("para2");
  restartAnimation4("para3");
  restartAnimation4("para4");
}

function changeToGekko() {
  document.getElementById("agentName").innerText = "Gekko";
  document.getElementById("agentRole").innerText = "Initiator";
  document.getElementById("agentsPNG").src = "Agents PNG\\600px-Gekko_Artwork.png";
  document.getElementById("ability1").src = "Abilities\\128px-Gekko_Mosh_Pit.png";
  document.getElementById("ability2").src = "Abilities\\128px-Gekko_Wingman.png";
  document.getElementById("ability3").src = "Abilities\\128px-Gekko_Dizzy.png";
  document.getElementById("ability4").src = "Abilities\\128px-Gekko_Thrash.png";
  document.getElementById("agentBio").innerText = "EQUIP the Wingman creature. Wingman unleashes a concussive blast toward the first enemy he sees. ALT FIRE defuse or plant the Spike. INTERACT Reclaim the globule and gain another Wingman charge after cooldown.";
  document.getElementById("ab1").innerText = "Mosh Pit : ";
  document.getElementById("ab2").innerText = "Wingman : ";
  document.getElementById("ab3").innerText = "Dizzy : ";
  document.getElementById("ab4").innerText = "Thrash : ";
  document.getElementById("ab1info").innerText = "EQUIP the Mosh creature. FIRE Throw mosh like a grenade. ALT FIRE Throw underhand. Upon landing Mosh duplicates across a large area then after a short delay explodes.";
  document.getElementById("ab2info").innerText = "EQUIP the Wingman creature. Wingman unleashes a concussive blast toward the first enemy he sees. ALT FIRE defuse or plant the Spike. INTERACT Reclaim the globule and gain another Wingman charge after cooldown.";
  document.getElementById("ab3info").innerText = "EQUIP the Dizzy creature. FIRE Send in the air. Dizzy unleashes plasma blasts at enemies in line of sight and blinds them. INTERACT Reclaim the globule and gain another Dizzy charge after cooldown.";
  document.getElementById("ab4info").innerText = "EQUIP the Thrash creature. FIRE Link with Thrash’s mind and steer her through enemy territory. ACTIVATE Lunge forward and explode, detaining any enemies in a small radius. INTERACT to gain anather charge after cooldown.";
  document.getElementById("cost1").innerText = "250";
  document.getElementById("cost2").innerText = "300";
  document.getElementById("cost3").innerText = "Free";
  document.getElementById("cost4").innerText = "7";
  document.getElementById("key1").innerText = "C";
  document.getElementById("key2").innerText = "Q";
  document.getElementById("key3").innerText = "E";
  document.getElementById("key4").innerText = "X";
  document.getElementById("mc1").innerText = "1";
  document.getElementById("mc2").innerText = "1";
  document.getElementById("mc3").innerText = "1";
  restartAnimation2("agentName"); 
  restartAnimation1("agentRole");  
  restartAnimation1("agentsPNG");
  restartAnimation1("agentBio");
  restartAnimation3("ability1");
  restartAnimation3("ability2");
  restartAnimation3("ability3");
  restartAnimation3("ability4");
  restartAnimation4("para1");
  restartAnimation4("para2");
  restartAnimation4("para3");
  restartAnimation4("para4");
}

function changeToKAYO() {
  document.getElementById("agentName").innerText = "KAY/O";
  document.getElementById("agentRole").innerText = "Initiator";
  document.getElementById("agentsPNG").src = "Agents PNG\\600px-KAYO_Artwork.png";
  document.getElementById("ability1").src = "Abilities\\128px-KAYO_FRAGment.png";
  document.getElementById("ability2").src = "Abilities\\128px-KAYO_FLASHdrive.png";
  document.getElementById("ability3").src = "Abilities\\128px-KAYO_ZEROpoint.png";
  document.getElementById("ability4").src = "Abilities\\128px-KAYO_NULLcmd.png";
  document.getElementById("agentBio").innerText = "KAY/O is an Agent in VALORANT and the fourth Initiator to be released. KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents.";
  document.getElementById("ab1").innerText = "FRAG/ment : ";
  document.getElementById("ab2").innerText = "FLASH/drive : ";
  document.getElementById("ab3").innerText = "ZERO/point : ";
  document.getElementById("ab4").innerText = "NULL/cmd : ";
  document.getElementById("ab1info").innerText = "EQUIP an explosive fragment. FIRE to throw. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.";
  document.getElementById("ab2info").innerText = "EQUIP a flash grenade. FIRE to throw. The flash grenade explodes after a short fuse, blinding anyone in line of sight. Right clicking the flashbang, throws a charged flash for 1 second, left flash for 1.6 seconds.";
  document.getElementById("ab3info").innerText = "EQUIP a suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and suppresses anyone in the radius of the explosion.";
  document.getElementById("ab4info").innerText = "Emit Polarized radianite large energy pulses to suppress enemies for a short duration. If KAY/O is killed while overloaded, he is downed and enters a destabilized state, allowing allies revive him.";
  document.getElementById("cost1").innerText = "200";
  document.getElementById("cost2").innerText = "250";
  document.getElementById("cost3").innerText = "Free";
  document.getElementById("cost4").innerText = "7";
  document.getElementById("key1").innerText = "C";
  document.getElementById("key2").innerText = "Q";
  document.getElementById("key3").innerText = "E";
  document.getElementById("key4").innerText = "X";
  document.getElementById("mc1").innerText = "1";
  document.getElementById("mc2").innerText = "2";
  document.getElementById("mc3").innerText = "1";
  restartAnimation2("agentName"); 
  restartAnimation1("agentRole");  
  restartAnimation1("agentsPNG");
  restartAnimation1("agentBio");
  restartAnimation3("ability1");
  restartAnimation3("ability2");
  restartAnimation3("ability3");
  restartAnimation3("ability4");
  restartAnimation4("para1");
  restartAnimation4("para2");
  restartAnimation4("para3");
  restartAnimation4("para4");
}

function changeToChamber() {
  document.getElementById("agentName").innerText = "Chamber";
  document.getElementById("agentRole").innerText = "Sentinel";
  document.getElementById("agentsPNG").src = "Agents PNG\\600px-Chamber_Artwork.png";
  document.getElementById("ability1").src = "Abilities\\128px-Chamber_Trademark.png";
  document.getElementById("ability2").src = "Abilities\\128px-Chamber_Headhunter.png";
  document.getElementById("ability3").src = "Abilities\\128px-Chamber_Rendezvous.png";
  document.getElementById("ability4").src = "Abilities\\128px-Chamber_Tour_De_Force.png";
  document.getElementById("agentBio").innerText = "Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.";
  document.getElementById("ab1info").innerText = "PLACE a trap that scans for enemies. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, slowing players caught inside of it.";
  document.getElementById("ab2info").innerText = "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights.";
  document.getElementById("ab3info").innerText = "PLACE two teleport anchors. While on the ground and in range of an anchor, REACTIVATE to quickly teleport to the other anchor. Anchors can be picked up to be REDEPLOYED.";
  document.getElementById("ab4info").innerText = "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit. Killing an enemy creates a lingering field that slows players caught inside of it.";
  document.getElementById("ab1").innerText = "Trademark : ";
  document.getElementById("ab2").innerText = "Headhunter : ";
  document.getElementById("ab3").innerText = "Rendezvous : ";
  document.getElementById("ab4").innerText = "Tour De Force : ";
  document.getElementById("cost1").innerText = "200";
  document.getElementById("cost2").innerText = "100 Each Bullet";
  document.getElementById("cost3").innerText = "Free";
  document.getElementById("cost4").innerText = "8";
  document.getElementById("key1").innerText = "C";
  document.getElementById("key2").innerText = "Q";
  document.getElementById("key3").innerText = "E";
  document.getElementById("key4").innerText = "X";
  document.getElementById("mc1").innerText = "1";
  document.getElementById("mc2").innerText = "8";
  document.getElementById("mc3").innerText = "1";
  restartAnimation2("agentName"); 
  restartAnimation1("agentRole");  
  restartAnimation1("agentsPNG");
  restartAnimation1("agentBio");
  restartAnimation3("ability1");
  restartAnimation3("ability2");
  restartAnimation3("ability3");
  restartAnimation3("ability4");
  restartAnimation4("para1");
  restartAnimation4("para2");
  restartAnimation4("para3");
  restartAnimation4("para4");
}

function changeToCypher() {
  document.getElementById("agentName").innerText = "Cypher";
  document.getElementById("agentRole").innerText = "Sentinel";
  document.getElementById("agentsPNG").src = "Agents PNG\\600px-Cypher_Artwork.png";
  document.getElementById("ability1").src = "Abilities\\Cypher_Trapwire.png";
  document.getElementById("ability2").src = "Abilities\\Cypher_Cyber_Cage.png";
  document.getElementById("ability3").src = "Abilities\\Cypher_Spycam.png";
  document.getElementById("ability4").src = "Abilities\\Cypher_Neural_Theft.png";
  document.getElementById("agentBio").innerText = "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy’s every move. No secret is safe. No maneuver goes unseen. Cypher is always watching. Cypher relies on ambushing enemies with various traps, which daze, restrain, and slow enemies in their range.";
  document.getElementById("ab1").innerText = "Trapwire : ";
  document.getElementById("ab2").innerText = "Cyber Cage : ";
  document.getElementById("ab3").innerText = "Spycam : ";
  document.getElementById("ab4").innerText = "Neural Theft : ";
  document.getElementById("ab1info").innerText = "EQUIP a trapwire. Creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed and dazed. This ability can be picked up to be REDEPLOYED.";
  document.getElementById("ab2info").innerText = "EQUIP a cyber cage. FIRE to toss the cyber cage in front of Cypher. ACTIVATE to create a zone that blocks vision and creates a sound when enemy's enter it. (Can be picked up during buy phase.)";
  document.getElementById("ab3info").innerText = "Place the spycam at the targeted location. RE-USE this ability to take control of the camera's view. While in control of the camera. FIRE to shoot a marking dart. This dart will reveal enemy.";
  document.getElementById("ab4info").innerText = "INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.";
  document.getElementById("cost1").innerText = "200";
  document.getElementById("cost2").innerText = "100";
  document.getElementById("cost3").innerText = "Free";
  document.getElementById("cost4").innerText = "6";
  document.getElementById("key1").innerText = "C";
  document.getElementById("key2").innerText = "Q";
  document.getElementById("key3").innerText = "E";
  document.getElementById("key4").innerText = "X";
  document.getElementById("mc1").innerText = "2";
  document.getElementById("mc2").innerText = "2";
  document.getElementById("mc3").innerText = "1";
  restartAnimation2("agentName"); 
  restartAnimation1("agentRole");  
  restartAnimation1("agentsPNG");
  restartAnimation1("agentBio");
  restartAnimation3("ability1");
  restartAnimation3("ability2");
  restartAnimation3("ability3");
  restartAnimation3("ability4");
  restartAnimation4("para1");
  restartAnimation4("para2");
  restartAnimation4("para3");
  restartAnimation4("para4");
}

function changeToSage() {
  document.getElementById("agentName").innerText = "Sage";
  document.getElementById("agentRole").innerText = "Sentinel";
  document.getElementById("agentsPNG").src = "Agents PNG\\600px-Sage_Artwork.png";
  document.getElementById("ability1").src = "Abilities\\Sage_Barrier_Orb.png";
  document.getElementById("ability2").src = "Abilities\\Sage_Slow_Orb.png";
  document.getElementById("ability3").src = "Abilities\\Sage_Resurrection.png";
  document.getElementById("ability4").src = "Abilities\\Sage_Healing_Orb.png";
  document.getElementById("agentBio").innerText = "The bastion of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight. Sage equips various orbs which can slow enemies, heal allies, or erect walls to control the battlefield.";
  document.getElementById("ab1").innerText = "Barrier Orb : ";
  document.getElementById("ab2").innerText = "Slow Orb : ";
  document.getElementById("ab3").innerText = "Healing Orb : ";
  document.getElementById("ab4").innerText = "Resurrection : ";
  document.getElementById("ab1info").innerText = "Equip a barrier orb. Fire places a solid wall. Alternate fire rotates the targeter.";
  document.getElementById("ab2info").innerText = "Equip a slow orb. Fire to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.";
  document.getElementById("ab3info").innerText = "Equip a healing orb. Fire with your crosshairs over a damaged ally to active a heal-over-time on them. Alternate fire while Sage is damaged to activate a self heal-over-time.";
  document.getElementById("ab4info").innerText = "Equip a resurrection ability. Fire with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.";
  document.getElementById("cost1").innerText = "400";
  document.getElementById("cost2").innerText = "200";
  document.getElementById("cost3").innerText = "Free";
  document.getElementById("cost4").innerText = "8";
  document.getElementById("key1").innerText = "C";
  document.getElementById("key2").innerText = "Q";
  document.getElementById("key3").innerText = "E";
  document.getElementById("key4").innerText = "X";
  document.getElementById("mc1").innerText = "1";
  document.getElementById("mc2").innerText = "2";
  document.getElementById("mc3").innerText = "1";
  restartAnimation2("agentName"); 
  restartAnimation1("agentRole");  
  restartAnimation1("agentsPNG");
  restartAnimation1("agentBio");
  restartAnimation3("ability1");
  restartAnimation3("ability2");
  restartAnimation3("ability3");
  restartAnimation3("ability4");
  restartAnimation4("para1");
  restartAnimation4("para2");
  restartAnimation4("para3");
  restartAnimation4("para4");
}

function changeToBrimstone() {
  document.getElementById("agentName").innerText = "Brimstone";
  document.getElementById("agentRole").innerText = "Controller";
  document.getElementById("agentsPNG").src = "Agents PNG\\600px-Brimstone_Artwork.png";
  document.getElementById("ability1").src = "Abilities\\Brimstone_Stim_Beacon.png";
  document.getElementById("ability2").src = "Abilities\\Brimstone_Incendiary.png";
  document.getElementById("ability3").src = "Abilities\\Brimstone_Sky_Smoke.png";
  document.getElementById("ability4").src = "Abilities\\Brimstone_Orbital_Strike.png";
  document.getElementById("agentBio").innerText = "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance make him an unmatched commander.";
  document.getElementById("ab1").innerText = "Stim Beacon : ";
  document.getElementById("ab2").innerText = "Incendiary : ";
  document.getElementById("ab3").innerText = "Sky Smoke : ";
  document.getElementById("ab4").innerText = "Orbital Strike : ";
  document.getElementById("ab1info").innerText = "Equip to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire. The stim beacon grants also a rapid 15% speed boost.";
  document.getElementById("ab2info").innerText = "quip an incendiary grenade launcher.Fire to launch a grenade that detonates as it comes to rest on the floor, creating a lingering fire zone that damages players within the zone.";
  document.getElementById("ab3info").innerText = "Equip a tactical map. Fire' to set locatons where Brimstone where Brimstone'ssmoke clouds will land. Alternate fire to confirm, launching long-lasting smoke clouds that block vision in the selected area.";
  document.getElementById("ab4info").innerText = "Equip a tactical map. Fire to launch a lingering orbital strike laser at the slected location, dealing high damage-over-time to players caught in the selected area.";
  document.getElementById("cost1").innerText = "200";
  document.getElementById("cost2").innerText = "250";
  document.getElementById("cost3").innerText = "100 (First Free)";
  document.getElementById("cost4").innerText = "8";
  document.getElementById("key1").innerText = "C";
  document.getElementById("key2").innerText = "Q";
  document.getElementById("key3").innerText = "E";
  document.getElementById("key4").innerText = "X";
  document.getElementById("mc1").innerText = "1";
  document.getElementById("mc2").innerText = "1";
  document.getElementById("mc3").innerText = "3";
  restartAnimation2("agentName"); 
  restartAnimation1("agentRole");  
  restartAnimation1("agentsPNG");
  restartAnimation1("agentBio");
  restartAnimation3("ability1");
  restartAnimation3("ability2");
  restartAnimation3("ability3");
  restartAnimation3("ability4");
  restartAnimation4("para1");
  restartAnimation4("para2");
  restartAnimation4("para3");
  restartAnimation4("para4");
}

function changeToOmen() {
  document.getElementById("agentName").innerText = "Omen";
  document.getElementById("agentRole").innerText = "Controller";
  document.getElementById("agentsPNG").src = "Agents PNG\\600px-Omen_Artwork.png";
  document.getElementById("ability1").src = "Abilities\\Omen_Shrouded_Step.png";
  document.getElementById("ability2").src = "Abilities\\Omen_Paranoia.png";
  document.getElementById("ability3").src = "Abilities\\Omen_Dark_Cover.png";
  document.getElementById("ability4").src = "Abilities\\Omen_From_the_Shadows.png";
  document.getElementById("agentBio").innerText = "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.";
  document.getElementById("ab1").innerText = "Shrouded Step : ";
  document.getElementById("ab2").innerText = "Paranoia : ";
  document.getElementById("ab3").innerText = "Dark Cover : ";
  document.getElementById("ab4").innerText = "From the Shadows : ";
  document.getElementById("ab1info").innerText = "Equip a shadow walk ability and see its range indicator. Fire to begin a brief channel, then teleport the market location.";
  document.getElementById("ab2info").innerText = "Equip a blinding orb. Fire to throw it forward, briefly reducing the vision range and deafening all players it touches. This projectile can pass straight through walls.";
  document.getElementById("ab3info").innerText = "Equip a shadow orb and see its range indicator. Press the ability key to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision.";
  document.getElementById("ab4info").innerText = "Equip a tactical map. Teleporting to the selected location. While teleporting Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport. Press the ability key again to cancel the teleport.";
  document.getElementById("cost1").innerText = "100";
  document.getElementById("cost2").innerText = "250";
  document.getElementById("cost3").innerText = "150";
  document.getElementById("cost4").innerText = "7";
  document.getElementById("key1").innerText = "C";
  document.getElementById("key2").innerText = "Q";
  document.getElementById("key3").innerText = "E";
  document.getElementById("key4").innerText = "X";
  document.getElementById("mc1").innerText = "2";
  document.getElementById("mc2").innerText = "1";
  document.getElementById("mc3").innerText = "2";
  restartAnimation2("agentName"); 
  restartAnimation1("agentRole");  
  restartAnimation1("agentsPNG");
  restartAnimation1("agentBio");
  restartAnimation3("ability1");
  restartAnimation3("ability2");
  restartAnimation3("ability3");
  restartAnimation3("ability4");
  restartAnimation4("para1");
  restartAnimation4("para2");
  restartAnimation4("para3");
  restartAnimation4("para4");
}

function changeToViper() {
  document.getElementById("agentName").innerText = "Viper";
  document.getElementById("agentRole").innerText = "Controller";
  document.getElementById("agentsPNG").src = "Agents PNG\\600px-Viper_Artwork.png";
  document.getElementById("ability1").src = "Abilities\\Viper_Snakebite.png";
  document.getElementById("ability2").src = "Abilities\\Viper_Poison_Cloud.png";
  document.getElementById("ability3").src = "Abilities\\Viper_Toxic_Screen.png";
  document.getElementById("ability4").src = "Abilities\\Viper_Viper's_Pit.png";
  document.getElementById("agentBio").innerText = "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will.";
  document.getElementById("ab1").innerText = "Snake Bite : ";
  document.getElementById("ab2").innerText = "Poison Cloud : ";
  document.getElementById("ab3").innerText = "Toxic Screen : ";
  document.getElementById("ab4").innerText = "Viper's Pit : ";
  document.getElementById("ab1info").innerText = "Launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages agents and inflicts the VULNERABLE debuff for 2s, making them receive 200% damage from other sources.";
  document.getElementById("ab2info").innerText = "EQUIP a gas emitter. Create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED. If picked up POISON CLOUD can be taken into the next round.";
  document.getElementById("ab3info").innerText = "EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.";
  document.getElementById("ab4info").innerText = "EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions arond Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.";
  document.getElementById("cost1").innerText = "300";
  document.getElementById("cost2").innerText = "200";
  document.getElementById("cost3").innerText = "Free";
  document.getElementById("cost4").innerText = "9";
  document.getElementById("key1").innerText = "C";
  document.getElementById("key2").innerText = "Q";
  document.getElementById("key3").innerText = "E";
  document.getElementById("key4").innerText = "X";
  document.getElementById("mc1").innerText = "1";
  document.getElementById("mc2").innerText = "1";
  document.getElementById("mc3").innerText = "1";
  restartAnimation2("agentName"); 
  restartAnimation1("agentRole");  
  restartAnimation1("agentsPNG");
  restartAnimation1("agentBio");
  restartAnimation3("ability1");
  restartAnimation3("ability2");
  restartAnimation3("ability3");
  restartAnimation3("ability4");
  restartAnimation4("para1");
  restartAnimation4("para2");
  restartAnimation4("para3");
  restartAnimation4("para4");
}

