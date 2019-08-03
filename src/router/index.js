import {createStackNavigator} from "react-navigation";

import {Introduction} from "~/containers";

export default createStackNavigator({
    Introduction: {
        screen: Introduction,
        navigationOptions: {
            header: null
        }
    }
})