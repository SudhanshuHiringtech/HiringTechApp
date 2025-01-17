// JobListScreen.js
import React, {useState, useEffect, useRef} from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MainJobCard from '../../Component/MainJobCard';
import JobFilterBottomSheet from '../../Component/JobFilterBottomSheet';



const Job = () => {
  const [filterData, setFilterData] = useState({
    isJobOfferAttached: false,
    minStipend: 0,
    maxDuration: 6,
    jobMode: null,
    experience: null,
    location: '',
    jobTitle: '',
    company: '',
    skillsList: [],
  });


  const handleApply = (data) => {
    console.log('Filter Data:', data);
    // Call your API or handle the filter data as needed
  };

  const handleClearFilter = () => {
    setFilterData({
      isJobOfferAttached: false,
      minStipend: 0,
      maxDuration: 6,
      jobMode: null,
      experience: null,
      location: '',
      jobTitle: '',
      company: '',
      skillsList: [],
    });
  };


  const [jobs, setJobs] = useState();
  const refRBSheet = useRef();

 
async function fetchJobs() {
  try {
    const response = await fetch('https://hiringtechb-2.onrender.com/jobs/fulltime');
    
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
       <TouchableOpacity onPress={() => refRBSheet.current.open()}>
        <Text style={styles.openButton}>Open Filters</Text>
      </TouchableOpacity>
      <JobFilterBottomSheet
        ref={refRBSheet}
        filterData={filterData}
        setFilterData={setFilterData}
        onApply={handleApply}
        onClear={handleClearFilter}
        call = {'jobs'}
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
