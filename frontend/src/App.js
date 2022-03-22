/* eslint-disable require-jsdoc */
import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import LayoutHome from './components/LayoutHome/LayoutHome';
import {ConfigProvider} from 'antd';
ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});
function App() {
  return (
    <LayoutHome/>
  );
}
export default App;

