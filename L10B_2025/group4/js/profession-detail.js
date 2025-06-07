document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const professionName = urlParams.get('profession');
  
  if (!professionName) {
    window.location.href = './results.html';
    return;
  }
  
  loadProfessionData(professionName);
});

async function loadProfessionData(professionName) {
  try {
    const response = await fetch('./professions.json');
    const professionsData = await response.json();
    
    const profession = professionsData.find(p => p.name === professionName);
    
    if (!profession) {
      showError('Професію не знайдено');
      return;
    }
    
    displayProfessionData(profession);
    
  } catch (error) {
    console.error('Помилка завантаження даних:', error);
    showError('Помилка завантаження даних про професію');
  }
}

function displayProfessionData(profession) {
  document.title = `${profession.name} - Калейдоскоп професій`;
  
  document.getElementById('professionTitle').textContent = profession.name;
  document.getElementById('salaryAmount').textContent = profession.salary.replace('$', '');
  document.getElementById('professionDescription').textContent = profession.description;
  
  displayCareerLevels(profession.career);
  
  displaySkills(profession.skills);
  
  document.querySelectorAll('.loading').forEach(el => {
    el.classList.remove('loading');
  });
}

function displayCareerLevels(careerLevels) {
  const careerContainer = document.getElementById('careerLevels');
  careerContainer.innerHTML = '';
  
  careerLevels.forEach((level, index) => {
    const levelElement = document.createElement('div');
    levelElement.className = 'career-level';
    levelElement.style.animationDelay = `${index * 0.1}s`;
    
    levelElement.innerHTML = `
      <div class="career-level-title">${level.level}</div>
    `;
    
    careerContainer.appendChild(levelElement);
  });
}

function displaySkills(skills) {
  const skillsContainer = document.getElementById('skillsList');
  skillsContainer.innerHTML = '';
  
  skills.forEach((skill, index) => {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill-badge';
    skillElement.textContent = skill;
    skillElement.style.animationDelay = `${index * 0.1}s`;
    
    skillsContainer.appendChild(skillElement);
  });
}

function showError(message) {
  const container = document.querySelector('.container');
  container.innerHTML = `
    <div style="text-align: center; padding: 50px;">
      <h2 style="color: white; margin-bottom: 20px;">Помилка</h2>
      <p style="font-size: 1.2rem; margin-bottom: 30px; color: #9dc6f4;">${message}</p>
      <button class="nav-button" onclick="goBack()">Назад до результатів</button>
    </div>
  `;
}

function goBack() {
  if (document.referrer && document.referrer.includes('results.html')) {
    window.history.back();
  } else {
    window.location.href = './results.html';
  }
}

function goHome() {
  window.location.href = './index.html';
}

function addLoadingAnimations() {
  const elements = document.querySelectorAll('.career-level, .skill-badge');
  elements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100 + index * 50);
  });
} 