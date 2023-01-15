import { createStackNavigator } from "@react-navigation/stack";
import { MainStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator<MainStackParamList>()

// export default : 默认导出
export default function MainNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={BottomTabNavigator} />

        </Stack.Navigator>
    )
}