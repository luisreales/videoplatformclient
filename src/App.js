import "./App.css";
import Header from "./Components/Header";
import ListVideo from "./Pages/ListVideos";
import VideoDetail from "./Pages/DetailVideo";
import FormUpload from "./Components/Form";
import { Container } from "react-bootstrap";
import { Fragment } from "react";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/**
 *
 * Return App principal component in the app.
 * @parentComponent App
 * @childsComponents  Header,ListVideo,FormUpload,Footer
 * @return {JSX} *
 * */
function App() {
  return (
    <Fragment>
      <Container fluid>
        <Router>
          <Header />
            <Container>
              <Switch>
                <Route path="/listVideo">
                  <ListVideo />
                </Route>
                <Route path="/videodetail">
                  <VideoDetail />
                </Route>
                <Route path="/">
                  <FormUpload />
                </Route>
              </Switch>
            </Container>
          <Footer />
        </Router>
      </Container>
    </Fragment>
  );
}

export default App;
