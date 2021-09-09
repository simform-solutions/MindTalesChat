import { useNavigation } from '@react-navigation/native';
import { Container, Content } from 'native-base';
import { Icons } from '../../assets';
import { CustomHeader } from '../../components';
import styles from './styles/ChatScreenStyle';
import React, { useCallback, useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { Colors } from '../../theme';
const ChatScreen = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  const ChatView = () => (
    <GiftedChat
      messages={messages}
      scrollToBottom
      lightboxProps={{color:Colors.primary}}
      onSend={messages => onSend(messages)}
      timeTextStyle={{ left: { color: 'red' }, right: { color: 'yellow' } }}
      sty={{backgroundColor:Colors.primary}}
      user={{
        _id: 1,
      }}
    />
  );
  return (
    <Container style={[styles.whiteContainer]}>
      <CustomHeader
        left
        title={'User 1'}
        leftIcon={Icons.back}
        leftOnPress={() => navigation.goBack()}
      />
      <Content
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <ChatView />
    </Container>
  );
};
export default ChatScreen;
