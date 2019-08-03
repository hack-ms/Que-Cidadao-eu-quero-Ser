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
    ".bold": {
      fontFamily: variables.fontFamilyBold
    },

    // size
    ".xl": {
      fontSize: variables.DefaultFontSize*2
    },
    ".lg": {
      fontSize: variables.DefaultFontSize*1.5
    },
    ".sm": {
      fontSize: variables.DefaultFontSize*0.7
    },
    ".xs": {
      fontSize: variables.DefaultFontSize*0.5
    },
    color: variables.textColor,
    '.note': {
      color: '#a7a7a7',
      fontSize: variables.noteFontSize
    }
  };

  return textTheme;
};
