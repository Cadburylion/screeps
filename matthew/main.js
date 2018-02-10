const clearMemory = require('clear-memory');
const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');
const roleRepairer = require('role.repairer');
const ReplaceCreeps = require('replace.creeps');

module.exports.loop = function () {
    
    clearMemory()
    
    ReplaceCreeps.replaceHarvester('Harvester' + Game.time)
    ReplaceCreeps.replaceUpgrader('Upgrader' + Game.time)
    ReplaceCreeps.replaceBuilder('Builder' + Game.time)
    ReplaceCreeps.repairer('Repairer' + Game.time)

    // let tower = Game.getObjectById('TOWER_ID');
    // if(tower) {
    //     let closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
    //         filter: (structure) => structure.hits < structure.hitsMax
    //     });
    //     if(closestDamagedStructure) {
    //         tower.repair(closestDamagedStructure);
    //     }

    //     let closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    //     if(closestHostile) {
    //         tower.attack(closestHostile);
    //     }
    // }

    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role === 'repairer') {
            roleRepairer.run(creep);
        }
    }
}