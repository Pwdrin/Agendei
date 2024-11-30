import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import icon from "../../constants/icons/icon";
import Home from "../home/home";
import Calendar from "../calendar/calendar";
import Profile from "../profile/profile";

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => {
            return (
              <Image source={icon.logo} style={{ width: 125, height: 29 }} />
            );
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={icon.home}
                style={{
                  width: 25,
                  height: 25,
                  opacity: focused ? 0.5 : 1,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => {
            return (
              <Image source={icon.logo} style={{ width: 125, height: 29 }} />
            );
          },
          unmountOnBlur: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={icon.calendar}
                style={{
                  width: 25,
                  height: 25,
                  opacity: focused ? 0.5 : 1,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => {
            return (
              <Image source={icon.logo} style={{ width: 125, height: 29 }} />
            );
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={icon.profile}
                style={{
                  width: 25,
                  height: 25,
                  opacity: focused ? 0.5 : 1,
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Main;
