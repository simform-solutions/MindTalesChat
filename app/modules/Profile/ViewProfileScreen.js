import { useNavigation } from '@react-navigation/native';
import { Container, Content } from 'native-base';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Icons, Images } from '../../assets';
import { CustomButton, CustomHeader } from '../../components';
import { NavigationRoutes, Strings } from '../../constants';
import { UserSelectors } from '../../redux/UserRedux';
import { clearData } from '../../services/AsyncStorageService';
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

  const profileBottomView = () => (
    <View style={styles.footer}>
      {renderView('Name', userProfileData?.name)}
      {renderView('Email', userProfileData?.email)}
      {renderView('Gender', userProfileData?.gender)}
      {renderView('Phone Number', userProfileData?.phoneNo)}
    </View>
  );

  const renderProfileImage = () => (
    <View style={styles.profilePicContainer}>
      <Image
        style={styles.profilePic}
        source={
          userProfileData?.profileImage
            ? { uri: userProfileData?.profileImage }
            : Images.avatar
        }
      />
    </View>
  );

  async function handleLogout() {
    await clearData('userLoginData');
    navigation.navigate(NavigationRoutes.AuthStack);
  }

  return (
    <Container style={[styles.whiteContainer]}>
      <CustomHeader
        right
        left
        title={Strings.viewProfile}
        rightIcon={Icons.editProfile}
        rightOnPress={() => navigation.navigate(NavigationRoutes.ProfileScreen)}
        leftIcon={Icons.back}
        leftOnPress={() => navigation.goBack()}
      />
      <Content
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {renderProfileImage()}
        {profileBottomView(userProfileData)}
        <CustomButton
          style={styles.logout}
          title={Strings.logout}
          onPress={handleLogout}
        />
      </Content>
    </Container>
  );
};

export default ViewProfileScreen;
