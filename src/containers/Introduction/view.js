import React, {PureComponent} from "react";
import {Container, Content, Text} from "native-base";
import PropTypes from "prop-types";

import {QuestionBox, Fading} from "~/components";

import styles from "./style";

export default class extends PureComponent {

    static propTypes = {
        store: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            hide: true
        }
    }

    componentDidMount(): void {
        this.setState({hide: false})
    }

    render() {
        const {navigation} = this.props;
        return (
            <Container>
                <Content contentContainerStyle={{flex: 1, justifyContent: "center", alignItems: "center"}}>
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
                        </QuestionBox>
                    </Fading>
                    {/*{this.state.current === 0 && (<Fading onFinish={() => this.setSta    te({current: 1})}>*/}
                    {/*    <Text lg light center>*/}
                    {/*        Olá*/}
                    {/*    </Text>*/}
                    {/*</Fading>)}*/}
                    {/*{this.state.current === 1 && (<Fading>*/}
                    {/*    <Text lg light center>*/}
                    {/*        Vamos fazer um teste rápido para testar seus conhecimentos...*/}
                    {/*    </Text>*/}
                    {/*</Fading>)}*/}
                </Content>
            </Container>
        );
    }
}
