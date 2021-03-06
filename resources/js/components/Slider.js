import React, { useReducer, useEffect } from 'react'
import { Carousel, Spin } from 'antd'
import axios from 'axios'
import { requestStatus } from '../global'

const initialSlider = {
  loading: true,
  slides: [],
  error: null
}

const sliderReducer = (state, action) => {
  switch (action.status) {
    case requestStatus.LOADING:
      return { ...state, loading: true }

    case requestStatus.SUCCESS:
      if (!action.payload.length) return state

      return { ...state, loading: false, slides: action.payload }

    case requestStatus.ERROR:
      return { ...state, error: action.error }

    default:
      return state
  }
}

const Slider = () => {
  const [slider, dispatchSlider] = useReducer(sliderReducer, initialSlider)

  useEffect(() => {
    axios.get('/api/images', {
      params: {
        type: 'slider'
      }
    }).then(res => {
      dispatchSlider({
        status: requestStatus.SUCCESS,
        payload: res.data.data
      })
    }).catch(err => {
      dispatchSlider({
        status: requestStatus.ERROR,
        error: err
      })
    })
  }, [])

  const { loading, slides } = slider

  if (loading) return <Spin />

  return (
    <Carousel autoplay>
      {slides.map(s => (
        <figure key={s.id}>
          <img
            style={{
              width: '100%',
              height: '400px'
            }}
            alt={s.title}
            src={s.image} />
        </figure>
      ))}
    </Carousel>
  )
}

export default Slider
