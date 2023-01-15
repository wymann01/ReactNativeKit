import { Platform } from "react-native"

// TODO: 初始化数据上传相关操作
export const initializeAnalytics = async () => {

}

// 请求 App 权限，可以用react-native-tracking-transparency
// TODO:
export const trackEvent = async (eventName: string) => {
    if(Platform.OS === 'ios') {
        
    }
}