import { Container, Content, Card } from './styles';

export function Registry(){
    return(
        <Container>
            <Content>
                <h1>O banco feito especialmente para <span>Desenvolvedores</span></h1>
                <Card>
                    <h3>Crie sua conta</h3>
                    <input placeholder="Nome"></input>
                    <input placeholder="E-mail"></input>
                    <input placeholder="Senha"></input>
                    <button type="button">Cadastrar</button>  
                </Card>
            </Content>
        </Container>
    );
}