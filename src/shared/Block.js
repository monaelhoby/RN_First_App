import React from 'react'
import { View, StyleSheet } from 'react-native'

const Block = props => {
    return (
        <View style={styles.view} {...props}>
            {props.children}
        </View>
    )
}

export default Block

const styles = StyleSheet.create({
    view : {
        flex : 1,
        padding : 20,
        justifyContent :'center'
    }
})
