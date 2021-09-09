import {Container, Content} from 'native-base';
import React, {useEffect} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CustomHeader} from '../../components';
import {NavigationRoutes, Strings} from '../../constants';
import {Icons, Images} from '../../theme';
import colors from '../../theme/Colors';
import styles from './styles/HomeScreenStyle';
import {ChatSelectors, ChatTypes} from '../../redux/ChatRedux';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const chatData = useSelector(ChatSelectors.chatList);

  data = ['User 1', 'User 2', 'User 3'];
  floatAction = [
    {
      text: 'New Chat',
      icon: Icons.newchat,
      name: 'bt_accessibility',
      color: colors.primary,
      position: 2,
    },
  ];

  const navigateToScreen = name => {
    const {navigate} = this.props.navigation;
    navigate(name);
  };
  useEffect(() => {
    console.log('----------');
    dispatch({type: ChatTypes.CHAT_REQUEST});
    console.log('---chatData-------', chatData);
  }, [dispatch]);

  const renderRow = item => {
    return (
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => navigation.navigate(NavigationRoutes.ChatScreen)}>
        <Image source={Images.avatar} style={styles.profilePic} />
        <View style={styles.itemContainer}>
          <Text style={styles.nameStyle}>{item}</Text>
          <Text style={styles.msgStyle}>Hello</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <CustomHeader left title={Strings.chat} />
      <View style={styles.whiteContainer}>
        <Content>
          <FlatList
            data={this.data}
            renderItem={({item, index}) => renderRow(item)}
          />
        </Content>
        <FloatingAction
          color={colors.primary}
          actions={this.floatAction}
          onPressItem={name => {
            navigation.navigate(NavigationRoutes.ContactScreen);
          }}
        />
      </View>
    </Container>
  );
};

export default HomeScreen;
