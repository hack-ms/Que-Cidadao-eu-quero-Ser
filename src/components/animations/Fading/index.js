import React, {PureComponent} from "react";
import {Animated} from "react-native";
import PropTypes from "prop-types";

export default class extends PureComponent {

    static propTypes = {
        fadeDuration: PropTypes.number,
        hide: PropTypes.bool
    };

    static defaultProps = {
        fadeDuration: 500,
        hide: false
    };

    constructor(props) {
        super(props);

        this.state = {
            anim: null
        }
    }

    componentDidMount(): void {
        if(this.props.hide) this.setState({anim: new Animated.Value(0)});
        else this.setState({anim: new Animated.Value(1)});
    }

    componentDidUpdate(prevProps) {
        if (prevProps.hide !== this.props.hide) {
            if (this.props.hide) {
                this._startFadeOutAnimation();
            } else {
                this._startFadeInAnimation();
            }
        }
    }

    _startFadeInAnimation = () => {
        this.setState({
            anim: new Animated.Value(0)
        }, () => this._setFadeInAnimation().start())
    };

    _startFadeOutAnimation = () => {
        this.setState({
            anim: new Animated.Value(1)
        }, () => this._setFadeOutAnimation().start())
    };

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
