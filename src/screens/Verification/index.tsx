import React, { useRef, MutableRefObject } from 'react';
import { TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import CodeInput from '../../components/CodeInput';

import envelopeImg from '../../assets/envelope.png';
import * as S from './styles';

const Verification: React.FC = () => {
  const navigation = useNavigation();
  const codeRef2 = useRef<TextInput>();
  const codeRef3 = useRef<TextInput>();
  const codeRef4 = useRef<TextInput>();

  function focusNext(ref: MutableRefObject<TextInput | undefined>) {
    ref.current?.focus();
  }

  return (
    <S.Container>
      <S.InnerContainer>
        <StatusBar style="dark" />
        <S.IconContainer>
          <S.Envelope source={envelopeImg} />
        </S.IconContainer>
        <S.Title>
          <S.Title>Verification </S.Title>
          <S.Title bold>Code</S.Title>
        </S.Title>
        <S.Description>
          <S.Description>
            Please type the verification code sent to
{' '}
          </S.Description>
          <S.Description bold>+994 555 66 77</S.Description>
        </S.Description>
        <S.CodeContainer>
          <CodeInput onChangeText={() => focusNext(codeRef2)} autoFocus />
          <CodeInput onChangeText={() => focusNext(codeRef3)} ref={codeRef2} />
          <CodeInput onChangeText={() => focusNext(codeRef4)} ref={codeRef3} />
          <CodeInput
            returnKeyType="send"
            onSubmitEditing={() => navigation.navigate('Map')}
            ref={codeRef4}
          />
        </S.CodeContainer>
      </S.InnerContainer>
    </S.Container>
  );
};

export default Verification;
