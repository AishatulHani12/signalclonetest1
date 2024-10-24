import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Button, Input } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { db } from '../Firebase';
import { useState } from 'react';


const AddChatScreen = ({navigation}) => {
    const [input, setInput] = useState("");

useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#b493b5" },
      title: "Add a new Chat",
      headerBackTitle: "Chats",
  });
}, [navigation])

const createChat = async () => {
    await db.collection('chats').add({
        chatName: input,
    }).then(() => {
        navigation.goBack();
    }).catch((error) => alert(error));
}

  return (
    <View style={styles.container}>
    <Input placeholder='Enter a chat name'
    value={input}
    onChangeText={(text) => setInput(text)}
    onSubmitEditing={createChat}
    leftIcon={
      <Icon type='AntDesign' name='wechat' size={24} color="black" />
    }
    />
    <Button disabled={!input} onPress={createChat} title="Create new Chat" />
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({
container :{backgroundColor: "white",
    padding: 30,
    height: "100%",
}

})