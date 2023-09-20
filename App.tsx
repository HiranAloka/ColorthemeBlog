// components/ButtonClickAnimation.js

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  PixelRatio,
  Appearance,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';

import {darkTheme, lightTheme} from './constants';
import styles from './styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface ThemeSwitchProps {
  isSwitchOn: boolean;
  toggleSwitch: () => void;
}
const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  isSwitchOn,
  toggleSwitch,
}) => {
  return (
    <View
      style={{
        position: 'absolute',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        height: PixelRatio.getPixelSizeForLayoutSize(32),
        width: windowWidth,
      }}>
      <TouchableOpacity
        style={[styles.switchButton, isSwitchOn && styles.activeSwitch]}
        onPress={toggleSwitch}>
        <Icon name={isSwitchOn ? 'moon' : 'sun'} size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

ThemeSwitch.propTypes = {
  isSwitchOn: PropTypes.bool.isRequired,
  toggleSwitch: PropTypes.func.isRequired,
};

const ButtonClickAnimation = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(lightTheme);
    }
  }, []);

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    const newTheme = isSwitchOn ? darkTheme : lightTheme;
    setCurrentTheme(newTheme);
  };

  return (
    <>
      <View
        style={[
          styles.container,
          {
            flexDirection: 'column',
            backgroundColor: currentTheme.containerBackgroundColor,
          },
        ]}>
        <View style={styles.headingColumnContainer}>
          <View style={styles.subContainer}>
            <Text style={[styles.title, {color: currentTheme.textColor}]}>
              Welcome to My App
            </Text>
            <Text style={[styles.subtitle, {color: currentTheme.textColor}]}>
              Explore and enjoy our content!
            </Text>
          </View>
        </View>
        <View style={{flex: 2, justifyContent: 'center', flexDirection: 'row'}}>
          <View
            style={{
              width: PixelRatio.getPixelSizeForLayoutSize(90),
              height: PixelRatio.getPixelSizeForLayoutSize(90),
              borderColor: currentTheme.containerViewColor,
              borderWidth: 2,
            }}></View>
          <View style={{flexDirection: 'column'}}>
            <View
              style={[
                styles.bodyMainContainer,
                {borderColor: currentTheme.containerViewColor},
              ]}></View>
            <View
              style={[
                styles.bodySubContainer,
                {
                  borderColor: currentTheme.containerViewColor,
                },
              ]}></View>
            <View
              style={[
                styles.bodySubContainer,
                {
                  borderColor: currentTheme.containerViewColor,
                },
              ]}></View>
            <View
              style={[
                styles.bodySubContainer,
                {
                  borderColor: currentTheme.containerViewColor,
                },
              ]}></View>
            <View
              style={[
                styles.bodySubContainer,
                {
                  borderColor: currentTheme.containerViewColor,
                },
              ]}></View>
          </View>
        </View>
        <View style={{flex: 3, alignItems: 'center'}}>
          <View
            style={[
              styles.bottomContainer,
              {
                borderColor: currentTheme.containerViewColor,
              },
            ]}></View>
          <View
            style={[
              styles.bottomContainer,
              {
                borderColor: currentTheme.containerViewColor,
              },
            ]}></View>
          <View
            style={[
              styles.bottomContainer,
              {
                borderColor: currentTheme.containerViewColor,
              },
            ]}></View>
          <View
            style={[
              styles.bottomContainer,
              {
                borderColor: currentTheme.containerViewColor,
              },
            ]}></View>
        </View>
      </View>
      <ThemeSwitch isSwitchOn={isSwitchOn} toggleSwitch={toggleSwitch} />
    </>
  );
};

export default ButtonClickAnimation;
