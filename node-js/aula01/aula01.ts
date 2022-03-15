interface usuario {
    nome: string,
    email: string,
    telefone?: string;
}

// ? - Definir parâmetro como OPCIONAL

function enviarEmail(user: usuario) {
    console.log(`Olá ${user.nome} seu email é ${user.email} e seu telefone é ${user.telefone}`);
}


enviarEmail({
    nome: "Pedro",
    email: "phrf98@gmail.com",
});