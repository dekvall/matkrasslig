import React from 'react'

const BackgroundInfo = () => {
    return (
        <div className="introduction">
        <h2>Hjälp dina grannar att klara vardagen!</h2>
        <p>
          Som riskgrupp kan du ringa Telehelps nummer för att enkelt få hjälp med dina vardagsbestyr av en volontär i närheten.
        </p>
        <div className="row">
          <div className="col-md-12 text-center">
            <img className="img-fluid" src="/img/old-people.png" alt="Two happy old people on a bench"></img>
          </div>
        </div>
        <p>
        Genom att skriva upp dig som volontär kan personer som ingår i riskgrupper eller som redan är smittade av corona i ditt närområde ringa till dig för att få hjälp med sysslor som plötsligt blivit svåra på grund av coronakrisen, exempelvis att handla mat eller hämta ut mediciner.
        </p>
      </div>
    )
}

export default BackgroundInfo