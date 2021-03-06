import styled from 'styled-components/native';

import { color } from '../../style-vars';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border: 1px solid ${color.gray};
  border-radius: ${55 / 2}px;
`;

export const Input = styled.TextInput.attrs({ keyboardType: 'numeric' })`
  text-align: center;
  width: 55px;
  height: 55px;
  font-size: 18px;
  color: ${color.primary};
`;
