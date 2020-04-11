import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Image, ScrollView, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import {Block, Text, Card} from '../shared'
import {categories} from "../constants/data"
import {colors} from '../constants/themes'


const { width } = Dimensions.get("window");

const Home = () => {

    const [active, setActive ]= useState("Products");
    const [Allcategories, setCategories] = useState([]);

    useEffect(() => (
        setCategories(categories)
    ),[])

    const tabs = ['Products', 'Inspirations', 'Shop']

    const handleTab= tab => {
        const filtered = categories.filter(
          category => category.tags.includes(tab.toLowerCase())
        )
        setActive(tab);
        setCategories(filtered)
      }

    const renderTab = tab => {

        const isActive = active === tab;
    
        return (
          <TouchableOpacity
            key={`tab-${tab}`}
            onPress={() => handleTab(tab)}
            style={[styles.tab, isActive ? styles.active : null]}
          >
            <Text gray={!isActive} text={tab} />
          </TouchableOpacity>
        );
      }
    
    return (
        <Block>
            <ImageBackground source={require(`../assets/welcome4.jpg`)} style={styles.cover}>
                <Text regular gray2 text="Home" style={styles.text}/>
            </ImageBackground>
            <Block style={styles.tabs}>
               {tabs.map(tab => renderTab(tab))}
            </Block>
            <ScrollView showsVerticalScrollIndicator={false}>
             <Block style={styles.categories}>
                {Allcategories.map(category => (
                   <TouchableOpacity key= {category.id} activeOpacity={.7}>
                      <Card style={styles.category}>
                        <Image source={category.image} style={styles.image}/>
                      </Card>
                    </TouchableOpacity>
                ))}
              </Block>
            </ScrollView>
        </Block>
    )
}

export default Home

const styles = StyleSheet.create({
    cover : {
        height:150,
        resizeMode: "cover",
        justifyContent: "center",
        alignContent:"center"
    },
    text :{
        padding :20,
        backgroundColor : 'rgba(255,255,255,.3)',
        textAlign:'center'
    },
    tabs: {
        borderBottomColor: colors.gray,
        marginVertical: 25,
        marginHorizontal: 12,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    tab: {
      marginRight: 5,
      paddingBottom: 3,
      marginVertical: 5,
    },
    active: {
      borderBottomColor: colors.secondary,
      borderBottomWidth: 3
    },
    categories: {
      flex:0,
      flexWrap: "wrap",
      flexDirection:"row",
      justifyContent:'space-between',
    },
    category: {
      marginVertical:10,
      width : (width - 120) / 2,
      minWidth: (width - 25 * 2.4 - 16) / 2,
      maxWidth: (width - 25 * 2.4 - 16) / 2,
    },
    image : {
      width : width / 3,
      height:120,
    }
})
