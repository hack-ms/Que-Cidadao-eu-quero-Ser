// @flow

import variable from '../variables/platform';

export default (variables /* : * */ = variable) => {
    const textTheme = {
        fontSize: variables.DefaultFontSize,
        fontFamily: variables.fontFamily,

        // weight
        ".light": {
            fontFamily: variables.fontFamilyLight
        },
        ".medium": {
            fontFamily: variables.fontFamilyMedium
        },
        ".bold": {
            fontFamily: variables.fontFamilyBold
        },

        // size
        ".xl": {
            fontSize: variables.DefaultFontSize * 2
        },
        ".lg": {
            fontSize: variables.DefaultFontSize * 1.2
        },
        ".sm": {
            fontSize: variables.DefaultFontSize * 0.7
        },
        ".xs": {
            fontSize: variables.DefaultFontSize * 0.5
        },

        //position
        ".center": {
            textAlign: "center"
        },

        color: variables.textColor,
        '.note': {
            color: '#a7a7a7',
            fontSize: variables.noteFontSize
        }
    };

    return textTheme;
};
