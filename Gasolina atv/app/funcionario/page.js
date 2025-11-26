import { Funcionario } from "../../database/tables";

export default async function FuncionarioPage() {
  const funcionarios = await Funcionario.findAll();

  return (
    <main>
      <h1>Funcionários</h1>
      <a href="/funcionario/novo">Novo Funcionário</a>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((f) => (
            <tr key={f.id}>
              <td>{f.Nome}</td>
              <td>{f.cpf}</td>
              <td>{f.email}</td>
              <td>{f.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
