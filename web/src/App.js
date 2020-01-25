import React, { useEffect, useState } from 'react';
import './app.css';
import './global.css';
import './main.css';
import './sidebar.css';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;

          setLatitude(latitude);
          setLongitude(longitude);
        },
        err => {
          console.log(err);
        },
        {
          timeout: 30000
        }
      );
    }
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="username_github" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                value={latitude}
                onChange={event => setLatitude(event.target.value)}
                required
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                value={longitude}
                onChange={event => setLongitude(event.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/862575?s=460&v=4"
                alt="Helder Burato Berto"
              />

              <div className="user-info">
                <strong>Helder Burato Berto</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>

            <p>
              Front-end Developer • Learning, practicing and creating this is my
              motto
            </p>

            <a href="https://github.com/helderburato">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/862575?s=460&v=4"
                alt="Helder Burato Berto"
              />

              <div className="user-info">
                <strong>Helder Burato Berto</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>

            <p>
              Front-end Developer • Learning, practicing and creating this is my
              motto
            </p>

            <a href="https://github.com/helderburato">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/862575?s=460&v=4"
                alt="Helder Burato Berto"
              />

              <div className="user-info">
                <strong>Helder Burato Berto</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>

            <p>
              Front-end Developer • Learning, practicing and creating this is my
              motto
            </p>

            <a href="https://github.com/helderburato">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/862575?s=460&v=4"
                alt="Helder Burato Berto"
              />

              <div className="user-info">
                <strong>Helder Burato Berto</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>

            <p>
              Front-end Developer • Learning, practicing and creating this is my
              motto
            </p>

            <a href="https://github.com/helderburato">
              Acessar perfil no Github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
