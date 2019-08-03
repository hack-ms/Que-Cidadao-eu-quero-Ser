// @flow
import variables from '../variables/platform';

export default () => {
  return {
    flex: 1,

    marginHorizontal: variables.contentMarginHorizontal,
    marginVertical: variables.contentMarginVertical,
    backgroundColor: 'transparent',

    'NativeBase.Segment': {
      borderWidth: 0,
      backgroundColor: 'transparent'
    }
  };
};
