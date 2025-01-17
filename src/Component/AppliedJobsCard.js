import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const AppliedJobsCard = ({ job }) => {
  return (
    <View style={styles.card}>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <View style={styles.cardHeader}>
      <View style={{width:'20%', justifyContent:'center', alignItems:'center'}}>
        <Image source={require("../Assets/dashboard/Mask.png")} style={styles.avatar} />
     </View>
        <View style={styles.cardTitle}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <Text style={styles.jobSubtitle}>{job.company}</Text>
          <Text style={styles.jobSubtitle}>{job.location}</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.applicants}>Opening : {job.numberOfOpening}</Text>
        <Text style={styles.appliedDate}>Applied on</Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}> 
      <TouchableOpacity style={styles.reviewButton}>
        <Text style={styles.reviewText}>Review application</Text>
      </TouchableOpacity>
      <View>
      <Text style={styles.missingSkills}>Missing skills</Text>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
   // alignItems: 'center',
  },
  cardTitle: {
    //flexDirection: 'column',
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  jobSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  shareButton: {
    padding: 8,
  },
  shareText: {
    color: '#007bff',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  applicants: {
    fontSize: 14,
  },
  appliedDate: {
    fontSize: 14,
  },
  reviewButton: {
    paddingVertical: 8,
  },
  reviewText: {
    color: '#007bff',
  },
  missingSkills: {
    color: 'orange',
    fontSize: 15,
    marginTop: 8,
  },
});

export default AppliedJobsCard;
