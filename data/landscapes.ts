import { ImageSourcePropType } from "react-native"

export interface Landscape {
    id: string

    title: string

    subtitle: string

    time: number

    order: number

    image: ImageSourcePropType

    audioUri: string

    track: number
}


export interface LandscapeItem {
    item: Landscape
}

export const haveBeen: Landscape[] = [
    {
        id: 'ff171f80-5960-41e7-965c-1f9bcf31e02c',
        order: 1,
        title: '灵隐',
        track: 0,
        subtitle: '多为仙灵所隐',
        time: 2,
        audioUri: 'https://goofy-ritchie-dd0c3d.netlify.app/meditations/17.mp3',
        image: require('../assets/images/meditate6.jpg'),
    },
    {
        id: 'ff171f80-5960-41e7-965c-1f9bcf31e02d',
        order: 2,
        title: 'Quick Powerful Meditation',
        track: 1,
        subtitle: 'Busy At Work',
        time: 5,
        audioUri: 'https://goofy-ritchie-dd0c3d.netlify.app/meditations/1.mp3',
        image: require('../assets/images/meditate1.jpg'),
    },
    {
        id: 'ff171f80-5960-41e7-965c-1f9bcf31e02e',
        order: 3,
        title: 'Deep Breathing',
        track: 2,
        subtitle: 'Just Breath',
        time: 5,
        audioUri: 'https://goofy-ritchie-dd0c3d.netlify.app/meditations/2.mp3',
        image: require('../assets/images/meditate2.jpg'),
    },
    {
        id: 'ff171f80-5960-41e7-965c-1f9bcf31e02f',
        order: 4,
        title: 'Yawn and Stretch',
        subtitle: 'Rise and Shine',
        track: 3,
        time: 5,
        audioUri: 'https://goofy-ritchie-dd0c3d.netlify.app/meditations/3.mp3',
        image: require('../assets/images/meditate5.jpg'),
    },

]