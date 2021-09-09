import {useNavigation} from '@react-navigation/native';
import {Container} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  NativeModules,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Icons, Images} from '../../assets';
import icons from '../../assets/icons';
import {CustomHeader} from '../../components';
import {NavigationRoutes} from '../../constants';
import styles from './styles/ContactStyle';

const ContactScreen = () => {
  const {ContactModule} = NativeModules;
  const [errors, setError] = useState('');
  const [contactsList, setContactList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getContacts = async () => {
      await ContactModule.getContacts((error, contactList) => {
        if (error) {
          setError(error);
        } else {
          console.log('---contactList-', JSON.parse(contactList));
          setContactList(JSON.parse(contactList));
        }
      });
    };
    getContacts();
  }, [ContactModule]);

  const navigateToScreen = name => {
    const {navigate} = this.props.navigation;
    navigate(name);
  };

  const renderRow = item => {
    return (
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => navigateToScreen(NavigationRoutes.ChatScreen)}>
        <Image source={Images.avatar} style={styles.profilePic} />
        <Text style={styles.nameStyle}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <CustomHeader
        left
        title={'Select Contact'}
        leftIcon={icons.back}
        leftOnPress={() => navigation.goBack()}
      />
      <View style={styles.whiteContainer}>
        {errors || contactsList.length === 0 ? (
          <View style={styles.whiteContainerCenter}>
            <Text style={styles.textStyle}>
              {errors ? errors : 'Please add contacts'}
            </Text>
          </View>
        ) : (
          <FlatList
            data={contactsList}
            renderItem={({item}) => renderRow(item)}
            extraData={contactsList}
          />
        )}
      </View>
    </Container>
  );
};

export default ContactScreen;
