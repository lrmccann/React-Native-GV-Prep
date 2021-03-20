import React from 'react';
import {AuthProvider} from './AuthNavigator';
import Routes from './routes';
export default function Providers() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
