import { Fornecedor } from "../../database/tables";

export default async function FornecedorPage() {
  const fornecedores = await Fornecedor.findAll();

  return (
    <main>
      <h1>Fornecedores</h1>
      <a href="/fornecedor/novo">Novo Fornecedor</a>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Razão Social</th>
            <th>CNPJ</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {fornecedores.map((f) => (
            <tr key={f.id}>
              <td>{f.RazSoc}</td>
              <td>{f.CnpFor}</td>
              <td>{f.email}</td>
              <td>{f.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
