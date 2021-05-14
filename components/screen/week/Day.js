import React from 'react'
import { View } from 'react-native';
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import Horario from "../../../data/horario/Horario.js";


export const Day = (props) => {

    let arr=[]
    let horario= new Horario();
    let dia= horario.getOneDay(props.index)[0];
    if(dia!=undefined){
            let mapa=new Map(Object.entries(dia))
        Object.entries(dia).map((d)=> {
        d[1].forEach(hora => {
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
    console.log(dia)
    
    


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


