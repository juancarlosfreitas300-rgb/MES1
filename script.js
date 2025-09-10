function verificarSenha() {
  const senha = document.getElementById("senha").value;
  const senhaCorreta = "julia2530"; // 🔑 Defina a senha aqui

  if (senha === senhaCorreta) {
    document.getElementById("login").style.display = "none";
    document.getElementById("conteudo").style.display = "block";
  } else {
    document.getElementById("erro").style.display = "block";
  }
}