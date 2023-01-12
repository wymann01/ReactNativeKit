/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View
} from 'react-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({ children, title }): Node => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

function HangZhouScreen ({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>如果你住在杭州</Text>
            <Text>Put Your Hands Up!</Text>
            <Button title='回家'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

function HomeScreen ({ navigation }) {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />

            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>

                <View
                    style={{ backgroundColor: Colors.white, justifyContent: 'center' }}>
                    <Section title="西湖">
                        这里是西湖，灵隐，虎跑，九溪和龙井
                    </Section>
                    <Button
                        title='回杭州'
                        onPress={() => navigation.navigate('HangZhou')} />
                </View>
                {/* <Header /> */}
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

// const Root = createStackNavigator()

function Tabs () {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator >
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='HangZhou' component={HangZhouScreen} />
        </Tab.Navigator>
    )
}

const App: () => Node = () => {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
