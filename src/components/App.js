import Navbar from "./Navbar";
import Filters from "./Filters";
import Card from "./Card";
import Error from "./Error";
import '../css/style.css';
import React, { useEffect, useState } from "react";


function App() {

  const [allFunds, setAllFunds] = useState([]); // RESPONSIBLE FOR RENDERING.
  const [filterByRiskFunds, setFilterByRiskFunds] = useState([]); // FOR STORING FUNDS AFTER APPLYING RISK FILTER.
  const [filterByMinFunds, setFilterByMinFunds] = useState([]); // FOR STORING FUNDS AFTER APPLYING MIN. INVESTMENT FILTER.
  const [allFundsStore, setAllFundsStore] = useState([]); // ONLY FOR STORING ALL FUNDS
  const [minInvestmentValue, setMinInvestmentValue] = useState(""); // IN MIN. INVESTMENT FILTER, VALUE OF THAT RADIO BUTTON IS STORED WHICH RADIO BUTTON IS CLICKED.
  const [riskValue, setRiskValue] = useState(""); // IN RISK FILTER, VALUE OF THAT RADIO BUTTON IS STORED WHICH RADIO BUTTON IS CLICKED.
  const [errorMsg, setErrorMsg] = useState(""); // IN CASE OF FAILURE TO FETCH THE DATA,IT STORES THE VALUE OF ERROR VARIABLE.

  const func = async () => {
    try {
      let url =
        "https://prr7fx7sh0.execute-api.ap-south-1.amazonaws.com/dev/pten/funds";

      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      setAllFunds(data.result);
      setAllFundsStore(data.result);
      setErrorMsg("");
    } catch (error) {
      console.log(error);
      setErrorMsg(error);
    }
  };

  useEffect(() => {
    func();
  }, []);

                          // CODE FOR WORKING OF FILTERS

    // CODE FOR WORKING OF MIN. INVESTMENT FILTER.
  const filterByMin = (e) => {
    console.log(e.target.value);
    if (filterByRiskFunds.length === 0) {
      // IF RISK FILTER IS NOT APPLIED.
      if (filterByMinFunds.length === 0) {
        // IF MIN. INVESTMENT FILTER IS NOT APPLIED.
        const filterMin = allFunds.filter((fund) => {
          return parseInt(fund.minInvestment) >= parseInt(e.target.value);
        });
        console.log(filterMin);
        setAllFunds(filterMin);
        setFilterByMinFunds(filterMin);
        setMinInvestmentValue(e.target.value);
      } else if (filterByMinFunds.length !== 0) {
        // IF MIN. INVESTMENT FILTER IS APPLIED.
        if (
          e.target.checked === true &&
          minInvestmentValue === e.target.value
        ) {
          e.target.checked = false;
          setAllFunds(allFundsStore);
          setFilterByMinFunds([]);
          setMinInvestmentValue("");
        } // CODE FOR DESELECTING THE RADIO BUTTON.
        else {
          const filterMin = allFundsStore.filter((fund) => {
            return parseInt(fund.minInvestment) >= parseInt(e.target.value);
          });
          console.log(filterMin);
          setAllFunds(filterMin);
          setFilterByMinFunds(filterMin);
          setMinInvestmentValue(e.target.value);
        }
      }
    } else if (filterByRiskFunds.length !== 0) {
      if (e.target.checked === true && minInvestmentValue === e.target.value) {
        e.target.checked = false;
        setAllFunds(filterByRiskFunds);
        setFilterByMinFunds([]);
        setMinInvestmentValue("");
      } // CODE FOR DESELECTING THE RADIO BUTTON.
      else {
        const filterMin = filterByRiskFunds.filter((fund) => {
          return parseInt(fund.minInvestment) >= parseInt(e.target.value);
        });
        console.log(filterMin);
        setAllFunds(filterMin);
        setFilterByMinFunds(filterMin);
        setMinInvestmentValue(e.target.value);
      }
    }
  };
  
  // CODE FOR WORKING OF RISK FILTER.  
  const filterByRisk = (e) => {
    console.log(e.target.value);
    if (filterByMinFunds.length === 0) {
      if (filterByRiskFunds.length === 0) {
        const filterRisk = allFunds.filter((fund) => {
          return fund.riskProfile === e.target.value;
        });
        console.log(filterRisk);
        setAllFunds(filterRisk);
        setFilterByRiskFunds(filterRisk);
        setRiskValue(e.target.value);
      } else if (filterByRiskFunds.length !== 0) {
        if (e.target.checked === true && riskValue === e.target.value) {
          e.target.checked = false;
          setAllFunds(allFundsStore);
          setFilterByRiskFunds([]);
          setRiskValue("");
        } else {
          const filterRisk = allFundsStore.filter((fund) => {
            return fund.riskProfile === e.target.value;
          });
          console.log(filterRisk);
          setAllFunds(filterRisk);
          setFilterByRiskFunds(filterRisk);
          setRiskValue(e.target.value);
        }
      }
    } else if (filterByMinFunds.length !== 0) {
      if (e.target.checked === true && riskValue === e.target.value) {
        e.target.checked = false;
        setAllFunds(filterByMinFunds);
        setFilterByRiskFunds([]);
        setRiskValue("");
      } else {
        const filterRisk = filterByMinFunds.filter((fund) => {
          return fund.riskProfile === e.target.value;
        });
        console.log(filterRisk);
        setAllFunds(filterRisk);
        setFilterByRiskFunds(filterRisk);
        setRiskValue(e.target.value);
      }
    }
  };

  return (
    <>
      <Navbar/> 
      <Filters filterByMin={filterByMin} filterByRisk={filterByRisk} />     
      { errorMsg === "" ? <Card allFunds={allFunds} /> : <Error func={func} /> }
    </>
  );
}

export default App;
