const projects = [
    {
      title: "Intelligent Hiring Assistant",
      tools: "FLASK, REACT, LANGCHAIN, PINECONE, RAG",
      description: "LLM-powered recruitment tool using Flask and React. This system leverages AI and machine learning to eliminate biases in the hiring process by analyzing resumes and interview answers. It includes an automated job matching system, candidate scoring, and an admin dashboard with data visualizations for HR to assess applicants efficiently. Integrated with vector databases (Pinecone) and RAG (Retrieval-Augmented Generation) techniques to enhance the recruitment process."
    },
    {
      title: "Mahi Herbals and Naturals Website",
      tools: "MERN STACK, BRAINTREE API, NPM PIE-CHART",
      description: "A responsive e-commerce site for herbal products with integrated payment, order tracking, and real-time notifications. Built using the MERN stack and styled for optimal user experience."
    },
    {
      title: "Monthly Calendar (Java Implementation)",
      tools: "JAVA (NO BUILT-IN DATE FUNCTIONS)",
      description: "Text-based calendar generation for any month/year using custom logic. Demonstrates deep understanding of odd day calculation, algorithm design, and Java control structures."
    },
    {
      title: "Complete Responsive Flower Shop",
      tools: "HTML, CSS, JAVASCRIPT, PHP, MYSQL",
      description: "An online flower shop with payment integration and responsive design. Combines modern frontend with backend PHP/MySQL for dynamic user and order management."
    },
    {
      title: "Web Scraping Tool for GST Status",
      tools:"PYTHON, SELENIUM, REQUESTS",
      description: "Developed an automated web scraping tool that fetches GST status from various websites, streamlining the process of tracking GST compliance for businesses. The tool provides real-time updates and ensures that businesses remain compliant with tax regulations."
    },
    {
      title: "WhatsApp Automated Message Sender",
      tools:"PYTHON, SELENIUM, REQUESTS",
  
      description: "Developed an automated WhatsApp message-sending tool for attendance management at TVS Sensing Solutions. The tool integrates with the WhatsApp API and sends attendance reminders, notifications, and alerts to employees, streamlining the attendance tracking process. This project demonstrated my ability to automate communication workflows and manage real-time notifications for better operational efficiency."
    }
  ];
  
  const projectList = document.getElementById("project-list");
  
  // Create modal elements
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");
  modalOverlay.style.display = "none";
  
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  
  const closeButton = document.createElement("button");
  closeButton.classList.add("modal-close");
  closeButton.innerHTML = "&times;";
  
  modalContent.appendChild(closeButton);
  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);
  
  // Close modal when clicking close button or overlay
  closeButton.addEventListener("click", () => {
    modalOverlay.style.display = "none";
  });
  
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = "none";
    }
  });
  
  
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card");
  
    const cardTitle = document.createElement("h3");
    cardTitle.textContent = project.title;
  
    
    const cardTools = document.createElement("p");
    cardTools.innerHTML = `<strong>TOOLS USED:</strong> ${project.tools}`;
  
    
    const cardDescription = document.createElement("p");
    cardDescription.textContent = project.description.substring(0, 100) + "...";
    
    const readMore = document.createElement("span");
    readMore.classList.add("read-more");
    readMore.textContent = "Read more";
  
    card.appendChild(cardTitle);
    card.appendChild(cardTools);
    card.appendChild(cardDescription);
    card.appendChild(readMore);
  
    readMore.addEventListener("click", (e) => {
      e.stopPropagation();
      modalContent.innerHTML = `
        <button class="modal-close">&times;</button>
        <h3>${project.title}</h3>
        <p><strong>TOOLS USED:</strong> ${project.tools}</p>
        <p>${project.description}</p>
      `;
      modalOverlay.style.display = "flex";
      
      // Re-attach close event to the new button
      modalContent.querySelector(".modal-close").addEventListener("click", () => {
        modalOverlay.style.display = "none";
      });
    });
  
    projectList.appendChild(card);
  });