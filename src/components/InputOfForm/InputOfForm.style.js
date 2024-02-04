import styled from 'styled-components';
import { device } from '../../utils/index.js';

const text = `
  font-family: 'Inter', sans-serif;
  font-weight: 400;
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Label = styled.label`
  ${text};
  font-size: 14px;
  line-height: 16px;
  @media ${device.laptop} {
    & {
      font-size: 16px;
      line-height: 19px;
    }
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 43px;
  background-color: #dadada;
  border: none;
  border-radius: 10px;
  color: #000;
  ${text};
  font-size: 16px;
  line-height: 19px;
  margin-top: 7px;
  @media ${device.laptop} {
    & {
      height: 51px;
      font-size: 20px;
      line-height: 24px;
    }
  }
  @media ${device.laptopL} {
    & {
      height: 66px;
      font-size: 24px;
      line-height: 29px;
    }
  }
`;

export const Icon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 47px;
  right: 24px;
  z-index: 1;
  @media ${device.mobileS} {
    & {
      top: 33px;
    }
  }
  @media ${device.laptop} {
    & {
      top: 40px;
    }
  }
  @media ${device.laptopL} {
    & {
      top: 48px;
    }
  }
`;
