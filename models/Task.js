export default class Task {
    materia=""
    title=""
    descripcion=""
    dia=""
    hora=""
    constructor(materia,title, descripcion, dia, hora){
        this.materia=materia;
        this.title=title;
        this.descripcion=descripcion;
        this.dia=dia;
        this.hora=hora;
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