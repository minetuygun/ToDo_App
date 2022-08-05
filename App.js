/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, { Component, useCallback } from 'react';

 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   TextInput,
   StyleSheet,
   TouchableOpacity,
 Text,
 useColorScheme,
   View,
 } from 'react-native';
 import ItemList from './ItemList';
  export default class App extends Component{
     constructor  (){
      super();
      this.state={
        text:'',
        data:[]
      }
      
      }
      handleSave=()=>{
        const{text,data}=this.state;
        alert(text,);
        data.push({text});
        this.setState({data})
        console.log(this.state.data); 
      };
  
            render(){
              const{text,data}=this.state;     
             
              return(
               
                <View style={[{flex :1,paddingTop:30}]}>
                  <View style={style.title}>
                    <Text style={style.title_text}>TO-DO APLICATION</Text>
                    <View style={{backgroundColor:'#ccc',padding:10,flexDirection:'row'}}></View>
                    <TextInput style={style.input}
                    value={text}

                    onChangeText={(text)=>this.setState({text})}
                    />
                      <TouchableOpacity onPress={this.handleSave} style={style.button}>
                   <Text style={style.title_text}>Ekle</Text>

                      </TouchableOpacity>
                  </View>
                  <View>
   {data.map((item)=>{

   return <ItemList text={item.text}/>
            })}

                  </View>
                  
                    </View>
              )
            }
          }
         
      const style=StyleSheet.create({
        welcome_area:{ backgroundColor:'orange'},
        welcome_text:{color:'blue',fontSize:50},
        title:{backgroundColor:'blue',padding:10},
        title_text:{color:'white',textAlign:'center',fontSize:16,fontWeight:'700'},
        input:{backgroundColor:'white'},
        button:{padding:10,backgroundColor:'orange',borderRadius:5}
      });
            
             
  
 