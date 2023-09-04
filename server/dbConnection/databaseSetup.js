const sqlite3 = require('sqlite3').verbose();

const setupDatabase = () => {
    let historyDB = new sqlite3.Database
        (".././database/history1.db", 
        sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, 
        (err) => { 
            if (err) {
                console.log('Error:', err);
            } else {
                console.log('Database connected/created');
            }
        });

    historyDB.run(`
        CREATE TABLE IF NOT EXISTS ChatSessions
        (
            sessionID INTEGER PRIMARY KEY AUTOINCREMENT,
            lastUpdated DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `)

    historyDB.run(`
    CREATE TABLE IF NOT EXISTS ChatMessages
        (
            messageID INTEGER PRIMARY KEY AUTOINCREMENT,
            sessionID INTEGER,
            senderType TEXT CHECK( senderType IN ('user', 'chatbot') ),
            messageText TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,

            FOREIGN KEY(sessionID) REFERENCES ChatSessions(sessionID)
        );
    `)

    return historyDB
}

module.exports = setupDatabase;
