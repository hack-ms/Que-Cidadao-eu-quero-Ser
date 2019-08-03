import React, {PureComponent} from "react";
import {Animated} from "react-native";
import {Text} from "native-base";
import PropTypes from "prop-types";

export default class extends PureComponent {

    static propTypes = {
        fadeDuration: PropTypes.number,
    };

    static defaultProps = {
        fadeDuration: 1000,
    };

    constructor(props) {
        super(props);

        this.state = {
            anim: new Animated.Value(0),
        }
    }

    componentDidMount(): void {
        this._setFadeInAnimation()
            .start();
    }

    componentWillUnmount(): void {
        this._startFadeOutAnimation();
    }

    _setFadeInAnimation = () => {
        const {fadeDuration} = this.props;

        return Animated.timing(
            this.state.anim,
            {
                toValue: 1,
                duration: fadeDuration
            }
        );
    };

    _startFadeOutAnimation = () => {
        this.setState({
            anim:  new Animated.Value(1)
        }, () => this._setFadeOutAnimation.start())
    };

    _setFadeOutAnimation = () => {
        const {fadeDuration} = this.props;

        return Animated.timing(
            this.state.anim,
            {
                toValue: 0,
                duration: fadeDuration
            }
        );
    };


    render() {
        const {anim} = this.state;

        return (
            <Animated.View style={{opacity: anim}}>
                {this.props.children}
            </Animated.View>
        );
    }
}
