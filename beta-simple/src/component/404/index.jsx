import React from 'react'


function PageNotFound(props) {
  return (
    <a
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <b
          type='primary'
          onClick={() => {
            props.history.push('/')
          }}>
          Back Home
        </b>
      }
    />
  )
}

export default PageNotFound
