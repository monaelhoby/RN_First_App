import React from 'react'
import { Text, StyleSheet } from 'react-native'

const text = (props) => {

  const {text,title,regular,bold,black,gray,gray2,style,children} = props

const textStyles = [
  title && styles.title,
  regular && styles.regular,
  bold && styles.bold,
  black && styles.black,
  gray && styles.gray,
  gray2 && styles.gray2,
  style 
]

    return (
        <Text style={textStyles} {...props}>{text}</Text>
    )
}

export default text


const styles = StyleSheet.create({
  title : {
    paddingVertical : 35,
    textAlign : 'center',
    justifyContent : 'center'
  },
  regular : {
    fontWeight : "normal"
  },
  bold : {
    fontWeight : "bold"
  },
  black : {
    color : "#000"
  },
  gray : {
    color : "#AAA"
  },
  gray2 : {
    color : "#444"
  }
})
