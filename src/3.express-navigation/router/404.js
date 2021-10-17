﻿const express = require('express');
const { resolve } = require('../lib');
const route = express.Router();

/* 404 handler */
route.use((req, res) => {
  res.sendFile(resolve('views', '404.html'));
})

/* 500 handler */
route.use((err, req, res, next) => {
  if (err) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
    next();
  }
})

module.exports = route;
