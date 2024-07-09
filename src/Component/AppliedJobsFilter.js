import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  CheckBox
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const AppliedJobsFilter = () => {
  const refRBSheet = useRef();

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => refRBSheet.current.open()}
      >
        <Text style={styles.buttonText}>Open Filter</Text>
      </TouchableOpacity> */}
      <RBSheet
        ref={refRBSheet}
        height={400}
        openDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
      >
        <View style={styles.sheetContent}>
          <Text style={styles.title}>Apply Filters</Text>
          <Text style={styles.subtitle}>Select Status</Text>
          <View style={styles.checkboxContainer}>
            <View style={styles.checkboxRow}>
              <CheckBox value={true} />
              <Text style={styles.checkboxLabel}>Applied</Text>
            </View>
            <View style={styles.checkboxRow}>
              <CheckBox value={false} />
              <Text style={styles.checkboxLabel}>Shortlisted</Text>
            </View>
            <View style={styles.checkboxRow}>
              <CheckBox value={false} />
              <Text style={styles.checkboxLabel}>Open</Text>
            </View>
            <View style={styles.checkboxRow}>
              <CheckBox value={false} />
              <Text style={styles.checkboxLabel}>Resume Downloaded</Text>
            </View>
            <View style={styles.checkboxRow}>
              <CheckBox value={false} />
              <Text style={styles.checkboxLabel}>Closed</Text>
            </View>
            <View style={styles.checkboxRow}>
              <CheckBox value={false} />
              <Text style={styles.checkboxLabel}>Rejected</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.clearButton}>
              <Text style={styles.clearButtonText}>Clear filter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#f0a500',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sheetContent: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  checkboxContainer: {
    flex: 1,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  clearButtonText: {
    color: '#000',
  },
  applyButton: {
    backgroundColor: '#f0a500',
    padding: 10,
    borderRadius: 5,
  },
  applyButtonText: {
    color: '#fff',
  },
});

export default AppliedJobsFilter;
