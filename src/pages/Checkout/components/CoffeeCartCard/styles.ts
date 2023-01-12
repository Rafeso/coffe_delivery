import styled from 'styled-components'

export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  > div {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    font-size: 700;
    align-self: flex-start;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  height: 2rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors['base-text']};
  height: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors['base-button']};
  padding: 0 0.5rem;
  font-size: 0.75rem;
  border-radius: 6px;
  transform: 0.4s;

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
`
