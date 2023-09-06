const express = require('express');
const router = express.Router();
const getHistoryDb = require('../dbConnection/db');

router.post('/deleteAll', async (req, res) => {
  const db = getHistoryDb();
  
  try {
    await db.run('DELETE FROM ChatMessages');
    res.status(200).json({ output: 'All rows deleted' });
  } catch (err) {
    res.status(500).json({ output: 'Failed to delete rows', error: err });
  }
});

module.exports = router;
