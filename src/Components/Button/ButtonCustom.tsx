import * as React from 'react';
import ButtonUnstyled from "@material-ui/core/Button"
import ButtonProps from "@material-ui/styled-engine-sc";
import styled from "@emotion/styled";

const CustomButtonRoot = styled('span')(`
  background-color: #89d115;
  padding: 15px 20px;
  border-radius: 10px;
  color: white;
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #FFDF84;
  }

  &:active {
    background-color: #FFD387;
  }
`);

export function CustomButton(props: ButtonProps) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}