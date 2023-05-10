import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// import Home from './app/pages/01_know_RN/home'
// import Home from './app/pages/02_styleSheet/home';
// import Home from './app/pages/03_basic_cpn/01_basic-view';
// import Home from './app/pages/03_basic_cpn/02_basic-image';
// import Home from './app/pages/03_basic_cpn/03_basic_input';
// import Home from './app/pages/03_basic_cpn/04_basic-scroll';
// import Home from './app/pages/03_basic_cpn/05_basic-button';
// import Home from './app/pages/03_basic_cpn/06_basic-switch';
// import Home from './app/pages/03_basic_cpn/07_basic_flatlist';
// import Home from './app/pages/03_basic_cpn/08_basic_sectionlist';
// import Home from './app/pages/03_basic_cpn/09_basic-modal';
// import Home from './app/pages/03_basic_cpn/10_basic_statusbar';
// import Home from './app/pages/03_basic_cpn/11_basic_loading';
// import Home from './app/pages/03_basic_cpn/12_basic_touchheight';
// import Home from './app/pages/03_basic_cpn/13_basic_animated';
// import Home from './app/pages/03_basic_cpn/14_basic_platform';
// import Home from './app/pages/04_third_cpn/01_iframe';
// import Home from './app/pages/04_third_cpn/02_banner';
// import Home from './app/pages/04_third_cpn/03_form-select';
// import Home from './app/pages/04_third_cpn/04_position';
// import Home from './app/pages/04_third_cpn/05_camera';
// import Home from './app/pages/04_third_cpn/06_imagepicker';
// import Home from './app/router/01_stackrouter';
// import Home from './app/router/02_drawerrouter';
import Home from './app/router/03_bottomrouter';
// import Home from './app/router/04_materialrouter';

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Home></Home>
      </NavigationContainer>
    );
  }
}

export default App;
