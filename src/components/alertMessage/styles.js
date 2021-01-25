import { StyleSheet } from 'react-native';

// @Theme
import { PRIMARY_FONT } from '../../theme/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 15,
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  textWarning: {
    fontFamily: PRIMARY_FONT,
    color: '#cc3300',
    marginLeft: 10,
  },
  imageStyle: {
    width: 20,
    height:20
  },
});

export default styles;
