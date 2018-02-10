/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('replace.creeps');
 * mod.thing == 'a thing'; // true
 */

let ReplaceCreeps = {
    
    replaceHarvester: (name) => {
        let harvesters = []
        for (let creep in Game.creeps) {
            if(Game.creeps[creep].memory.role === 'harvester') harvesters.push(creep)
        }
        if(harvesters.length < 3) {
            Game.spawns['Earth'].spawnCreep([WORK, CARRY, MOVE], name, {memory: {role: 'harvester'}})
            console.log('Spawning harvester creep: ', name)
        }
    },
    
    replaceUpgrader: (name) => {
        let upgraders = []
        for (let creep in Game.creeps) {
            if(Game.creeps[creep].memory.role === 'upgrader') upgraders.push(creep)
        }
        if(upgraders.length < 4) {
            Game.spawns['Earth'].spawnCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE], name, {memory: {role: 'upgrader'}})
            console.log('Spawning upgrader creep: ', name)
        }
    },

    replaceBuilder: (name) => {
        let builders = []
        for (let creep in Game.creeps) {
            if(Game.creeps[creep].memory.role === 'builder') builders.push(creep)
        }
        if(builders.length < 3) {
            Game.spawns['Earth'].spawnCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE], name, {memory: {role: 'builder'}})
            console.log('Spawning builder creep: ', name)
        }
    },
    
    repairer: (name) => {
        let repairers = []
        for (let creep in Game.creeps) {
            if(Game.creeps[creep].memory.role === 'repairer') repairers.push(creep)
        }
        if(repairers.length < 1) {
            Game.spawns['Earth'].spawnCreep([WORK, CARRY, MOVE], name, {memory: {role: 'repairer'}})
        }
    }
}


module.exports = ReplaceCreeps