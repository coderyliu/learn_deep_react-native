import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Platform, UIManager} from 'react-native';
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
// import Home from './app/router/03_bottomrouter';
// import Home from './app/router/04_materialrouter';
// import Home from './app/pages/05_basic_api/01_output';
// import Home from './app/pages/05_basic_api/02_devices';
// import Home from './app/pages/05_basic_api/03_platform';
// import Home from './app/pages/05_basic_api/04_stylesheet';
// import Home from './app/pages/05_basic_api/05_linking';
// import Home from './app/pages/05_basic_api/06_pixelratio';
// import Home from './app/pages/05_basic_api/07_backhandler';
// import Home from './app/pages/05_basic_api/08_permissions';
// import Home from './app/pages/05_basic_api/09_vibration';
// import Home from './app/pages/05_basic_api/10_toast';
// import Home from './app/pages/05_basic_api/11_keyboard';
// import Home from './app/pages/05_basic_api/12_transform';
// import Home from './app/pages/06_animate/01_simple_animate';
// import Home from './app/pages/06_animate/02_animate_way';
// import Home from './app/pages/06_animate/03_animate_cpn';
// import Home from './app/pages/06_animate/04_animate_decay';
// import Home from './app/pages/06_animate/05_animate_spring';
// import Home from './app/pages/06_animate/06_animate_timing';
// import Home from './app/pages/06_animate/07_animate_xy';
// import Home from './app/pages/06_animate/08_animate_compose';
// import Home from './app/pages/06_animate/09_animate_bug';
import Home from './app/pages/06_animate/10_layout_animate';

export class App extends Component {
  componentDidMount() {
    // ?使用LayoutAnimation的前提，判断是否可用 可用设置为true
    if (
      Platform.OS === 'android' &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <NavigationContainer>
        <Home></Home>
      </NavigationContainer>
    );
  }
}

export default App;
