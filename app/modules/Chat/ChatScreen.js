import {useNavigation} from '@react-navigation/native';
import {Container, Content} from 'native-base';
import React from 'react';
import {Icons} from '../../assets';
import {CustomHeader} from '../../components';
import styles from './styles/ChatScreenStyle';

const ChatScreen = () => {
  const navigation = useNavigation();
  return (
    <Container style={[styles.whiteContainerCenter]}>
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
    </Container>
  );
};
export default ChatScreen;
