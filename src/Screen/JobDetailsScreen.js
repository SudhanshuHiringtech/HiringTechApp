import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import MainJobCard from '../Component/MainJobCard';

import { useSelector, useDispatch } from 'react-redux';
import { setProfile, selectProfile } from "../Reduxtoolkit/profileSlice";

const JobDetailsScreen = ({ route }) => {
  const jobDetail = route.params.job;

  const profile = useSelector(selectProfile);
  const jobId = jobDetail?._id
  const candidateId = profile?.profile?.user?._id;
  const candidateName = profile?.profile?.user?.name;
  const candidateEmail = profile?.profile?.user?.email; 
  const resume =  profile?.profile?.user?.resume;


  const ApplyforJob = async () => {
    //navigation.navigate('Bottomtab');
console.log(candidateName);
try {
  const response = await fetch('https://hiringtechb-2.onrender.com/apply-job', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      candidateEmail: candidateEmail,
      candidateName : candidateName,
      candidateId : candidateId,
      jobPost : jobId,
      resume : resume,
      coverLetter : "I am excited to apply for the React Native Developer  Engineer position..."
    }),
  });

  const data = await response.json();
  console.log(data);
  if (response.ok) {
    Alert.alert('Apply Successful', `Welcome`);
  } else {
    console.error('Apply failed:', data.error);
  }
} catch (error) {
  console.error('Error during Apply:', error);
}
};



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.jobCardContainer}>
        <MainJobCard job={jobDetail} />
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>About The Job</Text>
        <Text style={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi omnis vitae voluptatibus tempore ipsum quidem ut voluptate sed perspiciatis optio eum corporis animi error, ullam, cupiditate quis laboriosam ex rerum?
          Corporata Fascinators—including Human Resources, Finance, Legal, IT, Supply Chain, Real Estate, Security...
        </Text>

        <Text style={styles.cardTitle}>Responsibilities</Text>
        <Text style={styles.description}>
          - Analyze business requirements from stakeholders...
        </Text>

        <Text style={styles.cardTitle}>Technical Skills</Text>
        <Text style={styles.description}>
          - Proven experience as a UX/UI designer...
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perspiciatis mollitia sint sunt architecto, itaque, facilis eius reprehenderit incidunt totam excepturi distinctio rem perferendis animi recusandae aut sed, dolores obcaecati. 
        </Text>

        <Text style={styles.cardTitle}>Qualifications</Text>
        <Text style={styles.description}>
          - 8+ years experience...
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem quas maiores totam illum fugit quam! Commodi delectus eius porro rem magnam, voluptatibus facilis doloremque voluptate voluptatem harum perferendis iste.
        </Text>

        <View style={styles.applyButtonContainer}>
          <TouchableOpacity style={styles.applyButton} onPress={ApplyforJob}>
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  jobCardContainer: {
    marginBottom: 20,
  },
  applyButtonContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  applyButton: {
    backgroundColor: '#f68b1e',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 12,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 30,
    shadowRadius: 4,
    elevation: 1,
  },
  cardTitle: {
    fontSize: 18,
    color: 'black',
    marginTop: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
});

export default JobDetailsScreen;
