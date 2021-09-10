import {useNavigation} from '@react-navigation/core';
import {Container, Content} from 'native-base';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Icons, Images} from '../../assets';
import {CustomButton, CustomHeader} from '../../components';
import {NavigationRoutes, Strings} from '../../constants';
import {UserSelectors} from '../../redux/UserRedux';
import styles from './styles/ViewProfileScreenStyle';

const ViewProfileScreen = () => {
  const userProfileData = useSelector(UserSelectors.userProfileData);
  const navigation = useNavigation();

  const renderView = (lable, value) => (
    <View style={styles.mainView}>
      <Text style={styles.lableStyle}>{lable}</Text>
      <Text style={styles.textStyle}>{value}</Text>
    </View>
  );

  const profileBottomView = userProfileData => (
    <View style={styles.footer}>
      {renderView('Name', userProfileData?.name)}
      {renderView('Email', userProfileData?.email)}
      {renderView('Gender', userProfileData?.gender)}
      {renderView('Phone Number', userProfileData?.gender)}
    </View>
  );

  const renderProfileImage = () => (
    <View style={styles.profilePicContainer}>
      <Image
        style={styles.profilePic}
        source={Images.avatar}

        // source={imageSource ? { uri: imageSource } : Images.avatar}
      />
    </View>
  );

  return (
    <Container style={[styles.whiteContainer]}>
      <CustomHeader
        right
        title={Strings.viewProfile}
        rightIcon={Icons.edit}
        rightOnPress={() => navigation.navigate(NavigationRoutes.ProfileScreen)}
      />
      <Content
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        {renderProfileImage()}
        {profileBottomView(userProfileData)}
      </Content>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={Strings.logout}
          // onPress={handleSubmit}
        />
      </View>
    </Container>
  );
};

export default ViewProfileScreen;
