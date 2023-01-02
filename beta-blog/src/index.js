import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider as BusProvider } from '@/hook/useBus'

// redux
import { Provider } from 'react-redux'
import store from '@/redux'

// styles
import '@/asset/icons/iconfont'
import '@/style/index.less'

ReactDOM.render(
    <BusProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </BusProvider>,
    document.getElementById('root')
)
