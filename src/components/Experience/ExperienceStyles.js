import styled from 'styled-components';

export const RoleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 0 48px;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 28px;
    margin-bottom: 32px;
  }
`;

export const Role = styled.li`
  border-left: 2px solid rgba(255, 255, 255, 0.15);
  padding-left: 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 16px;
  }
`;

export const RoleHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px 24px;
  margin-bottom: 12px;
`;

export const RoleTitle = styled.h3`
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  color: #fff;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 26px;
  }
`;

export const RoleCompany = styled.span`
  color: ${(props) => props.theme.colors.accent1};
  font-weight: 500;
`;

export const RolePeriod = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const Bullets = styled.ul`
  max-width: 960px;

  li {
    list-style: disc;
    margin-left: 20px;
    font-size: 18px;
    line-height: 30px;
    color: rgba(255, 255, 255, 0.75);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    li {
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    li {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

export const StackLine = styled.p`
  margin-top: 12px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);
`;

export const SubTitle = styled.h3`
  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const EduList = styled.ul`
  margin-bottom: 48px;

  li {
    font-size: 18px;
    line-height: 30px;
    color: rgba(255, 255, 255, 0.75);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 32px;

    li {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;
