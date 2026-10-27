'use client';

import {useState} from 'react'
import './style.css';

export default function UserForm(){

    const [name, setName] = useState('')
    const [cpf, setCPF] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                setName('');
                setEmail('');
                setPassword('');
            } else {
                alert(`Erro: ${data.error}`);
            }
        } catch (error) {
            console.error('Erro de conexão:', error);
        }
    };


       return( <div className="MainDiv">
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>

                <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}/>

                <label>CPF:</label>

                <input type="text"
                value={cpf}
                onChange={(e) => setCPF(e.target.value)}/>

                <label>Email:</label>

                <input type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                <label>Senha:</label>

                <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>

                <label>Confirmar Senha: </label>

                <input type="text"/>

                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}