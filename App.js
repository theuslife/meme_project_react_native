import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {texto1: '', texto2: ''}
    this.modifyText = this.modifyText.bind(this);
  }

  changeVowels(text){
    let newText = text.toLowerCase();

    //Onde tiver as vocais não importa onde ele repita vai ser trocado pela letra I
    newText = newText
    .replace(/(a|e|i|o|u)/g, 'i')
    .replace(/(á|à|ã|â)/g, 'i')
    .replace(/(é|è|ê)/g, 'i')
    .replace(/(í|ì|î)/g, 'i')
    .replace(/(ó|ô|ô)/g, 'i')
    .replace(/(ú|ù|û)/g, 'i');

    return newText;
  }

  modifyText(name){

    const state = this.state;   
    state.texto1 = name;
    state.texto2 = this.changeVowels(name);
    this.setState(state);

  }

  render() {

    return (
      <View style={styles.container}>

        <View>
          <Text style={styles.title}>Criador de memes</Text>
        </View>

        <View style={styles.inputArea}>
          <TextInput style={styles.input} placeholder='Digite seu meme' underlineColorAndroid='transparent' onChangeText={this.modifyText}></TextInput>
        </View>

        <View style={styles.area}>
          <Text style={[styles.txt, styles.txt1]}>{this.state.texto1.toUpperCase()}</Text>
          <Image source={require('./images/mimimi.jpg')} style={ styles.img } />
          <Text style={[styles.txt, styles.txt2]}>{this.state.texto2.toUpperCase()}</Text>
        </View>

      </View>
    );

  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#999999',
    paddingTop: 30,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#FFFFFF'
  },
  input: {
    borderRadius: 1,
    borderColor: '#999999',
    backgroundColor: '#EEEEEE',
    color: 'black',
    height: 40,
    margin: 20,
    padding: 10
  },
  inputArea: {
    alignSelf: 'stretch'
  },
  area: {
    width: 300,
    height: 300,
    marginTop: 10
  },
  img: {
    width: 300,
    height: 300,
    marginTop: -70,
    zIndex: 0
  },
  txt: {
    fontSize: 25,
    color: '#FFFFFF',
    padding: 10,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txt1: {
    zIndex: 1,
    height: 80
  },
  txt2: {
    zIndex: 1,
    marginTop: -70,
    height: 90
  }

});
