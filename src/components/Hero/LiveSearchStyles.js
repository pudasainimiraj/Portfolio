import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  max-width: 880px;
  padding: 24px;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.surface};
  text-align: left;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textStrong};
`;

export const Field = styled.div`
  display: flex;
  gap: 12px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

const control = (props) => `
  min-height: 48px;
  padding: 0 14px;
  border-radius: 10px;
  border: 1px solid ${props.theme.colors.border};
  background: ${props.theme.colors.background1};
  font-family: ${props.theme.fonts.main};
  font-size: 1rem;
  color: ${props.theme.colors.textStrong};
`;

export const Select = styled.select`
  ${control}
  flex: 0 0 auto;
  max-width: 40%;

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: none;
  }
`;

export const Input = styled.input`
  ${control}
  flex: 1 1 auto;
  min-width: 0;

  &::placeholder {
    color: ${(props) => props.theme.colors.textSubtle};
  }
`;

export const Submit = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 28px;
  border: 0;
  border-radius: 999px;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.background1};
  background: ${(props) => props.theme.colors.accent1};
  cursor: pointer;
  transition: transform 0.2s ease;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.03);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: wait;
    transform: none;
  }
`;

export const Message = styled.p`
  margin-top: 16px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textMuted};
`;

export const ResultList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
`;

export const Result = styled.li`
  padding: 16px;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.background1};
  /* Long URLs in excerpts must wrap, or the item widens the page at 320px. */
  overflow-wrap: anywhere;
`;

export const ResultTitle = styled.a`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textStrong};

  @media (hover: hover) {
    &:hover {
      color: ${(props) => props.theme.colors.accent1};
    }
  }
`;

export const ResultMeta = styled.p`
  margin: 4px 0 8px;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textSubtle};
`;

export const ResultText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.textMuted};
`;

export const Caption = styled.p`
  margin-top: 16px;
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.textSubtle};

  a {
    color: ${(props) => props.theme.colors.textMuted};
    text-decoration: underline;
    text-underline-offset: 3px;

    @media (hover: hover) {
      &:hover {
        color: ${(props) => props.theme.colors.textStrong};
      }
    }
  }
`;
