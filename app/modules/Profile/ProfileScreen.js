import { Formik } from 'formik';
import { Container, Content } from 'native-base';
import React, { createRef, useEffect, useState } from 'react';
import { Keyboard, Toast, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { connect, useDispatch } from 'react-redux';
import { Icons } from '../../assets';
import {
  CustomButton,
  CustomHeader,
  CustomTextInput,
  ProfileImage,
} from '../../components';
import { Strings } from '../../constants';
import UserActions from '../../redux/UserRedux/action';
import Schema from '../../services/ValidationServices';
import styles from './styles/ProfileScreenStyle';

const ProfileScreen = props => {
  const [imagesource, SetImageSource] = useState('');
  const nameRef = createRef();
  const emailRef = createRef();
  const genderRef = createRef();
  const phoneNoRef = createRef();
  const dispatch = useDispatch();
  useEffect(() => {
    SetImageSource(
      props?.profileData?.profileImage ? props?.profileData?.profileImage : '',
    );
  }, [props?.profileData]);

  const renderNameTextInput = ({
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
  }) => (
    <CustomTextInput
      ref={nameRef}
      autoCapitalize={'words'}
      style={styles.textInput}
      placeholder={Strings.namePlaceholder}
      value={values.name}
      keyboardType={'default'}
      returnKeyType={'next'}
      error={touched.name && errors.name}
      onBlur={handleBlur('name')}
      onChangeText={handleChange('name')}
      onSubmitEditing={() => emailRef.current.focus()}
    />
  );

  const renderEmailTextInput = ({
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
  }) => (
    <CustomTextInput
      ref={emailRef}
      autoCapitalize={'none'}
      keyboardType={'email-address'}
      style={styles.textInput}
      placeholder={Strings.emailPlaceholder}
      value={values.email}
      returnKeyType={'next'}
      error={touched.email && errors.email}
      onChangeText={handleChange('email')}
      onBlur={handleBlur('email')}
      onSubmitEditing={() => genderRef.current.focus()}
    />
  );

  const renderGenderTextInput = ({
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
  }) => (
    <CustomTextInput
      ref={genderRef}
      style={styles.textInput}
      placeholder={Strings.genderPlaceholder}
      value={values.gender}
      error={touched.gender && errors.gender}
      returnKeyType={'next'}
      keyboardType={'default'}
      onBlur={handleBlur('gender')}
      onChangeText={handleChange('gender')}
      onSubmitEditing={() => phoneNoRef.current.focus()}
    />
  );

  const renderPhoneNoTextInput = ({
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    handleSubmit,
  }) => (
    <CustomTextInput
      ref={phoneNoRef}
      style={styles.textInput}
      placeholder={Strings.phoneNoPlaceholder}
      value={values.phoneNo}
      error={touched.phoneNo && errors.phoneNo}
      returnKeyType={'done'}
      keyboardType={'number-pad'}
      onBlur={handleBlur('phoneNo')}
      onChangeText={handleChange('phoneNo')}
      onSubmitEditing={handleSubmit}
    />
  );

  const openImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      SetImageSource(image.path);
    });
  };

  const userSubmit = values => {
    const { name, email, gender, phoneNo } = values;
    if (imagesource?.length === 0) {
      Toast.show({
        text: Strings.noProfilePic,
        buttonText: Strings.ok,
        position: 'top',
        duration: 3000,
      });
      return;
    }
    Keyboard.dismiss();
    dispatch(
      UserActions.userProfileDataSave(
        name,
        email,
        gender,
        phoneNo,
        imagesource,
      ),
    );
    props.navigation.goBack();
  };

  const isFormFilled = values =>
    values?.name?.length ||
    values?.email?.length ||
    values?.gender?.length ||
    values?.phoneNo?.length;

  const renderSubmitButton = ({ values, isValid, handleSubmit }) => {
    const isFormFilledCheck = isFormFilled(values);
    return (
      <View style={styles.buttonContainer}>
        <CustomButton
          disabled={!isValid || !isFormFilledCheck || !imagesource.length}
          title={Strings.submit}
          onPress={handleSubmit}
        />
      </View>
    );
  };

  const renderFormInputs = params => (
    <View style={styles.formInputs}>
      {renderNameTextInput(params)}
      {renderEmailTextInput(params)}
      {renderGenderTextInput(params)}
      {renderPhoneNoTextInput(params)}
      {renderSubmitButton(params)}
    </View>
  );

  const renderRegisterForm = () => {
    const { name, email, gender, phoneNo } = props?.profileData;
    return (
      <Formik
        initialValues={{
          name: name,
          email: email,
          gender: gender,
          phoneNo: phoneNo,
        }}
        validationSchema={Schema.register}
        onSubmit={values => {
          userSubmit(values);
        }}
      >
        {({ ...params }) => renderFormInputs(params)}
      </Formik>
    );
  };

  const renderForm = () => {
    return (
      <View style={styles.formContainer}>
        <ProfileImage imageSource={imagesource} onPress={openImagePicker} />
        {renderRegisterForm()}
      </View>
    );
  };
  return (
    <Container style={[styles.whiteContainerCenter]}>
      <CustomHeader
        left
        title={Strings.profile}
        leftIcon={Icons.back}
        leftOnPress={() => props.navigation.goBack()}
      />
      <Content
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {renderForm()}
      </Content>
    </Container>
  );
};

const mapStateToProps = state => ({
  profileData: state.user.userProfileData,
});

const mapDispatchToProps = dispatch => {
  return {
    submitProfileData: (name, email, gender, phoneNo, profileImage) => {
      dispatch(
        UserActions.userProfileDataSave(
          name,
          email,
          gender,
          phoneNo,
          profileImage,
        ),
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
