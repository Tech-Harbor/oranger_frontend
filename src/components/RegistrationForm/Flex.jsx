import styled from 'styled-components';

const Flex = props => {
  return <StyledFlex {...props} />;
};

export default Flex;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
`;
