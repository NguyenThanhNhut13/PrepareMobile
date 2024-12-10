import { Text, SafeAreaView, View, Image, TouchableOpacity, FlatList, ScrollView, StyleSheet } from 'react-native';
import {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import useApi from '../hook/useApi';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../redux/slice/bikeSlice';

const ProductScreen = ({navigation}) => {

  const categories = [
    {
      "id": 1,
      "name": "All",
    },
    {
      "id": 2,
      "name": "RoadBike",
    },
    {
      "id": 3,
      "name": "Mountain",
    },
    {
      "id": 4,
      "name": "Other",
    },
  ]

  // const {data, setData, fetchData} = useApi('https://6756c1e8c0a427baf94a3f05.mockapi.io/api/bikes')
  const dispatch = useDispatch();
  const data = useSelector(state => state.bikes.bikes);

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  const [selectedCategory, setSelectedCategory] = useState(1);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {    
    if (selectedCategory == 1) {
      setFilterData(data) 
    } else { 
      const filter = data.filter(item => item.categoryId === selectedCategory);
      setFilterData(filter)
    }
  }, [selectedCategory, data])


  const renderCategory = (category) => {
    return (
      <TouchableOpacity onPress={() => {setSelectedCategory(category.item.id)}} style={styles.categoryItem}>
        <Text style={styles.categoryItemText}>{category.item.name}</Text>
      </TouchableOpacity>
    ) 
  }

  const renderItem = (item) => {
    return (
      <View style={styles.itemContainer} >
        <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('ProductDetailScreen', {item: item.item})} >
          <Image source={{uri: item.item.image}} style={styles.imageItem} />         
        </TouchableOpacity>
        <Text style={styles.itemName}>
          {item.item.name}
        </Text>
        <View style={styles.priceContainer}>
          <Icon name='dollar-sign' size={20} style={styles.dollar} />
          <Text style={styles.price}>
            {item.item.price}
          </Text> 
        </View>
        <TouchableOpacity style={styles.heart} > 
          <Icon name='heart' size={20} color='rgba(84, 84, 84, 0.15)' />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        The world's Best Bike
      </Text>
      <FlatList
        horizontal
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(category) => category.id}
        showsHorizontalScrollIndicator={false}
        style={styles.categoryItemContainer}
      />
      <FlatList
        data={filterData}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.itemListContainer}
      />
      
    </SafeAreaView>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
  title: {
    fontSize: 22,
    color: 'rgba(233, 65, 65, 1)',
    fontWeight:'bold',
    textAlign: 'left',
    marginTop: 15,
    marginLeft: 8,
  },
  categoryItemContainer: {
    height: '12%',
    maxHeight: '12%',
  },
  categoryItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(233, 65, 65, 0.53)',
    minWidth: 99,
    marginTop: 35,
    marginRight: 20,
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    marginLeft: 8,
  },
  categoryItemText: {
    fontSize: 20,
    color: 'rgba(190, 182, 182, 1)',
    textAlign: 'center',
  },
  itemListContainer: {
    height: '80%',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: 'rgba(247, 186, 131, 0.15)',
    borderRadius: 15,
    margin: 8,
  },
  imageContainer: {
    padding: 10,
  },
  imageItem: {
    width: 140,
    height: 130,
  },
  itemName: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dollar: {
    color: 'rgba(247, 186, 131, 1)',
  },
  price: {
    fontSize: 20,
  },
  heart: {
    position: 'absolute',
    top: 8,
    left: 15,
  },
});
export default ProductScreen;