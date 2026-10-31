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
  font-size: 3rem;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.textStrong};
  margin-bottom: 16px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2.25rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.875rem;
    margin-bottom: 12px;
  }
`;

export const SectionText = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.textMuted};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.0625rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  padding: 32px;
  background: ${(props) => props.theme.colors.surface};
  border-radius: 16px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 24px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 1.25;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textStrong};
`;

export const Kicker = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.accent1};
`;

export const ChipList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Chip = styled.li`
  font-size: 0.875rem;
  line-height: 1.2;
  padding: 7px 12px;
  border-radius: 999px;
  background: ${(props) => props.theme.colors.fillSubtle};
  color: ${(props) => props.theme.colors.textMuted};
`;

export const TextLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.accent1};
  /* Amber alone also marks plain text (company, tagline, metric), so links keep an underline. */
  text-decoration: underline;
  text-underline-offset: 4px;
`;

export const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 28px;
  border-radius: 999px;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  color: ${(props) => props.theme.colors.background1};
  background: ${(props) => props.theme.colors.accent1};
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.03);
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const ButtonLinkSecondary = styled(ButtonLink)`
  color: ${(props) => props.theme.colors.textStrong};
  background: ${(props) => props.theme.colors.fill};

  @media (hover: hover) {
    &:hover {
      background: ${(props) => props.theme.colors.fillHover};
    }
  }
`;
