import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import PageLoader from './components/Common/PageLoader';

import Base from './components/Layout/Base';
import BasePage from './components/Layout/BasePage';

interface Props {
    location: any;
}

const waitFor = (Tag: any) => (props: Props) => <Tag {...props}/>;

//ROUTES SETUP
const Home = lazy(() => import('./components/Pages/Home'));
const Feature = lazy(() => import('./components/Feature/Feature'));
//END ROUTES SETUP

const listofPages = [
    '/'
];

const Routes = ({ location }: Props) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };

    if(listofPages.indexOf(location.pathname) > -1) {
        return (
            <BasePage>
                <Suspense fallback={<PageLoader/>}>
                <Switch location={location}>
                    {/*Home*/}
                    <Route path="/" component={waitFor(Home)}/>
                    <Redirect to="/" />
                </Switch>
                </Suspense>
            </BasePage>
        );
    } else {
        return (
            <Base>
                <TransitionGroup>
                    <CSSTransition key={currentKey} timeout={timeout}>
                        <div>
                            <Suspense fallback={<PageLoader/>}>
                                <Switch location={location}>
                                    {/*Feature*/}
                                    <Route path="/feature" component={waitFor(Feature)} />
                                </Switch>
                            </Suspense>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Base>
        );
    }
}

export default withRouter(Routes);
