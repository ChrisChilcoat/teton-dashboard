import React from "react";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from "./components/site//ScrollToTop";

import Header from "./components/site/Header";
import Components from "./components/site/Components";
import Home from "./components/site/Home";
import Showcase from "./components/site/Showcase";
import Breadcrumbs from "./components/site/Breadcrumbs";
import StackedLayout from "./components/site/StackedLayout";

import DashboardLayout from "./components/teton/Layout";

import ButtonPrimary from "./components/teton/ButtonPrimary";
import ButtonSecondary from "./components/teton/ButtonSecondary";
import ButtonBlack from "./components/teton/ButtonBlack";
import ButtonLinkCard from "./components/teton/ButtonLinkCard";
import ButtonCircle from "./components/teton/ButtonCircle";
import ButtonGroupSquare from "./components/teton/ButtonGroupSquare";
import ButtonMenu from "./components/teton/ButtonMenu";
import ButtonDivider from "./components/teton/ButtonDivider";

import Button from "./components/teton/Button";

import Alerts from "./pages/Alerts";
import Buttons from "./pages/Buttons";
import ButtonGroups from "./pages/ButtonGroups";
import Dropdowns from "./pages/Dropdowns";
import ThreeColumnLayout from "./pages/ThreeColumnLayout";

import ListHorizontal from "./components/teton/ListHorizontal";
import ListVertical from "./components/teton/ListVertical";
import ListVerticalIcons from "./components/teton/ListVerticalIcons";

import { default as TetonHeader } from "./components/teton/Header";

import Search from "./components/teton/Search";
import SimpleComposer from "./components/teton/SimpleComposer";
import AdvancedComposer from "./components/teton/AdvancedComposer";
import DragAndDropComposer from "./components/teton/DragAndDropComposer";

import FbPostImage from "./components/facebook/FbPostImage";


/*
import FbButtonSecondary from "./components/teton/FbButtonSecondary";
import FbButtonWhite from "./components/teton/FbButtonWhite";
import FbButtonCircle from "./components/teton/FbButtonCircle";
import FbButtonRounded from "./components/teton/FbButtonRounded";
import FbButtonGroup from "./components/teton/FbButtonGroup";
import FbButtonCircleDropdown from "./components/teton/FbButtonCircleDropdown";

import FbListHorizontal from "./components/teton/FbListHorizontal";
import FbListHorizontalIcons from "./components/teton/FbListHorizontalIcons";
import FbListHorizontalText from "./components/teton/FbListHorizontalText";
import FbListVertical from "./components/teton/FbListVertical";

import FbComposer from "./components/teton/FbComposer";
import FbContacts from "./components/teton/FbContacts";
import FbHeader from "./components/teton/FbHeader";

import FbPostImage from "./components/teton/FbPostImage";
import FbPostImages from "./components/teton/FbPostImages";
import FbPostImagesComments from "./components/teton/FbPostImagesComments";

import FbNavigation from "./components/teton/FbNavigation";
import FbSponsored from "./components/teton/FbSponsored";
import FbShortcuts from './components/teton/FbShortcuts';
import FbStoriesPager from "./components/teton/FbStoriesPager";
import FbVideoPager from "./components/teton/FbVideoPager";
*/

import FbVideoPager from "./components/facebook/FbVideoPager";

import Container from "./components/teton/Container";
import Row from "./components/teton/Row";
import Col from "./components/teton/Col";

export default function App() {
  return (
    <>   
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <Switch>
            <Route path="/layouts/three-column-layout">       
              <DashboardLayout 
                headerCollapsed
                header={<TetonHeader/>}
                main={<ThreeColumnLayout />} 
              />
            </Route>
            <Route path="/layout/grid">   

              <Container>
                <Row>
                  <Col>Col 1</Col>
                  <Col>Col 2</Col>
                </Row>
              </Container>

            </Route> 
            <Route path="/components/alerts">       
              <DashboardLayout 
                header={<TetonHeader/>}
                main={<Alerts />} 
              />
            </Route>
            <Route path="/components/buttons">       
              <DashboardLayout 
                header={<TetonHeader/>}
                main={<Buttons />} 
              />
            </Route>
            <Route path="/components/button-groups">       
              <DashboardLayout 
                header={<TetonHeader/>}
                main={<ButtonGroups />} 
              />
            </Route> 
            <Route path="/">
              <StackedLayout main={<Home/>} />
            </Route>     
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  )
}