import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import StartScreen from './pages/StartScreen';
import ProductScreen from './pages/ProductScreen';
import ProductDetailScreen from './pages/ProductDetailScreen';
import Dashboard from './pages/Dashboard';
import { Provider } from 'react-redux';
import store from './redux/store';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='StartScreen'>
          <Stack.Screen name='StartScreen' component={StartScreen} />
          <Stack.Screen name='ProductScreen' component={ProductScreen} />
          <Stack.Screen name='ProductDetailScreen' component={ProductDetailScreen} />
          <Stack.Screen name='Dashboard' component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
