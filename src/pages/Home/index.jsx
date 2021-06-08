import { Container, Content } from './styles';
import { Header } from "../../components/Header";
import { Registry } from "../../components/Registry";

export default function Home() {
  return (
    <>
    <Header />
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
