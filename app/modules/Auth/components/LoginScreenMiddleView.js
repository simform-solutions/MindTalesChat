import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {createRef, useCallback} from 'react';
import {Keyboard, Text, View} from 'react-native';
import {CustomButton, CustomTextInput} from '../../../components';
import {Strings} from '../../../constants';
import Schema from '../../../services/ValidationServices';
import styles from '../styles/LoginScreenStyles';

const inputRef = {
  email: createRef(),
  password: createRef(),
};

const renderEmailTextInput = ({
  handleChange,
  handleBlur,
  errors,
  touched,
  values,
}) => (
  <View>
    <CustomTextInput
      ref={inputRef.email}
      autoCapitalize={'none'}
      keyboardType={'email-address'}
      style={styles.textInput}
      placeholder={Strings.emailPlaceholder}
      value={values.email}
      error={touched.email && errors.email}
      onBlur={handleBlur('email')}
      onChangeText={handleChange('email')}
      onSubmitEditing={() => inputRef.password.current.focus()}
    />
  </View>
);

const renderPasswordTextInput = ({
  handleChange,
  handleBlur,
  errors,
  touched,
  values,
  handleSubmit,
}) => (
  <View>
    <CustomTextInput
      secureTextEntry
      ref={inputRef.password}
      style={styles.textInput}
      placeholder={Strings.passwordPlaceholder}
      value={values.password}
      error={touched.password && errors.password}
      returnKeyType={'done'}
      onSubmitEditing={handleSubmit}
      onBlur={handleBlur('password')}
      onChangeText={handleChange('password')}
    />
  </View>
);

const renderLoginButton = ({values, isValid, handleSubmit}) => {
  const isFormFilled = values.email.length || values.password.length;
  return (
    <View style={styles.buttonContainer}>
      <CustomButton
        disabled={!isValid || !isFormFilled}
        title={Strings.login}
        onPress={handleSubmit}
      />
    </View>
  );
};

const renderLoginFormInputs = params => (
  <View style={styles.renderFormInput}>
    <View style={styles.formInputs}>
      <Text style={styles.titleText}>{Strings.login}</Text>
      {renderEmailTextInput(params)}
      {renderPasswordTextInput(params)}
      {renderLoginButton(params)}
    </View>
  </View>
);

const useLoginScreenMiddleView = () => {
  const navigation = useNavigation();

  const onSubmitForm = useCallback(() => {
    Keyboard.dismiss();
    navigation.navigate('HomeStack');
  }, [navigation]);

  return {onSubmitForm};
};

const LoginScreenMiddleView = () => {
  const {onSubmitForm} = useLoginScreenMiddleView();
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={Schema.login}
      onSubmit={onSubmitForm}>
      {({...params}) => renderLoginFormInputs(params)}
    </Formik>
  );
};

export default LoginScreenMiddleView;
