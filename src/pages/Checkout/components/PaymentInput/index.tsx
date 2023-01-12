import { CreditCard } from 'phosphor-react'
import { PaymentInputContainer } from './styles'

export function PaymentInput() {
  return (
    <PaymentInputContainer>
      <CreditCard size={16} />
      Cartao de credito
    </PaymentInputContainer>
  )
}
