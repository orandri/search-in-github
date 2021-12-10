import "dotenv/config";
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { ActivityIndicator, FlatList } from 'react-native';
import { Image } from 'react-native';

export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [data,setData] = useState({})
  const [input,setInput] = useState("")



  const fetchUser = async (username) => {
    try {
      const { API_URL } = process.env;
      //console.log(API_URL)
     const response = await fetch(`${API_URL}/api/users/${username}`, {
        headers: {
          Authorization: "token 226BaZospYUTcoRvwba0SuPw5Vl_3RxjSr4PZmaZ3m7fac7Xb"
        }
      });
      const data = await response.json();
      if(data.user_bd){
        setData(data["user_bd"])
      }
      else{
        setData(data["message"])
      }
      
      console.log(data)
     
      return data;
    }
    catch(e){
      console.log(e)
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log(fetchUser("orandri"))
    //fetchUser("")
  }, []);

   /*function Compteur(){
    const {state, setState} = useState({ a:2})
    const data = fetchUser("orandri")
    const handleClick = function(e){
      e.preventDefault()
      setState({a:3})
      console.log("test"  + setState(fetchUser("orandri")))
      
    }
    return <button onClick={handleClick}>{JSON.stringify(state)}</button>
   }
*/

//const pdp  = data.avatar_url

//console.log(pdp)
   //fetchUser("orandri")
   function info_user() {
     //console.log("okkk")
     //fetchUser(input)
     console.log(data.id)
     console.log(data.username)
    
   }
  
  return (
    <View style={styles.container}>
      
      {isLoading ? <ActivityIndicator/> : 
      data.message ? (
        <Text>Utilisateur inexistant</Text>
      ):
        <View>
            <Text>Saisir le username : </Text>
         <TextInput style={styles.inputText}
          value = {input}
          onChangeText={setInput}></TextInput>

         <Button onPress={() => fetchUser(input) }
        title="Rechercher"
        />
        <Text>Id : {data.id}</Text>
        <Text>Login : {data.login}</Text>
        <Text>Followers : {data.followers}</Text>
        <Text>Followings : {data.following}</Text>
        <Image source={{uri:data.avatar_url}} style={styles.image} resizeMode="center"></Image>
      </View>
      
    }
      
     
      <StatusBar style="auto" />
    </View>
    /*<View style={{ flex: 1, padding: 24 }}>
    {isLoading ? <ActivityIndicator/> : (
      <Text>{data.login}</Text>
    )}
  </View>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#124523'
  },
  image: {

  }
});
