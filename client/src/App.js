import React from 'react';
import './App.scss';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';
import TeleHelpBar from './components/TeleHelpBar';
import MapView from './components/MapView';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      isRegistered: false,
      isRegisteredMsg: ""
    }
  }

  componentDidMount() {
    fetch('/time')
    .then(res => res.json())
    .then(data => this.setState({
        time: data.time
      }
    ))
    .catch(console.log('error setting time'))
  }

  render() {
    const { time } = this.state;

    return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <TeleHelpBar/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="introduction">
              <h2>Hjälp dina grannar att klara vardagen!</h2>
              <p>
                Som riskgrupp kan du ringa Telehelps nummer för att enkelt få hjälp med dina vardagsbestyr av en volontär i närheten.
              </p>
              <div className="row">
                <div className="col-md-12 text-center">
                  <img className="img-fluid" src="/old-people.png" alt="Two happy old people on a bench"></img>
                </div>
              </div>
              <p>
              Genom att skriva upp dig som volontär kan personer som ingår i riskgrupper eller som redan är smittade av corona i ditt närområde ringa till dig för att få hjälp med sysslor som plötsligt blivit svåra på grund av coronakrisen, exempelvis att handla mat eller hämta ut mediciner.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="number-pres">
            <h1><svg className="bi bi-phone" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" clipRule="evenodd"/>
  <path fillRule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
</svg><a href="tel:+46766861551">0766861551</a></h1>
            </div>
            <div className="signup" id="register">
              {this.state.isRegistered ? <h3>{this.state.isRegisteredMsg}</h3> 
              : <RegistrationForm handler={(respdata) => {
                console.log(respdata);
                if (respdata.type === 'success')
                {
                  this.setState({time: time, isRegistered: true, isRegisteredMsg: "Tack för din registrering!"})
                }
                else if (respdata.type === 'failure')
                {
                  this.setState({time: time, isRegistered: true, isRegisteredMsg: "Något gick fel, kunde inte genomföra registreringen!"})
                }
                else {
                  this.setState({time: time, isRegistered: true, isRegisteredMsg: "Tack för din registrering!"})
                }
                
              }}/>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <FAQ/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <MapView/>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">BETA © 2020 Alla rättigheter förbehållna.
      Kontakt: <a href="mailto:info@telehelp.se">info@telehelp.se</a>. Skapad under <a href="https://www.hackthecrisis.se/">Hack the Crisis 2020</a>
      </div>
    </div>
  )
  }
}

export default App;
