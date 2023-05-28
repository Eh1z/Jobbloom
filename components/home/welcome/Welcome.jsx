import React, { useState} from 'react'
import { View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
 } from 'react-native';

import { useRouter } from "expo-router";
import styles from './welcome.style';
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Internship", "Full-time", "Part-time", "Contract"]

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Contract");

  
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Godsent</Text>
        <Text style={styles.welcomeMessage}>Find Your Dream Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
        data={jobTypes}
        renderItem={( {item} ) => {
          <TouchableOpacity style={styles.tab(activeJobType, item)}>
            <Text>
              { item }
            </Text>
          </TouchableOpacity>
        }}/>
      </View>
    </View>
  )
}

export default Welcome