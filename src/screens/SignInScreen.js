import { useRef, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Input, {
  IconNames,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';
import SafeInputView from '../components/SafeInputView';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  const onSubmit = () => {
    console.log('onSubmit');
  };

  return (
    <SafeInputView>
      <View style={styles.container}>
        <Image
          source={require('../../assets/main.png')}
          style={styles.image}
          resizeMode={'cover'}
        />
        <Input
          onChangeText={(text) => setEmail(text.trim())}
          value={email}
          title={'emai'}
          placeholder={'your@email.com'}
          keyboardType={KeyboardTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
          iconName={IconNames.EMAIL}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          ref={passwordRef}
          onChangeText={(text) => setPassword(text.trim())}
          value={password}
          title={'password'}
          returnKeyType={ReturnKeyTypes.DONE}
          secureTextEntry
          iconName={IconNames.PASSWORD}
          onSubmitEditing={onSubmit}
        />
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
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
