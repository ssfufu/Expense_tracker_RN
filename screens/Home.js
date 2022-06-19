import React, { Component, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const balance = -376.49;
const prenom = "DAVID";

const Separator = () => (
  <View style={styles.separator} />
);

const Operations = () => (
  <View style={styles.operations}>
    <Text>COUCOU</Text>
    <Text  style={{color: 'white'}}>OUVRE TOI</Text>
  </View>
);

const ListeOperations = () => (
  <View style={styles.listeOp}>
    <FlatList style={styles.listeLitt}
      data={[
        {key: 'Devin'},
        {key: 'Dan'},
        {key: 'Dominic'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
        {key: 'Opeodnv'},
        {key: 'qdsqvdev'},
        {key: 'zrGBZbrqv'},
        {key: 'zRHQER'},
        {key: 'zrg zrg'},
        {key: 'zdgkjzbdg'},
        {key: 'vjebdiuozgher'},
        {key: 'zfedpofihj'},
        {key: 'fpoeuzgh'},
        {key: 'ofzubevdiugf'},
      ]}
      renderItem={({item}) => <Text style={styles.items}>{item.key}</Text>}
    />
  </View>
);

function Home({navigation}){
  const [balance, setBalance] = useState('');

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.prenom}>BONJOUR, {prenom}</Text>

        <LinearGradient colors={['rgb(0,0,0)', 'rgb(20,20,20)', 'rgb(50,50,50)']} style={styles.header}>
            <Text style={styles.balance}>€{balance}</Text>
        </LinearGradient>

        <Text style={styles.sep}>Opérations :</Text>

        <LinearGradient style={styles.linearListe} colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0)', 'rgb(240,240,240)']}>
          <ListeOperations/>
        </LinearGradient>
      </View>

        <LinearGradient colors={['rgb(0,0,0)', 'rgb(20,20,20)', 'rgb(50,50,50)']} style={styles.viewButton}>
          <TouchableOpacity style={styles.validerButton} onPress={() => navigation.navigate('Add')}>
            <Text style={styles.validerText}>AJOUTER UNE DÉPENSE / RECETTE</Text>
          </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgb(240,240,240)',
  },

  header:{
    height: 150,
    width: 350,
    borderWidth: 1,
    marginTop: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderColor: 'grey',
    borderRadius: 20,
  },

  balance: {
    fontSize: 45,
    color: 'white',
    textAlign: 'right',
    marginBottom: 'auto',
    marginTop: 'auto',
    marginRight: 30,
    fontWeight: 'bold',
    letterSpacing: 5,
  },

  sep:{
    fontSize: 15,
    marginLeft: 15,
    marginVertical: 25,
  },

  listeOp: {
    height: 418,
  },

  listeLitt: {
    marginTop:0,
  },

  prenom:{
    fontSize: 30,
    width: 200,
    color: 'black',
    marginLeft: 20,
    marginTop: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  validerButton: {
    width: '90%',
    height:50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    backgroundColor: 'transparent',
  },

  viewButton:{
    width: '90%',
    height:50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: 'transparent',
  },

  validerText: {
    textAlign: 'center',
    marginTop:'auto',
    color: 'white',
    marginBottom:'auto',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },

  items:{
    fontSize: 20,
    height: 50,
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth:1,
    marginBottom:25,
    borderColor: 'black',
    borderRadius:10,
  },

  separator: {
    marginVertical: 0,
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});