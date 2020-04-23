import React from 'react';
import Search from './component/search';
import Result from './component/result';
import {SearchProvider} from './store/SearchContext';

function App() {

  return (
    <SearchProvider>
      <div className="App">
        <header className="App-header">
          <h1>Gitstar Ranking</h1>
          <h3>Unofficial Github star ranking for users, organization and repositories.</h3>
        </header>
        
          <div className="App">
            <Search/>
            <Result/>
          </div>
        
      </div>
    </SearchProvider>
  );
}

export default App;