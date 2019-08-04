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

    componentDidUpdate(): void {
        this.state.current === 3 && this.props.navigation.navigate("PlayScreen");
    }

    render() {
        return (
            <Container>
                <Content contentContainerStyle={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    {this.state.current === 0 && (<TimeoutFading onFinish={() => this.setState({current: 1})}>
                        <Text lg light center>Olá</Text>
                    </TimeoutFading>)}
                    {this.state.current === 1 && (<TimeoutFading opaqueFor={3500} onFinish={() => this.setState({current: 2})}>
                        <Text lg light center>Vamos tentar indagar sobre nossa gestão pública?</Text>
                    </TimeoutFading>)}
                    {this.state.current === 2 && (<TimeoutFading opaqueFor={3500} onFinish={() => this.setState({current: 3})}>
                        <Text lg light center>Mas não se preocupe! Nós iremos te conduzir.</Text>
                    </TimeoutFading>)}
                </Content>
            </Container>
        );
    }
}
