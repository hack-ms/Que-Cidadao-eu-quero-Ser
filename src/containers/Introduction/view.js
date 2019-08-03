import React, {PureComponent} from "react";
import {Container, Content, Text, View} from "native-base";
import PropTypes from "prop-types";
import SlidingUpPanel from 'rn-sliding-up-panel';

import {QuestionBox, Fading} from "~/components";
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

                </Content>
                <SlidingUpPanel ref={c => this._panel = c}>
                    <Profile/>
                </SlidingUpPanel>
            </Container>
        );
    }
}
