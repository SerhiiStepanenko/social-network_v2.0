import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="appWraper">
          <Header />
          <Nav />
          <div className="main">
            <Route path="/" exact
              render={() => <Main/>} />
            <Route path="/messages"
              render={() => <DialogsContainer/>} />
            <Route path="/users"
              render={() => <UsersContainer/>} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
