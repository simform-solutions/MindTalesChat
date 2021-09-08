import {Container, Content} from 'native-base';
import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CustomHeader} from '../../components';
import {NavigationRoutes, Strings} from '../../constants';
import {Icons, Images} from '../../theme';
import colors from '../../theme/Colors';
import styles from './styles/HomeScreenStyle';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  data = ['User 1', 'User 2', 'User 3'];
  floatAction = [
    {
      text: 'New Chat',
      icon: Icons.edit,
      name: 'bt_accessibility',
      color: colors.primary,
      position: 2,
    },
  ];

  navigateToScreen = name => {
    const {navigate} = this.props.navigation;
    navigate(name);
  };

  renderRow(item) {
    return (
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => this.navigateToScreen(NavigationRoutes.ChatScreen)}>
        <Image source={Images.avatar} style={styles.profilePic} />
        <View style={styles.itemContainer}>
          <Text style={styles.nameStyle}>{item}</Text>
          <Text style={styles.msgStyle}>Hello</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Container>
        <CustomHeader left title={Strings.chat} />
        <View style={styles.whiteContainer}>
          <Content>
            <FlatList
              data={this.data}
              renderItem={({item, index}) => this.renderRow(item)}
            />
          </Content>
          <FloatingAction
            color={colors.primary}
            actions={this.floatAction}
            onPressItem={name => {
              this.navigateToScreen(NavigationRoutes.ChatScreen);
            }}
          />
        </View>
      </Container>
    );
  }
}

export default HomeScreen;
