import { useEffect, useState, useMemo } from 'react'

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    })
  }, [])

  const cryptoReturns = useMemo(() => {    // To fix this performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function.
    return (exchange1Data.returns || 0) + (exchange2Data.returns || 0);
  }, [exchange1Data, exchange2Data]);

  const incomeTax = (cryptoReturns + bankData.income) * 0.3
  
  
  /*
    const calculateCryptoReturns = useCallback(() => {
      return (exchange1Data.returns || 0) + (exchange2Data.returns || 0);
    }, [exchange1Data, exchange2Data]);

    const cryptoReturns = useMemo(() => calculateCryptoReturns(), [calculateCryptoReturns]);

    
    The useCallback Hook returns a memoized callback function. It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
    The useMemo Hook returns a memoized value. It is useful for optimizing expensive calculations that depend on certain dependencies.
  */

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}
export default App