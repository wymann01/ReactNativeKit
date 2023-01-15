import { DarkTheme, DefaultTheme, NavigationContainer, NavigationContainerRef } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ColorSchemeName, StatusBar } from "react-native";
import { RootStackParamList } from "../types";
import { initializeAnalytics } from "../utils/analytics";
import MainNavigator from "./MainNavigator";


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    const navigationContainerRef = React.useRef<NavigationContainerRef<any>>(null) // 看不懂这句

    React.useEffect(() => {
        async function initialize() {
            try {
                await initializeAnalytics()
            } catch (e) {
                console.error(e)
            }
        }
        initialize()
    }, [])

    const handleNavigationStateChange = async () => {
        const currentRouteName = navigationContainerRef?.current?.getCurrentRoute()?.name

        // TODO: 此处有改动，
        try {
            await console.log(`Screen ${currentRouteName}` || 'Screen:Unknow')
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
            onStateChange={handleNavigationStateChange}
            ref={navigationContainerRef}
        >
            <StatusBar barStyle={'light-content'} />
            <RootNativegator />


        </NavigationContainer>
    )
}

const Stack = createStackNavigator<RootStackParamList>()

function RootNativegator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Root" component={MainNavigator} />
        </Stack.Navigator>
    )
}