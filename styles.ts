// styles.js

import {StyleSheet} from 'react-native';
import {Dimensions, PixelRatio} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  box: {
    width: 1,
    height: 1,
    backgroundColor: 'black',
    borderRadius: 50
  },
  switchButton: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeSwitch: {
    backgroundColor: '#ccc',
  },
  headingColumnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {alignItems: 'flex-end', flexDirection: 'column'},
  bodyMainContainer: {
    width: PixelRatio.getPixelSizeForLayoutSize(32),
    height: PixelRatio.getPixelSizeForLayoutSize(15),
    borderWidth: 2,
    marginLeft: 10,
  },
  bodySubContainer: {
    width: PixelRatio.getPixelSizeForLayoutSize(32),
    height: PixelRatio.getPixelSizeForLayoutSize(15),
    borderWidth: 2,
    marginTop: 10,
    marginLeft: 10,
  },
  bottomContainer: {
    width: PixelRatio.getPixelSizeForLayoutSize(125),
    height: PixelRatio.getPixelSizeForLayoutSize(30),
    borderWidth: 2,
    marginTop: 10,
  },
});

export default styles;
