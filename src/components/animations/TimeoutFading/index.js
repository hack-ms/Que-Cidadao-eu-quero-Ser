import React, {PureComponent} from "react";
import {Animated} from "react-native";
import {Text} from "native-base";
import PropTypes from "prop-types";

export default class extends PureComponent {

    static propTypes = {
        fadeDuration: PropTypes.number,
        opaqueFor: PropTypes.number,
        onFinish: PropTypes.func
    };

    static defaultProps = {
        fadeDuration: 500,
        opaqueFor: 2000
    };

    constructor(props) {
        super(props);

        this.state = {
            anim: new Animated.Value(0),
        }
    }

    componentDidMount(): void {
        this._setFadeInAnimation()
            .start(this._startFadeOutAnimation);
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
        const {opaqueFor, onFinish} = this.props;

        this.setState({
            anim: new Animated.Value(1)
        }, () => setTimeout(() => this._setFadeOutAnimation().start(onFinish), opaqueFor));
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
