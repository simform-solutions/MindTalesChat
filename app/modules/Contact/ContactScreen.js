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
import {Images} from '../../assets';
import icons from '../../assets/icons';
import {CustomHeader} from '../../components';
import {NavigationRoutes, Strings} from '../../constants';
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
          setContactList(JSON.parse(contactList));
        }
      });
    };
    getContacts();
  }, [ContactModule]);

  const renderRow = (item, index) => {
    const user = {
      _id: index + 10,
      name: item,
      avatar: 'https://placeimg.com/140/140/any',
      lastMessage: '',
    };
    return (
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() =>
          navigation.navigate(NavigationRoutes.ChatScreen, {user: user})
        }>
        <Image source={Images.avatar} style={styles.profilePic} />
        <Text style={styles.textStyle}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <CustomHeader
        left
        title={Strings.selectContact}
        leftIcon={icons.back}
        leftOnPress={() => navigation.goBack()}
      />
      <View style={styles.whiteContainer}>
        {errors || contactsList.length === 0 ? (
          <View style={styles.whiteContainerCenter}>
            <Text style={styles.textStyle}>
              {errors ? errors : Strings.errorContact}
            </Text>
          </View>
        ) : (
          <FlatList
            data={contactsList}
            renderItem={({item, index}) => renderRow(item, index)}
            extraData={contactsList}
          />
        )}
      </View>
    </Container>
  );
};

export default ContactScreen;
