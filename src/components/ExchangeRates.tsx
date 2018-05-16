import * as React from 'react'
import { Query } from 'react-apollo'
import GET_EXCHANGE_RATES from '../queries/exchangeRates'
import { getExchangeRatesQuery } from '../operation-result-types'

interface IExchangeRatesProps {}

class ExchQuery extends Query<getExchangeRatesQuery> {}

const ExchangeRates: React.SFC<IExchangeRatesProps> = props => (
  <ExchQuery query={GET_EXCHANGE_RATES}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error || !data || !data.rates) return <p>Error :(</p>

      return data.rates.map((rate: any) => (
        <div key={rate.currency}>
          <p>{`${rate.currency}: ${rate.rate}`}</p>
        </div>
      ))
    }}
  </ExchQuery>
)

export default ExchangeRates
