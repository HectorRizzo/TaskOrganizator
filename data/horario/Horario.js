import React from "react";
export default class Horario {

    days=[
        [
        {'Ingles':['07:00','07:30','08:00','08:30'],
        'Ciencias Sostenibilidad':['9:00','9:30','10:00'],
        'Lenguaje de Programacion':['11:00','11:30','12:00'],
        'Seguridad de la Informacion':['16:00','16:30','17:00']
        }
    ],
    [
        {
        'Organización de Computadores':['07:30','08:00','08:30'],
        'Ingenieria de Software I': ['11:00','11:30','12:00','12:30']

    }
    ],
    [
        {'Ingles':['07:00','07:30','08:00','08:30'],
        'Ciencias Sostenibilidad':['9:00','9:30','10:00'],
        'Lenguaje de Programacion':['11:00','11:30','12:00'],
        'Seguridad de la Informacion':['16:00','16:30','17:00']
        }]
        ,[
            {
        'Organización de Computadores':['07:30','08:00','08:30'],
        'Ingenieria de Software I': ['11:00','11:30','12:00','12:30']

    }],
    [],[],[]

    ]

    lunes=[
        {'Ingles':['07:00','07:30','08:00','08:30'],
        'Ciencias Sostenibilidad':['9:00','9:30','10:00'],
        'Lenguaje de Programacion':['11:00','11:30','12:00'],
        'Seguridad de la Informacion':['16:00','16:30','17:00']
        }
    ]
    martes=[{
        'Organización de Computadores':['07:30','08:00','08:30'],
        'Ingenieria de Software I': ['11:00','11:30','12:00','12:30']

    }]
    miercoles=[{'Ingles':['07:00','07:30','08:00','08:30'],
        'Ciencias Sostenibilidad':['9:00','9:30','10:00'],
        'Lenguaje de Programacion':['11:00','11:30','12:00'],
        'Seguridad de la Informacion':['16:00','16:30','17:00']
        }]
    jueves=[]
    viernes=[]
    sabado=[]
    domingo=[]



    constructor(){
        fetch("../archivos/horario.txt" , {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue'
  })
} )
        .then(r => r.text())
        .then(text => {
            console.log('text decoded:', text);
        });

    }

    getOneDay(index){
        return this.days[index]
    }

    getLunes(){
        return this.lunes;
    }



};
