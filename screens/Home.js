import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import SearchBar from '../component/SearchBar'

const Home = () => {
    const navigation = useNavigation()

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: true,
            headerSearchBarOptions: {
                placeholder: "Search"
            }
        })
    }, [navigation])

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <SearchBar />
      <Text style={styles.text}>Home</Text>
    </ScrollView>
  )
}

export default Home


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        fontWeight: "bold"
    }
  });