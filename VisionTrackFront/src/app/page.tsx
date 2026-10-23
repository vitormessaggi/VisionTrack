import { ArrowFunction, PrimeiroComponente } from "../components/PrimeiroComponente";

export default function Home() {
  return (
    <>
      <PrimeiroComponente 
      mensagem="Olá, esta mensagem estou passando um parâmetro. Clique aqui!"
      mensagemBotao="Essa é a mensagem do botão"/>
      <ArrowFunction/>
    </>

  );
}
