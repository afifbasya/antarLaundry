import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {ImageHeader, Logo} from '../../assets';
import { Saldo } from '../../components/';

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ImageHeader} style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.hello}>
          <Text style={styles.selamat}>Selamat Datang, </Text>
          <Text style={styles.username}>afifbasya</Text>
        </View>
      </ImageBackground>
      <Saldo />
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
  },
  hello: {
      marginTop: windowHeight*0.030
  },
  selamat : {
      fontSize: 24,
      fontFamily: 'TitilliumWeb-Regular'
  },
  username: {
      fontSize: 22,
      fontFamily: 'TitilliumWeb-Bold'
  }
});
