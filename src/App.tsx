import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {createGlobalStyle}from 'styled-components'
import Container from './components';
import { RecoilRoot } from 'recoil';
const GlobalStyle=createGlobalStyle`
body{
  margin:0;
  padding:0;
  @font-face {
    font-family: 'Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    @font-face {
    font-family: 'Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    @font-face {
    font-family: 'Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
}
`
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <React.Suspense fallback={null}>
          <GlobalStyle/>
          <Router>
          <Container/>
          </Router>
        </React.Suspense>
      </RecoilRoot>

    </div>
  );
}

export default App;
