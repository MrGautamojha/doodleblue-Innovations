import React from 'react';
import {Text} from 'react-native-paper';
import {StyleSheet, TextStyle, Platform} from 'react-native';
import scaler from '../../../Utilities/scaler';
import PaperTheme from '../../../Config/PaperTheme';
import {useActiveTheme} from 'rnfui';
import {useSelector} from 'react-redux';
// import {AppStateType} from '../../Types/AppStateType';

type PropType = {
  type:
    | 'heading'
    | 'headingNormal'
    | 'subHeading'
    | 'headingLight'
    | 'smallHeading'
    | 'title'
    | 'smallText';
  style?: TextStyle;
  children?: any;
  light?: boolean;
  color?: string;
  onPress?: any;
  numberOfLines?: number;
};

function AppText(props: PropType) {
  const {styles, children, onPress, numberOfLines} = useAppText(props);

  return (
    <Text
      style={styles.textStyles}
      onPress={onPress}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}

function useAppText(props: PropType) {
  const {style, type, children, color, light, onPress, numberOfLines} = props;
  const {fontFamily, fontWeight, fontSize} = getFontFamily(type);
  const Theme = useActiveTheme();
  // const language = useSelector((state: AppStateType) => state.language);
  const styles = StyleSheet.create({
    textStyles: {
      fontSize: fontSize,
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      color: color ? color : light ? Theme.color.white : Theme.color.black,
      // textAlign: language === 'EN' ? 'left' : 'right',
      marginTop: scaler(10),
      ...style,
    },
  });
  return {
    styles,
    children,
    onPress,
    numberOfLines,
  };
}

function getFontFamily(type: any) {
  switch (type) {
    case 'heading':
      return {
        ...PaperTheme.fonts.medium,
        fontSize: scaler(35),
      };

    case 'headingNormal':
      return {
        ...PaperTheme.fonts.regular,
        fontSize: scaler(35),
      };

    case 'subHeading':
      return {
        ...PaperTheme.fonts.regular,
        fontSize: scaler(25),
      };

    case 'headingLight':
      return {
        ...PaperTheme.fonts.thin,
        fontSize: scaler(35),
      };
    case 'title':
      return {
        ...PaperTheme.fonts.regular,
        fontSize: Platform.OS === 'ios' ? scaler(24) : scaler(28),
      };

    case 'smallHeading':
      return {
        ...PaperTheme.fonts.regular,
        fontSize: scaler(25),
      };

    case 'smallText':
      return {
        ...PaperTheme.fonts.regular,
        fontSize: scaler(25),
      };
    default:
      return {...PaperTheme.fonts.regular, fontSize: scaler(25)};
  }
}

export default AppText;
