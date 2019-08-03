import React from 'react';
import {Provider} from "react-redux";
import {StyleProvider, Root} from "native-base";
import {createAppContainer} from "react-navigation";
import {store} from "~/redux";
import getTheme from "~/theme/components";
import platform from "~/theme/variables/platform";

import Routes from "~/router";

//TODO: remove it when native-base updates to be fully compatible with RN 0.60.3+
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
]);
//TODO: remove it when native-base updates to be fully compatible with RN 0.60.3+


const App = () => {
    const Router = createAppContainer(Routes);
    return (
        <Provider store={store}>
            <StyleProvider style={getTheme(platform)}>
                <Root>
                    <Router/>
                </Root>
            </StyleProvider>
        </Provider>
    );
};

export default App;
