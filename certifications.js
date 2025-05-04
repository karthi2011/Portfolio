const certifications = [
    { title: "Prompt Engineering with LangChain", description: "LinkedIn Learning, 2025." },
    { title: "Oracle SQL (19c) Basics", description: "LinkedIn Learning, 2025." },
    { title: "Learning Java 2018", description: "LinkedIn Learning, 2025." },
    { title: "RESTful APIs with Flask", description: "LinkedIn Learning, 2025." }
  ];
  
  const certList = document.getElementById("cert-list");
  certifications.forEach(cert => {
    const card = document.createElement("div");
    card.innerHTML = `<h3>${cert.title}</h3><p>${cert.description}</p>`;
    certList.appendChild(card);
  });