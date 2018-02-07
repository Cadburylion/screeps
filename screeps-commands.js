// spawn creep -bodyCost: move: 50, carry: 50, work: 20, heal: 200, tough: 20, attack: 80, ranged_attack: 150
Game.spawns['spawnName'].spawnCreep([WORK, CARRY, MOVE], 'name')

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

