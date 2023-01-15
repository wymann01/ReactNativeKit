import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Colors from '../constants/Colors';
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/Home";
import { BottomTabParamList, HomeParamList } from "../types";



const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme()

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
                headerShown: false
            }}>

            <BottomTab.Screen
                name="西湖"
                component={TabOneNavigator}
            />


        </BottomTab.Navigator>
    )
}

// 每个 Tab 都应该有自己的 Stack
const HomeStack = createStackNavigator<HomeParamList>()
function TabOneNavigator() {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: styles.header,
                headerTitleStyle: styles.headerTitle
            }}
        >
            <HomeStack.Group
                screenOptions={{
                    headerStyle: styles.header,
                    headerTitleStyle: styles.headerTitle,
                }}
            >
                <HomeStack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        headerTitle: '未能抛得杭州去，一半勾留是此湖'
                    }}
                />

                {/* <HomeStack.Group  */}
            </HomeStack.Group>

        </HomeStack.Navigator>
    )
}

const styles = StyleSheet.create({
    headerTitle: {
        fontWeight: '600',
        color: Colors.light.white,
        fontSize: 16,
    },
    header: {
        backgroundColor: Colors.light.primary,
    },
    tabBarIcon: {
        marginBottom: -3,
    },
})