import React, {PureComponent} from "react";
import {Body, Container, Content, Header, Icon, Left, Right, View, Picker} from "native-base";
import PropTypes from "prop-types";

import {Fading, QuestionBox, UserLevel} from "~/components";

import styles from "./style";
import set from "@babel/runtime/helpers/esm/set";

const FADE_DURATION = 500;

export default class extends PureComponent {

    static propTypes = {
        store: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            levelProgress: 0,
            question: null,
            hide: true
        }
    }

    componentDidMount(): void {
        this._getQuestion(0);
    }

    _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    //TODO: @Helio remove from screen. Put into saga.
    async _getQuestion(id) {
        try {
            await this.setState({hide: true});
            await this._sleep(FADE_DURATION);
            await this.setState({question: null});
            const response = await fetch(`http://192.168.2.18:8080/questions/${id}`);
            const question = await response.json();
            question.selector === "REWARD" && await this.setState({levelProgress: question.rewardAmount});
            this.setState({question, hide: false});
        } catch (e) {
            return e;
        }
    };

    _renderAnswers(options, selector) {
        if (selector === "PICKER") {
            return (
                <Picker
                    onValueChange={value => this._getQuestion(value)}
                    itemStyle={{height: 10, backgroundColor: "red"}}
                >
                    {
                        options.map((option, index) => (
                            <Picker.Item
                                key={index}
                                label={option.text}
                                value={option.jump}
                            />
                        ))}
                </Picker>
            )
        }
        return options.map((option, index) => (
            <QuestionBox.Answer key={index} onPress={() => this._getQuestion(option.jump)}>
                {option.text}
            </QuestionBox.Answer>
        ))
    }


    _renderQuestionBox() {
        const {question, options, selector} = this.state.question;
        return (
            <QuestionBox question={question}>
                {
                    this._renderAnswers(options, selector)
                }
            </QuestionBox>
        )
    }

    render() {
        return (
            <Container>
                <Header transparent>
                    <Left>
                        {!this.props.store.isFirstAccess && (<Icon name="arrow-back"/>)}
                    </Left>
                    <Body/>
                    <Right/>
                </Header>
                <Content contentContainerStyle={styles.content}>
                    <Fading hide={false}>
                        <UserLevel level={{number: 0, alias: "Cidadão"}} progress={this.state.levelProgress}/>
                    </Fading>
                    <Fading hide={this.state.hide}>
                        {this.state.question && this._renderQuestionBox()}
                    </Fading>
                    <View/>
                </Content>
            </Container>
        );
    }
}
