import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import CustomListItem from '../components/CustomListItem'
import { Avatar } from 'react-native-elements'
import { auth } from '../Firebase'
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons'
const HomeScreen = ({ navigation }) => {
  
  const signOutUser =() => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    })
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
          <Avatar rounded
            source={auth?.currentUser?.photoURL
              ? { Image: auth.currentUser.photoURL }
              : require('../assets/dp.jpg')}
            style={{ width: 30, height: 30 }}
          />
          </TouchableOpacity>
        </View>
      )
      headerRight:() => (
        <View style={{}}>
          <TouchableOpacity>
<AntDesign name="camerao" size={24} color="black" />

         </TouchableOpacity>
        </View>
      )

    })
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})