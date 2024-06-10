import React, { useState } from 'react';
import '../Estilos/faq.css';

const Faq = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    const faqs = [
        {
            question: "O que é pensão alimentícia?",
            answer: "Pensão alimentícia é um pagamento em dinheiro feito por pai ou mãe a um filho menor de 18 anos, ou sendo maior de 18 anos, que não tenha capacidade de se sustentar. Ex-cônjuges podem também se beneficiarem de pensão alimentícia."
        },
        {
            question: "Quando a criança fizer 18 anos, a pensão para automaticamente?",
            answer: "Não, é necessário que o pagador entre com uma ação e o juiz autorize a interromper o pagamento."
        },
        {
            question: "Tem que esperar o filho nascer para pedir pensão alimentícia?",
            answer: "Não, mesmo quando a mãe está esperando o bebê, ela já pode pedir o pagamento de pensão alimentícia para o pai."
        },
        {
            question: "A prisão por pensão alimentícia acaba com a dívida?",
            answer: "Não, após ser solto, vai continuar devendo."
        },
        {
            question: "Como cobrar pensão alimentícia pela primeira vez?",
            answer: "Deve-se procurar um advogado, fornecer a ele documentos e entrar com uma ação."
        },
        {
            question: "Por quanto tempo o devedor de pensão pode ficar preso?",
            answer: "De 30 a 90 dias para cada período de atraso."
        },
        {
            question: "Acordo de boca para pagar pensão é valido?",
            answer: "Não, apenas a pensão determinada por um juiz é válida para obrigar alguém a pagar."
        },
        {
            question: "É possível alterar o valor da pensão alimentícia?",
            answer: "Sim, tanto para aumentar quanto para diminuir, mas para isso deve haver uma decisão judicial."
        },
        {
            question: "Quem paga a pensão é sempre o pai?",
            answer: "Não, quando a guarda é do pai, quem paga é a mãe, além disso, na ausência dos genitores, os avós podem ser obrigados a pagar pensão alimentícia para o neto."
        },
        {
            question: "Em caso de guarda compartilhada, a pensão alimentícia também tem que ser paga?",
            answer: "Sim, guarda compartilhada não impede a cobrança da pensão alimentícia."
        },
        {
            question: "O pagador de pensão alimentícia está desempregado, ele pode ser cobrado?",
            answer: "Sim, o desemprego não autoriza a deixar de pagar pensão alimentícia."
        },
        {
            question: "Quem pode pedir pensão alimentícia?",
            answer: "Todo filho menor de 18 anos idade ou, mesmo sendo maior de 18 anos, seja incapaz de sustentar-se. Ex-cônjuges também podem ter direito a pensão alimentícia."
        },
        {
            question: "Qual o valor da pensão alimentícia?",
            answer: "Existem duas hipóteses, uma para quando o pagador de pensão está empregado e outra quando está desempregado, é trabalhador informal ou empresário. Se o pagador de pensão estiver empregado, o valor da pensão pode ser de, em média, até 1/3 (um terço) do salário dele. Se o pagador de pensão estiver desempregado, for trabalhador informal ou for empresário, a pensão alimentícia será fixada em salários-mínimos, sendo de, em média, 50% de um salário-mínimo até 15 salários-mínimos."
        },
        {
            question: "Como é paga a pensão alimentícia?",
            answer: "Se o pagador de pensão estiver trabalhando registrado (CLT), o desconto é feito diretamente na folha de pagamento."
        },
    ];

    return (
        <div className="faq-container">
            <h2>FAQ</h2>
            {faqs.map((faq, index) => (
                <div
                    className={`faq-item ${open === index ? 'open' : ''}`}
                    key={index}
                >
                    <div className="faq-question" onClick={() => toggle(index)}>
                        <span className="faq-icon">{open === index ? '-' : '+'}</span>
                        {faq.question}
                    </div>
                    {open === index && <div className="faq-answer">{faq.answer}</div>}
                </div>
            ))}
        </div>
    );
};

export default Faq;
