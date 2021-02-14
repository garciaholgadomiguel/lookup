// Base de datos creada para hacer relaciones de N:M

db.categorias.insertMany([
    {
        _id: "EV",
        Nombre: "Encargado de ventas",
        Horario: "Diurno"
    },

    {
        _id: "CJ",
        Nombre: "Cajero",
        Horario: "Nocturno"
    },

    {
        _id: "RP",
        Nombre: "Reponedor",
        Horario: "Diurno"
    },

])


db.empleados.insertMany([
    {
        _id: 1,
        Categoria: ["EV", "RP"],
        Nombre: "Curro",
        Apellidos: "Martínez",
        DNI: "36254178P",
        Sueldo: 2300,
        Telefono: 658965256
        
    },


    {
        _id: 2,
        Categoria: "CJ",
        Nombre: "Ana",
        Apellidos: "Aguilera",
        DNI: "96541236L",
        Sueldo: 1200,
        Telefono: 695741236
        
    },


    {
        _id: 3,
        Categoria: "RP",
        Nombre: "Alfonso",
        Apellidos: "Ruiz",
        DNI: "36251478U",
        Sueldo: 900,
        Telefono: 741258963
        
    },


    {
        _id: 4,
        Categoria: "CJ",
        Nombre: "Marcos",
        Apellidos: "García",
        DNI: "47851236G",
        Sueldo: 1200,
        Telefono: 589471236
        
    },


    {
        _id: 5,
        Categoria: ["CJ","EV"],
        Nombre: "Marta",
        Apellidos: "Fernandez",
        DNI: "69525471H",
        Sueldo: 2500,
        Telefono: 965236895
        
    },


    {
        _id: 6,
        Categoria: ["RP", "CJ"],
        Nombre: "Carlos",
        Apellidos: "Díaz",
        DNI: "41256987J",
        Sueldo: 2000,
        Telefono: 698741365
        
    },

    {
        _id: 7,
        Categoria: "EV",
        Nombre: "Jose",
        Apellidos: "Chevez",
        DNI: "14789325K",
        Sueldo: 1300,
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
             Sueldo: 1
         }
     },
     { $match: { Sueldo:{$gt:1200} } },
     {$sort: {Nombre: 1}}
    ]).pretty()