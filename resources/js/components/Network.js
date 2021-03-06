import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import { Row, Col, Card, Layout, Empty, Skeleton, Spin } from 'antd'
import { AimOutlined } from '@ant-design/icons'
import NetworkView from './NetworkView'
import { requestStatus } from '../global'

const initialNetwork = {
  loading: true,
  places: [],
  error: null
}

const networkReducer = (state, action) => {
  switch (action.status) {
    case requestStatus.LOADING:
      return { ...state, loading: true }

    case requestStatus.SUCCESS:
      if (!action.payload.length) return state

      return { ...state, loading: false, places: action.payload }

    case requestStatus.ERROR:
      return { ...state, error: action.errorMessage }

    default:
      return state
  }
}

const Network = () => {
  const [network, dispatchNetwork] = useReducer(networkReducer, initialNetwork)
  const [currentPlace, setCurrentPlace] = useState(null)

  useEffect(() => {
    axios.get('/api/networks').then(res => {
      dispatchNetwork({
        status: requestStatus.SUCCESS,
        payload: res.data.data
      })
    }).catch(err => {
      dispatchNetwork({
        status: requestStatus.ERROR,
        errorMessage: err
      })
    })
  }, [])

  const { loading, places } = network

  if (loading) return <Spin />

  return (
    <Layout.Content>
      <Row>
        <Col md={12}>
          <Row gutter={[24, 24]} style={{
            margin: 0,
            padding: '1rem'
          }}>
            {places.map(n => (
              <Col key={n.id} span={12} md={8}>
                <Card
                  type="inner"
                  hoverable
                  bordered={false}
                  size="small"
                  cover={<img alt={n.name} src={n.thumbnail} />}
                  onClick={() => setCurrentPlace(n.id)}>
                  <Card.Meta
                    title={n.name}
                    avatar={<AimOutlined />} />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={12} style={{
          width: '100%',
          background: '#fff'
        }}>
          {currentPlace
            ? <NetworkView network={places.find(n => n.id === currentPlace)} />
            : <Empty style={{ margin: '2rem ' }} description="No city selected."><Skeleton/></Empty>
          }
        </Col>
      </Row>
    </Layout.Content>
  )
}

export default Network
