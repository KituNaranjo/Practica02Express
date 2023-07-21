const express=require('express');
const app=express();
const port = 3000;

app.use(express.json());

let usuarios = [];

app.get('/misitio', (req,res)=>{
    res.send('Bienvenido a mi sitio web')
});

app.listen(port, ()=>{
    console.log('Servidor escuchando en el puerto ' + port)
})

app.get('/misitio/about', (req,res)=>{
    res.send('<h1>Acerca de nosotros</h1>');
});

app.get('/misitio/gastos', (req,res)=>{
    res.json(
    {
        gasto:'Salud',
        monto:14575.60,
        informacion:'Corresponde a consultas médicas, pagos de seguros, medicinas'
    }
    );
});

app.post('/misitio/calculo', (req,res)=>{
    console.log(req.body);
    res.send('Cálculo impuesto a la renta');
});

app.post('/misitio/usuario/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    const id = req.params.id;
    const nuevoUsuario = { id: id, nombre: req.body.nombre };
    usuarios.push(nuevoUsuario);
    res.send('Usuario nuevo registrado');
});

app.put('/misitio/usuario/:id',(req, res)=>{
    console.log(req.body);
    res.send('Datos del usuario '+ (req.params.id) + ' actualizados');
});

app.delete('/misitio/usuario/:id', (req,res)=>{
    res.send('Usuario '+ (req.params.id) +' borrado');
});

/*CREAR UN MONTO PUT PARA GASTOS QUE PERMITA ACTUALIZAR EL MONTO DEL GASTO DE VIVIENDA*/
app.put('/misitio/gastos/vivienda', (req, res) => {
    console.log(req.body);
    res.send('Monto del gasto de VIVIENDA actualizado');
});

/*CREAR UN METODO DELETE PARA BORRAR TODOS LOS GASTOS QUE CORRESPONDEN AL ID 435*/
app.delete('/misitio/gastos/:id', (req, res) => {
    const gastoId = req.params.id;
    res.send('Gastos con ID ' + gastoId + ' eliminados');
});

/**/ 
app.get('/misitio/usuario', (req, res) => {
    res.json(usuarios);
});