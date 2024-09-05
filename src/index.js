import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { Provider } from 'react-redux'; // Importa el Provider de Redux
import { store } from './App/store'; // Importa tu store de Redux

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Envuelve la App con el Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);


