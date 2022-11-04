import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
} from 'react-native';
import propTypes from 'prop-types';

const SafeInputView = ({ children }) => {
  return (
    <KeyboardAvoidingView
      style={styles.avoid}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <Pressable style={styles.avoid} onPress={Keyboard.dismiss}>
        {children}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

SafeInputView.propTypes = {
  children: propTypes.node,
};

const styles = StyleSheet.create({
  avoid: { flex: 1 },
});

export default SafeInputView;
