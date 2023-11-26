import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  box: {
    width: 1,
    height: 1,
    backgroundColor: 'black',
    borderRadius: 50,
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
  subContainer: {alignItems: 'center', flexDirection: 'column'},
  bodyMainContainer: {
    borderWidth: 2,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
  },
  bodySubContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 2,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 20,
  },
  bottomContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
  },
  ImageStyle: {
    width: 200,
    height: 300,
    borderRadius: 20,
  },
  maxWidth: {
    maxWidth: 200,
    minWidth: 200,
    justifyContent: 'space-between',
  },
});

export default styles;
