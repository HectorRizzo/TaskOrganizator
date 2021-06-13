/*
Array [
  Task {
    "descripcion": "F",
    "dia": "May 18 2021",
    "hora": "23 : 21",
    "materia": " Seguridad de la información",
    "title": "F",
  },
  Task {
    "descripcion": "Fhj",
    "dia": "May 18 2021",
    "hora": "23 : 22",
    "materia": " Ciencias de la sostenibilidad",
    "title": "Xcg",
  },
]
*/
import Task from "../models/Task.js";

export default class TaskToText{
    text=""
    arrTask=[]
    constructor(){

    }

 convert(arr){
     let temp=""
     arr.forEach(el => {
        if(temp.length>0){
            temp+=";"
        }
        temp+=`"descripcion":${el.descripcion},"dia":${el.dia},"hora":${el.hora},"materia":${el.materia},"title":${el.title},"index":${el.index}`
     })

     this.text+=temp;
     return this.text;
 }

 convertToTask(str){
     console.log(str)
     let arr=str.split(";")
     arr.forEach(el => {
         let details=el.split(",")
         let materia=details[3].split(":")[1]
         let title=details[4].split(":")[1]
         let descripcion=details[0].split(":")[1]
         let dia=details[1].split(":")[1]
         let hora=details[2].split(":")[1] + ":"+details[2].split(":")[2]
         let index=details[5].split(":")[1]
         const task = new Task(materia,title,descripcion,dia,hora,index);
         
         this.arrTask.push(task)

     });



     return this.arrTask;
 }


}