import { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useDispatch, useSelector } from 'react-redux';
import ChatActions, { ChatSelectors } from '../../../redux/ChatRedux';

const useChatdata = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const chatUser = route?.params?.user;
  const dispatch = useDispatch();
  const chatData = useSelector(ChatSelectors.chatList);

  const [chatMessage, setMessages] = useState([]);
  const reverseData = chatList => {
    const cloneChats = [...chatList];
    return cloneChats ? cloneChats.reverse() : [];
  };
  useEffect(() => {
    setMessages(reverseData(chatData?.chat?.messages));
  }, [chatData]);

  useEffect(() => {
    dispatch(
      ChatActions.chatRequest({ _id: chatUser?.bin_id }, response => {
        setMessages(response ? reverseData(response) : []);
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSend = useCallback((messages = []) => {
    const newMsg = messages?.[0];
    newMsg.senderId = '1';
    newMsg.createdAt = new Date();
    newMsg._id = chatMessage?.length + 1;
    newMsg.user = {
      _id: 1,
      name: 'John',
      avatar: 'https://i.pravatar.cc/150?img=8y',
    };

    const chatMessageData = [...chatMessage];

    const data = reverseData(chatMessageData);

    if (data && newMsg) {
      data?.push(newMsg);
    }

    dispatch(
      ChatActions.chatUpdateRequest({
        _id: chatUser?.bin_id,
        data: [...data],
      }),
    );
    // setMessages(previousMessages =>
    //   GiftedChat.append(previousMessages, newMsg),
    // );
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
