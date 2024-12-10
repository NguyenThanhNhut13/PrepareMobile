import { Text, SafeAreaView, View, Image, TouchableOpacity, FlatList, ScrollView, StyleSheet } from 'react-native';

const StartScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.subTitle}>
        A premium online store for {'\n'} sporter and their stylish choice
      </Text>
      <View style={styles.imageContainer}>
        <Image style={styles.imageLogo} source={{uri: 'https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PZXTbRS7zeyFSVc0nk6AlgFpGacsXctg3uO0STHwiGw9erOyR-aYzEduI8KmiX~Ywe2Tzypf8DTI~Nz5LWhwqAhfI4rauDBHPttTZ9UaT0IS0aMqemy2AvajIPsww~Qly0gQ56wddy3luh2eqSFadPSnIiZOY2uFNNxZnL72hnbdU8kZNlndXdFi5-010Css9EtQk~c7FPnmXbxhfrXWSchPneHratzc6UandeTnsdl25T-G4UMtZiDDHft57stBL~XOkLAogWDlASK4VcbViUuxcqgofSRSvhWQdt~WYg1YwmR2GtU6Pu7txqV79t4eORM3Xng2nEHFuwaks2WT7g__'}}/>
      </View>
      <Text style={styles.title}>
        POWER BIKE {"\n"} SHOP
      </Text>
      <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('ProductScreen')}>
        <Text style={styles.btnStarttext}>
          Get Started
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.btnStarttext}>
          Dashboard
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 600,
    fontFamily: 'VT323'
  },
  imageContainer: {
    backgroundColor: 'rgba(233, 65, 65, 0.1)',
    paddingHorizontal: 20,
    paddingVertical: 50,
    borderRadius: 50,
    marginTop: 20,
    width: '96%',
  },
  imageLogo: {
    width: 292,
    height: 270,
  }, 
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 15,
  },
  btnStart: {
    backgroundColor: 'rgba(233, 65, 65, 1)',
    borderRadius: 50,
    paddingVertical: 15,
    width: '90%',
    marginTop: 15,
  },
  btnStarttext: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },

});
export default StartScreen;