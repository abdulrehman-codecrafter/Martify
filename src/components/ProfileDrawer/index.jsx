import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {Drawer} from 'react-native-paper';

const ProfileDrawer = ({visible}) => {
  const [active, setActive] = useState('');

  return visible ? (
    <View style={styles.container}>
      <Drawer.Section title="Cart">
        <Drawer.Item
          label="First Item"
          active={active === 'first'}
          onPress={() => setActive('first')}
        />
        <Drawer.Item
          label="Second Item"
          active={active === 'second'}
          onPress={() => setActive('second')}
        />
      </Drawer.Section>
    </View>
  ) : null;
};
export default ProfileDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    width: '70%',
    marginTop: 10,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,  
  },
})