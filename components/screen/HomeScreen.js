import React, { Component, useState, useEffect } from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';
import { ScheduleNotification } from "../notification/Notificacion.js";
import TaskToText from "../../helpers/taskToText.js";
import {Day} from './week/Day.js';
import * as FileSystem from 'expo-file-system';
import { View,Accordion , Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export const HomeScreen= () => {
    
    //Para el card del horario del dia actual
      let arrDays=["domingo","lunes","martes","miercoles","jueves","viernes","sabado"]
      let currentDate= new Date();
      let currentStringDay=arrDays[currentDate.getDay()];

    //Para el card de current task
    const [tasks, settasks] = useState([])
      let file = FileSystem.documentDirectory + "text.txt";
      let TTT=new TaskToText()
      const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

      //cargar las tareas
      loadTasks=async ()=>{
        let task=[]
      let list=await FileSystem.readAsStringAsync(file).then((r) =>{
          let ar=TTT.convertToTask(r)
          ar.map(e=>{
            if(e.dia==currentDate.toString().substr(4,11)){
              task.push({title: e.materia, content: ` ${e.title}\n hora: ${e.hora}`})
            }
          })        
        } )
        settasks(task);
      }

    useEffect(() => {
        loadTasks();
      }, [])

    let _renderHeader=(item, expanded)=> {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#f3f3f3" }}>
      <Text style={{ fontWeight: "600" }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}
      </View>
    )
  }

  let _renderContent=(item)=> {
    return (
      <Text
        style={{
          backgroundColor: "#fff",
          padding: 10,
          fontStyle: "italic",
        }}
      >
        {item.content}
      </Text>
    );
  }

  //date.toString().substr(4,11)
    return (
      <Container>
        <Content>
          <Card  >
          <CardItem style={styles.cardTop}>
          <Left>
                <Icon name="checkbox-outline" />
                <Body>
                  <Text style={styles.text}>Tareas</Text>
                  <Text note style={styles.subtext}>{currentStringDay}</Text>
                </Body>
              </Left>
          </CardItem>
          <CardItem cardbody  style={styles.cardBottom}>
          <Accordion
            dataArray={tasks}
            animation={true}
            expanded={[0]}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
          />
          </CardItem>
          
         </Card>
          
           <Card >
          <CardItem style={styles.cardTop}>
          <Left>
                <Icon name="calendar-outline" />
                <Body>
                  <Text style={styles.text}>Horario</Text>
                  <Text note style={styles.subtext}>{currentStringDay}</Text>
                </Body>
              </Left>
          </CardItem>
          <CardItem cardbody style={styles.cardBottom}>
                      <ScrollView style={styles.scrollview}>
                        <Day day={currentStringDay} index={currentDate.getDay()}/>
                      </ScrollView>

          </CardItem>
          
         </Card>


        </Content>
      </Container>
    );
  
}
const styles = StyleSheet.create({
  cardTasks: {
    marginTop:40,
    backgroundColor:'#4db6ac'

  },
  scrollview:{
    height:150
  },
  cardTop:{
    marginTop:15,
    backgroundColor:'#efefef'
  },
  cardBottom: {
  },
  text: {
    fontSize:20
  },
  subtext: {
    fontStyle:'italic'
  }
  
})

