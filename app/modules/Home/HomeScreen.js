import {Container} from 'native-base';
import React from 'react';
import {Text, View} from 'react-native';
import {CustomHeader} from '../../components';
import {Icons} from '../../theme';
import styles from './styles/HomeScreenStyle';

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <CustomHeader left title={'Home'} leftIcon={Icons.menu} />
        <View style={styles.whiteContainerCenter}>
          <Text>Home</Text>
        </View>
      </Container>
    );
  }
}

export default HomeScreen;
