import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

export const Description = styled.p`
  flex: 1;
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.textMuted};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.0625rem;
  }
`;

export const Metric = styled.p`
  padding: 12px 16px;
  border-radius: 10px;
  background: rgba(254, 197, 118, 0.1);
  font-size: 1rem;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.accent1};
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: auto;
`;
