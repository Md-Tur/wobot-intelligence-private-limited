import './App.css';
import logo from './images/wobot-logo_blue 1.png';
import logo1 from './images/Solid_lines.png';
import line from './images/Rectangle 381.png';
import line1 from './images/Rectangle 382.png';

function App() {
  return (
    <section className="app-bg">

      <div className='logo'>
        <img src={logo} alt="" />
      </div>

      <div className='line'>
        <img src={line} alt="" />
      </div>

      <div className='line1'>
        <img src={line1} alt="" />
      </div>

      <div className='card'>
        <div>

          <div className='logo1'>
            <img src={logo1} alt="" />
          </div>

          <p className='heading'>It’s a delight to have you <br /> onboard</p>

          <p className='subHeading'>Help us know you better. <br />
            (This is how we optimize Wobot as per your business needs)</p>

          <form>
            <label htmlFor="cName" style={{ fontSize: '14px', color: '#545454' }}>Company name</label>
            <input type="text" id="cName" name="companyName" placeholder="e.g. Example Inc" />

            <label htmlFor="industry" style={{ fontSize: '14px', color: '#545454' }}>Industry</label>
            <select id="industry" name="industry">
              <option value="select">Select</option>
              <option value="software">Software</option>
              <option value="it">IT</option>
              <option value="multinational">Multinational</option>
            </select>


            <input type="submit" value="Get Started"></input>
          </form>
        </div>

      </div>

      <footer className='foot'>Terms of use  |  Privacy policy</footer>

    </section >
  );
}

export default App;
