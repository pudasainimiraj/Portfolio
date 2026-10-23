import styled from 'styled-components';

export const FooterWrap = styled.footer`
  border-top: 1px solid ${(props) => props.theme.colors.border};
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

export const ColumnTitle = styled.h4`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;

export const FooterLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  font-size: 15px;
  color: ${(props) => props.theme.colors.textMuted};
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }
`;

export const Bottom = styled.div`
  padding: 20px 0;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  font-size: 13px;
  color: ${(props) => props.theme.colors.textSubtle};
`;
