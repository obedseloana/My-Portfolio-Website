// ==== Quote of the Day API (Ch. 13 + 10) ====
const quoteText = document.getElementById('quote-text');
if (quoteText) {
  async function loadQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      quoteText.textContent = `"${data.content}" — ${data.author}`;
    } catch (err) {
      quoteText.textContent = 'Quote could not load. Try refreshing.';
      console.error('Quote fetch failed:', err);
    }
  }
  loadQuote();
}

// ==== Contact Form Validation (Ch. 5 + 10) ====
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');

    try {
      if (!name.value || !email.value || !message.value) {
        throw new Error('Please fill out all fields.');
      }
      if (!email.value.includes('@')) {
        throw new Error('Enter a valid email address.');
      }

      formMessage.textContent = 'Thanks for reaching out!';
      formMessage.style.color = 'green';
      form.reset();
    } catch (err) {
      formMessage.textContent = err.message;
      formMessage.style.color = 'red';
    }
  });
}

// ==== Chart.js Skills Graph (Ch. 12 + 14) ====
const ctx = document.getElementById('skillsChart');
if (ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Java', 'C++', 'HTML/CSS', 'JavaScript', 'SQL', 'Ms Office'],
      datasets: [{
        label: 'Skill Level (%)',
        data: [58, 63, 76, 48, 70, 86],
        backgroundColor: '#0077aa'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// ==== Project Class (Ch. 11 - OOP) ====
class Project {
  constructor(title, description, link) {
    this.title = title;
    this.description = description;
    this.link = link;
  }

  display() {
    console.log(`${this.title}: ${this.description} — ${this.link}`);
  }
}

// Example usage
const projects = [
  new Project('Calculator', 'Simple arithmetic calculator.', 'projects/calculator/index.html'),
  new Project('To-Do List', 'Task tracker app.', 'projects/todo/index.html'),
  new Project('Journal', 'Save personal notes.', 'projects/journal/index.html')
];

// Log all projects
projects.forEach(p => p.display());


// === Dark Mode Toggle ===
const toggleBtn = document.getElementById("themeToggle");
if (toggleBtn) {
  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️ Light Mode";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Update button text
    if (document.body.classList.contains("dark")) {
      toggleBtn.textContent = "☀️ Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      toggleBtn.textContent = "🌙 Dark Mode";
      localStorage.setItem("theme", "light");
    }
  });
}
