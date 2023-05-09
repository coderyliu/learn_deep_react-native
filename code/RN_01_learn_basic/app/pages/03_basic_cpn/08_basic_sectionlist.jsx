import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, SectionList} from 'react-native';

// ?SectionList也是列表，但是可以将列表分为若干个章节，每个章节有自己的标题
// ?特性:
// todo 完全跨平台（android/ios）、支持单独的头部组件、单独的尾部组件、支持自定义行间分割线
// todo 支持上拉刷新、下拉加载、支持分组的头部组件、分组的分割线、多种数据源结构
// *如果我们不需要分组支持，直接使用FlatList即可

export default class BasicSectionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRefresh: false,
      data: [
        {
          title: '魏国',
          data: ['曹操', '司马懿', '张辽'],
        },
        {
          title: '蜀国',
          data: ['刘备', '关羽', '张飞', '诸葛亮'],
        },
        {
          title: '吴国',
          data: ['孙权', '周瑜', '鲁肃'],
        },
      ],
    };
  }

  // 渲染组件
  renderItem = ({item, index}) => {
    // ?item就是data数组中的每一个对象的data里面的一项
    // console.log(item);
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item}</Text>
      </View>
    );
  };

  // 下拉刷新
  loadData = () => {
    this.setState({
      isRefresh: true,
    });

    // 模拟网络请求
    setTimeout(() => {
      // 模拟请求数据
      alert('刷新请求数据');
      this.setState({
        isRefresh: false,
      });
    }, 2000);
  };

  render() {
    const {data} = this.state;

    return (
      <SafeAreaView>
        <SectionList
          //数据
          sections={data}
          //每一项的唯一索引
          keyExtractor={(item, index) => index}
          //渲染项目的组件
          renderItem={this.renderItem}
          //渲染章节标题
          renderSectionHeader={({section}) => {
            return <Text style={{fontSize: 40}}>{section.title}</Text>;
          }}
          //声明项目之间的分隔符
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{borderBottomWidth: 1, borderBottomColor: 'red'}}></View>
            );
          }}
          // 下拉刷新
          refreshing={this.state.isRefresh}
          onRefresh={this.loadData}
          // 上拉刷新
          onEndReachedThreshold={0.05} //声明触底的比率0.05表示距离底部还有10%
          onEndReached={() => {
            alert('到底了');
          }}
          //列表数据为空时展示的组件
          ListEmptyComponent={() => {
            return <Text style={{fontSize: 30}}>列表数据为空</Text>;
          }}
          // 声明列表的头部组件
          ListHeaderComponent={() => {
            return <Text style={{fontSize: 40}}>三国英雄榜</Text>;
          }}
          // 声明列表的尾部组件
          ListFooterComponent={() => {
            return <Text style={{fontSize: 30}}>没有更多了</Text>;
          }}></SectionList>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    height: 40,
    backgroundColor: 'pink',
  },
  title: {
    lineHeight: 40,
    textAlign: 'left',
  },
});
