import { Produto } from "../../database/tables";

export default async function ProdutosPage() {
  const produtos = await Produto.findAll();

  return (
    <main>
      <h1>Produtos</h1>
      <a href="/produtos/novo">Novo Produto</a>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>CNPJ Fornecedor</th>
            <th>Valor Unitário</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((p) => (
            <tr key={p.id}>
              <td>{p.Descricao}</td>
              <td>{p.CnpFor}</td>
              <td>{p.ValUnit}</td>
              <td>{p.quantidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
