import React, {Component} from 'react';
import {Text, StyleSheet, View, Modal, Pressable, Alert} from 'react-native';

export default class BasicModal extends Component {
  constructor() {
    super();

    this.state = {
      modalVisible: false,
    };
  }

  render() {
    const {modalVisible} = this.state;

    return (
      <View style={styles.centeredView}>
        <Modal
          // animationType 属性控制如何动画
          animationType="slide"
          // transparent 属性决定了你的模态是否会填满整个视图。将此设置为 true 将在透明背景上呈现模态。
          transparent={true}
          // 是否可见
          visible={modalVisible}
          // 监听模态框关闭
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setState({modalVisible: !modalVisible});
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setState({modalVisible: !modalVisible})}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setState({modalVisible: true})}>
          {/* Text组件bug:默认要指定lineHeight否则可能不会正常显示 */}
          <Text style={styles.textStyle}> Show Modal </Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    height: 100,
    borderRadius: 20,
    padding: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    width: 300,
    height: 55,
    lineHeight: 45,
    padding: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
