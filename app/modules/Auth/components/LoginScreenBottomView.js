import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Strings } from '../../../constants';
import styles from '../styles/LoginScreenStyles';

const LoginScreenBottomView = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomView}>
      <Text>
        {Strings.member}
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate('RegisterScreen')}
        >
          {Strings.signup}
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreenBottomView;
