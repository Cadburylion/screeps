// spawn creep -bodyCost: move: 50, carry: 50, work: 100, heal: 250, tough: 10, attack: 80, ranged_attack: 150, Claim: 600
Game.spawns['spawnName'].spawnCreep([WORK, CARRY, MOVE], 'name')
//It is important to note that the order in which parts are added to a creep is important! The sequence of parts dictate 
//which components will be damaged first when a creep is attacked. If a part takes 100 points of damage, it will be 
//completely disabled - the creep may no longer use that part's ability.


// spawn creep with role
Game.spawns['spawnName'].spawnCreep([WORK, CARRY, MOVE], 'name', {memory: {role: 'role'}})

// change creep role
Game.screeps['name'].memory.role = 'role'

//Killit!! 
Game.creeps['name'].suicide()

//Activate your room controller's safe mode
Game.spawns['Spawn1'].room.controller.activateSafeMode();

//Create a Tower structure at point X:0 Y:0 (still has to be fueled up with source)
Game.spawns['Spawn1'].room.createConstructionSite( 0, 0, STRUCTURE_TOWER );

