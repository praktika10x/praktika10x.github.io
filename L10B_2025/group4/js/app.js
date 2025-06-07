document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('startBtn');
    const modal = document.createElement('div');
    
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <h2>Як вас звати?</h2>
        <form id="nameForm" class="modal-form">
          <div class="form-group">
            <input type="text" id="userName" name="userName" placeholder="Ваше ім'я" required>
          </div>
          <button type="submit" class="btn-primary">Далі</button>
        </form>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    if (startBtn) {
      startBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.add('show');
        setTimeout(() => {
          const userNameInput = document.getElementById('userName');
          if (userNameInput) {
            userNameInput.focus();
          }
        }, 100);
      });
    }
    
    const nameForm = document.getElementById('nameForm');
    if (nameForm) {
      nameForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const userName = document.getElementById('userName').value.trim();
        
        if (!userName) {
          alert('Будь ласка, введіть ваше ім\'я');
          return;
        }
        
        localStorage.setItem('userName', userName);
        
        window.location.href = './interests.html';
      });
    }
    
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  });
