import "dotenv/config";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {


  const fetchUser = async (username) => {
    try {
      const { API_URL } = process.env;
      //console.log(API_URL)
     const response = await fetch(`${API_URL}/api/users/${username}`, {
        //const response = await fetch(`http://localhost:4242/api/users/${username}`,{
        //mode: 'cors',
        headers: {
          Authorization: "token 226BaZospYUTcoRvwba0SuPw5Vl_3RxjSr4PZmaZ3m7fac7Xb"
        }
        /*headers: {
          'Access-Control-Allow-Origin':'*'
        }*/
      });
      const data = await response.json();
      //console.log(data);
      console.log("aa")
      return data;
      
      //return data
    }
    catch(e){
      console.log(e)
    }
  }

   const user_json = fetchUser("orandri")
   console.log(JSON.stringify(user_json))
  //console.log(user_json)

  //fetchUser("redalakheir");
 
  return (
    <View style={styles.container}>
      <Text>Hello !</Text>
      <TextInput style={styles.inputText}></TextInput>
      <Button onPress={() => {
        console.log('test')
        fetchUser("redalakheir")
      }}
      title="Rechercher"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
