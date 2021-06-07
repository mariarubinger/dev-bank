import { Container, Content, Card } from './styles';
import * as FirestoreService from '../../services/firestore';
import { useState } from 'react';

export function Registry(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function addUser(e){
      if(!name || !email || !password) return;
        e.preventDefault();  
        FirestoreService.createUser(name, email, password);
        setName('');
        setEmail('');
        setPassword('');
    }
    
    return(
        <Container>
            <Content>
                <h1>O banco feito especialmente para <span>Desenvolvedores</span></h1>
                <Card>
                    <h3>Crie sua conta</h3>
                    <input
                        type="text"
                        placeholder="Nome"
                        className=""
                        onChange={e => setName(e.target.value)}
                        value={name}
                        />
                    <input
                        type="text"
                        placeholder="Email"
                        className=""
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type="number"
                        placeholder="Senha"
                        className=""
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <button
                        type="submit"
                        className=""
                        onClick={addUser}>
                        Cadastrar
                    </button>  
                </Card>
            </Content>
        </Container>
    );
}