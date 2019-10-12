const db = require("../models");

exports.index = function(req, res){

  db.Contacto.findAll().then((contactos) => {

    res.json(contactos)
  });
};//end index

exports.store = function(req, res){

  db.Contacto.create(req.body).then(result => {

    res.json(result);
  }).catch(e => {

    console.log(e);
  });
};

exports.update = function(req, res){

  db.Contacto.findByPk(req.params.id).then(contacto => {
    
    contacto.nombre = req.body.nombre;
    contacto.email = req.body.email;
    contacto.telefono = req.body.telefono;
    contacto.direccion = req.body.direccion;
    
    contacto.save().then(result => {

      res.json(result);
    });
  });
};

exports.destroy = function(req, res){

  db.Contacto.findByPk(req.params.id).then(contacto => {

    contacto.destroy().then(result => {

      res.json('Contacto eliminado');
    });
  });
};