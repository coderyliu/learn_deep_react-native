import React, {memo, useCallback, useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {formatTime} from '../../utils';
import {fetchArticleDetailData} from '../../store/modules/article-detail/detail';

import ArticleNavBar from './c-cpns/nav-bar';
import AppSwiper from '../../base-ui/app-swiper';

const ArticleDetail = memo(props => {
  const {route} = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  // redux
  const {articleInfo} = useSelector(
    state => ({
      articleInfo: state.article.articleInfo,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticleDetailData(route.params?.articleId));
  }, [dispatch, route.params?.articleId]);

  const handleIndexChange = useCallback(i => {
    setCurrentIndex(i);
  });

  return (
    <View style={styles.root}>
      {/* 导航栏 */}
      <ArticleNavBar articleInfo={articleInfo} />
      <ScrollView>
        {/* 轮播区 */}
        <AppSwiper onIndexChange={handleIndexChange}>
          {articleInfo?.image_list?.map(item => {
            return (
              <TouchableOpacity
                key={item?.file_id}
                activeOpacity={0.9}
                style={{width: '100%', height: '100%'}}>
                <Image
                  style={{width: '100%', height: '100%', resizeMode: 'cover'}}
                  source={{
                    uri:
                      articleInfo?.image_list[currentIndex]?.url +
                      '?imageView2/2/w/1920/format/webp|imageMogr2/strip',
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </AppSwiper>
        <View style={styles.bottomInfoStyle}>
          {/* 描述内容 */}
          <View style={styles.infoWrapStyle}>
            <Text style={styles.titleStyle}>{articleInfo?.title}</Text>
            <Text style={styles.descStyle}>{articleInfo?.desc}</Text>
            <View style={styles.tagWrapStyle}>
              {articleInfo?.tag_list?.map(item => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.tagStyle}
                    activeOpacity={0.7}>
                    <Text style={styles.tagTextStyle}>#{item.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <Text style={styles.timeStyle}>
              {formatTime(articleInfo?.time, 'MM-DD') + ' '}
              {articleInfo?.ip_location}
            </Text>
          </View>
          {/* 评论区 */}
        </View>
        {/* 底部栏 */}
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  bottomInfoStyle: {
    paddingHorizontal: 20,
  },
  infoWrapStyle: {
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.1)',
  },
  titleStyle: {
    paddingVertical: 15,

    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
  },
  descStyle: {
    lineHeight: 28,
    paddingVertical: 10,

    color: '#333',
    fontSize: 16,
    fontWeight: 'normal',
    letterSpacing: 1,
  },
  tagWrapStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 15,
  },
  tagStyle: {},
  tagTextStyle: {
    marginRight: 2,
    color: '#13386c',
    fontSize: 16,
  },
  timeStyle: {
    fontSize: 16,
  },
});

export default ArticleDetail;
