import React from 'react';

const Card = ({allFunds}) => {
  
  return (
    <>
      <div className="container">
        {allFunds.map((fund) => {
          return (
             <div key={fund.id}> 
              <div className="card">
                <h3 className="title">
                  <img src={fund.fundImage} alt="" /> {fund.name}
                </h3>
                <div className="details">
                  <div className="detailsUpper">
                    <div className="detail">
                      <p className="detailName">Annual returns</p>
                      <p className="detailValue">{fund.annualizedReturn}</p>
                    </div>
                    <div className="detail">
                      <p className="detailName">3yr returns</p>
                      <p className="detailValue">{fund.threeYearReturn}</p>
                    </div>
                    <div className="detail">
                      <p className="detailName">min. investment</p>
                      <p className="detailValue">&#x20B9; {fund.minInvestment}</p>
                    </div>
                  </div>
                  <div className="detailsLower">
                    <p className="detailName">risk profile</p>
                    <p className="detailValue">{fund.riskProfile}</p>
                  </div>
                </div>
                <button>Select Fund</button>
              </div>
             </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
