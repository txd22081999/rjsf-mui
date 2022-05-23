import './App.css'
import DefaultForm from './components/DefaultForm'
import MyMuiForm from './components/MyMuiForm'

const App = (): JSX.Element => {
  return (
    <div className='App'>
      <div style={{ marginBottom: '5rem' }}>
        <h1>Default Form</h1>
        <DefaultForm />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h1>MUI Form</h1>
        <MyMuiForm />
      </div>
    </div>
  )
}

export default App
