import styled from 'styled-components';

export const RoleList = styled.ol`
  display: flex;
  flex-direction: column;
`;

export const Role = styled.li`
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 24px 48px;
  padding: 40px 0;
  border-top: 1px solid ${(props) => props.theme.colors.border};

  &:last-child {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 32px 0;
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const RoleTitle = styled.h3`
  font-size: 22px;
  line-height: 1.3;
  font-weight: 700;
  color: #fff;
`;

export const Company = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.accent1};
`;

export const Period = styled.p`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 14px;
  color: ${(props) => props.theme.colors.textSubtle};
`;

export const Bullets = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    position: relative;
    padding-left: 20px;
    font-size: 16px;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.textMuted};

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.65em;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${(props) => props.theme.colors.accent1};
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    li {
      font-size: 17px;
    }
  }
`;

export const StackRow = styled.div`
  margin-top: 16px;
`;

export const SubTitle = styled.h3`
  margin-top: 56px;
  margin-bottom: 8px;
  font-size: 30px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 40px;
    font-size: 24px;
  }
`;
