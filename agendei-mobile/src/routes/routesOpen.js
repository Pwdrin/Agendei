import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login/login.jsx";
import Register from "../screens/register/register.jsx";
const Stack = createNativeStackNavigator();

function RoutesOpen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default RoutesOpen;
