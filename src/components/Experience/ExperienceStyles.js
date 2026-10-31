import styled from 'styled-components';

export const RoleList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 56px;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 40px;
  }
`;

export const Role = styled.li`
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 24px 48px;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const RoleTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 1.3;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textStrong};
`;

export const Company = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.accent1};
`;

export const Period = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textSubtle};
`;

export const Bullets = styled.ul`
  max-width: 65ch;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    position: relative;
    padding-left: 20px;
    font-size: 1rem;
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
      font-size: 1.0625rem;
    }
  }
`;

export const StackRow = styled.div`
  margin-top: 16px;
`;

export const SubTitle = styled.h3`
  margin: 88px 0 32px;
  font-size: 2.25rem;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.textStrong};

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 80px 0 24px;
    font-size: 1.75rem;
  }
`;
