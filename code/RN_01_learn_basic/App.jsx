import React, {Component} from 'react';
import {View} from 'react-native';

// import Home from './app/pages/01_know_RN/home'
// import Home from './app/pages/02_styleSheet/home';
// import Home from './app/pages/03_basic_cpn/01_basic-view';
// import Home from './app/pages/03_basic_cpn/02_basic-image';
// import Home from './app/pages/03_basic_cpn/03_basic_input';
// import Home from './app/pages/03_basic_cpn/04_basic-scroll';
// import Home from './app/pages/03_basic_cpn/05_basic-button';
// import Home from './app/pages/03_basic_cpn/06_basic-switch';
import Home from './app/pages/03_basic_cpn/07_basic_flatlist';

export class App extends Component {
  render() {
    return (
      <View>
        <Home></Home>
      </View>
    );
  }
}

export default App;
