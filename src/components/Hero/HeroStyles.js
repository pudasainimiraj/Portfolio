import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-height: 90vh;
  padding: 104px 0 64px;

  @media ${(props) => props.theme.breakpoints.md} {
    min-height: auto;
    padding: 110px 0 48px;
  }
`;

export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 0;

  svg {
    width: min(90vw, 760px);
    height: auto;
    opacity: 0.7;
  }
`;

export const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 20px;
  }
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 0 14px;
  border: 1px solid ${(props) => props.theme.colors.accent1};
  border-radius: 999px;
  color: ${(props) => props.theme.colors.accent1};
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 13px;
  letter-spacing: 0.02em;
`;

export const Title = styled.h1`
  max-width: 900px;
  font-size: 60px;
  line-height: 1.05;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #fff;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 48px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 36px;
  }
`;

export const Sub = styled.p`
  max-width: 760px;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 24px;
  line-height: 1.4;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
  }
`;

export const Body = styled.p`
  max-width: 720px;
  font-size: 18px;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.textMuted};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 17px;
  }
`;

export const Proof = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  width: 100%;
  max-width: 880px;
  margin-top: 8px;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const ProofLink = styled.a`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
  padding: 16px 20px;
  text-align: left;
  background: rgba(20, 28, 46, 0.75);
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 12px;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.25);
  }
`;

export const ProofNumber = styled.span`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 28px;
  line-height: 1.1;
  font-weight: 600;
  color: ${(props) => props.theme.colors.accent1};
`;

export const ProofLabel = styled.span`
  font-size: 14px;
  line-height: 1.45;
  color: ${(props) => props.theme.colors.textMuted};
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

export const Tertiary = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-size: 15px;
  color: ${(props) => props.theme.colors.textSubtle};
  text-decoration: underline;
  text-underline-offset: 4px;

  &:hover {
    color: #fff;
  }
`;
