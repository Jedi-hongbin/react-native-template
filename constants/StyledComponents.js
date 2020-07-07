import styled from 'styled-components';

const FlexView = styled.View`
  flex-direction: ${props => props.direction || 'column'};
  flex-wrap: ${props => props.nowrap || 'wrap'};
  justify-content: ${props => props.content || "center"};
  align-items: ${props => props.items || "center"};
  padding: 0 10px;
`
export { FlexView }