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

import Buttons from "./pages/Buttons";

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


export default function App() {
  return (
    <>   
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <Switch>
            <Route path="/components" exact>
              <StackedLayout 
                header={<Header/>} 
                main={<Components/>} 
              />
            </Route>
            <Route path="/components/teton/buttons">
              <StackedLayout 
                  header={<Header/>} 
                  main={
                    <>
                      <Breadcrumbs parent='teton' child="elements" headline="Buttons" />
                      <Showcase class="p-10 text-center" component={<FbVideoPager/>} syntaxBlock='ButtonPrimary' title="Just a test" />
                      <Showcase class="p-10 text-center" component={<ButtonPrimary/>} syntaxBlock='ButtonPrimary' title="Primary button" />
                      <Showcase class="p-10 text-center" component={<ButtonSecondary/>} syntaxBlock='ButtonSecondary' title="Secondary button" />
                      <Showcase class="p-10 text-center" component={<ButtonBlack/>} syntaxBlock='ButtonBlack' title="Black button" />
                      <Showcase class="p-10 text-center" component={<ButtonMenu/>} syntaxBlock='ButtonMenu' title="Dropdown button" />
                      <Showcase class="p-10 text-center" component={<ButtonDivider/>} syntaxBlock='ButtonDivider' title="Divider button" />
                      <Showcase class="p-10 flex justify-center" component={<ButtonLinkCard/>} syntaxBlock='ButtonLinkCard' title="Link card" />
                      <Showcase class="p-10 text-center" component={<ButtonCircle/>} syntaxBlock='ButtonCircle' title="Circular button" />
                      <Showcase class="p-10 text-center" component={<ButtonGroupSquare/>} syntaxBlock='ButtonGroupSquare' title="Square button group" />
                    </>
                  }
                />
            </Route>
            <Route path="/components/teton/lists">
              <StackedLayout 
                header={<Header/>} 
                main={
                  <>
                    <Breadcrumbs parent='teton' child="elements" headline="Lists" />
                    <Showcase class="py-4 text-center" component={<ListHorizontal/>} syntaxBlock='ListHorizontal' title="Horizontal list" />
                    <Showcase class="w-96 py-4 text-center m-auto" component={<ListVertical/>} syntaxBlock='ListVertical' title="Vertical list" />
                    <Showcase class="w-24 py-4 text-center m-auto" component={<ListVerticalIcons/>} syntaxBlock='ListVerticalIcons' title="Vertical icon list" />
                  </>
                }
              />
            </Route>
            <Route path="/components/teton/forms">
              <StackedLayout 
                header={<Header/>} 
                main={
                  <>
                    <Breadcrumbs parent='teton' child="components" headline="Forms" />
                    <Showcase class="w-96 py-4 text-center m-auto" component={<Search/>} syntaxBlock='Search' title="Search" />
                    <Showcase class="w-96 py-4 text-center m-auto" component={<SimpleComposer/>} syntaxBlock='SimpleComposer' title="Composer" />
                    <Showcase class="w-2/4 py-4 text-center m-auto" component={<AdvancedComposer/>} syntaxBlock='AdvancedComposer' title="Composer with options menu" />
                    <Showcase class="w-2/4 py-4 text-center m-auto" component={<DragAndDropComposer/>} syntaxBlock='DragAndDropComposer' title="Composer with options menu and drag and drop area" />
                  </>
                }
              />
            </Route>
            <Route path="/components/teton/header">
              <StackedLayout 
                header={<Header/>} 
                main={
                  <>
                    <Breadcrumbs parent='teton' child="components" headline="Headers" />
                    <Showcase class="w-full" component={<TetonHeader/>} syntaxBlock='TetonHeader' title="Header" />
                  </>
                }
              />
            </Route>

            {/*
            <Route path="/components/teton/composer">
              <StackedLayout 
                header={<Header/>} 
                main={
                  <>
                    <Breadcrumbs parent='teton' child="components" headline="Composer" />
                    <Showcase class="py-4" component={<FbComposer/>} syntaxBlock='FbComposer' title="Composer with button bar" />
                  </>
                }  
              />
            </Route>
            <Route path='/components/teton/posts'>
              <StackedLayout 
                header={<Header/>} 
                main={
                  <>
                    <Breadcrumbs parent='teton' child="components" headline="Posts" />
                    <Showcase class="py-4" component={<FbPostImage/>} syntaxBlock='FbPostImage' title="Post with image" />
                    <Showcase class="py-4" component={<FbPostImages/>} syntaxBlock='FbPostImages' title="Post with multiple images" />
                    <Showcase class="py-4" component={<FbPostImagesComments/>} syntaxBlock='FbPostImagesComments' title="Post with multiple images and comments" />
                  </>
                }
              />
            </Route>
            <Route path='/components/teton/pagers'>
              <StackedLayout 
                header={<Header/>} 
                main={
                  <>
                    <Breadcrumbs parent='teton' child="components" headline="Pagers" />
                    <Showcase class="py-4" component={<FbStoriesPager/>} syntaxBlock='FbStoriesPager' title="Stories pager" />
                    <Showcase class="py-4" component={<FbVideoPager/>} syntaxBlock='FbVideoPager' title="Video chat pager" />
                  </>
                }
              />
            </Route>
            <Route path="/components/teton/sponsored">
              <StackedLayout 
                header={<Header/>} 
                main={
                  <>
                    <Breadcrumbs parent='teton' child="components" headline="Sponsored" />
                    <Showcase class="w-96 py-4 m-auto" component={<FbSponsored />} syntaxBlock='FbSponsored' title="Sponsored widget with dropdown button" />
                  </>
                }
              />
            </Route>
            <Route path="/components/teton/layouts"></Route>
            <Route path="/components/teton/news-feed">
              <StackedLayout 
                header={<Header/>} 
                main={
                  <>
                    <Breadcrumbs parent='teton' child="page-examples" headline="News Feed" />
                    <Showcase 
                      title="News feed layout"
                      expandedUrl="/components/teton/full-screen/news-feed"  
                      component={
                        <ThreeColumnLayout 
                          fixedHeader={false} 
                          header={<FbHeader/>}
                          main={
                            <>
                              <FbStoriesPager/>
                              <FbComposer/>
                              <FbVideoPager/>
                              <FbPostImage/>
                            </>
                          } 
                          aside={
                            <>
                              <FbSponsored/>
                              <FbContacts/>
                            </>
                          } 
                          sidebar={
                            <>
                              <FbNavigation/>
                              <FbShortcuts/>
                            </>
                          } 
                        />
                      }
                    />
                  </>
                }
              />
            </Route>
             */}
            <Route path="/components/teton/full-screen/dashboard">       
              <DashboardLayout 
                header={<TetonHeader/>}
                main={
                  <>
                    <FbPostImage />
                    <FbPostImage />
                    <FbPostImage />
                  </>
                } 
                aside={
                  <>

                  </>
                } 
                sidebar={
                  <>
 
                  </>
                } 
              />
            </Route>
            <Route path="/components/buttons">       
              <DashboardLayout 
                header={<TetonHeader/>}
                main={
                  <>
                    <Buttons />
                  </>
                } 
                aside={
                  <>

                  </>
                } 
                sidebar={
                  <>
 
                  </>
                } 
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