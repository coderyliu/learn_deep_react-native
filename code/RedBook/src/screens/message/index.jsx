import React, {memo, useEffect, useCallback, useRef} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet} from 'react-native';

import {
  fetchMessageData,
  changeCurrentPageAction,
} from '../../store/modules/message';

import MessageTitleBar from './c-cpns/title-bar';
import MessageListContent from './c-cpns/list-content';
import FloatModal from './c-cpns/float-modal';

const Message = memo(() => {
  const modalRef = useRef();

  // redux
  const {currentPage, listTotal, messageList} = useSelector(
    state => ({
      currentPage: state.message.currentPage,
      messageList: state.message.messageList,
      listTotal: state.message.listTotal,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessageData({page: currentPage, size: 10}));
  }, [dispatch, currentPage]);

  const handleGroupBtnPress = useCallback(() => {
    modalRef.current.show();
  }, [modalRef.current]);

  const loadData = useCallback(() => {
    if (currentPage >= listTotal) return;
    dispatch(changeCurrentPageAction(currentPage + 1));
  }, [dispatch, currentPage]);

  return (
    <View style={styles.root}>
      {/* 顶部栏 */}
      <MessageTitleBar onGroupBtnPress={handleGroupBtnPress} />
      {/* 内容区 */}
      <MessageListContent messageList={messageList} onLoadData={loadData} />
      {/* modal */}
      <FloatModal ref={modalRef} />
    </View>
  );
});

const styles = StyleSheet.create({});

export default Message;
