import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import format from '../helpers/formatValues';
import arrow from '../assets/right-arrow.png';

export default function List({name, indexes, navigation}) {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Index', {item: item})}>
        <View style={styles.item}>
          <View>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.ethPriceInWei}>
              {format(item.ethPriceInWei)}
            </Text>
          </View>
          <View style={styles.rightSection}>
            <Text style={styles.usdPriceInCents}>
              {format(item.usdPriceInCents)}
            </Text>
            <Image source={arrow} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={styles.groupName}>{name.toUpperCase()}</Text>
      <FlatList
        style={styles.flatList}
        data={indexes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  groupName: {
    fontSize: 15,
    fontWeight: '300',
    padding: 10,
    color: '#84848A',
    marginStart: 10,
  },
  separator: {
    backgroundColor: '#F3F3F3',
    marginHorizontal: 15,
    height: 1,
  },
  flatList: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#BBBBC1',
    borderTopColor: '#BBBBC1',
    borderTopWidth: 1,
  },
  item: {
    backgroundColor: '#FFF',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    margin: 4,
  },
  ethPriceInWei: {
    fontSize: 14,
    margin: 4,
    fontWeight: '200',
  },
  usdPriceInCents: {
    fontSize: 18,
    fontWeight: '400',
    marginEnd: 4,
    color: '#3C3C43',
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
