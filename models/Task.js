export default class Task {
    materia=""
    title=""
    descripcion=""
    dia=""
    hora=""
    index=""
    constructor(materia,title, descripcion, dia, hora,index){
        this.materia=materia;
        this.title=title;
        this.descripcion=descripcion;
        this.dia=dia;
        this.hora=hora;
        this.index=index;
    }

    getMateria(){
        return this.materia;
    }
    getTitle(){
        return this.title;
    }
    getDescripcion(){
        return this.descripcion;
    }
    getDia(){
        return this.dia;
    }
    getHora(){
        return this.hora;
    }

}