import { Text, View, StyleSheet, TextInput } from 'react-native';
import propTypes from 'prop-types';

export const KeyboardTypes = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
};

export const ReturnKeyTypes = {
  DONE: 'done',
  NEXT: 'next',
};

const Input = ({
  title,
  placeholder,
  // keyboardType,
  // returnKeyType,
  // secureTextEntry,
  value,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        {...props} //제일 위에 적어야 함 아래쪽에서 변경이 일어나지 않도록
        value={value}
        style={styles.input}
        placeholder={placeholder ?? title}
        placeholderTextColor={'#a3a3a3'}
        autoCapitalize={'none'}
        autoCorrect={false}
        // keyboardType={keyboardType}
        // returnKeyType={returnKeyType}
        // secureTextEntry={secureTextEntry}
        keyboardAppearance={'light'}
      />
    </View>
  );
};

Input.defaultProps = {
  returnKeyType: ReturnKeyTypes.DONE,
};

Input.propTypes = {
  title: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.string,
  // keyboardType: propTypes.oneOf(Object.values(KeyboardTypes)),
  // returnKeyType: propTypes.oneOf(Object.values(ReturnKeyTypes)),
  // secureTextEntry: propTypes.bool,
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
