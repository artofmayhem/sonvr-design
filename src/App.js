import "bootstrap/dist/css/bootstrap.css";
import Button from "@material-ui/core/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content d-flex flex-column justify-content-center">
        <div
          className="blackthought-splash "
          style={{ alignSelf: "center", marginTop: "-25vw" }}
          id="fontOpacity"
        >
          {" "}
          <h1
            className="display-1"
            style={{ marginTop: "7vw", fontSize: "15vh" }}
          >
            S O N V R{" "}
          </h1>{" "}
          <span class="design-size">D E S I G N</span>
        </div>
        <div className="medspacer350"></div>
        <div className="camera-image">
          <div className="smallspacer200"></div>
          <h2 className="intro-content">
            Welcome to SONVR Design. In this space dreams are brought to
            reality...{" "}
          </h2>
          <div className="medspacer500"></div>
          <p className="vision-content">
            We strive to create a more connected reality that brings together
            peoples from around the world for the purpose of innovation,
            elevation, and collaboration. We do this with one purpose in mind.
          </p>
        </div>
        <div className="medspacer500"></div>
        <div className="rice-field"></div>
        <div className="medspacer500"></div>
        <h3 className="display-3"> To tell the story </h3>
      </div>

      <div className="content2">
        <div className="sparklers">
          <div className="medspacer500"></div>
          <p className="whoweare-content">
            We are visionaries, artists, creators, and engineers. From a varied
            array of backgrounds we come together, delivering impactful content
            to your brand.{" "}
          </p>
          <div className="medspacer500"></div>
          <p className="whoweare-content2">
            We are thinkers, musicians, and collaborators each with an eye for
            the perspicacious.{" "}
          </p>
          <div className="medspacer500"></div>
          <div className="eyes"></div>
          <div className="medspacer350"></div>
          <p className="storytellers">We Are The Storytellers</p>
          <p className="smallspace200"></p>
        </div>
      </div>

      <div className="content3">
        <div className="city">
          <div className="largespacer800 d-flex flex-column justify-content-center"></div>
          <h1 className="blackthought-splash" id="fontOpacity2" style={{padding: '10vh 10vw', maxWidth: '90vw', alignSelf: 'center', margin: '0 auto'}}>
            {" "}
            Projects{" "}
          </h1>

          <nav style={{marginTop:'5vh', marginBottom:'5vh'}}>
            <button className='btn btn-outline-light'>
              <a href="https://sonvrdesign-tonymiller.netlify.app/">
                Back Home
              </a>
            </button>
            <button className='btn btn-outline-light'>
              <a href="https://codepen.io/artofmayhem/live/eYZrNzv">
                A Brief Introduction
              </a>
            </button>
            <button className='btn btn-outline-light'>
              <a href="https://codepen.io/artofmayhem/live/QWNeQOo">
                Empowerment Magazine
              </a>
            </button>
            <button className='btn btn-outline-light'>
              <a href="https://codepen.io/artofmayhem/live/BaKxMXj">
                Lightbeam Photography
              </a>
            </button>
            <button className='btn btn-outline-light'>
              <a href="mailto: anthony-miller@lambdastudents.com">Contact</a>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
