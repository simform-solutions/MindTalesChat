import { Container, Content } from 'native-base';
import React, { useEffect } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CustomHeader } from '../../components';
import { NavigationRoutes, Strings } from '../../constants';
import { Images } from '../../theme';
import styles from './styles/HomeScreenStyle';
import { useNavigation } from '@react-navigation/native';
import { UserSelectors, UserTypes } from '../../redux/UserRedux';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userList = useSelector(UserSelectors.userData);

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
      <CustomHeader right title={Strings.chat} />
      <View style={styles.whiteContainer}>
        <Content>
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
