//My Main code (creates 3 harvesters, 2 builders,and 2 upgraders
//my builders role is simply called urole.pgrades2 and spawn1 in the code is called h3nH0us3(didnt wanna change it all for this)

var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleUpgrader2 = require('role.upgrader2');

module.exports.loop = function () {

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);

    if(harvesters.length < 3) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['h3nH0us3'].spawnCreep([WORK,CARRY,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'harvester'}});
    }
    
    if(Game.spawns['h3nH0us3'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['h3nH0us3'].spawning.name];
        Game.spawns['h3nH0us3'].room.visual.text(
            'ðŸ› ï¸' + spawningCreep.memory.role,
            Game.spawns['h3nH0us3'].pos.x + 1, 
            Game.spawns['h3nH0us3'].pos.y, 
            {align: 'left', opacity: 0.8});
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    }

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);

    if(upgraders.length < 2) {
        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['h3nH0us3'].spawnCreep([WORK,WORK,CARRY,MOVE,MOVE], newName, 
            {memory: {role: 'upgrader'}});
    }
    
    if(Game.spawns['h3nH0us3'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['h3nH0us3'].spawning.name];
        Game.spawns['h3nH0us3'].room.visual.text(
            'ðŸ› ï¸' + spawningCreep.memory.role,
            Game.spawns['h3nH0us3'].pos.x + 1, 
            Game.spawns['h3nH0us3'].pos.y, 
            {align: 'left', opacity: 0.8});
    }
}
  for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'upgrader2') {
            roleUpgrader2.run(creep);
        }
    }

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader2');
    console.log('Upgraders: ' + upgraders.length);

    if(upgraders.length < 2) {
        var newName = 'Worker' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['h3nH0us3'].spawnCreep([], newName, 
            {memory: {role: 'upgrader2'}});
    }
     if(Game.spawns['h3nH0us3'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['h3nH0us3'].spawning.name];
        Game.spawns['h3nH0us3'].room.visual.text(
            'ðŸ› ï¸' + spawningCreep.memory.role,
            Game.spawns['h3nH0us3'].pos.x + 1, 
            Game.spawns['h3nH0us3'].pos.y, 
            {align: 'left', opacity: 0.8});
    }
