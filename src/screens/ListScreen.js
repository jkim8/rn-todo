import { StyleSheet, Text, View } from 'react-native';

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>ListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default ListScreen;
