import React from "react";

const Filters = ({filterByMin,filterByRisk}) => {
  return (
    <section className="filters">
      <fieldset>
        <legend>FILTERS</legend>
        <div className="filters">
          <div className="filterByRisk">
            <hr />
            <h3>Filter by risk</h3>
            <hr />
            <div className="radioButtons">
            <input type="radio" name="risk" id="low" value="LOW" onClick={filterByRisk} />
            <label htmlFor="low"> LOW</label><br />
            <input type="radio" name="risk" id="moderate" value="MODERATE" onClick={filterByRisk}/>
            <label htmlFor="moderate"> MODERATE</label><br />
            <input type="radio" name="risk" id="high" value="HIGH" onClick={filterByRisk} />
            <label htmlFor="high"> HIGH</label><br/>
            </div>
          </div>
          <div className="filterByMinInvestment">
            <hr />
            <h3>Filter by Minimum Investment</h3>
            <hr />
            <div className="radioButtons">
            <input type="radio" name="min" id="min1" value="500" onClick={filterByMin} />
            <label htmlFor="min1"> &#x20B9; 500</label><br />
            <input type="radio" name="min" id="min2" value="1000" onClick={filterByMin}  />
            <label htmlFor="min2"> &#x20B9; 1000</label><br />
            <input type="radio" name="min" id="min3" value="5000" onClick={filterByMin} />
            <label htmlFor="min3"> &#x20B9; 5000</label><br />
            </div>
          </div>
        </div>
      </fieldset>
    </section>
  );
};

export default Filters;
