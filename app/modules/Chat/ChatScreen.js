import {Container} from 'native-base';
import {Icons} from '../../assets';
import {CustomHeader} from '../../components';
import styles from './styles/ChatScreenStyle';
import React from 'react';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import colors from '../../theme/Colors';
import useChatdata from './hooks/useChatData';

const ChatScreen = () => {
  const {navigation, chatUser, onSend, chatMessage} = useChatdata();

  const renderBubble = props => {
    if (!props.currentMessage.sent) {
      return (
        <Bubble
          wrapperStyle={{
            right: {backgroundColor: colors.primary},
          }}
          {...props}
        />
      );
    }
    return <Bubble {...props} />;
  };

  const renderSend = props => {
    return (
      <Send
        {...props}
        textStyle={{
          color: colors.primary,
        }}
      />
    );
  };

  const ChatView = () => {
    return (
      <GiftedChat
        messages={chatMessage}
        scrollToBottom
        renderBubble={renderBubble}
        renderSend={renderSend}
        user={{
          _id: 1,
          name: 'John',
          avatar: 'https://i.pravatar.cc/150?img=8y',
        }}
        onSend={messages => onSend(messages)}
      />
    );
  };

  return (
    <Container style={[styles.whiteContainer]}>
      <CustomHeader
        left
        title={chatUser.name}
        leftIcon={Icons.back}
        leftOnPress={() => navigation.goBack()}
      />
      <ChatView />
    </Container>
  );
};
export default ChatScreen;
