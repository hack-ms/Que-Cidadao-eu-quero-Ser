import React, {PureComponent} from "react";
import {Container, Content, Text, View} from "native-base";
import PropTypes from "prop-types";

import {TimeoutFading, QuestionBox} from "~/components";

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
                    {this.state.current === 0 && (<TimeoutFading onFinish={() => this.setState({current: 1})}>
                        <Text lg light center>Olá</Text>
                    </TimeoutFading>)}
                    {this.state.current === 1 && (<TimeoutFading onFinish={() => this.setState({current: 2})}>
                        <Text lg light center>Vamos começar com algumas perguntas...</Text>
                    </TimeoutFading>)}
                    {this.state.current === 2 && (
                        <QuestionBox question={"Teste"}>
                            <QuestionBox.Answer>
                                Sim
                            </QuestionBox.Answer>
                            <QuestionBox.Answer>
                                Não
                            </QuestionBox.Answer>
                        </QuestionBox>
                    )}
                </Content>
            </Container>
        );
    }
}
