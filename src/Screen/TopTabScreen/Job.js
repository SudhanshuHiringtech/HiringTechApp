// JobListScreen.js
import React, {useState, useEffect} from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MainJobCard from '../../Component/MainJobCard';

// const jobs = [
//   {
//     id: '1',
//     title: 'UX/UI Designer Analyst',
//     location: 'Gurgaon, Haryana, India',
//     skills: ['HTML', 'JavaScript', 'React.js', '+5 more'],
//     salary: '₹ 6 LPA - 12 LPA',
//     startDate: 'Immediate',
//     experience: '1 - 2 years',
//     openings: 2,
//   },
//   {
//     id: '2',
//     title: 'React Native Developer ',
//     location: 'Indore, Madhya Pradesh India',
//     skills: ['HTML', 'JavaScript', 'React.js', '+5 more'],
//     salary: '₹ 6 LPA - 12 LPA',
//     startDate: 'Immediate',
//     experience: '1 - 2 years',
//     openings: 2,
//   },
//   // Add more job data here...
// ];

const Job = () => {
  const [jobs, setJobs] = useState();

 
async function fetchJobs() {
  try {
    const response = await fetch('http://192.168.29.188:5000/jobs/fulltime');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('fulltime jobs:', data);
    setJobs(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

useEffect(() => {
  fetchJobs()
  console.log("Geoogle")
},[])



  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MainJobCard job={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
});

export default Job;
