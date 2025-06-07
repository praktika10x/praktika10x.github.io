document.addEventListener('DOMContentLoaded', function() {
    const userNameDisplay = document.getElementById('userNameDisplay');
    const userName = localStorage.getItem('userName') || 'користувач';
    
    if (userNameDisplay) {
      userNameDisplay.textContent = userName;
    }
    
    const professionsGrid = document.getElementById('professionsGrid');
    
    if (professionsGrid) {
      const selectedInterests = JSON.parse(localStorage.getItem('selectedInterests') || '[]');
      
      const professionsData = [
        {
          title: 'Інженер з хмарних обчислень',
          subtitle: 'Cloud Engineer',
          interests: ['cloudArchitecture', 'virtualization', 'automation']
        },
        {
          title: 'Системний адміністратор',
          subtitle: 'System Administrator',
          interests: ['virtualization', 'infrastructure', 'monitoring']
        },
        {
          title: 'Хмарний архітектор',
          subtitle: 'Cloud Architect',
          interests: ['cloudArchitecture', 'infrastructure', 'deployment']
        },
        {
          title: 'Інженер DevOps',
          subtitle: 'DevOps Engineer',
          interests: ['automation', 'deployment', 'monitoring']
        },
        {
          title: 'Інженер з безпеки хмарних технологій',
          subtitle: 'Cloud Security Engineer',
          interests: ['cybersecurity', 'cloudArchitecture', 'monitoring']
        },
        {
          title: 'Інженер з автоматизації інфраструктури',
          subtitle: 'Infrastructure Automation Engineer',
          interests: ['automation', 'infrastructure', 'deployment']
        },
        {
          title: 'Адміністратор баз даних',
          subtitle: 'Database Administrator',
          interests: ['databases', 'backup', 'monitoring']
        },
        {
          title: 'Інженер з віртуалізації',
          subtitle: 'Virtualization Engineer',
          interests: ['virtualization', 'infrastructure', 'automation']
        },
        {
          title: 'Інженер з мережевої інфраструктури',
          subtitle: 'Network Infrastructure Engineer',
          interests: ['networking', 'infrastructure', 'cybersecurity']
        },
        {
          title: 'Спеціаліст з моніторингу та продуктивності серверів',
          subtitle: 'Server Performance Monitoring Specialist',
          interests: ['monitoring', 'infrastructure', 'automation']
        },
        {
          title: 'Інженер з підтримки серверів',
          subtitle: 'Server Support Engineer',
          interests: ['infrastructure', 'monitoring', 'networking']
        },
        {
          title: 'Фахівець з резервного копіювання і відновлення',
          subtitle: 'Backup and Recovery Specialist',
          interests: ['backup', 'infrastructure', 'databases']
        },
        {
          title: 'Інженер з розгортання хмарних сервісів',
          subtitle: 'Cloud Deployment Engineer',
          interests: ['deployment', 'cloudArchitecture', 'automation']
        },
        {
          title: 'Архітектор CI/CD',
          subtitle: 'CI/CD Architect',
          interests: ['deployment', 'automation', 'infrastructure']
        }
      ];
      
      let matchingProfessions = [];
      
      if (selectedInterests.length === 0) {
        matchingProfessions = professionsData;
      } else {
        matchingProfessions = professionsData
          .map(profession => {
            let score = 0;
            selectedInterests.forEach(interest => {
              if (profession.interests.includes(interest)) {
                score++;
              }
            });
            return { ...profession, score };
          })
          .filter(profession => profession.score > 0)
          .sort((a, b) => b.score - a.score); 
      }
      
      if (matchingProfessions.length === 0) {
        professionsGrid.innerHTML = `
          <div class="no-matches">
            <p>За вашими інтересами не знайдено відповідних професій. Спробуйте вибрати інші інтереси.</p>
          </div>
        `;
      } else {
        matchingProfessions.forEach((profession, index) => {
          const professionCard = document.createElement('div');
          professionCard.className = 'profession-card';
          professionCard.style.animationDelay = `${index * 0.1}s`;
          
          professionCard.innerHTML = `
            <div class="profession-title">${profession.title}</div>
            <div class="profession-subtitle">${profession.subtitle}</div>
          `;
          
          professionsGrid.appendChild(professionCard);
        });
      }
    }
    
    
    const kaleidoscope = document.querySelector('.kaleidoscope');
    if (kaleidoscope) {
      document.addEventListener('mousemove', function(e) {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 2;
        const yPos = (e.clientY / window.innerHeight - 0.5) * 2;
        
        kaleidoscope.style.transform = `perspective(1000px) rotateX(${yPos * 2}deg) rotateY(${xPos * 2}deg)`;
      });
    }
  });
