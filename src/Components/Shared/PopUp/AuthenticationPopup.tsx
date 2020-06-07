import React, {useState, useEffect, useCallback} from 'react';
import {
  Modal,
  IconButton,
  Surface,
  Avatar,
  HelperText,
  TextInput,
} from 'react-native-paper';
import {
  Padding,
  Spacer,
  Body,
  useActiveTheme,
  VisibilityToggle,
  Center,
  Row,
  Click,
} from 'rnfui';
import {Controller, useForm} from 'react-hook-form';
import {
  Dimensions,
  View,
  Keyboard,
  Alert,
  Button,
  StyleSheet,
  Text,
} from 'react-native';
import scaler from '../../../Utilities/scaler';

import AsyncStorage from '@react-native-community/async-storage';
// import {debounce} from 'lodash';
import {useSelector, useDispatch} from 'react-redux';
import AppRow from '../AppRow/AppRow';
import AppText from '../AppText/AppText';
import AppTheme from '../../../Config/AppTheme';
import AppButton from '../AppButton/Appbutton';
// import {AppStateType} from '../../../../Types/AppStateType';
import RNPickerSelect from 'react-native-picker-select';

const {height, width} = Dimensions.get('screen');

function AuthenticationPopup({
  visible,
  toggleVisibility,
  toggleChangePassword,
  props,
}: any) {
  const dispatch = useDispatch();
  const [showVerificationForm, setShowVerificationForm] = useState(true);
  const [MerchantType, setMerchantType] = useState('');
  const doLogin = () => {
    let body = form.getValues();
    let id = new Date().valueOf();
    body['id'] = id;
    body['MerchantType'] = MerchantType;
    console.log('bodyyyyyyy', body);

    dispatch({type: 'ADD_ITEM', payload: [body.id, body]});
    // props.navigation.goBack();
    toggleVisibility(false);
  };

  const onchange = (args: any) => args[0].nativeEvent.text;
  const Theme = useActiveTheme();
  const form = useForm({mode: 'onChange'});
  const placeholder = {
    label: 'Select a MerchantType',
    value: null,
    color: '#9EA0A4',
  };
  return (
    <Modal
      visible={visible}
      onDismiss={() => {
        toggleVisibility(false);
      }}
      contentContainerStyle={{alignItems: 'center'}}>
      <Surface
        style={{
          width: width - scaler(80),
          borderRadius: scaler(40),
          overflow: 'hidden',
          elevation: 5,
        }}>
        <VisibilityToggle visible={showVerificationForm}>
          <Body style={{borderRadius: scaler(20)}}>
            <IconButton
              icon={'close'}
              style={{
                // alignSelf: language === 'AR' ? 'flex-start' : 'flex-end',
                // right: language === 'AR' ? scaler(-25) : scaler(25),
                top: scaler(25),
              }}
              onPress={() => toggleVisibility(false)}></IconButton>

            <Padding size={scaler(50)}>
              <AppRow flex={0}>
                <AppText type={'heading'} style={{fontSize: scaler(26)}}>
                  Product Details
                </AppText>
              </AppRow>
            </Padding>
            <Padding>
              <View>
                <Controller
                  as={
                    <TextInput
                      mode={'outlined'}
                      style={Styles.inner}
                      label={'Product  Name'}
                      placeholder={'Product Name'}
                      error={form.errors.ProductName ? true : false}
                    />
                  }
                  control={form.control}
                  onChange={onchange}
                  name={'ProductName'}
                  rules={{
                    required: {
                      value: true,
                      message: 'Product Name is Required',
                    },
                  }}
                />
                {form.errors.ProductName && (
                  <HelperText style={{color: 'red'}}>
                    {(form.errors.ProductName || {message: ''}).message}
                  </HelperText>
                )}
              </View>
              <Spacer size={20} />
              <View>
                <Controller
                  as={
                    <TextInput
                      mode={'outlined'}
                      style={Styles.inner}
                      label={'Rating'}
                      placeholder={'Rating'}
                      error={form.errors.LastName ? true : false}
                    />
                  }
                  control={form.control}
                  onChange={onchange}
                  name={'Rating'}
                  rules={{
                    required: {value: true, message: 'Rating is Required'},
                  }}
                />
                {form.errors.Rating && (
                  <HelperText style={{color: 'red'}}>
                    {(form.errors.Rating || {message: ''}).message}
                  </HelperText>
                )}
              </View>
              <Spacer size={20} />
              <View>
                <Controller
                  as={
                    <TextInput
                      mode={'outlined'}
                      style={Styles.inner}
                      keyboardType="number-pad"
                      label={'Price'}
                      placeholder={'Price'}
                      error={form.errors.Price ? true : false}
                    />
                  }
                  control={form.control}
                  onChange={onchange}
                  name={'Price'}
                  rules={{
                    required: {
                      value: true,
                      message: 'Price Number is Required',
                    },
                  }}
                />
                {form.errors.Price && (
                  <HelperText style={{color: 'red'}}>
                    {(form.errors.Price || {message: ''}).message}
                  </HelperText>
                )}
              </View>
              <Spacer size={20} />
              <View>
                <Text>Choose Merchant Type:</Text>

                <RNPickerSelect
                  // placeholder={'Select Merchant'}
                  // placeholder='ssss'
                  onValueChange={(value) => setMerchantType(value)}
                  placeholder={placeholder}
                  style={pickerSelectStyles}
                  items={[
                    {label: 'Flipkart', value: 'Flipkart'},
                    {label: 'Amazon', value: 'Amazon'},
                  ]}
                />
              </View>
              <Spacer size={20} />
              <AppButton
                children={'SUBMIT'}
                onPress={form.handleSubmit(() => {
                  doLogin();
                })}
              />
            </Padding>
          </Body>
        </VisibilityToggle>
      </Surface>
    </Modal>
  );
}

export default AuthenticationPopup;
const Styles = StyleSheet.create({
  inner: {
    backgroundColor: 'white',
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
