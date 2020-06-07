import React from 'react';
import {Appbar} from 'react-native-paper';
// import scaler from '../../Utilities/scaler';
import {Platform} from 'react-native';
import scaler from '../../../Utilities/scaler';
import AppRouter from 'src/Navigation/AppRouter/AppRouter';

import {Click} from 'rnfui';

function AppHeader({navigation, scene}: any) {
  // console.log('navigation--', navigation);
  console.log('scene', scene);

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content
        title={scene.route.name}
        titleStyle={{
          fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-SemiBold',
          marginBottom: scaler(-5),
          fontWeight: '500',
          fontSize: scaler(40),
        }}
      />
    </Appbar.Header>
  );
}

export default AppHeader;
