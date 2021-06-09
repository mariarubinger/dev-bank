import * as FirestoreService from '../../services/firestore';
import { Container, Content, Card } from './styles';
import { useState } from 'react';
import Img from '../../assets/image/img-login.png';
import { useHistory } from 'react-router';

export default function Login(){
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function SearchForUser(e){
        if(!email || !password) return;
        e.preventDefault();
        
        let verify = FirestoreService.getUser(email, password);
        let error = 1;
        verify.then(users => {           
            users.forEach((doc) => {    
                error =0; 
                console.log(doc.data().name);    
                history.push('/Dashboard');
            });
            if(error == 1){
                console.log('usuario não encontrado');
            }           
        })
    }
    
    return(
        <>
        <Container>
            <Content>
                <Card>
                    <h3>Acesse sua conta</h3>
                    <input
                        type="text"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type="number"
                        placeholder="Senha"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <button
                        type="submit"
                        onClick={SearchForUser}>
                        Acessar
                    </button>  
                </Card>
                <img src={Img}/>
            </Content>
        </Container>
        </>
    );
}
