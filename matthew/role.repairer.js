const roleRepairer = {
    
    run: (creep) => {
        
        if(creep.memory.repairing && creep.carry.energy === 0){
            creep.memory.repairing = false
            creep.say ('🔄 harvest!')
        }
        else if(!creep.memory.repairing && creep.carry.energy < creep.carryCapacity) {
            creep.memory.repairing = false
            creep.say('🔄 harvest!')
        }
        else if(!creep.memory.repairing && creep.carry.energy === creep.carryCapacity) {
            creep.memory.repairing = true
            creep.say('🚧 repairing!')
        }
        
        if(creep.memory.repairing) {
            let targets = creep.room.find(FIND_STRUCTURES, {
                filter: structure => structure.hits < structure.hitsMax
            })
            
            targets.sort((a,b) => a.hits - b.hits)
            
            if(targets.length){
                if(creep.repair(targets[0]) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0])
                }
            }
        }
        
        if(!creep.memory.repairing) {
            if(creep.carry.energy < creep.carryCapacity) {
                let sources = creep.room.find(FIND_SOURCES)
                if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
        }
    }
} 

module.exports = roleRepairer