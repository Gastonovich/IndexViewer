import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {getGroups} from '../services/InfoService';
import List from './List';

export default function HomeScreen({navigation}) {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getGroups().then((res) => {
      console.log('res', res);
      setGroups(res);
    });
  }, []);

  return (
    <>
      {groups.length > 0 ? (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View>
              {groups &&
                groups.map((item, index) => (
                  <List
                    key={index}
                    name={item.name}
                    indexes={item.indexes}
                    navigation={navigation}
                  />
                ))}
            </View>
          </ScrollView>
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
});
