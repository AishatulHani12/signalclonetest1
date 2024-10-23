import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import React from 'react'
import { useState, useEffect } from 'react'
import { db } from '../Firebase'


const CustomListItem = ({ id, chatName, enterChat }) => {
    const [chatMessages, setChatMessages] = useState([]);

    useEffect (() => {
        const unsubscribe = db
            .collection("chats")
            .doc(id)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setChatMessages(snapshot.docs.map(doc => doc.data()))
            );

        return unsubscribe;
    }, []);

    useEffect(() => {
        const unsubscribe = db  
            .collection("chats")
            .doc(id)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setChatMessages(snapshot.docs.map(doc => doc.data()))
            );

        return unsubscribe;
    });

    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
            <Avatar
    rounded
    source={chatMessages?.[0]?.photoURL ? { uri: chatMessages[0].photoURL } : require('../assets/dp.jpg')}
    style={{ width: 35, height: 35 }}
/>
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    ABC
                   </ListItem.Subtitle>

            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})