'use strict';
const express = require('express');
const validate = require('express-validation');
const validation = require('../validation/calendarValidation');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const nosql = require('nosql').load('data/events.nosql');

nosql.description('My events database.');
nosql.custom({ key: '161651916' });

var description = nosql.description();
var custom = nosql.custom();

nosql.created;



router.get('/events', (req, res, next) => {
    nosql.all((item) => item, (err,items) => {
      res.status(200).send(items);
    });   
} );

router.get('/event/:id', (req, res, next) => {
    nosql.all((item) => {
      return item.id === req.params.id ? true : false;
    }, (err,items) => {
      res.status(200).send(items);
    });   
});

router.put('/events', (req, res, next) => {
    nosql.all((item) => item, (err,items) => {
      var Ids = [];
      items.forEach((item) => {
        Ids.push(item.id);
      })
      req.body.id = Math.max.apply(null, Ids) + 1;
        nosql.insert(req.body, (err,count) => {
        if(err){
          res.status(500).send("Erreur lors de l'ajout de l'objet"+req.body);
        }else{
          res.sendStatus(200); 
        } 
      },'insert new event : '+req.body);
    });     
});

router.delete('/event/:id', (req, res, next) => {
    nosql.remove((item) => {
      return item.id === req.params.id ? true : false;
    }, (err) => {
      res.sendStatus(200);
    });   
});

module.exports = router;
