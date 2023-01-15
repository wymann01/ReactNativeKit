/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from 'react';
import {
    useColorScheme
} from 'react-native';

import Navigation from './navigation';

const App: () => Node = () => {
    const colorScheme = useColorScheme()

    return (
        <Navigation colorScheme={colorScheme} />
    );
};

export default App;
