// Use npm install --save styled-components to be able to use these buttons
import styled from 'styled-components'

export const Button = styled.button`
  color: #000;
  background-color: #fff;
  border: 1px solid;
  border-color: #195d81;
  cursor: pointer;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  height: 45px;
  width: 175px;
  padding: 0 15px;
  border-radius: 7px;
  font-size: 14px;
  &:hover, &:focus {
    background-color: #cceeff;
    border-color: #1c9cd3;
  }
  &:not([disabled]):hover {
    text-decoration: none;
  }
  &:not([disabled]):active {
    outline: 0;
    box-shadow: none;
  }
  &:active {
    background-color: #bbddee;
    border-color: #1c9cd3;
  }
  span {
    font-size: 18px;
  }
  svg {
    width: 18px;
    vertical-align: sub;
    margin-right: 7px;
  }
}
`