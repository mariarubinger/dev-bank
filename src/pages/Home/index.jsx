import { Container, Content } from './styles';
import { Registry } from "../../components/Registry";

export default function Home() {
  return (
    <>
    <Container>
        <Content>
            <div>
                <h1>O banco feito especialmente para <span>Desenvolvedores</span></h1>
                <h2>Já tem uma conta?</h2>
                <a href="/Login">Faça seu Login</a>
            </div>
            <Registry />
        </Content>
    </Container>
    </>
    );
}
