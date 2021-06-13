import React, { Component, useState, useEffect} from 'react';
import { Image, StyleSheet, Alert} from 'react-native';
import { Root, Container,Toast , Header, Accordion, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Footer } from 'native-base';
import * as Notifications from 'expo-notifications';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NewTask } from "./NewTask.js";
import * as FileSystem from 'expo-file-system';
import { StorageAccessFramework } from 'expo-file-system';
import TaskToText from "../../helpers/taskToText.js";
const data= require('../../data/archivos/horario.json')
const Stack = createStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

 export const TaskScreen= () => {
    const [tasks, setTasks] = useState([])

    return (
      
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tareas" component={TaskScreenHome}/>
        <Stack.Screen name="Nueva Tarea" component={NewTask}/>
      </Stack.Navigator>
    </NavigationContainer>
      

     
    );
  
}



 const TaskScreenHome= (props) => {
   const [task, settask] = useState([])
   const [selectedIndex, setselectedIndex] = useState(0)
   
   let file = FileSystem.documentDirectory + "text.txt";
   let TTT=new TaskToText()
   const [ready, setready]= useState(false);

    
 

loadFile = async () => {

        let list=await FileSystem.readAsStringAsync(file).then((r) =>{
          let ar=TTT.convertToTask(r)
        settask(ar)
        } )
        
}

saveFile = async () => {

        let final=""
        let str=TTT.convert(task)
        final+=str;
        Toast.show({
                text: "Tareas Guardadas",
                buttonText: "Okay",
                type: "success"              })
        FileSystem.writeAsStringAsync(file, final, { encoding: FileSystem.EncodingType.UTF8 })  
}
useEffect(() => {
      loadFile();
    }, [])

useEffect(()=>{
  settask(task);
}, [ready])

let deleteTask = (index) => {
   task.forEach(element => {
     if(element.index==index){
       task.splice(task.indexOf(element),1);
       Toast.show({
                text: "Tarea eliminada",
                type: "danger"})
       setready(!ready);
     }
   })
 } 

 

  return (
     <Root>
     <Container>
        <Header style={styles.header} >
         
          <Left>
          <Button   success onPress={saveFile}>
                  <Icon  name="md-save" />
                  
                </Button>
          </Left>
          
          <Right>
          <Button style={{
            backgroundColor:'#5d99c6'
          }} small  rounded onPress={()=>{
              props.navigation.navigate('Nueva Tarea', {
            setTask:settask
          } )
            }} >
            <Icon name='ios-add' />
          </Button>
          </Right>
          
        </Header>
        <Content>
        {task.map((e) => {
          if(e!=null){
            let day=e.dia.split(" ")
            let fechaTask= new Date(`${day[0]} ${day[1]},${day[2]} ${e.hora.split(" ")[0]}:${e.hora.split(" ")[2]}`).getTime()
            let fechaNotificacion= fechaTask - Date.now()
              Notifications.scheduleNotificationAsync({
                  content: {
                    title: e.materia,
                    body: e.descripcion,
                  },
                  trigger:{
                    seconds: fechaNotificacion/1000
                  }
                })

            
            return  (
            <Card key={e.index}> 
            <CardItem style={styles.cardTop}>
              <Left>
                <Body>
                  <Text>{e.title}</Text>
                  <Text note>{e.materia}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={styles.body}>
            <Text>{e.descripcion}</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon  name="calendar-outline" />
                  <Text>{e.dia}</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon  name="time-outline" />
                  <Text>{e.hora}</Text>
                </Button>
              </Body>
              <Right>
              <Button  iconRight transparent onPress={()=>{
                
                deleteTask(e.index)
              }}>
            <Icon style={styles.deleteIcon} name='trash-outline' />
            
          </Button>              
          </Right>
            </CardItem>
          </Card>
          )
          }
        })}
          
        </Content>
        
      </Container>
       </Root>
   )
 } 

const styles = StyleSheet.create({
  header: {
    backgroundColor:'transparent',
    display: 'flex',
    alignSelf: 'flex-end',
  },
  body:{
    marginLeft: 30
  },
  footer:{
    backgroundColor: 'transparent',
    display: 'flex'
  },
  deleteIcon:{
    color:'red',
  },
  cardTop:{
   
  }
  

  
})