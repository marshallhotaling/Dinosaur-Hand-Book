// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';


import { Home } from './component/home/home.component';
import { Route, Routes, } from 'react-router-dom';

export function App() {
  return (
    <div>



      {/* START: routes */}

      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />

      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
