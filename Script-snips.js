//These arent full scripts but bits to add to them.


//Main code
module.exports.loop = function () {
//Use to remove a fallen creeps existing memory
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);


//Create a new Harvester if you have less than 2, with a generic harvester name and auto sets his role
    if(harvesters.length < 2) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'harvester'}});        
    }
   //actually starts the build of the new harvester
   if(Game.spawns['Spawn1'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            'ðŸ› ï¸' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1, 
            Game.spawns['Spawn1'].pos.y, 
            {align: 'left', opacity: 0.8});
    }
    




//here I changed building a new fallen harvester for my upgraders too
var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);

    if(upgraders.length < 2) {
        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['h3nH0us3'].spawnCreep([WORK,CARRY,MOVE], newName, 
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





//Fire your tower against any Hostile creeps
module.exports.loop = function () {

    var tower = Game.getObjectById('f7cd3e14d112925cdd31cc31');
    if(tower) {
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }



//Use your tower to repair nearby walls and fire against nearby hostile creeps
module.exports.loop = function () {

    var tower = Game.getObjectById('f7cd3e14d112925cdd31cc31');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    } 

