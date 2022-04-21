import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const contato = async (req: Request, res: Response) => {
  // Passo 1 - Configurar o transporter
  let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5f16281feff0c3",
      pass: "27590e653c147b",
    },
  });

  // Passo 2 - Configurar a mensagem
  let message = {
    from: "não-responda@suporte.com",
    to: "teste@teste.com",
    replyTo: req.body.from,
    subject: req.body.subject,
    html: req.body.email,
    // text: "Olá Teste, como você vai?", // Hello Teste, how are you?
  };

  // Passo 3 - Enviar a mensagem
  let info = await transport.sendMail(message);
  console.log("INFO", info);

  res.json({ success: true });
};
