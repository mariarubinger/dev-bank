import * as FirestoreService from '../../services/firestore';
import { useState } from 'react';
import { Container, Content, CardBalance, CardTransactions, Sidebar } from './styles';
import { useHistory } from 'react-router';

function Dashboard() {
    const history = useHistory();
    const [transactionsList, setTransactionsList] = useState([]); 
    const [balance, setBalance] = useState(0);

    function Logout() {
        localStorage.clear();
        history.push('/');
    }
 
        FirestoreService.authenticateAnonymously().then(userCredential => {           
        FirestoreService.getExtract((localStorage.getItem('id')))
        .then(transactions => {                      
            let arrayTransactions = [];
            let tempBalance = 0;
            if (!transactions.empty) {
                transactions.forEach((doc) => {      
                tempBalance += doc.data().value;
                arrayTransactions.push(
                    <tr key={doc.id}>
                    <td>{new Date(doc.data().date.seconds * 1000).toLocaleDateString()}</td> 
                    <td>{(doc.data().description)}</td>
                    <td>{(doc.data().type)}</td>
                    <td>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(doc.data().value)}</td>
                    </tr>)
                });
            setBalance(tempBalance);          
            setTransactionsList(arrayTransactions)                
            } else {
                console.log('Histórico do extrato não encontrado');             
            }
        })
        .catch((e) => console.log('Falha ao buscar histórcio do extrato'));
       });

    return (
    <>
    <Container>
        <Content>
            <div>
                <h2>Olá, <span>{localStorage.getItem('name')}</span>!</h2>
            </div>
            <div>
                <CardBalance>
                <h3>Saldo disponível</h3>
                <h2>{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(balance)}</h2>
                </CardBalance>
            </div>
            </Content>
            <Content>
                <Sidebar>
                    <h3>Menu</h3>
                    <button
                    onClick={Logout}
                    >
                    Sair da conta
                    </button>
                </Sidebar>
                <CardTransactions>
                    <h3>Histórico</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Data</th><th>Descrição</th><th>Tipo</th><th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>                       
                            {transactionsList}
                        </tbody>
                    </table>
                </CardTransactions>
            </Content>                
    </Container>
    </>
    );
}

export default Dashboard;
