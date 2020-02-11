import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over!</BodyText>
      <View style={styles.imageContainer}>
        <Image
          // source={require('../assets/images/success.jpeg')}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/8/8b/Iv%C3%A1n_Ernesto_G%C3%B3mez_Carrasco_en_la_cima_del_Monte_Everest.jpg'
          }}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <BodyText>
        Your phone needed {props.roundsNumber} <Text>rounds to guess </Text>
        <Text>{props.userNumber}</Text>
      </BodyText>
      <MainButton onClick={props.onRestart}>New Game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    margin: 30
  }
});

export default GameOverScreen;
