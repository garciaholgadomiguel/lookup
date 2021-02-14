// Base de datos que relaciona 1 categoria con muchos trabajadores

db.categorias.insertMany([
    {
        _id: "EV",
        Nombre: "Encargado de ventas",
        Horario: "Diurno",
        Sueldo: 1000
    },

    {
        _id: "CJ",
        Nombre: "Cajero",
        Horario: "Nocturno",
        Sueldo: 850
    },

    {
        _id: "RP",
        Nombre: "Reponedor",
        Horario: "Diurno",
        Sueldo: 950
    },

])


db.empleados.insertMany([
    {
        _id: 1,
        Categoria: "EV",
        Nombre: "Curro",
        Apellidos: "Martínez",
        DNI: "36254178P",
        Telefono: 658965256
        
    },


    {
        _id: 2,
        Categoria: "CJ",
        Nombre: "Ana",
        Apellidos: "Aguilera",
        DNI: "96541236L",
        Telefono: 695741236
        
    },


    {
        _id: 3,
        Categoria: "RP",
        Nombre: "Alfonso",
        Apellidos: "Ruiz",
        DNI: "36251478U",
        Telefono: 741258963
        
    },


    {
        _id: 4,
        Categoria: "CJ",
        Nombre: "Marcos",
        Apellidos: "García",
        DNI: "47851236G",
        Telefono: 589471236
        
    },


    {
        _id: 5,
        Categoria: "CJ",
        Nombre: "Marta",
        Apellidos: "Fernandez",
        DNI: "69525471H",
        Telefono: 965236895
        
    },


    {
        _id: 6,
        Categoria: "RP",
        Nombre: "Carlos",
        Apellidos: "Díaz",
        DNI: "41256987J",
        Telefono: 698741365
        
    },

    {
        _id: 7,
        Categoria: "EV",
        Nombre: "Jose",
        Apellidos: "Chevez",
        DNI: "14789325K",
        Telefono: 589632147
        
    },
])

db.empleados.aggregate([
{
    $lookup:
      {
        from: "categorias",
        localField: "Categoria",
        foreignField: "_id",
        as: "categoria"
      }
 },
 {
     $project:{
         _id: 1,
         Nombre: 1,
         DNI: 1,
         categoria: 1,
     }
 },
 {$sort: {Nombre: 1}}
]).pretty()






