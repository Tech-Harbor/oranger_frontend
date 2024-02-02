import styled from 'styled-components';

import { device } from '../../utils';

/**
 * Helper for using display: flex;
 */
const StyledFlexDiv = styled.div`
  margin: 0 auto;

  display: flex;
  position: ${props => props.$position || 'static'};
  flex-direction: ${props => props.$direction || 'column'};
  align-items: ${props => props.$align || 'center'};
  justify-content: ${props => props.$justify || 'center'};
`;

/**
 * Styles for RegistrationForm
 */
export const FormWrapper = styled(StyledFlexDiv)`
  padding: 0 16px;

  width: 360px;

  background-color: #fff;

  @media ${device.laptopL} {
    margin-top: 27px;
    margin-bottom: 23px;
    padding: 0 25px;

    width: 708px;

    border-radius: 10px;
  }
`;

/**
 * Styles for Title component (h1)
 */
export const StyledTitle = styled.h1`
  position: relative; // for underlined Title

  margin-top: 7px;
  padding: 6.5px 34px;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  /* Underlined Title */
  &::after {
    position: absolute;

    content: '';
    bottom: 0;
    left: 0;

    width: 100%;
    height: 2px;

    border-radius: 2px;
    background-color: #000;
  }

  /* Styles for Laptop 1440px */
  @media ${device.laptopL} {
    margin-top: 26px;
    margin-bottom: 36px;
    padding: 14px 92px;

    font-size: 24px;
    line-height: 29.05px;
  }
`;

export { StyledFlexDiv };
