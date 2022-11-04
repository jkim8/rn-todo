import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Input, {
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';

const SignInScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.avoid}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <Pressable style={styles.avoid} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/main.png')}
            style={styles.image}
            resizeMode={'cover'}
          />
          <Input
            title={'emai'}
            placeholder={'your@email.com'}
            keyboardType={KeyboardTypes.EMAIL}
            returnKeyType={ReturnKeyTypes.NEXT}
          />
          <Input
            title={'password'}
            returnKeyType={ReturnKeyTypes.DONE}
            secureTextEntry
          />
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  avoid: { flex: 1 },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SignInScreen;
