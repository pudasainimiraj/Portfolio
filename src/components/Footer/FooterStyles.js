import styled from 'styled-components';

export const FooterWrap = styled.footer`
  background: ${(props) => props.theme.colors.surface};
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  max-width: 900px;
  padding: 48px 0 32px;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 32px 0 24px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textStrong};
`;

export const FooterLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textMuted};
  transition: color 0.2s ease;

  @media (hover: hover) {
    &:hover {
      color: ${(props) => props.theme.colors.textStrong};
    }
  }
`;

export const Bottom = styled.div`
  padding: 0 0 32px;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textSubtle};
`;
