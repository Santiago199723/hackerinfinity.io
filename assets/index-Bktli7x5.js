<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Indicador em Manutenção</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      height: 100vh;
      width: 100vw;
      background: linear-gradient(135deg, #1f1f1f, #383838);
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: 'Segoe UI', sans-serif;
      text-align: center;
      padding: 20px;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 20px;
      color: #ffcc00;
      animation: pulse 1.5s infinite;
    }

    p {
      font-size: 1.2rem;
      color: #ddd;
      max-width: 500px;
    }

    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid #fff;
      border-top: 5px solid #ffcc00;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 30px;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
  </style>
</head>
<body>

  <div class="spinner"></div>
  <h1>🛠️ Indicador em Manutenção</h1>
  <p>Estamos otimizando e melhorando a performance do indicador. 🚀<br>
     Logo mais ele estará de volta ainda melhor!</p>

  <script>
    // Aqui você pode futuramente adicionar lógica para redirecionar ou atualizar automaticamente
  </script>

</body>
</html>
