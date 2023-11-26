import React from 'react';
import {View, Text, ScrollView, Image, useWindowDimensions} from 'react-native';
import PropTypes from 'prop-types';
import {darkTheme, lightTheme} from './constants';
import styles from './styles';

interface Theme {
  containerBackgroundColor: string;
  textColor: string;
  containerViewColor: string;
}

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const currentTheme: Theme = lightTheme;
  const isSmallFontScale: boolean = true;
  console.log(useWindowDimensions().fontScale);
  return (
    <>
      <ScrollView>
        <View
          style={[
            styles.container,
            {
              flexDirection: 'column',
              backgroundColor: currentTheme.containerBackgroundColor,
            },
          ]}>
          <HeadingSection currentTheme={currentTheme} />
          <ImageSection
            currentTheme={currentTheme}
            isSmallFontScale={isSmallFontScale}
          />
          <InfoSection
            currentTheme={currentTheme}
            isSmallFontScale={isSmallFontScale}
          />
        </View>
      </ScrollView>
    </>
  );
};

interface HeadingSectionProps {
  currentTheme: Theme;
}

const HeadingSection: React.FC<HeadingSectionProps> = ({currentTheme}) => (
  <View style={styles.headingColumnContainer}>
    <View style={styles.subContainer}>
      <Text style={[styles.title, {color: currentTheme.textColor}]}>
        Spider Man
      </Text>
      <Text style={[styles.subtitle, {color: currentTheme.textColor}]}>
        With great power comes great responsibility
      </Text>
    </View>
  </View>
);

const ImageSection: React.FC<InfoSectionProps> = ({isSmallFontScale}) => (
  <View
    style={
      isSmallFontScale && {flexDirection: 'row', justifyContent: 'center'}
    }>
    <View style={{alignItems: 'center'}}>
      <Image style={styles.ImageStyle} source={require('./assets/test.jpg')} />
    </View>
    <View
      style={[
        {flexDirection: 'column', paddingVertical: 20},
        isSmallFontScale && styles.maxWidth,
      ]}>
      <View style={styles.bodyMainContainer}>
        <Text>Marvel Comics</Text>
      </View>
      <View style={styles.bodySubContainer}>
        <Text>August 1962</Text>
      </View>
      <View style={[styles.bodySubContainer]}>
        <Text> Queens, New York City</Text>
      </View>
      <View style={[styles.bodySubContainer]}>
        <Text> Stan Lee Steve Ditko</Text>
      </View>
    </View>
  </View>
);

interface InfoSectionProps {
  currentTheme: Theme;
  isSmallFontScale: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  currentTheme,
  isSmallFontScale,
}) => (
  <View style={{alignItems: 'center'}}>
    <ScrollView showsVerticalScrollIndicator={false}>
      {infoData.map((info, index) => (
        <InfoItem
          key={index}
          text={info}
          currentTheme={currentTheme}
          isSmallFontScale={isSmallFontScale}
        />
      ))}
    </ScrollView>
  </View>
);

interface InfoItemProps {
  text: string;
  currentTheme: Theme;
  isSmallFontScale: boolean;
}

const InfoItem: React.FC<InfoItemProps> = ({
  text,
  currentTheme,
  isSmallFontScale,
}) => (
  <View
    style={[
      styles.bottomContainer,
      {
        borderColor: currentTheme.containerViewColor,
      },
    ]}>
    <Text>{text}</Text>
  </View>
);

InfoItem.propTypes = {
  text: PropTypes.string.isRequired,
  currentTheme: PropTypes.shape({
    containerBackgroundColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    containerViewColor: PropTypes.string.isRequired,
  }).isRequired,
  isSmallFontScale: PropTypes.bool.isRequired,
};

const infoData: string[] = [
  'Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. He has been featured in comic books, television shows, films, video games, novels, and plays.',
  "Spider-Man, aka Peter Parker, is a science whiz and freelance photographer. Balancing his life post a radioactive spider bite, he battles villains like Green Goblin and Doc Ock while navigating personal struggles. With his uncle's wisdom, he embraces the mantra of responsibility, embodying the friendly neighborhood hero.",
  'Spider-Man, agile and quick-witted, navigates the city with web-shooters and inventive flair. His humor shines in tough times, making him a unique and beloved superhero.',
];

export default App;
