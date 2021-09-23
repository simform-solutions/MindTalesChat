import { Container, Content } from 'native-base';
import React, { useEffect } from 'react';
import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native';
import { CustomButton, CustomHeader } from '../../components';
import { NavigationRoutes, Strings } from '../../constants';
import { Images } from '../../theme';
import styles from './styles/HomeScreenStyle';
import { useNavigation } from '@react-navigation/native';
import { UserSelectors } from '../../redux/UserRedux/reducer';
import { UserTypes } from '../../redux/UserRedux/action';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userList = useSelector(UserSelectors.userData);
  const userProfileData = useSelector(UserSelectors.userProfileData);
  useEffect(() => {
    dispatch({ type: UserTypes.USER_REQUEST });
  }, [dispatch]);
  // displaying static user to move to next screen where we get dynamic messages
  const renderUserRow = item => {
    return (
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() =>
          navigation.navigate(NavigationRoutes.ChatScreen, { user: item })
        }
      >
        <Image
          source={item?.avatar ? { uri: item?.avatar } : Images.avatar}
          style={styles.profilePic}
        />
        <View style={styles.itemContainer}>
          <Text style={styles.nameStyle}>{item?.name}</Text>
          <Text style={styles.msgStyle}>{item?.username}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <CustomHeader title={''} />
      <View style={styles.profileviewContainer}>
        <Image
          source={
            userProfileData?.profileImage
              ? { uri: userProfileData?.profileImage }
              : Images.avatar
          }
          style={styles.profilePic}
        />
        <View style={styles.profileitemContainer}>
          <Text style={styles.nameStyle}>{userProfileData?.name}</Text>
          <Text style={styles.profilenameStyle}>{userProfileData?.email}</Text>
        </View>

        <CustomButton
          title={Strings.viewProfile}
          style={styles.profilebuttonStyle}
          onPress={() => navigation.navigate(NavigationRoutes.ProfileStack)}
        />
      </View>
      <View style={styles.whiteContainer}>
        <Content>
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.title}>
            {Strings.chat}
          </Text>
          <FlatList
            data={userList?.user}
            renderItem={({ item }) => renderUserRow(item)}
            keyExtractor={item => item._id}
          />
        </Content>
      </View>
    </Container>
  );
};

export default HomeScreen;
