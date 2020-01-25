import React from 'react';
import './app.css';
import './global.css';
import './main.css';
import './sidebar.css';

function App() {
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
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
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
