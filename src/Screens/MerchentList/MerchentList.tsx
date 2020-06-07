import React, {Fragment, useEffect} from 'react';
import {Container, Click, Spacer, Body} from 'rnfui';
import {
  View,
  FlatList,
  Text,
  Dimensions,
  StyleSheet,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import scaler from '../../Utilities/scaler';
const {height, width} = Dimensions.get('screen');
import Aicon from 'react-native-vector-icons/AntDesign';
export default function MerchantList(props: any) {
  const user: any = useSelector((state) => state.item);
  const [refresh, setRefresh] = React.useState(false);
  const [total, setTotal] = React.useState(0);
  const [total1, setTotal1] = React.useState(0);
  let Total = 0;
  let Total1 = 0;
  const dispatch = useDispatch();

  useEffect(() => {}, [user]);

  let tempData = Object.values(user);
  console.log('sssssssss', tempData.MerchantType);
  function Item({item, props}: any) {
    let p = item.Price;
    Total = Total + parseInt(p);
    setTotal(Total);

    return (
      <Click>
        <View style={styles.item}>
          {/* <Text>Amazone List</Text> */}
          <View style={{flexDirection: 'row', padding: 10}}>
            <View>
              <Text>
                {`Merchent Type : `}
                {item.MerchantType}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: scaler(150)}}>
                  <Text>Price : {item.Price}</Text>
                </View>
                <View style={{marginLeft: scaler(420)}}>
                  <Click
                    onPress={() => {
                      dispatch({type: 'REMOVE_ITEM', payload: item.id});
                      //   props.navigation.navigate('AppTab');
                      setRefresh(!refresh);
                    }}>
                    <Aicon name={'delete'} size={20} />
                  </Click>
                </View>
              </View>
              <Text>Product Name : {item.ProductName}</Text>
              <Text>Rating : {item.Rating}</Text>
            </View>
          </View>
          <View style={{marginTop: '3%'}}>
            {/* <Text>{item.internlocations}</Text> */}
          </View>
        </View>
      </Click>
    );
  }
  function Item1({item, props}: any) {
    console.log('eee', item);
    let pa = item.Price;
    Total1 = Total1 + parseInt(pa);
    setTotal1(Total1);
    return (
      <View style={styles.item}>
        {/* <Text>Amazone List</Text> */}
        <Spacer />
        <View style={{flexDirection: 'row', padding: 10}}>
          <View>
            <Text>
              {`Merchent Type : `}
              {item.MerchantType}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: scaler(150)}}>
                <Text>Price : {item.Price}</Text>
              </View>
              <View style={{marginLeft: scaler(420)}}>
                <Click
                  onPress={() => {
                    dispatch({type: 'REMOVE_ITEM', payload: item.id});
                    //   props.navigation.navigate('AppTab');
                    setRefresh(!refresh);
                  }}>
                  <Aicon name={'delete'} size={20} />
                </Click>
              </View>
            </View>
            <Text>Product Name : {item.ProductName}</Text>
            <Text>Rating : {item.Rating}</Text>
          </View>
        </View>
        <View style={{marginTop: '3%'}}>
          {/* <Text>{item.internlocations}</Text> */}
        </View>
      </View>
    );
  }
  const amaz = tempData.filter((item: any) => {
    return item.MerchantType == 'Amazon';
  });
  const Flip = tempData.filter((item: any) => {
    return item.MerchantType == 'Flipkart';
  });
  console.log('fffff', Flip);
  return (
    <Container>
      <Body>
        {amaz != '' ? (
          <View>
            <Spacer size={20} />
            <Text style={{fontWeight: 'bold', paddingLeft: scaler(30)}}>
              Amazone List
            </Text>
            <FlatList
              data={amaz}
              renderItem={({item}) => <Item item={item} props={props} />}
            />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 25}}>
                Total={'\u20B9'}
                {total}
              </Text>
            </View>
          </View>
        ) : (
          <Fragment />
        )}
        {Flip != '' ? (
          <View>
            <Spacer size={20} />
            <Text
              style={{
                fontWeight: 'bold',
                paddingLeft: scaler(30),
                fontSize: scaler(30),
              }}>
              Flipkart List
            </Text>
            <Spacer />
            <FlatList
              data={Flip}
              renderItem={({item}) => <Item1 item={item} props={props} />}
            />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 25}}>
                Total={'\u20B9'}
                {total1}
              </Text>
            </View>
          </View>
        ) : (
          <Fragment />
        )}
      </Body>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    padding: 10,
  },
  item: {
    borderColor: '#d1ccc0',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    width: width * 0.92,
    height: 'auto',
    borderWidth: 1,
    elevation: 3,
  },
  imageStyle: {
    borderRadius: 10,
    width: 80,
    height: 75,
    marginBottom: 2,
    justifyContent: 'space-evenly',
  },
  loginContainer: {
    width: 150,
    flexDirection: 'row',
    backgroundColor: '#eb3b5a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#ecf0f1',
    // position:"absolute",
    alignSelf: 'center',
    borderRadius: 15,
  },
  headStyle: {
    marginBottom: 5,
    flexDirection: 'row',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#2991B8',
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 22,
  },
  title3: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 22,
    color: '#2991B8',
  },
});
