var express = require('express');
var router = express.Router();
//const {agregarMaquina} = require('../models/consulta')
//const {verifyLoad} = require('../middlewares/validacion_carga_maq')
//me muestra el form para cargar las maq
const get = (req, res)=>{
    res.end('hola')

}
//carga la maq
/*
const cargarMaquina = async(req, res)=>{
        //obj lo paso como parametro. obj guarda los datos del form
        const obj = req.body;
        console.log(obj);
        //carga la nueva maquina.
        const maquinaCargada = await agregarMaquina(obj)
        console.log(maquinaCargada);
        res.redirect('/maquinas_disponibles');
}

//valido que los datos sean correctos
router.post('/create',verifyLoad, cargarMaquina)
*/

router.get('/', get);



module.exports = router;
