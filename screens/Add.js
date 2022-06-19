import React, { Component, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from "react-redux";

import Home from './Home';

function Add({navigation}){
  const [valeur, setValeur] = useState('');
  const [nom, setNom] = useState('');

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.annulerButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Annuler</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.validerButton} title="valider">
            <Text style={styles.buttonText}>Valider</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.headerTitle}>AJOUTER UNE DÉPENSE / RECETTE</Text>

{/* ------------------------------------------ */}

        <View style={styles.input1}>
          <Image style={styles.iconImage} source={require("./img/text-tool.png")} />
          <TextInput 
            style={styles.titreInput} 
            placeholder="Saisir une description"
          />
        </View>

        <View style={styles.input2}>
          <Image style={styles.iconImage} source={require("./img/euro.png")} />
          <TextInput 
            style={styles.titreInput} 
            placeholder="€ 0.00"
          />
        </View>
      </SafeAreaView>
  );
}
export default Add;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'rgb(50,50,50)',
  },

  header:{
    height: 50,
    flexDirection:'row',
    backgroundColor: 'rgb(50,50,50)',
  },

  body:{
    backgroundColor: 'black',
    height:'100%',
  },

  headerTitle:{
    marginHorizontal: 20,
    textAlign: 'center',
    color: 'white',
    marginTop: 75,
    fontSize: 20,
  },

  validerButton: {
    flex:0,
    marginVertical: 10,
    marginRight:20,
    textAlign:'center',
  },
  
  annulerButton:{
    flex:1,
    marginVertical: 10,
    marginLeft: 20,
    textAlign:'center',
  },
  
  buttonText:{
    color:'#fff',
  },

  valeurDepense:{
    marginRight:'auto',
    marginLeft:'auto',
    marginTop:20,
    fontSize:20,
    height:50,
    width:200,
    flex:0,
  },

input1:{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderWidth: 0.5,
  borderColor: '#000',
  marginTop:75,
  height: 40,
  borderRadius: 5,
  margin: 10,
  marginHorizontal: 50,
},

input2:{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderWidth: 0.5,
  borderColor: '#000',
  marginTop:25,
  height: 40,
  borderRadius: 5,
  margin: 10,
  marginHorizontal: 50,
},

titreInput:{
  flex:1,
  textAlign: 'center',
  },

  iconImage:{
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});