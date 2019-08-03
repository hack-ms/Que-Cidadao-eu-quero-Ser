import React, {PureComponent} from "react";
import {Text, Button, View} from "native-base";
import PropTypes from "prop-types";

import {UserLevel} from "~/components";

import styles from "./style";

export default class extends PureComponent {

    static propTypes = {
        store: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <View padder style={styles.content}>
                    <View style={styles.top}>
                        <View style={styles.draggableIndicator}/>
                        <UserLevel level={{number: 10, alias: "Cidadão Pleno"}} progress={60}/>
                    </View>
                    <Button block>
                        <Text uppercase={false}>Sair</Text>
                    </Button>
                </View>
            </View>
        );
    }
}
