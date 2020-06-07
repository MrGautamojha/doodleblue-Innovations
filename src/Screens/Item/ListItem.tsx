import React, {useEffect, useState} from 'react';
import {Container, Click, Spacer, Body} from 'rnfui';
const {height, width} = Dimensions.get('screen');
import {
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  View,
  Image,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PopUp from '../../Components/Shared/PopUp/AuthenticationPopup';
import Aicon from 'react-native-vector-icons/AntDesign';
import scaler from '../../Utilities/scaler';
import AppTheme from '../../Config/AppTheme';

export default function ListItem(props: any) {
  const [state, setState] = React.useState([]);
  const [refresh, setRefresh] = React.useState(false);
  const {employee} = useSelector((state: any) => state);
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  const user: any = useSelector((state) => state.item);
  let tempData = Object.values(user);
  console.log('sssssss', tempData);

  useEffect(() => {}, [user]);

  function Item({item, props}: any) {
    console.log('eee', item);
    return (
      <Click>
        <View style={styles.item}>
          <View style={{flexDirection: 'row', padding: 10}}>
            <View>
              <Text>
                {`Merchent Type : `}
                {item.MerchantType}
              </Text>

              <Text>Price : {item.Price}</Text>
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
  const onSearch = (text: any) => {
    console.log('called');
    dispatch({type: 'SEARCH', payload: [text]});
  };

  return (
    <Container>
      <Body>
        <Spacer size={20} />
        <View style={{paddingLeft: scaler(30)}}>
          <Click
            onPress={() => {
              setShowPopup(true);
            }}>
            <Aicon
              name={'pluscircle'}
              size={50}
              color={AppTheme.color.primary}
            />
          </Click>
        </View>

        <Spacer size={20} />
        <FlatList
          data={tempData}
          renderItem={({item}) => <Item item={item} props={props} />}
          // keyExtractor={item => item}
          // numColumns={4}
        />
      </Body>
      <PopUp visible={showPopup} toggleVisibility={setShowPopup} />
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
