import { Cliente } from "../../database/tables";
//import {redirect} from 'next/navigation'; 
//function removecliente(formData){
 // "use server";
 /// const id = formData.get('id');
 //// const cliente = Cliente.findByPk(id);
 // cliente.destroy();
 // redirect('/cliente');
//}
export default async function ClientePage() {
  const clientes = await Cliente.findAll();

  return (
    <main>
      <h1>Clientes</h1>
      <a href="/cliente/novo">Novo Cliente</a>
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
          {clientes.map((c) => (
            <tr key={c.id}>
              <td>{c.nome}</td>
              <td>{c.cpf}</td>
              <td>{c.email}</td>
              <td>{c.telefone}</td>
          
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
