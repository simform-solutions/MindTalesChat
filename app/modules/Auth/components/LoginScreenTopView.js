import React from 'react';
import {Image} from 'react-native';
import {Icons} from '../../../assets';
import styles from '../styles/LoginScreenStyles';

const LoginScreenTopView = () => {
  return <Image style={styles.profilePic} source={Icons.applogo} />;
};

export default LoginScreenTopView;
