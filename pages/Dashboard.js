import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData, addBike, updateBike, deleteBike} from '../redux/slice/bikeSlice';

const Dashboard = ({navigation}) => {
  const dispatch = useDispatch()
  const bikes = useSelector(state => state.bikes.bikes)

  useEffect(() => {
    dispatch(fetchData())
  }, []) 

  const [form, setForm] = useState({});
  const [isEditing, setIsEditing] = useState(false); 

  const handleAddOrUpdate = () => {
    if (isEditing) {
      dispatch(updateBike(form)) 
    } else {
      dispatch(addBike(form))
    }
    setForm({});
    setIsEditing(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteBike(id)) 
  };

  const handleEdit = (bike) => {
    setForm(bike);
    setIsEditing(true); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bike Dashboard</Text>

      {/* Form Section */}
      <View style={styles.form}>
        <TextInput
          placeholder="Name"
          value={form.name || ''}
          onChangeText={(text) => setForm({ ...form, name: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Category ID"
          value={form.categoryId || ''}
          onChangeText={(text) => setForm({ ...form, categoryId: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Image URL"
          value={form.image || ''}
          onChangeText={(text) => setForm({ ...form, image: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Price"
          keyboardType="numeric"
          value={form.price || ''}
          onChangeText={(text) => setForm({ ...form, price: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Discount"
          keyboardType="numeric"
          value={form.discount || 0}
          onChangeText={(text) => setForm({ ...form, discount: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Description"
          value={form.description || ''}
          onChangeText={(text) => setForm({ ...form, description: text })}
          style={styles.input}
        />
        <Button
          title={isEditing ? 'Update Bike' : 'Add Bike'}
          onPress={handleAddOrUpdate}
        />
      </View>

      {/* List Section */}
      <FlatList
        data={bikes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.bikeItem}>
            <Image source={{ uri: item.image }} style={styles.bikeImage} />
            <View style={styles.bikeInfo}>
              <Text style={styles.bikeName}>{item.name}</Text>
              <Text>Category: {item.categoryId}</Text>
              <Text>Price: ${item.price}</Text>
              <Text>Description: {item.description}</Text>
              <View style={styles.bikeActions}>
                <TouchableOpacity
                  onPress={() => handleEdit(item)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleDelete(item.id)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  bikeItem: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 10,
  },
  bikeImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  bikeInfo: {
    flex: 1,
  },
  bikeName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  bikeActions: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Dashboard;
