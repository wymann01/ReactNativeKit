import { FlatList, StyleSheet, Text, useColorScheme } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Screen from "../../components/Screen";
import { haveBeen, LandscapeItem } from "../../data/landscapes";

export default function HomeScreen({ navigation }) {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };


    const card = ({ item }: LandscapeItem) => {
        return (
            <Card
                elevation={1}
                style={homeStyle.card}
                onPress={() => {

                }}
            >
                <Card.Cover
                    style={[homeStyle.cardImage, homeStyle.popularImage]}
                    source={item.image} />
                <Card.Title
                    titleStyle={[homeStyle.cardTitle, { color: '#778877' }]}
                    subtitleStyle={homeStyle.cardSubtitle}
                    title={item.title}
                    subtitle={item.subtitle}
                />
                <Card.Content style={homeStyle.cardContent}>
                    <Paragraph style={homeStyle.cardParagraph} >{item.time} 分钟</Paragraph>
                </Card.Content>
            </Card>
        )
    }

    // const homePage = 
    return (
        // <SafeAreaView style={backgroundStyle}>
        //     <StatusBar
        //         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        //         backgroundColor={backgroundStyle.backgroundColor}
        //     />

        <Screen scroll>
            <Text style={homeStyle.title} >孤山 POPULAR</Text>

            <FlatList
                style={homeStyle.cards}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={card}
                keyExtractor={({ id }) => id}
                data={haveBeen}
            />
        </Screen>
        // </SafeAreaView>
    );
}

const homeStyle = StyleSheet.create({
    card: {
        width: 250,
        marginRight: 10,
    },
    cardTitle: {
        fontSize: 16,
    },
    cardImage: {
        height: 135,
    },
    popularImage: {
        height: 250,
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    cardSubtitle: {
        color: Colors.light.gray800,
        fontSize: 14,
    },
    cardParagraph: {
        color: Colors.light.purple900,
        fontWeight: '600',
    },
    downloadButton: {
        position: 'relative',
        top: -6,
    },
    cards: {
        marginBottom: 30,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 19,
    },

    //Stack
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