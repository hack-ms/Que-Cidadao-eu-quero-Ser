import React, {PureComponent} from "react";
import {Button, Text, View, Animated} from "native-base";
import PropTypes from "prop-types";

import styles from "./style";

export default class extends PureComponent {

    static propTypes = {
        question: PropTypes.string.isRequired
    };

    static Answer = (props) => {
        const {...rest} = props;

        return (
            <Button block style={styles.answer} {...rest}>
                <Text uppercase={false}>
                    {props.children}
                </Text>
            </Button>
        );
    };

    constructor(props) {
        super(props);
    }

    _renderChildren() {
        return React.Children.map(this.props.children, child => (
            <View style={styles.answerWrapper}>
                {child}
            </View>
        ))
    }

    render() {
        return (
            <View style={styles.box}>
                <View style={styles.questionWrapper}>
                    <Text light center>
                        {this.props.question}
                    </Text>
                </View>
                <View>
                    {this._renderChildren()}
                </View>
            </View>
        );
    }
}