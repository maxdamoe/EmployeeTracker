const express = require('express');
const router = express.Router();
const db = require('../db/connection');





const gettingDepartments = () => {router.get('/parties', (req, res) => {
    const sql = `DESCRIBE Department`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  })};

  module.exports = gettingDepartments