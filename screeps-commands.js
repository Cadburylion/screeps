// spawn creep
Game.spawns['spawnName'].spawnCreep([WORK, CARRY, MOVE], 'name')

// spawn creep with role
Game.spawns['spawnName'].spawnCreep([WORK, CARRY, MOVE], 'name', {memory: {role: 'role'}})

// change creep role
Game.screeps['name'].memory.role = 'role'
