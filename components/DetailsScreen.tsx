import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import format from '../helpers/formatValues';
const DETAILS_PROPERTIES = [
  'usdCapitalization',
  'percentageChange',
  'ethPriceInWei',
];

const rebaseArray = (obj) => {
  let arr = Object.entries(obj);
  return arr.filter((el) => DETAILS_PROPERTIES.includes(el[0]));
};

const renderRow = ({item}) => {
  let name = item[0],
    number = item[1];

  switch (item[0]) {
    case 'usdCapitalization':
      name = 'Marketcap';
      number = format(number);
      break;
    case 'percentageChange':
      name = 'Total Gain';
      number += '%';
      break;
    case 'ethPriceInWei':
      name = 'Price';
      number = format(number);
      break;
    default:
      break;
  }

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.ethPriceInWei}>{number}</Text>
    </View>
  );
};

export default function Details({route}) {
  const {item} = route.params;

  return (
    <View>
      {item && (
        <FlatList
          style={styles.flatList}
          data={rebaseArray(item)}
          renderItem={renderRow}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
    padding: 17,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
  },
  ethPriceInWei: {
    fontSize: 14,
    fontWeight: '200',
  },
  usdPriceInCents: {
    fontSize: 18,
    fontWeight: '400',
    marginEnd: 4,
    color: '#3C3C43',
  },
});
