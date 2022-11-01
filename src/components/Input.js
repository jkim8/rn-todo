import { Text, View, StyleSheet, TextInput } from 'react-native';
import propTypes from 'prop-types';

const Input = ({ title, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder ?? title}
        placeholderTextColor={'#a3a3a3'}
      />
    </View>
  );
};

Input.propTypes = {
  title: propTypes.string,
  placeholder: propTypes.string,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: { marginBottom: 4 },
  input: {
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 8,
    height: 42,
  },
});

export default Input;
