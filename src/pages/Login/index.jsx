import { Header } from '../../components/Header';
import { Container, Content, Card } from './styles';
import Img from '../../assets/image/img-login.png';

export default function SignInButton({email, setEmail, password, setPassword}){
    return(
        <>
        <Header />
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
                        /* onClick={} */>
                        Acessar
                    </button>  
                </Card>
                  <img src={Img}/>
            </Content>
        </Container>
        </>
    );
}
