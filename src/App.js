
import React from "react"

import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from "./components/site//ScrollToTop"

import Home from "./components/site/Home"
import StackedLayout from "./components/site/StackedLayout"

import DashboardLayout from "./components/teton/Layout"

import Alerts from "./pages/Alerts"
import Buttons from "./pages/Buttons"
import ButtonGroups from "./pages/ButtonGroups"
import GridsPage from "./pages/GridsPage"
import StacksPage from "./pages/StacksPage"
import BadgesPage from "./pages/BadgesPage"


import { default as TetonHeader } from "./components/teton/Header"

import Container from "./components/teton/Container"
import Row from "./components/teton/Row"
import Col from "./components/teton/Col"
import Stack from "./components/teton/Stack"


export default function App() {
  return (
    <>   
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <Switch>
            <Route path="/layout/grid">  
             <DashboardLayout 
                header={<TetonHeader/>}
                main={<GridsPage/>}              
              />
            </Route> 
            <Route path="/layout/stack">  
              <DashboardLayout 
                header={<TetonHeader/>}
                main={<StacksPage/>}   
              />
            </Route> 
            <Route path="/components/alerts">       
              <DashboardLayout 
                header={<TetonHeader/>}
                main={<Alerts />} 
              />
            </Route>
            <Route path="/components/badges">       
              <DashboardLayout 
                header={<TetonHeader/>}
                main={<BadgesPage />} 
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
