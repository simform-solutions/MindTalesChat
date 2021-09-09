import {useCallback, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import {GiftedChat} from 'react-native-gifted-chat';
import {useDispatch, useSelector} from 'react-redux';
import {ChatSelectors, ChatTypes} from '../../../redux/ChatRedux';

const useChatdata = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const chatUser = route?.params?.user;
  const dispatch = useDispatch();
  const chatData = useSelector(ChatSelectors.chatList);
  const data = chatData?.chat?.messages?.reduceRight(function (
    previous,
    current,
  ) {
    previous.push(current);
    return previous;
  },
  []);
  const [chatMessage, setMessages] = useState(data);

  useEffect(() => {
    dispatch({type: ChatTypes.CHAT_REQUEST});
  }, [dispatch]);
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return {
    onSend,
    chatMessage,
    chatUser,
    navigation,
  };
};

export default useChatdata;
