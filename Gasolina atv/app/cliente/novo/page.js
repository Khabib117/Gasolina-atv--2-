import { Cliente } from "../../../database/tables";
import { redirect } from "next/navigation";

async function insereCliente(formData) {
  "use server";

  const dados = {
    nome: formData.get("nome"),
    cpf: formData.get("cpf"),
    email: formData.get("email"),
    telefone: formData.get("telefone"),
  };

  await Cliente.create(dados);
  redirect("/cliente");
}

export default function NovoClientePage() {
  return (
    <main>
      <h1>Novo Cliente</h1>
      <form action={insereCliente}>
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
