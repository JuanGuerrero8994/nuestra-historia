import { useState } from 'react'

export function Login({ onLogin }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes poner la contraseña que quieras, por ejemplo la fecha en que se conocieron
    if (password.toLowerCase() === 'teamomelanie' || password === '1234') {
      onLogin()
    } else {
      setError(true)
      setPassword('')
    }
  }

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#0f0a19',
      color: 'white',
      fontFamily: 'sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#ff4fa3', marginBottom: '20px' }}>Nuestra Historia ❤️</h1>
      <p style={{ marginBottom: '30px', opacity: 0.8 }}>Introduce la contraseña para entrar</p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', maxWidth: '300px' }}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña..."
          style={{
            padding: '12px 20px',
            borderRadius: '25px',
            border: error ? '2px solid #ff4f4f' : '1px solid #ff4fa3',
            background: 'rgba(255,255,255,0.05)',
            color: 'white',
            outline: 'none',
            textAlign: 'center'
          }}
        />
        {error && <p style={{ color: '#ff4f4f', fontSize: '14px' }}>Contraseña incorrecta, intenta de nuevo amor</p>}
        <button
          type="submit"
          style={{
            padding: '12px',
            borderRadius: '25px',
            border: 'none',
            background: '#ff4fa3',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: '0.3s'
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
