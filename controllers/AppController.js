let db = require('../models/dbconexion');

let productos = {
  listar( req, res ){
    let sql = "SELECT * FROM posts";
    db.query(sql,function(err, result){
      if( err ){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(result);
      }
    });
  },
  store( req, res ){
    var hoy = new Date();
    console.log(req.body);
    let val_nombre = req.body.Nombre;
    let val_apellidos  = req.body.Apellidos;
    let val_FechaNacimiento = req.body.FechaNacimiento;
    let val_sexo  = req.body.Sexo;

    var cumpleanos = new Date(val_FechaNacimiento);
    let val_edad = hoy.getFullYear()- cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if(m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())){
      val_edad--;
    }

    console.log(val_edad);
    let sql = "INSERT INTO posts(Nombre,Apellidos,FechaNacimiento,Edad,Sexo) VALUES(?,?,?,?,?)";
    db.query(sql,[val_nombre,val_apellidos,val_FechaNacimiento,val_edad,val_sexo],function(err, newData){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(newData);
      }
    });
  },
  show( req, res ){
    val_id = req.params.id;
    let sql = "SELECT * FROM posts WHERE id=?";
    db.query(sql,[val_id],function(err, rowData){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(rowData);
      }
    });
  },
  edit( req, res ){
    var hoy = new Date();
    
    let val_id=req.params.id;
    let val_nombre = req.body.Nombre;
    let val_apellidos = req.body.Apellidos;
    let val_sexo  = req.body.Sexo;
    let val_FechaNacimiento = req.body.FechaNacimiento;
    var cumpleanos = new Date(val_FechaNacimiento);
    let val_edad = hoy.getFullYear()- cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if(m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())){
      val_edad--;
    }

    let sql = "UPDATE posts SET Nombre=?, Apellidos=?, FechaNacimiento=?, Edad=?,Sexo=? WHERE id=?";
    db.query(sql,[val_nombre,val_apellidos,val_FechaNacimiento,val_edad,val_sexo,val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.json(newData);
      }
    });
  },
  delete( req, res ){
    val_id = req.params.id;
    let sql = "DELETE FROM posts WHERE id=?";
    db.query(sql,[val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.sendStatus(200);
      }
    });
  }
}

module.exports = productos;
