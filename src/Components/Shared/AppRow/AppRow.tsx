import React, {useMemo} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {useSelector} from 'react-redux';
// import { AppStateType } from "../../Types/AppStateType";

type PropType = {
  children?: any;
  style?: ViewStyle;
  flex?: number;
};

function AppRow({children, style, flex}: PropType) {
  // const language = useSelector((state: AppStateType) => state.language);
  const styles = useMemo(
    () =>
      StyleSheet.create({
        rowStyles: {
          // flexDirection: language === "EN" ? "row" : "row-reverse",
          flex: flex === undefined ? 1 : flex,
          ...style,
        },
      }),
    [flex, style],
  );
  return useMemo(() => <View style={styles.rowStyles}>{children}</View>, [
    styles,
    children,
  ]);
}
export default AppRow;
