import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Availability = styled.span`
  display: inline-block;
  width: fit-content;
  margin-bottom: 24px;
  padding: 6px 14px;
  border: 1px solid ${(props) => props.theme.colors.accent1};
  border-radius: 999px;
  color: ${(props) => props.theme.colors.accent1};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 16px;
    font-size: 12px;
  }
`;

export const Headline = styled.p`
  max-width: 800px;
  font-size: 28px;
  line-height: 40px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 16px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 12px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 0 0 80px;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 40px;
  }
`;

export const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 0 32px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 44px;
    font-size: 16px;
  }
`;

export const SecondaryLink = styled(PrimaryLink)`
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);

  &:hover {
    color: #0f1624;
    background: #fff;
    border-color: #fff;
  }
`;
