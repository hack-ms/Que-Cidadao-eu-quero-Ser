import React, {PureComponent} from "react";
import {Container, Content, Text, Icon, View} from "native-base";
import PropTypes from "prop-types";
import SlidingUpPanel from 'rn-sliding-up-panel';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import {QuestionBox, Fading, UserLevel} from "~/components";
import {Profile} from "~/containers";

import styles from "./style";

export default class extends PureComponent {

    static propTypes = {
        store: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            hide: true
        }
    }

    componentDidMount(): void {
        this.setState({hide: false})
    }

    render() {
        const {navigation} = this.props;
        return (
            <GestureRecognizer
                onSwipeUp={() => this._panel.show()}
                style={styles.gestureContainer}
                config={{
                    velocityThreshold: 0,
                    directionalOffsetThreshold: 80,
                    gestureIsClickThreshold: 1
                }}
            >
                <Content contentContainerStyle={styles.content}>
                    <View>
                        <UserLevel level={{number: 30, alias: "Cidadão Pleno"}} progress={50}/>
                    </View>
                    <Fading hide={this.state.hide}>
                        <QuestionBox question={"Você quer saber sobre algo do seu estado?"}>
                            <QuestionBox.Answer onPress={() => {
                                this.setState({hide: true},
                                    () => setTimeout(() => this.setState({hide: false}), 1500))
                            }}>
                                Sim
                            </QuestionBox.Answer>
                            <QuestionBox.Answer onPress={() => {
                                this.setState({hide: true},
                                    () => setTimeout(() => this.setState({hide: false}), 1500))
                            }}>
                                Não
                            </QuestionBox.Answer>
                            <QuestionBox.Answer onPress={() => this._panel.show()}>
                                Não sei
                            </QuestionBox.Answer>
                        </QuestionBox>
                    </Fading>
                    <View></View>
                </Content>
                <SlidingUpPanel ref={c => this._panel = c}>
                    <Profile/>
                </SlidingUpPanel>
            </GestureRecognizer>
        );
    }
}
