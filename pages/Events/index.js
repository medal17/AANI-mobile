import { View, SafeAreaView,Text, FlatList, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, {useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import NewsCard from '../../components/News/NewsCard'
import Feather from 'react-native-vector-icons/Feather'
import Ionicon from 'react-native-vector-icons/Ionicons'
import TabbedButton from '../../components/button/TabbedButton'
import State from './state'
import TobBar from '../../components/topBar'

const Events = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)  
  const [data,setData] = useState([
        {id:1,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
        {id:2,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
        {id:3,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
        {id:4,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
        {id:5,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
      ])

      const handleSelect =(index)=>{
        setSelectedIndex(index)
        
      }


  return (
    <SafeAreaView style={tw`px-2`}>
      <TobBar
        body={
          <View style={tw`flex-row justify-between px-3`}>
            <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
            <Text style={tw`my-auto font-bold text-base`}>Events</Text>
            <Ionicon name='md-notifications' onPress={()=>navigation.navigate('notifications')} style={tw`text-green-800`} size={30}/>
          </View>
        }
        />
      <View style={tw`flex-row justify-between bg-green-100 my-3 rounded-lg py-2 mx-4 px-2`}> 
        <Ionicon name='ios-search' size={25} style={tw`mr-2`} />
        <TextInput
          placeholder='Search by date'
          style={tw`w-9/12`}
        />
        <Feather name='sliders' style={tw`my-auto`} size={20} color='#365C2A'/>
      </View>
      <View style={tw`flex-row w-full justify-around`}>
        <TabbedButton text='National' 
          index={0} selected={selectedIndex} 
          setSelected={setSelectedIndex}
          pressed={()=>handleSelect(0)}
        />
        <TabbedButton text='State' 
          index={1} selected={selectedIndex} 
          setSelected={setSelectedIndex}
          pressed={()=>handleSelect(1)}  
        />
        <TabbedButton text='Member' 
          index={2} selected={selectedIndex} 
          setSelected={setSelectedIndex}
          pressed={()=>handleSelect(2)}
        />
      </View>
      {/* <View style={tw` flex-row mt-0 `}>
        <FlatList
            data={data}
            keyExtractor={ (item, index) => item.id }
            // contentContainerStyle={styles.container}
            numColumns={2}
            // scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            // contentOffset={1}
            renderItem={
                ({item}) => (
                //   <Pressable style={tw`w-1/2`}>
                  <NewsCard 
                    image={item.picture}
                    head={item.title}
                    body={item.body}
                    navigation={navigation}
                  />
                //   </Pressable>
                  )}/>
        </View> */}
        <State data={data} navigation={navigation} />
    </SafeAreaView>
  )
}

export default Events