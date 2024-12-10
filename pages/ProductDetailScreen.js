import { Text, SafeAreaView, View, Image, TouchableOpacity, FlatList, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ProductDetailScreen = ({navigation, route}) => {

  const {item} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.image}/>
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} />
        </TouchableOpacity>
      </View>
      <Text style={styles.itemName}>
        {item.name}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.originalPrice}>
          {item.discount}% OFF {item.price * (1 - item.discount / 100)}$
        </Text> 
        <Text style={styles.discountPrice}>
          {item.price * (item.discount / 100)}$
        </Text>
      </View> 

      <View style={styles.label}>
        Description
      </View>

      <Text style={styles.description}>
        {item.description}
      </Text>

      <View style={styles.butonContainer}>
        <TouchableOpacity>
          <Icon name='heart' size={35} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    padding: 8,
  },
  imageContainer: {
    backgroundColor: 'rgba(233, 65, 65, 0.1)',    
    justifyContent:'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 340, 
    resizeMode: 'contain'
  },
  itemName: {
    fontSize: 35,
    fontWeight: 500,
    marginTop: 10,
    marginLeft: 10,
  },
  priceContainer: {
    flexDirection: 'row',    
    marginLeft: 15,
  },
  originalPrice: {
    color: 'rgba(0, 0, 0, 0.59)',
    fontSize: 25,
    fontWeight: 600,
  },
  discountPrice: {
    fontSize: 25, 
    color: 'rgba(0, 0, 0, 1)',
    textDecorationLine: 'line-through',
    marginLeft: 30,
  },
  label: {
    fontSize: 25,
    fontWeight: 600,
    marginVertical: 18,
    marginLeft: 10,
  },
  description: {
    marginLeft: 10,
    fontSize: 19,
    color: 'rgba(0, 0, 0, 0.57)',
  },
  butonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 15,
  },
  btn: {
    backgroundColor: 'rgba(233, 65, 65, 1)',
    borderRadius: 50,
    width: '75%',
    marginLeft: 30,
    paddingVertical: 10,
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  backIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  }
});
export default ProductDetailScreen;