import styled from 'styled-components';

import { device } from '../../../utils';

export const StyledButton = styled.button`
  margin: 67px 0 10px 0;
  padding: 8px, 24px, 8px, 24px;

  width: 100%;
  height: 66px;

  border: none;
  border-radius: 10px;

  background-color: ${props => props.bg_color || '#9E9EB2'};

  @media ${device.laptopL} {
    margin: 58px 0 20px 0;
  }
`;

// .attrs({ disabled: true })
