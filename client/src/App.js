import React, { Fragment } from 'react';
import Header from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LandingPage from './pages/landing page/Landing';
import Panner from './components/Panner/Panner';
import CreateCategory from './pages/Categories/CreateCategory';
import CreateProducts from './pages/Products/CreateProducts';
import Products from './pages/Products/Products';
import ProductDetails from './pages/Products/ProductDetails';
import SignUpScreen from './pages/SignUpScreen/SignUpScreen';
import LoginScreen from './pages/LoginScreen/LoginScreen';
import UserEditScreen from './pages/EditUserScreen/EditUserScreen';
import UserListScreen from './pages/UserListScreen/UserListScreen';

const App = () => {
    return (
        <Fragment>
            <Router>
                <Header />
                <Container>
                    <Route path='/' component={LandingPage} exact />
                    <Route path='/signup' component={SignUpScreen} />
                    <Route path='/login' component={LoginScreen} />
                    <Route
                        path='/admin/user/:id/edit'
                        component={UserEditScreen}
                    />
                    <Route path='/admin/userlist' component={UserListScreen} />
                    <Route path='/createCat' component={CreateCategory} exact />
                    <Route
                        path='/createProduct'
                        component={CreateProducts}
                        exact
                    />
                    <Route path='/:slug/products' component={Products} exact />
                    <Route
                        path='/:catSlug/:productSlug'
                        component={ProductDetails}
                        exact
                    />
                </Container>
            </Router>
        </Fragment>
    );
};
export default App;
