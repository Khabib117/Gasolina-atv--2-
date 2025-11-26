import Menu from "../componentes/menu";

export const metadata = {
  title: 'Posto de Gasolina',
  description: 'Sistema de gerenciamento de vendas e abastecimento',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Menu />
        </header>

        <main>
          {children}
        </main>

        <footer>
          <p>Desenvolvido por Jhon Leal.</p>
        </footer>
      </body>
    </html>
  );
}
