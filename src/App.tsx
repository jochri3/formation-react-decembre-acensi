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

const NotFound = lazy(
  () => import(/* webpackChunkName:"not-found" */ "./pages/404")
);

const CreateContact = lazy(
  () =>
    import(/* webpackChunkName:"create-contact" */ "./pages/contacts/create")
);

const EditContact = lazy(
  () => import(/* webpackChunkName:"edit-contact" */ "./pages/contacts/edit")
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
            <Route exact path="/contacts/new" component={CreateContact} />
            <Route exact path="/contacts/:id" component={ShowContact} />
            <Route exact path="/contacts/:id/edit" component={EditContact} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
