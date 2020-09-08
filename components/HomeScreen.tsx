import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator, SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {getGroups} from '../services/InfoService';
import List from './List';

export default function HomeScreen({navigation}) {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getGroups().then((res) => {
      setGroups(res);
    });
  }, []);

  return (
    <>
      {groups.length > 0 ? (
        <SafeAreaView style={styles.container}>
          <FlatList
            style={styles.flatList}
            data={groups}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <List
                name={item.name}
                indexes={item.indexes}
                navigation={navigation}
              />
            )}
          />
        </SafeAreaView>
      ) : (
        <View style={styles.activityIndicator}>
          <ActivityIndicator />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FFF',
  },
  sectionContainer: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  container: {
    flex: 1,
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    backgroundColor: '#EFEFF4',
    borderBottomWidth: 1,
    borderBottomColor: '#BBBBC1',
    borderTopColor: '#BBBBC1',
    borderTopWidth: 1,
  },
});
