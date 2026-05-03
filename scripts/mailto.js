const toggleMail = document.querySelector('#mailTo');

toggleMail.addEventListener('click', () => {
  const emailTo = 'lqueirozjs@hotmail.com';
  const emailSubject = encodeURIComponent('Contato via Portfólio');
  const emailBody = encodeURIComponent(
    'Olá, Lucas!\n\nMeu nome é [seu nome] e encontrei seu portfólio.\n\nMotivo do contato:\n[Descreva aqui]\n\nAtenciosamente,\n[Seu nome]',
  );
  const mailToUrl = `mailto:${emailTo}?&subject=${emailSubject}&body=${emailBody}`;
  toggleMail.setAttribute('href', `${mailToUrl}`);
});
