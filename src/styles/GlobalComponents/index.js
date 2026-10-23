import styled from 'styled-components';

// Shared layout primitives. Sections share one vertical rhythm, one container
// width per content type, one heading pattern and one card anatomy.

export const Section = styled.section`
  padding: 64px 0;
  background: ${({ band, theme }) => (band ? theme.colors.surface : 'transparent')};

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 48px 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${({ narrow }) => (narrow ? '896px' : '1152px')};
  margin: 0 auto;
  padding: 0 32px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px;
  }
`;

export const SectionHeader = styled.div`
  max-width: 720px;
  margin: 0 auto 40px;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 32px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 48px;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
  margin-bottom: 16px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 36px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 30px;
    margin-bottom: 12px;
  }
`;

export const SectionText = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.textMuted};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 17px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  padding: 32px;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 18px 42px -14px rgba(0, 0, 0, 0.6);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 24px;
  }
`;

export const IconTile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(254, 197, 118, 0.12);
  color: ${(props) => props.theme.colors.accent1};
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 700;
  color: #fff;
`;

export const Kicker = styled.p`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.accent1};
`;

export const ChipList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Chip = styled.li`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 13px;
  line-height: 1.2;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.textMuted};
`;

export const TextLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.accent1};

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

export const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 28px;
  border-radius: 999px;
  border: 1px solid transparent;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  color: ${(props) => props.theme.colors.background1};
  background: ${(props) => props.theme.colors.accent1};
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const ButtonLinkSecondary = styled(ButtonLink)`
  color: #fff;
  background: transparent;
  border-color: rgba(255, 255, 255, 0.3);

  &:hover {
    border-color: #fff;
  }
`;
