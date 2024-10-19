import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import React from 'react'

const CustomListItem = ({id, chatName, enterChat}) => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={require('../assets/logo.jpeg')}
                style={{ width: 35, height: 35 }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    Youtube Chat
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    This is a test subtitle.
                   </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})