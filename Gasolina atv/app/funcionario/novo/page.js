import { Funcionario } from "../../../database/tables";
import { redirect } from "next/navigation";

async function insereFuncionario(formData) {
  "use server";

  const dados = {
    Nome: formData.get("nome"),
    cpf: formData.get("cpf"),
    email: formData.get("email"),
    telefone: formData.get("telefone"),
  };

  await Funcionario.create(dados);
  redirect("/funcionario");
}

export default function NovoFuncionarioPage() {
  return (
    <main>
      <h1>Novo Funcionário</h1>
      <form action={insereFuncionario}>
        <label>Nome</label><br />
        <input name="nome" required /><br />

        <label>CPF</label><br />
        <input name="cpf" required /><br />

        <label>Email</label><br />
        <input name="email" type="email" /><br />

        <label>Telefone</label><br />
        <input name="telefone" /><br />

        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
}
