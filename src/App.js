import './App.css';
import logo from './images/logo.png';
import logo1 from './images/icon.png';
import line from './images/line1.png';
import line1 from './images/line2.png';
import line2 from './images/line3.png';

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

      <div className='line2'>
        <img src={line2} alt="" />
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

            <p className='companySize'>Company Size</p>
            <ul>
              <li>
                <input type="checkbox" id="check_1" name="check_1" value="check_1" />
                <label htmlFor="check_1">1-20</label>
              </li>
              <li>
                <input type="checkbox" id="check_2" name="check_2" value="check_2" />
                <label htmlFor="check_2">21-50</label>
              </li>
              <li>
                <input type="checkbox" id="check_3" name="check_3" value="check_3" />
                <label htmlFor="check_3">51-200</label>
              </li>
              <li>
                <input type="checkbox" id="check_4" name="check_4" value="check_4" />
                <label htmlFor="check_4">201-500</label>
              </li>
              <li>
                <input type="checkbox" id="check_5" name="check_5" value="check_5" />
                <label htmlFor="check_5">500+</label>
              </li>
            </ul>

            <input type="submit" value="Get Started"></input>
          </form>
        </div>

      </div>

      <footer className='foot'>Terms of use  |  Privacy policy</footer>

    </section >
  );
}

export default App;
