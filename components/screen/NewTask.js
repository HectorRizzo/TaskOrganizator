
import React, { Component, useState } from "react";
import { Platform, StyleSheet} from "react-native";
import { Container, Header, Title, Content, Button, Footer,Icon, Text, Right ,Body, Left, Picker, Form, Item, Label, Input} from "native-base";
import {SingleDatePage, date} from "../SingleDatePage.js";
import Task from "../../models/Task.js";

export const  NewTask=(props) =>  {
  const [date, setDate] = useState(new Date())
  const [branches, setBranches] = useState([
        { materia: ' Ingles', id: 0 },
        { materia: ' Lenguaje de Programación', id: 1 },
        { materia: ' Ciencias de la sostenibilidad', id: 2 },
        { materia: ' Organización de computadores', id: 3 },
        { materia: ' Seguridad de la información', id: 4 },
        { materia: ' Ingeniería de Software I', id: 5 }])

  const [selectedBranch, setSelectedBranch] = useState(branches[0].id)
  const [title, setTitle] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const[index, setIndex]=useState(Math.floor(Math.random()*101))




  let handleChangeTitle=(event)=> {
    
    setTitle(event.nativeEvent.text);
  }

  let handleChangeDescripcion=(event)=> {
    setDescripcion(event.nativeEvent.text);
  }

  let onBranchSelected=(value)=> {
    setBranches(value)
  }
  
  let handleSuccess=()=>{
    let hora=`${ (date.getHours()<10?'0':'') + date.getHours() } : ${ (date.getMinutes()<10?'0':'') + date.getMinutes() }`
    let tarea= new Task(branches[selectedBranch].materia,title,descripcion,date.toString().substr(4,11),hora,index)

    props.route.params.setTask(prevTasks => {
  return [...prevTasks, tarea];
})
    props.navigation.navigate('Tareas',{tasks: props.route.params.task })
  }

    return (
      <Container>
        <Text style={styles.number}> {index} </Text>
        <Content >
          <Form style={styles.content}>
            <Picker
              style={styles.picker}
              iosHeader="Materia"
              Header="Materia"
              mode="dropdown"
              textStyle={{ color: 'grey' }}
              placeholder='Select materia'
              headerBackButtonText='Geri'
              selectedValue={selectedBranch}
              onValueChange={(value) => setSelectedBranch(value)}
            >
              {branches.map((branches, i) => {
                return (
                  <Picker.Item label={branches.materia} value={branches.id} key={i} />
                );
              }
              )}
            </Picker>
            <Item floatingLabel>
              <Label>
              Titulo</Label>
              <Input value={title} onChange={handleChangeTitle}  />
            </Item>
            <Item floatingLabel last>
              <Label>Descripción</Label>
              <Input value={descripcion} onChange={handleChangeDescripcion} />
            </Item>
            
            
            
          </Form>

            <Text style={styles.text}> Fecha y hora de entrega </Text>

            <SingleDatePage date={setDate} style={styles.content} />


        </Content>
        <Footer style={styles.footer}>
            <Button style={styles.success} success onPress={handleSuccess}>
            <Text> Success </Text></Button>
        </Footer>
      </Container>
    );
  
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor:'transparent',
    display: 'flex',
    alignSelf: 'flex-end',
    
  },
  content:{
        marginTop:0,
    marginBottom:20
  },
  number:{
        fontSize: 20,
        color: 'red',
        marginTop:10,
        marginRight:8,
            fontWeight: 'bold',
        textAlign: 'right',
        
  },
  
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text:{
    marginLeft: 10,
    fontWeight:'bold',
 
  },
  picker:{
    width: 370,
    height: 40,
    marginTop:20,
  },
}) 


