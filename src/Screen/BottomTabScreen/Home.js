
import { useNavigation } from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";
import JobCard from "../../Component/JobCard";
import HeaderWithLogo from "../../Component/HeaderWithLogo";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const navigation = useNavigation();
  const [jobsData, setJobsData] = useState();
 const [profile, setProfile] = useState();


  async function fetchJobs() {
    try {
      const response = await fetch('https://hiringtechb-2.onrender.com/getalljobs');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const pro = await AsyncStorage.getItem('Profile');
      const profile = JSON.parse(pro);
      setProfile(profile);
      console.log("DF", profile.user.email)
      const data = await response.json();
     // console.log('Data received:', data);
      setJobsData(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  useEffect(() => {
    fetchJobs()
  },[])


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{height:'4%'}}>
          <HeaderWithLogo
          imageSource={require("../../Assets/dashboard/Logo.png")} 
          image = {false}
           // Pass your header text dynamically
      />
        </View>
        <View style={styles.welcomeContainer}>
          <ImageBackground
            source={require("../../Assets/dashboard/welcome.png")}
            style={styles.welcomeBackground}
            resizeMode="cover"
          >
            <Text style={styles.dateText}>Wednesday, 5 June 2024</Text>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.nameText}>{profile?.user?.name}</Text>
            <Text style={styles.subtitleText}>
              Ready to Land Your Dream Career? Let's Help!
            </Text>
          </ImageBackground>
        </View>

        <View style={styles.talentContainer}>
          <Text style={styles.sectionTitle}>Talent Talks</Text>

          <View style={styles.cardRow}>
            <ImageBackground
              source={require("../../Assets/dashboard/card1.png")}
              style={styles.card}
              resizeMode="contain"
            >
              <View style={styles.cardContent}>
                <View style={styles.cardTextContainer}>
                  <Image
                    source={require("../../Assets/dashboard/cardImage1.png")}
                    style={styles.cardImage}
                  />
                  <View style={styles.cardText}>
                    <Text style={styles.cardNumber}>18</Text>
                    <Text style={styles.cardLabel}>Employers</Text>
                    <Text style={styles.cardLabel}>Interested in You</Text>
                  </View>
                </View>
                <Image
                  source={require("../../Assets/dashboard/cardarrow1.png")}
                  style={styles.cardArrow}
                />
              </View>
            </ImageBackground>
            <ImageBackground
              source={require("../../Assets/dashboard/card2.png")}
              style={styles.card}
              resizeMode="contain"
            >
              <View style={styles.cardContent}>
                <View style={styles.cardTextContainer}>
                  <Image
                    source={require("../../Assets/dashboard/cardImage1.png")}
                    style={styles.cardImage}
                  />
                  <View style={styles.cardText}>
                    <Text style={styles.cardNumber}>18</Text>
                    <Text style={styles.cardLabel}>Pending</Text>
                    <Text style={styles.cardLabel}>applications</Text>
                  </View>
                </View>
                <Image
                  source={require("../../Assets/dashboard/cardarrow2.png")}
                  style={styles.cardArrow}
                />
              </View>
            </ImageBackground>
          </View>

          <View style={styles.cardRow}>
            <ImageBackground
              source={require("../../Assets/dashboard/card3.png")}
              style={styles.card}
              resizeMode="contain"
            >
              <View style={styles.cardContent}>
                <View style={styles.cardTextContainer}>
                  <Image
                    source={require("../../Assets/dashboard/cardImage1.png")}
                    style={styles.cardImage}
                  />
                  <View style={styles.cardText}>
                    <Text style={styles.cardNumber}>18</Text>
                    <Text style={styles.cardLabel}>Shortlisted</Text>
                    <Text style={styles.cardLabel}>applications</Text>
                  </View>
                </View>
                <Image
                  source={require("../../Assets/dashboard/cardarrow3.png")}
                  style={styles.cardArrow}
                />
              </View>
            </ImageBackground>
            <ImageBackground
              source={require("../../Assets/dashboard/card4.png")}
              style={styles.card}
              resizeMode="contain"
            >
              <View style={styles.cardContent}>
                <View style={styles.cardTextContainer}>
                  <Image
                    source={require("../../Assets/dashboard/cardImage1.png")}
                    style={styles.cardImage}
                  />
                  <View style={styles.cardText}>
                    <Text style={styles.cardNumber}>18</Text>
                    <Text style={styles.cardLabel}>applications</Text>
                    <Text style={styles.cardLabel}>submitted</Text>
                  </View>
                </View>
                <Image
                  source={require("../../Assets/dashboard/cardarrow4.png")}
                  style={styles.cardArrow}
                />
              </View>
            </ImageBackground>
          </View>
        </View>

         <View style={styles.featuredJobsContainer}>
          <Text style={styles.sectionTitle}>Featured Jobs</Text>
          <FlatList
        data={jobsData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JobCard
            data={item}
            cardType="featured" // or "recent"
            cardStyles={styles.jobCard} // Customize width and height here
            onPress={() => handleCardPress(item.id)}
          />
        )}
      />
        </View>

         {/* Recent Jobs Section */}
        <View style={styles.recentJobsContainer}>
          <Text style={styles.sectionTitle}>Recent Jobs</Text>
            <FlatList
               data={jobsData}
               keyExtractor={(item) => item.id}
               scrollEnabled={false}
               renderItem={({ item }) => (
          <JobCard
            data={item}
            cardType="recent" // or "recent"
            cardStyles={styles.jobCard1} // Customize width and height here
            onPress={() => handleCardPress(item.id)}
          />
        )}
      />

        </View> 
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 57,
    height: 25,
    resizeMode: "stretch",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  bellIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  profileButton: {
    marginLeft: 10,
  },
  profileImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  welcomeContainer: {
    width: "100%",
    height: 172,
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 20,
  },
  welcomeBackground: {
    width: "100%",
    height: 172,
    borderRadius: 15,
  },
  dateText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#E7E7E7",
    marginLeft: 16,
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFF7F7",
    marginLeft: 16,
    marginTop: 20,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFF7F7",
    marginLeft: 16,
    marginTop: 4,
  },
  subtitleText: {
    fontSize: 11,
    fontWeight: "400",
    color: "#E7E7E7",
    marginTop: 10,
    marginLeft: 16,
  },
  talentContainer: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#175574",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  card: {
    width: 170,
    height: 85,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
  cardTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  cardImage: {
    width: 34,
    height: 34,
  },
  cardText: {
    marginLeft: 10,
  },
  cardNumber: {
    fontSize: 22,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  cardLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  cardArrow: {
    width: 16,
    height: 16,
    marginTop: 10,
  },
  featuredJobsContainer: {
    width:350,
    height:230,
  },
  recentJobsContainer:{
  },
  horizontalFlatList: {
    paddingVertical: 16,
  },
  verticalFlatList: {
    paddingBottom: 16,
  },
  jobCard: {
    marginRight:10,
  },
  jobCard1: {
    width:350
  },
});

export default Home;
