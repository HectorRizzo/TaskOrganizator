import React from 'react'
import { View } from 'react-native';
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import Horario from "../../../data/horario/Horario.js";
const data= require('../../../data/archivos/horario.json')


export const Day = (props) => {

    let arr=[]
    let horario= new Horario();
    let dia= data[props.index]
    if(dia!=undefined){
        dia.map(d => {
            d[1].map(hora => {
                arr.push(<ListItem icon>  
                            <Left>
                                <Text>{hora}</Text>
                            </Left>
                            <Body>
                            <Text>{d[0]}</Text>
                            </Body>
                        </ListItem>)
            })
        })
    }
        
    
    /*
    
  "Ciencias Sostenibilidad": Array [
    "9:00",
    "9:30",
    "10:00",
  ],
  "Ingles": Array [
    "07:00",
    "07:30",
    "08:00",
    "08:30",
  ],
  "Lenguaje de Programacion": Array [
    "11:00",
    "11:30",
    "12:00",
  ],
  "Seguridad de la Informacion": Array [
    "16:00",
    "16:30",
    "17:00",
  ],
}
1
not undefine
Object {
  "Ciencias Sostenibilidad": Array [
    "9:00",
    "9:30",
    "10:00",
  ],
  "Ingles": Array [
    "07:00",
    "07:30",
    "08:00",
    "08:30",
  ],
  "Lenguaje de Programacion": Array [
    "11:00",
    "11:30",
    "12:00",
  ],
  "Seguridad de la Informacion": Array [
    "16:00",
    "16:30",
    "17:00",
  ],
    */
    
    


    return (
         <Container>
        <Content>
        {

            arr.map(e=> e)
        }
        </Content>
      </Container>
    )
}

/*
Object.entries(dia).forEach(([key, value]) => {
                value.forEach( hora => {
                    
                        <ListItem>
                            
                            <Left>
                                <Text>{hora}</Text>
                            </Left>
                            <Body>
                            <Text>{key}</Text>
                            </Body>
                        </ListItem>

                        d[1].forEach(e => {
                        return <ListItem icon>
                            
                            <Left>
                                <Text>{d}</Text>
                            </Left>
                            <Body>
                            <Text>d</Text>
                            </Body>
                        </ListItem>
                    })

                })
            })
*/


