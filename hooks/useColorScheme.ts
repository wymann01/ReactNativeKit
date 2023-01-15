import { ColorSchemeName, useColorScheme as _useColorScheme } from "react-native";

// 获取是否深色模式
export default function useColorScheme(): NonNullable<ColorSchemeName> {
    return _useColorScheme() as NonNullable<ColorSchemeName>
}