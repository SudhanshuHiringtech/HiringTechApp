// JobCard.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const MainJobCard = ({ job }) => {
  const [timeElapsed, setTimeElapsed] = useState('');
  const date = new Date(job.postedDate).toISOString().split('T')[0];
  const startDate = date.split('-').reverse().join('-');
   
  const navigation = useNavigation() 

  const nskill = job.skillsRequired.length;
  console.log(nskill);
  const cnt = 0;

  useEffect(() => {
    const calculateTimeElapsed = () => {
      const jobTime = new Date(job.postedDate);
      const now = new Date();
      const timeDifference = now - jobTime;

      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeElapsed(`${hours}h and ${minutes} min ago`);
    };

    calculateTimeElapsed();
    const interval = setInterval(calculateTimeElapsed, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);


  return (
    <View style={styles.card}>
    <View style={{flexDirection: 'row',}}>
     <View style={{width:'20%', justifyContent:'center', alignItems:'center'}}>
        <Image source={require("../Assets/dashboard/Mask.png")} style={styles.avatar} />
     </View>
     <View>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.location}>{job.location}</Text>
      </View>
      <View>
        <Text>hi</Text>
     </View>
      </View>
      <View style = {{flexDirection: 'row'}}>
        <View style={{marginRight:10}}>
            <Text>icon</Text>
        </View>
      <View>
      <Text style={styles.matchingSkills}>8 of 10 skills matching - you may be a good fit</Text>
      </View>
      </View>
      <View style={styles.skillsContainer}>
      {job.skillsRequired.map((skill, index) => {
  if (index < 5) {
    // Perform your logic here
    return (
      <View key={index} style={styles.skill}>
        {/* <Icon name="check" size={20} color="#4caf50" /> */}
        <Text>{skill}</Text>
      </View>
    );
  } else {
    return (
      <View key={index} style={styles.skill}>
      {/* <Icon name="check" size={20} color="#4caf50" /> */}
      <Text>+5 more</Text>
    </View>
    );
  }
})}
      </View> 
      <View style={styles.detailsContainer}>
        <View>
        <Text style={styles.detailsText}>Job offer</Text>
        <Text style={styles.detailsText}>{job.salary}</Text>
        </View>
        <View>
        <Text style={styles.detailsText}>Start Date</Text>
        <Text style={styles.detailsText}>{startDate}</Text>
        </View>
        <View>
        <Text style={styles.detailsText}>Experience</Text>
        <Text style={styles.detailsText}>{job.minExperienceRequired}-{job.maxExperienceRequired}</Text>
        </View>
        <View>
        <Text style={styles.detailsText}>Openings</Text>
        <Text style={styles.detailsText}>{job.numberOfOpening}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View>
            <Text style={styles.time}>job posted</Text>
            <Text style={styles.time}>{timeElapsed}</Text>
        </View>
        <TouchableOpacity style={styles.viewButton} onPress={()=>{navigation.navigate('JobDetails', {job:job})}}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 20,
    marginBottom : 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    color:'black',
    fontWeight: 'bold',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  location: {
    fontSize: 14,
    color: 'black',
  },
  matchingSkills: {
    fontSize: 14,
    color: 'black',
    marginVertical: 8,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skill: {
    backgroundColor: 'transparent',
    padding: 12,
    borderWidth: 1,
    borderColor : '#f68b1e',
   // height:40,
   margin :3,
    borderRadius: 20,
  },
  detailsContainer: {
    marginVertical: 8,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  detailsText: {
    fontSize: 12,
    color: 'black',
    fontWeight:'800'
  },
  time:{
    fontSize: 12,
    color: 'black',
    fontWeight:'300'
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewButton: {
    backgroundColor: 'transparent',
    padding: 12,
    borderWidth: 1,
    borderColor : '#f68b1e',
    height:40,
    borderRadius: 20,
  },
  applyButton: {
    backgroundColor: '#f68b1e',
    padding: 12,
    justifyContent:'center',
    alignItems:'center',
    width:100,
    height:40,
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
    fontSize:12,
  },
});

export default MainJobCard;
