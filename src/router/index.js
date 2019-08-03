import {createStackNavigator} from "react-navigation";

import {Introduction, PlayScreen} from "~/containers";

export default createStackNavigator({
    PlayScreen: {
        screen: PlayScreen,
        navigationOptions: {
            header: null
        }
    },
    Introduction: {
        screen: Introduction,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: "PlayScreen"
})