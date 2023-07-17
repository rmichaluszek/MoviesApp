import './App.css'
import Navbar from './components/Navbar'
import { ConfigProvider } from 'antd'

function App() {

  return (
    <>
      <div className="App">

      <ConfigProvider
          theme={{
            token: {

            },
          }}
      >

          <Navbar></Navbar>
          <div className="Content">
            Content
          </div>

        </ConfigProvider>
      </div>
    </>
  )
}

export default App
