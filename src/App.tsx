import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout";
import Loader from "./components/shared/loader";

const Home = lazy(() => import(/* webpackChunkName:"home" */ "./pages/home/"));
const ContactsIndex = lazy(
  () => import(/* webpackChunkName:"contacts-index" */ "./pages/contacts")
);

const ShowContact = lazy(
  () => import(/* webpackChunkName:"show-contact" */ "./pages/contacts/show")
);

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home">
              <Redirect to="/" />
            </Route>
            <Route exact path="/contacts" component={ContactsIndex} />
            <Route exact path="/contacts/:id" component={ShowContact} />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
