import { Produto } from "../../../database/tables";
import { redirect } from "next/navigation";

async function insereProduto(formData) {
  "use server";

  const dados = {
    Descricao: formData.get("descricao"),
    CnpFor: formData.get("cnpfor"),
    ValUnit: parseFloat(formData.get("valunit")),
    quantidade: parseFloat(formData.get("quantidade")),
  };

  await Produto.create(dados);
  redirect("/produtos");
}

export default function NovoProdutoPage() {
  return (
    <main>
      <h1>Novo Produto</h1>
      <form action={insereProduto}>
        <label>Descrição</label><br />
        <input name="descricao" required /><br />

        <label>CNPJ Fornecedor</label><br />
        <input name="cnpfor" required /><br />

        <label>Valor Unitário</label><br />
        <input name="valunit" type="number" step="0.01" required /><br />

        <label>Quantidade</label><br />
        <input name="quantidade" type="number" step="0.01" required /><br />

        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
}
