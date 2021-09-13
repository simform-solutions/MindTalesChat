import {Container, Content} from 'native-base';
import {CustomHeader, ProfileImage} from '../../components';
import styles from './styles/ViewProfileScreenStyle';
import React from 'react';
import {Icons, Images} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {NavigationRoutes, Strings} from '../../constants';
import {View, Text, Image} from 'react-native';

const ViewProfileScreen = () => {
  const navigation = useNavigation();

  const renderView = (lable, value) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={styles.lableStyle}>{lable}</Text>
      <Text style={styles.textStyle}>{value}</Text>
    </View>
  );

  const profileBottomView = () => (
    <View style={styles.footer}>
      {renderView('Name', 'Michale')}
      {renderView('Email', 'Michale@outlook.com')}
      {renderView('Gender', 'Female')}
      {renderView('Phone Number', '+1 (854)214 5454')}
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
        {profileBottomView()}
      </Content>
    </Container>
  );
};

export default ViewProfileScreen;
