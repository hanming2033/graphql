import gql from 'graphql-tag'

const GET_EXCHANGE_RATES = gql`
  query getExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

export default GET_EXCHANGE_RATES
