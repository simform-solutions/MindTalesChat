import {Formik} from 'formik';
import {Container, Content} from 'native-base';
import React, {createRef} from 'react';
import {Keyboard, Toast, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {connect} from 'react-redux';
import {Icons} from '../../assets';
import {
  CustomButton,
  CustomHeader,
  CustomTextInput,
  ProfileImage,
} from '../../components';
import {Strings} from '../../constants';
import UserActions from '../../redux/UserRedux';
import Schema from '../../services/ValidationServices';
import styles from './styles/ProfileScreenStyle';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSource: '',
      profileData: props.profileData,
      saveProfileData: props.submitProfileData,
    };
  }

  inputRef = {
    name: createRef(),
    email: createRef(),
    gender: createRef(),
    phoneNo: createRef(),
  };

  renderNameTextInput = ({
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
  }) => (
    <CustomTextInput
      ref={this.inputRef.name}
      autoCapitalize={'words'}
      style={styles.textInput}
      placeholder={Strings.namePlaceholder}
      value={values.name}
      keyboardType={'default'}
      returnKeyType={'next'}
      error={touched.name && errors.name}
      onBlur={handleBlur('name')}
      onChangeText={handleChange('name')}
      onSubmitEditing={() => this.inputRef.email.current.focus()}
    />
  );

  renderEmailTextInput = ({
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
  }) => (
    <CustomTextInput
      ref={this.inputRef.email}
      autoCapitalize={'none'}
      keyboardType={'email-address'}
      style={styles.textInput}
      placeholder={Strings.emailPlaceholder}
      value={values.email}
      returnKeyType={'next'}
      error={touched.email && errors.email}
      onChangeText={handleChange('email')}
      onBlur={handleBlur('email')}
      onSubmitEditing={() => this.inputRef.gender.current.focus()}
    />
  );

  renderGenderTextInput = ({
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
  }) => (
    <CustomTextInput
      ref={this.inputRef.gender}
      style={styles.textInput}
      placeholder={Strings.genderPlaceholder}
      value={values.gender}
      error={touched.gender && errors.gender}
      returnKeyType={'next'}
      keyboardType={'default'}
      onBlur={handleBlur('gender')}
      onChangeText={handleChange('gender')}
      onSubmitEditing={() => this.inputRef.phoneNo.current.focus()}
    />
  );

  renderPhoneNoTextInput = ({
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    handleSubmit,
  }) => (
    <CustomTextInput
      ref={this.inputRef.phoneNo}
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

  openImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      this.setState({imageSource: image.path});
    });
  };

  userSubmit = values => {
    const {imageSource} = this.state;
    const {name, email, gender, phoneNo} = values;
    if (imageSource?.length === 0) {
      Toast.show({
        text: Strings.noProfilePic,
        buttonText: Strings.ok,
        position: 'top',
        duration: 3000,
      });
      return;
    }
    Keyboard.dismiss();
    this.state.saveProfileData(name, email, gender, phoneNo);
    this.props.navigation.goBack();
  };

  isFormFilled = values =>
    values.name.length ||
    values.email.length ||
    values.gender.length ||
    values.phoneNo.length;
  renderSubmitButton = ({values, isValid, handleSubmit}) => {
    const {imageSource} = this.state;
    const isFormFilled = this.isFormFilled(values);
    return (
      <View style={styles.buttonContainer}>
        <CustomButton
          disabled={!isValid || !isFormFilled || !imageSource.length}
          title={Strings.submit}
          onPress={handleSubmit}
        />
      </View>
    );
  };

  renderFormInputs = params => (
    <View style={styles.formInputs}>
      {this.renderNameTextInput(params)}
      {this.renderEmailTextInput(params)}
      {this.renderGenderTextInput(params)}
      {this.renderPhoneNoTextInput(params)}
      {this.renderSubmitButton(params)}
    </View>
  );

  renderRegisterForm = () => {
    return (
      <Formik
        initialValues={{
          name: this.state.profileData.name,
          email: this.state.profileData.email,
          gender: this.state.profileData.gender,
          phoneNo: this.state.profileData.phoneNo,
        }}
        validationSchema={Schema.register}
        onSubmit={values => {
          this.userSubmit(values);
        }}>
        {({...params}) => this.renderFormInputs(params)}
      </Formik>
    );
  };

  renderForm = () => {
    const {imageSource} = this.state;
    return (
      <View style={styles.formContainer}>
        <ProfileImage
          imageSource={imageSource}
          onPress={this.openImagePicker}
        />
        {this.renderRegisterForm()}
      </View>
    );
  };

  render() {
    return (
      <Container style={[styles.whiteContainerCenter]}>
        <CustomHeader
          left
          title={Strings.profile}
          leftIcon={Icons.back}
          leftOnPress={() => this.props.navigation.goBack()}
        />
        <Content
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}>
          {this.renderForm()}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  profileData: state.user.userProfileData,
});

const mapDispatchToProps = dispatch => {
  return {
    submitProfileData: (name, email, gender, phoneNo) => {
      dispatch(UserActions.userProfileDataSave(name, email, gender, phoneNo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
