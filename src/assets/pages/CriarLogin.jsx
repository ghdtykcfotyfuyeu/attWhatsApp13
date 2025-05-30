import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth/AuthContext';
import './Login.css';

function CriarLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCriarConta = (e) => {
    e.preventDefault();
    const novoUsuario = { usuario, email, senha };
    localStorage.setItem('usuario', JSON.stringify(novoUsuario));
    login(novoUsuario); // Faz login automaticamente após criar a conta
    alert('Conta criada com sucesso!');
    navigate('/home');
  };

  return (
    <div className="container">
      <h1>Loja do Perigo</h1>
      <h2>Criar Conta</h2>
      <form onSubmit={handleCriarConta}>
        <input
          type="text"
          placeholder="Nome de usuário"
          required
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          required
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Criar Conta</button>
      </form>
    </div>
  );
}

export default CriarLogin;
