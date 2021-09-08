import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {createRef, useCallback} from 'react';
import {Keyboard, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {CustomButton, CustomTextInput} from '../../../components';
import {Strings} from '../../../constants';
import AuthActions from '../../../redux/AuthRedux';
import Schema from '../../../services/ValidationServices';
import styles from '../styles/LoginScreenStyles';

type renderEmailTextInputTypes = {
  handleChange: Function,
  handleBlur: Function,
  values: object,
  errors: object,
  touched: Function,
};

type renderPasswordTextInputTypes = {
  handleChange: Function,
  handleBlur: Function,
  values: object,
  errors: object,
  touched: Function,
  handleSubmit: Function,
};

type renderLoginButtonTypes = {
  values: object,
  isValid: Boolean,
  handleSubmit: Function,
};

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
}: renderEmailTextInputTypes) => (
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
);

const renderPasswordTextInput = ({
  handleChange,
  handleBlur,
  errors,
  touched,
  values,
  handleSubmit,
}: renderPasswordTextInputTypes) => (
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
);

const renderLoginButton = ({
  values,
  isValid,
  handleSubmit,
}: renderLoginButtonTypes) => {
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
  <View style={styles.formInputs}>
    {renderEmailTextInput(params)}
    {renderPasswordTextInput(params)}
    {renderLoginButton(params)}
  </View>
);

const useLoginScreenMiddleView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSubmitForm = useCallback(() => {
    Keyboard.dismiss();

    dispatch(AuthActions.authRequest());
    navigation.navigate('HomeStack');
  }, [dispatch, navigation]);

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
