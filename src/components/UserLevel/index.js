import React, {PureComponent} from "react";
import {Button, Text, View} from "native-base";
import ProgressCircle from 'react-native-progress-circle'
import PropTypes from "prop-types";

import styles from "./style";
import {scale} from "react-native-size-matters";

export default class extends PureComponent {

    static propTypes = {
        progress: PropTypes.number.isRequired,
        level: PropTypes.shape({
            number: PropTypes.number,
            alias: PropTypes.string
        }).isRequired
    };

    constructor(props) {
        super(props);
    }

    _calculateColor() {
        const normalizedGreen = this.props.progress * 0.01 * 255;
        const normalizedRed = (1 - this.props.progress) * 0.01 * 255;
        return `rgb(${Math.round(normalizedRed)},${Math.round(normalizedGreen)},0)`;
    }

    render() {
        const {level} = this.props;

        return (
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <ProgressCircle
                    radius={scale(30)}
                    color={this._calculateColor()}
                    percent={this.props.progress}
                    borderWidth={scale(4)}
                >
                    <Text lg bold center>{level.number}</Text>
                </ProgressCircle>
                <Text lg light> {level.alias} </Text>
            </View>
        );
    }
}