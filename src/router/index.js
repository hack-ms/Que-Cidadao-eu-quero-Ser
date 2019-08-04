import {createSwitchNavigator} from "react-navigation";

import {Introduction, PlayScreen} from "~/containers";

export default createSwitchNavigator({
    Introduction: {
        screen: Introduction,
        navigationOptions: {
            header: null
        }
    },
    PlayScreen: {
        screen: PlayScreen,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: "Introduction"
})