import styled from 'styled-components';

export const HeroSection = styled.section`
  padding: 128px 0 64px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 110px 0 48px;
  }
`;

export const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 20px;
  }
`;

export const Title = styled.h1`
  max-width: 900px;
  font-size: 3.75rem;
  line-height: 1.05;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: ${(props) => props.theme.colors.textStrong};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 3rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.25rem;
  }
`;

export const Sub = styled.p`
  max-width: 760px;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 1.5rem;
  line-height: 1.4;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.25rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.125rem;
  }
`;

export const Body = styled.p`
  max-width: 720px;
  font-size: 1.125rem;
  text-align: start;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.textMuted};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.0625rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  width: 100%;
  margin-top: 8px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 12px;
  }
`;

export const Tertiary = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textSubtle};

  a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    color: ${(props) => props.theme.colors.textMuted};
    text-decoration: underline;
    text-underline-offset: 4px;

    @media (hover: hover) {
      &:hover {
        color: ${(props) => props.theme.colors.textStrong};
      }
    }
  }
`;
