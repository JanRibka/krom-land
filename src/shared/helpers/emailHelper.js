export const sendEmail = (name, from, subject, message) => {
  if (!!window.Email) {
    let result;

    window.Email.send({
      //   Host: "smtp.elasticemail.com",
      //   Username: "weby.ribka@gmail.com",
      //   Password: "4134C13D23400ED635D1D7B31E997CF8398D",
      SecureToken: "4efa869b-44d4-4c98-80fb-599023658f5b",
      To: "weby.ribka@gmail.com",
      From: "weby.ribka@gmail.com",
      //   ReplyTo: "ribkaj@seznam.cz",
      //   ReplyFrom: "ribkaj@seznam.cz",
      Subject: subject,
      Body: contactEmailBody(name, from, message),
    }).then((message) => {
      result = message;
      debugger;
      console.log("Zpráva po odeslání mailu", message);
    });

    return result;
  }
};

const contactEmailBody = (name, email, message) => {
  return `
    ${name} vám posílá zprávu z emailu: ${email}
    <br />
    <br />
    ${message}
    <br />
    <br />
    Hezký den
    `;
};
