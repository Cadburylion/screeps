//This is my current role.harvester module
var roleHarvester = {
    /** @param {Creep} creep **/
run: function(creep) {
    var sources =   creep.room.find(FIND_SOURCES); //creep.pos.findInRange(FIND_SOURCES);  

    if(creep.carry.energy < creep.carryCapacity) 
    {


        if(creep.memory.hsource>=0)  // what source do we want (to prevent getting stuck)
        {
           // we are good

        }
        else
        {
            creep.memory.hsource=Math.floor(Math.random() * sources.length);
        }

        if(creep.harvest(sources[creep.memory.hsource]) == ERR_NOT_IN_RANGE) {   // this was sources[0]
            creep.moveTo(sources[creep.memory.hsource]);
            creep.say("h h "+ creep.memory.hsource);
        }
    }
    else {
        var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_SPAWN ||
                            structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                }
        });
        if(targets.length > 0) {
            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
                creep.say("h t");
            }
            else
            {
                console.log('transfer target prob or done');   // it is not getting here
               creep.memory.hsource=Math.floor(Math.random() * sources.length);  // pick a new random source
            }
        }
    }
}
};

module.exports = roleHarvester;




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//And this is my current role.upgrader module


var roleUpgrader = {

/** @param {Creep} creep **/
run: function(creep) {

if(creep.memory.upgrading && creep.carry.energy == 0) {
creep.memory.upgrading = false;
}

if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
creep.memory.upgrading = true;
}

if(!creep.memory.upgrading) {
var sources = creep.room.find(FIND_SOURCES);
if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
creep.moveTo(sources[0])
}
}
else {
if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
creep.moveTo(creep.room.controller)
}
}
}
};

module.exports = roleUpgrader;



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This is my current Main module


var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

module.exports.loop = function () {

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);

    if(harvesters.length < 2) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'harvester'}});
    }
    
    if(Game.spawns['Spawn1'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            'ðŸ› ï¸' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1, 
            Game.spawns['Spawn1'].pos.y, 
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
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'upgrader'}});
    }
    
    if(Game.spawns['Spawn1'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            'ðŸ› ï¸' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1, 
            Game.spawns['Spawn1'].pos.y, 
            {align: 'left', opacity: 0.8});
    }
}


