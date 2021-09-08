import {Container, Content} from 'native-base';
import React from 'react';
import {CustomHeader} from '../../components';
import {
  LoginScreenBottomView,
  LoginScreenMiddleView,
  LoginScreenTopView,
} from './components';
import styles from './styles/LoginScreenStyles';

const LoginScreen = () => {
  return (
    <Container style={styles.container}>
      <CustomHeader title={'Login'} />
      <Content
        showsVerticalScrollIndicator={false}
        enableAutoAutomaticScroll={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <LoginScreenTopView />
        <LoginScreenMiddleView />
        <LoginScreenBottomView />
      </Content>
    </Container>
  );
};

export default LoginScreen;
