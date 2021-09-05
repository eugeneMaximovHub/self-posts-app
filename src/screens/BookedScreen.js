import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { DATA } from '../data'
import { Post } from '../components/post'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const BookedScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    })
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA.filter((post) => post.booked)}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  )
}

BookedScreen.navigationOptions = {
  headerTitle: 'Избранное',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => console.log('Press photo')}
      />
    </HeaderButtons>
  ),
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
})
