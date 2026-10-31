import styled from 'styled-components';

export const Bar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: ${(props) => props.theme.header.desktop};
  background: ${({ $scrolled }) => ($scrolled ? 'rgba(15, 22, 36, 0.92)' : 'rgba(15, 22, 36, 0.6)')};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: background 0.2s ease;

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${(props) => props.theme.header.mobile};
  }
`;

export const Inner = styled.div`
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px;
    gap: 12px;
  }
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors.textStrong};
  white-space: nowrap;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 14px;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textMuted};
  transition: color 0.2s ease, background 0.2s ease;

  @media (hover: hover) {
    &:hover {
      color: ${(props) => props.theme.colors.textStrong};
      background: ${(props) => props.theme.colors.fillSubtle};
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const IconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  color: ${(props) => props.theme.colors.textMuted};
  transition: color 0.2s ease, background 0.2s ease;

  @media (hover: hover) {
    &:hover {
      color: ${(props) => props.theme.colors.textStrong};
      background: ${(props) => props.theme.colors.fillSubtle};
    }
  }
`;

export const CvLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  margin-left: 8px;
  padding: 0 18px;
  border-radius: 999px;
  background: ${(props) => props.theme.colors.fill};
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textStrong};
  white-space: nowrap;
  transition: background 0.2s ease;

  @media (hover: hover) {
    &:hover {
      background: ${(props) => props.theme.colors.fillHover};
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 4px;
    padding: 0 14px;
  }
`;
