import React from 'react'

import { ExclamationIcon } from '@heroicons/react/outline'
import { BellIcon, DotsHorizontalIcon, ChevronDownIcon} from '@heroicons/react/solid'

import Container from '../components/teton/Container'
import Row from '../components/teton/Row'
import Col from '../components/teton/Col'
import Stack from '../components/teton/Stack'
import Badge from '../components/teton/Badge'

import Button from '../components/teton/Button'
import Showcase from '../components/site/Showcase'

function GridsPage() {
  return (
    <span>
      <span class='prose'>  
        <h1>Grid</h1>
        <p>The grid system is a fully responsive layout created using a combination of the Container, Column, and Row components. </p>
        <h2>Container</h2>
        <p>Containers are wrapper components used to set padding and control the max width of content.</p>  
      </span>
      <br/>
      <Showcase 
        class="w-full py-4 text-center m-auto space-x-2"
        component={
          <>
            <Container>
              <Row>
                <Col>
                  <div className="p-4 text-center text-white bg-purple-400 rounded">1 of 1</div>
                </Col>
              </Row>
            </Container>
          </>
        } 
        syntaxBlock={
          `<> \n` +
          `  <Container> \n` +
          `    <Row> \n` +
          `      <Col>1 of 12</Col> \n` +
          `    </Row> \n` +
          `  </Container> \n` +
          `</>`} 
        title="Container" 
      />
      <span class='prose'>  
        <h2>Max Width</h2>
        <p>Add max="sm", max="md", max="lg" max="xl" max="xxl" for additional sizes.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full py-4 text-center m-auto space-y-2"
        component={
          <>
            <Container max="sm">
              <Row>
                <Col>
                  <div className="p-4 text-center text-white bg-purple-400 rounded">sm</div>
                </Col>
              </Row>
            </Container>
            <Container max="md">
              <Row>
                <Col>
                  <div className="p-4 text-center text-white bg-purple-400 rounded">md</div>
                </Col>
              </Row>
            </Container>
            <Container max="lg">
              <Row>
                <Col>
                  <div className="p-4 text-center text-white bg-purple-400 rounded">lg</div>
                </Col>
              </Row>
            </Container>
            <Container max="xl">
              <Row>
                <Col>
                  <div className="p-4 text-center text-white bg-purple-400 rounded">xl</div>
                </Col>
              </Row>
            </Container>
            <Container max="xxl">
              <Row>
                <Col>
                  <div className="p-4 text-center text-white bg-purple-400 rounded">xxl</div>
                </Col>
              </Row>
            </Container>
          </>
        } 
        syntaxBlock={
          `<> \n` +
          `  <Container max="sm"> \n` +
          `    <Row> \n` +
          `      <Col>sm</Col> \n` +
          `    </Row> \n` +
          `  </Container> \n` +
          `  <Container max="md"> \n` +
          `    <Row> \n` +
          `      <Col>md</Col> \n` +
          `    </Row> \n` +
          `  </Container> \n` +
          `  <Container max="lg"> \n` +
          `    <Row> \n` +
          `      <Col>lg</Col> \n` +
          `    </Row> \n` +
          `  </Container> \n` +
          `  <Container max="xl"> \n` +
          `    <Row> \n` +
          `      <Col>xl</Col> \n` +
          `    </Row> \n` +
          `  </Container> \n` +
          `  <Container max="xxl"> \n` +
          `    <Row> \n` +
          `      <Col>xxl</Col> \n` +
          `    </Row> \n` +
          `  </Container> \n` +
          `</>`} 
        title="Container max width" 
      />
      <span class='prose'>  
        <h2>Rows</h2>
        <p>Control the number of <Badge variant="info">Columns</Badge> in a <Badge variant="info">Row</Badge> by using the <Badge variant="info">Cols</Badge> prop.</p>
        <p>
          <Badge variant="info">col="1"</Badge> 
          <Badge variant="info">col="2"</Badge> 
          <Badge variant="info">col="3"</Badge> 
          <Badge variant="info">col="4"</Badge> 
          <Badge variant="info">col="5"</Badge> 
          <Badge variant="info">col="6"</Badge> 
          <Badge variant="info">col="7"</Badge> 
          <Badge variant="info">col="8"</Badge> 
          <Badge variant="info">col="9"</Badge> 
          <Badge variant="info">col="10"</Badge> 
          <Badge variant="info">col="11"</Badge> 
          <Badge variant="info">col="12"</Badge>
        </p>
      </span>
      <br/>
      <Showcase 
        class="w-full py-4 text-center space-y-4 m-auto"
        component={
          <>
            <Container>
              <Row cols="2">
                <Col>
                  <div className="p-4 text-center text-white bg-purple-400 rounded">1 of 2</div>
                </Col>
                <Col>
                  <div className="p-4 text-center text-white bg-purple-400 rounded">2 of 2</div>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row cols="3">
                <Col>
                  <div className="p-4 text-center text-white bg-purple-400 rounded">1 of 4</div>
                </Col>
                <Col>
                  <div className="p-4 text-center text-white bg-purple-400 rounded">2 of 4</div>
                </Col>
                <Col>
                  <div className="p-4 text-center text-white bg-purple-400 rounded">3 of 4</div>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row cols="6">
                <Col>
                  <div className="p-4 text-center text-white bg-purple-400 rounded">1 of 6</div>
                </Col>
                <Col>
                  <div className="p-4 text-center text-white bg-purple-400 rounded">2 of 6</div>
                </Col>
                <Col>
                  <div className="p-4 text-center text-white bg-purple-400 rounded">3 of 6</div>
                </Col>
                <Col>
                  <div className="p-4 text-center text-white bg-purple-400 rounded">4 of 6</div>
                </Col>
                <Col>
                  <div className="p-4 text-center text-white bg-purple-400 rounded">5 of 6</div>
                </Col>
                <Col>
                  <div className="p-4 text-center text-white bg-purple-400 rounded">6 of 6</div>
                </Col>
              </Row>
            </Container>
          </>
        } 
        syntaxBlock={
          `<> \n` +
          `  <Container> \n` +
          `    <Row cols="2"> \n` +
          `      <Col>1 of 2</Col> \n` +
          `      <Col>2 of 2</Col> \n` +
          `    </Row> \n` +
          `  </Container> \n` +
          `  <Container> \n` +
          `    <Row cols="3"> \n` +
          `      <Col>1 of 3</Col> \n` +
          `      <Col>2 of 3</Col> \n` +
          `      <Col>3 of 3</Col> \n` +
          `    </Row> \n` +
          `  </Container> \n` +
          `  <Container> \n` +
          `    <Row cols="6"> \n` +
          `      <Col>1 of 6</Col> \n` +
          `      <Col>2 of 6</Col> \n` +
          `      <Col>3 of 6</Col> \n` +
          `      <Col>4 of 6</Col> \n` +
          `      <Col>5 of 6</Col> \n` +
          `      <Col>6 of 6</Col> \n` +
          `    </Row> \n` +
          `  </Container> \n` +
          `</>`} 
        title="Rows" 
      />
      <span class='prose'>  
        <h2>Columns</h2>
        <p>Control each columns span at diffrent break points by adding xs="*", sm="*", md="*", lg="*", xl="*", xxl="*".</p>
      </span>
      <br/>
      <Showcase 
        class="w-full py-4 text-center m-auto space-y-2 align-middle" 
        component={
          <>
            <Container>
              <Row cols="8">
                <Col xs="12" sm="2" md="6" lg="2" xl="6" xxl="2">
                  <div className="p-4 text-center text-white bg-purple-400 rounded">1 of 2</div>
                </Col>
                <Col xs="12" sm="6" md="2" lg="6" xl="2" xxl="6">
                  <div className="p-4 text-center text-white bg-purple-400 rounded">2 of 2</div>
                </Col>
              </Row>
            </Container>
          </>
        } 
        syntaxBlock={
          `<> \n` +
          `  <Container> \n` +
          `    <Row cols="8"> \n` +
          `      <Col xs="12" sm="2" md="6" lg="2" xl="6" xxl="2">1 of 6</Col> \n` +
          `      <Col xs="12" sm="6" md="2" lg="6" xl="2" xxl="6">2 of 6</Col> \n` +
          `    </Row> \n` +
          `  </Container> \n` +
          `</>`} 
        title="Columns" 
      />


      <span class='prose'>  
        <h2>API</h2>
        <h3>Container</h3>
      </span>
      <div className="flex flex-col my-8">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Default
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">max</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'xs' <br/> 'sm' <br/> 'md' <br/> 'lg' <br/> 'xl' <br/> 'xxl'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap"></td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets container max width</td>
                  </tr>    
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">suffixClasses</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">string</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">""</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Appends additional classes</td>
                  </tr> 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <span class='prose'>  
        <h3>Row</h3>
      </span>
      <div className="flex flex-col my-8">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Default
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">rows</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'1—12'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'12'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets columns in row</td>
                  </tr>    
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">suffixClasses</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">string</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">""</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Appends additional classes</td>
                  </tr> 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <span class='prose'>  
        <h3>Col</h3>
      </span>
      <div className="flex flex-col my-8">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Default
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">xs</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'1—12'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'1'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Col span at xs break point</td>
                  </tr>     
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">sm</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'1—12'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'1'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Col span at sm break point</td>
                  </tr>          
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">md</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'1—12'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'1'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Col span at md break point</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">lg</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'1—12'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'1'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Col span at lg break point</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">xl</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'1—12'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'1'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Col span at xl break point</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">xxl</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'1—12'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'1'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Col span at xxl break point</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">suffixClasses</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">string</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">""</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Appends additional classes</td>
                  </tr> 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>




    </span>
  )
}

export default GridsPage;