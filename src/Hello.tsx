import { styled } from '@linaria/react';

import React, { FC } from 'react';

const RedText = styled.div<{ baseSize: number }>`
color: red;
font-size: ${(props) => props.baseSize * 2};
`

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  return <div>
    <RedText baseSize={10}>Hello React</RedText>
    <RedText baseSize={20}>Hello React</RedText>
  </div>
}
