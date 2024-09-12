import { fetchContactsLoading, fetchContactsSuccess, fetchContactsError } from '../Create_store';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import ContactListItem from '../components/ContactListItem';
import { fetchContacts } from '../utility/api';

const keyExtractor = ({ phone }) => phone;

const Contacts = ({ navigation }) => {
  
  // state
  // const [contacts, setContacts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const {contacts,loading,error} = useSelector((state) => state);
  const dispatch = useDispatch();
  // Load data
  // useEffect(() => {
  //   fetchContacts()
  //     .then(contacts => {
  //       setContacts(contacts);
  //       setLoading(false);
  //       setError(false);
  //     })
  //     .catch(e => {
  //       setLoading(false);
  //       setError(true);
  //     });
  // }, []);
  useEffect(() => {
    dispatch(fetchContactsLoading());
    fetchContacts()
      .then(
        contacts => {
          dispatch(fetchContactsSuccess(contacts));
        }
      )
      .catch(
        e => {
          dispatch(fetchContactsError());
        }
      );
  },[]);

  const renderContact = ({ item }) => {
    const { name, avatar, phone } = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigation.navigate('Profile', { contact: item })}
      />
    );
  };

  // Sort contacts
  const contactsSorted = contacts.slice().sort((a, b) => a.name.localeCompare(b.name));
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error...</Text>}
      {!loading && !error && (
        <FlatList
          data={contactsSorted}
          keyExtractor={keyExtractor}
          renderItem={renderContact}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
});
export default Contacts;
