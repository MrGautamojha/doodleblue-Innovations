import React from 'react';
import { Container, Spacer } from 'rnfui';
import AppButton from '../../Components/Shared/AppButton/Appbutton';
import { useForm, Controller } from 'react-hook-form';
import { StyleSheet, View,Image } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import scaler from '../../Utilities/scaler';
// import { Image } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';
import images from '../../Assets';
import AsyncStorage from '@react-native-community/async-storage';
import { updateAppState } from '../../Redux/appAction';
import { useDispatch } from 'react-redux';

export default function Setting(props:any){
    const dispatch=useDispatch();
    const onchange = (args: any) => args[0].nativeEvent.text
    const form=useForm({mode:'onChange',defaultValues:{
        FirstName:'Gautam',
        LastName:'Ojha'
    }});
    const clear =async ()=>{
        await AsyncStorage.removeItem('UserData');
        dispatch(updateAppState('loggedIn',false))
        dispatch(updateAppState('loggedIn',false))
    
      }
    return(
        <Container style={{padding:scaler(12)}}>
            <Spacer  size={100}/>
            <View style={{alignSelf:'center'}}>
            <Image source={images.Profile} />
            </View>
    
        <Spacer size={50}/>
            


            <AppButton  onPress={()=>{clear()}} children={"Logout"}/>

    </Container>
    )

    
}
const Styles =StyleSheet.create({
    inner:{
        backgroundColor:'white',
    }
})