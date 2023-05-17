import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import DetailBlog from "./pages/DetailBlog";
import { NavigationContainer } from "@react-navigation/native";
import { BlogProvider } from "./context/BlogContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <BlogProvider>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Lena Blog" component={Home} options={{
              headerStyle:{
                backgroundColor:'#5e5d5d',
              },
              headerTitleStyle:{
                color:'white',
                marginHorizontal:130  
              }
            }} />
            <Stack.Screen name="Detail" component={DetailBlog} options={{
              headerStyle:{
                backgroundColor:'#5e5d5d',
              },
              headerTitleStyle:{
                marginHorizontal:90,  
              },              
              headerTintColor: 'white',

            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </BlogProvider>
    </>
  );
}
