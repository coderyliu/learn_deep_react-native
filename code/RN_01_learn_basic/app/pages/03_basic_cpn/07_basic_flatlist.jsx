import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  RefreshControl,
} from 'react-native';

export default class BasicFlatList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      list: [
        {
          id: '1',
          title: 'Item 1',
        },
        {
          id: '2',
          title: 'Item 2',
        },
        {
          id: '3',
          title: 'Item 3',
        },
        {
          id: '4',
          title: 'Item 4',
        },
        {
          id: '5',
          title: 'Item 5',
        },
        {
          id: '6',
          title: 'Item 6',
        },
        {
          id: '7',
          title: 'Item 7',
        },
        {
          id: '8',
          title: 'Item 8',
        },
        {
          id: '9',
          title: 'Item 9',
        },
        {
          id: '10',
          title: 'Item 10',
        },
        {
          id: '11',
          title: 'Item 11',
        },
        {
          id: '12',
          title: 'Item 12',
        },
        {
          id: '13',
          title: 'Item 13',
        },
      ],
    };
  }

  // ?相当于map渲染每一项
  renderItem({item, index}) {
    return (
      <View style={styles.item}>
        <Text>{item.title}</Text>
      </View>
    );
  }

  // ?触底模拟请求
  reachBottom() {
    //*这个是js API
    alert('到底了');
  }

  // ?下拉刷新
  loadData() {
    this.setState({
      isLoading: true,
    });
    // 模拟网络请求
    setTimeout(() => {
      // 模拟请求数据
      alert('刷新请求数据');
      this.setState({
        isLoading: false,
      });
    }, 2000);
  }

  render() {
    return (
      <SafeAreaView>
        {/* 
        FlatList具有如下特点：
          完全跨平台
          支持垂直（默认）和水平两个方向的列表
          可配置显示或隐藏的回调事件
          支持自定义 Header
          支持自定义 Footer
          支持自定义行与行之间的分割线
          下拉刷新
          上拉刷新
          支持跳到指定行
          支持多列显示 
        */}
        {/* 1.简单使用 ,有了这个以后就用FlatList代替map*/}
        <FlatList
          ListHeaderComponent={() => {
            //自定义头部
            return (
              <View style={styles.header}>
                <Text>列表头部</Text>
              </View>
            );
          }}
          data={this.state.list} //数据源
          renderItem={this.renderItem} //渲染
          keyExtractor={item => item.id} //唯一索引
          ItemSeparatorComponent={() => {
            //分割线
            return <View style={styles.separator}></View>;
          }}
          onEndReached={() => this.reachBottom()} //触底事件
          onEndReachedThreshold={0.05} //声明距离底部的比率
          horizontal={false} //是否水平
          numColumns={1} //列数
          refreshing={this.state.isLoading} //下拉刷新
          onRefresh={() => this.loadData()} //下拉刷新数据
          ListFooterComponent={() => {
            //自定义列表尾部
            return (
              <View>
                <Text>列表尾部</Text>
              </View>
            );
          }}
          refreshControl={
            <RefreshControl
              title="Loading" //android设置无效
              colors={['blue']} //android
              tintColor={'blue'}
              refreshing={this.state.isLoading}
              onRefresh={() => this.loadData()} //下拉刷新数据
            />
          } //设置刷新样式
        ></FlatList>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  separator: {
    borderBottomWidth: 2,
    borderBottomColor: 'pink',
  },
  item: {
    padding: 20,
    marginHorizontal: 8,
    backgroundColor: '#bfa',
  },
});
