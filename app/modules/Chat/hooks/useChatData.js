import {useCallback, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {GiftedChat} from 'react-native-gifted-chat';
import {useDispatch, useSelector} from 'react-redux';
import ChatActions, {ChatSelectors} from '../../../redux/ChatRedux';

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
    dispatch(
      ChatActions.chatRequest({_id: chatUser?.bin_id}, chatResponseData => {
        setMessages(chatResponseData ? chatResponseData : []);
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSend = useCallback((messages = []) => {
    const newMsg = messages?.[0];
    newMsg.senderId = '1';
    newMsg.createdAt = new Date();
    newMsg._id = chatUser?._id;
    const chatMessageData = [...chatMessage];
    if (chatMessageData && newMsg) {
      chatMessageData?.push(newMsg);
    }
    dispatch(
      ChatActions.chatUpdateRequest({
        _id: chatUser?.bin_id,
        data: [...chatMessageData],
      }),
    );
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    onSend,
    chatMessage,
    chatUser,
    navigation,
  };
};

export default useChatdata;
