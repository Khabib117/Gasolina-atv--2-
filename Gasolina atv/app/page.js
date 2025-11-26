function Home() {
  return (
    <div>
      <style>{`
        /* Reset */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Poppins", sans-serif;
          background-color: #f3f7f7;
          color: #222;
        }

        /* Hero */
        .home-container {
          height: 100vh;
          width: 100%;
          background-image: url("https://images.unsplash.com/photo-1503376780353-7e6692767b70");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .overlay {
          background: rgba(0, 0, 0, 0.55);
          padding: 50px;
          border-radius: 12px;
          text-align: center;
          color: #fff;
          max-width: 650px;
        }

        .overlay h1 {
          font-size: 2.8rem;
          margin-bottom: 20px;
          color: #f4e04d;
        }

        .overlay p {
          font-size: 1.3rem;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .btn {
          background: linear-gradient(135deg, #ff4d00, #ffb347);
          color: #fff;
          padding: 14px 28px;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          cursor: pointer;
          text-decoration: none;
          transition: 0.3s;
        }

        .btn:hover {
          transform: scale(1.05);
          background: linear-gradient(135deg, #cc3c00, #ff944d);
        }

        /* Serviços */
        .gallery {
          padding: 60px 20px;
          background: #fff;
          text-align: center;
        }

        .gallery h2 {
          font-size: 2rem;
          margin-bottom: 40px;
          color: #b33f00;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .card {
          background: #fefcf9;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s;
        }

        .card:hover {
          transform: scale(1.05);
        }

        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .card h3 {
          margin: 15px 0 10px;
          font-size: 1.4rem;
          color: #b33f00;
        }

        .card p {
          font-size: 1rem;
          color: #555;
          padding: 0 15px 20px;
        }
      `}</style>

      {/* Hero */}
      <div className="home-container">
        <div className="overlay">
          <h1>⛽ Bem-vindo ao Posto Jhon Leal</h1>
          <p>Abasteça com qualidade, confiança e o melhor atendimento da cidade.</p>
          <a href="/bombas" className="btn">Ver Bombas e Combustíveis</a>
        </div>
      </div>

      {/* Serviços */}
      <section className="gallery">
        <h2>🚘 Nossos Serviços</h2>
        <div className="gallery-grid">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1623949249233-bd1c2f56f6c3" alt="Bomba de gasolina" />
            <h3>Abastecimento Rápido</h3>
            <p>Serviço ágil e seguro, com controle digital em tempo real.</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1623949249401-45a8a917e5d4" alt="Troca de óleo" />
            <h3>Troca de Óleo</h3>
            <p>Produtos de alta qualidade e manutenção garantida.</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1623949249012-cccbdf4bfa33" alt="Loja de conveniência" />
            <h3>Loja de Conveniência</h3>
            <p>Bebidas, lanches e produtos automotivos em um só lugar.</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1614623338007-6b8d6eac5e76" alt="Lavagem de carros" />
            <h3>Lavagem Completa</h3>
            <p>Cuide do seu carro com nossa equipe especializada e equipamentos modernos.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
