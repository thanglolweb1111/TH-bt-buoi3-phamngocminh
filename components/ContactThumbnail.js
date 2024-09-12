import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../utility/colors';
import { fetchContacts } from '../utility/api';

const ContactThumbnail = ({ name, phone, avatar, textColor, onPress }) => {
  const colorStyle = {
    color: textColor,
  };
 
  const ImageComponent = onPress ? TouchableOpacity : View;

  return (
    <View style={styles.container}>
      <ImageComponent onPress={onPress}>
        <Image
          source={{
            uri: avatar,
          }}
          style={styles.avatar}
        />
      </ImageComponent>
      {name !== '' && <Text style={[styles.name, colorStyle]}>{name}</Text>}

      {phone !== '' && (
        <View style={styles.phoneSection}>
          <Icon name="phone" size={16} style={{ color: textColor }} />
          <Text style={[styles.phone, colorStyle]}>{phone}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: 'white',
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  phoneSection: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default ContactThumbnail;

// import React, { useState, useEffect } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   ActivityIndicator,
// } from 'react-native';

// import ContactListItem from '../components/ContactListItem';
// import { fetchContacts } from '../utility/api';

// const keyExtractor = ({ phone }) => phone;

// const Contacts = ({ navigation }) => {
//   // state
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   // Load data
//   useEffect(() => {
//     fetchContacts()
//       .then(contacts => {
//         setContacts(contacts);
//         setLoading(false);
//         setError(false);
//       })
//       .catch(e => {
//         setLoading(false);
//         setError(true);
//       });
//   }, []);

//   const renderContact = ({ item }) => {
//     const { name, avatar, phone } = item;
//     return (
//       <ContactListItem
//         name={name}
//         avatar={avatar}
//         phone={phone}
//         onPress={() => navigation.navigate('Profile', { contact: item })}
//       />
//     );
//   };

//   // Sort contacts
//   const contactsSorted = contacts.slice().sort((a, b) => a.name.localeCompare(b.name));

//   return (
//     <View style={styles.container}>
//       {loading && <ActivityIndicator size="large" />}
//       {error && <Text>Error...</Text>}
//       {!loading && !error && (
//         <FlatList
//           data={contactsSorted}
//           keyExtractor={keyExtractor}
//           renderItem={renderContact}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     flex: 1,
//   },
// });

// export default Contacts;