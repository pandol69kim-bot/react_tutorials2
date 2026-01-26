import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 6. provider와 store import
// provider : 전체 프로젝트에서 사용될 상태 데이터를 포괄하는 기능
import { Provider } from 'react-redux';
import { store } from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 7. Provider의 속성으로 store를 지정한다 */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
