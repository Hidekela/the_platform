import type { NextPage } from 'next'
import { AdminLayout } from '~layout'
import {
  Card, Col, Row,
} from 'react-bootstrap'
import { Bar, Pie } from 'react-chartjs-2'
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'
import React from 'react'
import useStatistics from '~hooks/useStatistics'

Chart.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement, 
  Tooltip, 
  Filler,
  Legend,
  ArcElement
)

const Home: NextPage = () => {
  const {
    dataYear,
    dataMonth,
    dataTypes,
    options
  } = useStatistics();

  return (
    <AdminLayout>
      <Row>
        <Col lg={6}>
          <Card className="mb-4">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="mb-0">
                    Statistique membres par année
                  </h4>
                </div>
              </div>
              <div
                style={{
                  marginTop: '40px',
                }}
              >
                <Bar 
                  options={options} 
                  data={dataYear} 
                />
              </div>
                
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="mb-4">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="mb-0">
                    Statistique membres par mois
                  </h4>
                </div>
              </div>
              <div
                style={{
                  marginTop: '40px',
                }}
              >
                <Bar 
                  options={options} 
                  data={dataMonth} 
                />
              </div>
                
            </Card.Body>
          </Card>
        </Col>

        <Col lg={12}>
          <Card className="mb-4">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="mb-0">
                    Statistique membres étudiants et travaillants
                  </h4>
                </div>
              </div>
              <div
                style={{
                  marginTop: '40px',
                  height: '600px'
                }}
                className="d-flex justify-content-center"
              >
               <div
                  style={{
                    width: '600px'
                  }}
               >
                <Pie 
                    options={options} 
                    data={dataTypes} 
                  />
               </div>
              </div>
                
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </AdminLayout>
  )
}

export default Home
