import React from 'react';

import useAppRouter from './UseAppRounter';
import AppAuthNavigation from '../AppAuthNavigation';
// import WebViewApp from '../../Screens/Web/WebViewApp';

export default function () {
  useAppRouter();
  return <AppAuthNavigation />;
}
