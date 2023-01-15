
export type NO_PARAMS = undefined

// 页面的传参罢了
export type RootStackParamList = {
    Root: NO_PARAMS
    NotFound: NO_PARAMS
}

export type MainStackParamList = {
    Main: NO_PARAMS
    CompletedScreen: NO_PARAMS
}

export type BottomTabParamList = {
    Home: NO_PARAMS
    Stats: NO_PARAMS
    Settings: NO_PARAMS
}

export type HomeParamList = {
    HomeScreen: NO_PARAMS
    PlayScreen: {
        id: string
    }
}