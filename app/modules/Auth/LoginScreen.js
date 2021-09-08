import {Container, Content} from 'native-base';
import React from 'react';
import {CustomHeader} from '../../components';
import {LoginScreenMiddleView, LoginScreenTopView} from './components';
import styles from './styles/LoginScreenStyles';

const LoginScreen = () => {
  return (
    <Container style={styles.mainContainer}>
      <CustomHeader title={''} />
      <Content
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        enableAutoAutomaticScroll={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <LoginScreenTopView />
        <LoginScreenMiddleView />
      </Content>
    </Container>
  );
};

export default LoginScreen;
