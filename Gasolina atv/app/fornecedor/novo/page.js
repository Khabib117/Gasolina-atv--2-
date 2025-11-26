import { Fornecedor } from "../../../database/tables";
import { redirect } from "next/navigation";

async function insereFornecedor(formData) {
  "use server";

  const dados = {
    RazSoc: formData.get("razsoc"),
    CnpFor: formData.get("cnpfor"),
    telefone: formData.get("telefone"),
    email: formData.get("email"),
  };

  await Fornecedor.create(dados);
  redirect("/fornecedor");
}

export default function NovoFornecedorPage() {
  return (
    <main>
      <h1>Novo Fornecedor</h1>
      <form action={insereFornecedor}>
        <label>Razão Social</label><br />
        <input name="razsoc" required /><br />

        <label>CNPJ</label><br />
        <input name="cnpfor" required /><br />

        <label>Telefone</label><br />
        <input name="telefone" /><br />

        <label>Email</label><br />
        <input name="email" type="email" /><br />

        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
}
