import { connect } from "react-redux";
import { compose } from "redux";

import View from "./view";

const mapStateToProps = state => {
    return {
        store: {

        }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: {

        }
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(View)
