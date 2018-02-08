//my role.upgrader module as follows
var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
	   if(creep.memory.upgrader && creep.carry.energy == 0) {
        creep.memory.upgrader = false;
    }
    if(!creep.memory.upgrader && creep.carry.energy == creep.carryCapacity) {
        creep.memory.upgrader = true;
    }

    if(creep.memory.upgrader) {
        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller,{visualizePathStyle: {stroke: '#ffaa00'}});
        }
    } else {
            var source = creep.pos.findClosestByRange(FIND_SOURCES);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source,{visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
    }
};

module.exports = roleUpgrader;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//my role.upgrader2 module as follows

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }

	    if(creep.memory.building) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
	    }
	    else {
	        var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = roleBuilder;
