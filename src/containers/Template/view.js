import React, {PureComponent} from "react";
import {Container, Content, Text, Button} from "native-base";
import PropTypes from "prop-types";

import styles from "./style";

export default class extends PureComponent {

    static propTypes = {
        store: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        const {navigation} = this.props;
        return (
            <Container>
                <Content>
                </Content>
            </Container>
        );
    }
}
