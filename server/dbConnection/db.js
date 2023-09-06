const setupDatabase = require('./databaseSetup');

let historyDB;
const getHistoryDb = () => {
    if (!historyDB){
        historyDB = setupDatabase();
    }
    return historyDB;
}


module.exports = getHistoryDb;

