document.addEventListener('DOMContentLoaded', function() {
    const userNameDisplay = document.getElementById('userNameDisplay');
    const userName = localStorage.getItem('userName') || 'користувач';
    
    if (userNameDisplay) {
      userNameDisplay.textContent = userName;
    }
    
    const interestsForm = document.getElementById('interestsForm');
    const showResultsBtn = document.getElementById('showResultsBtn');
    
    if (interestsForm && showResultsBtn) {
      showResultsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const checkboxes = document.querySelectorAll('input[name="interests"]:checked');
        
        if (checkboxes.length === 0) {
          alert('Будь ласка, оберіть принаймні один інтерес');
          return;
        }
        
        const selectedInterests = Array.from(checkboxes).map(checkbox => checkbox.value);
        localStorage.setItem('selectedInterests', JSON.stringify(selectedInterests));
        
        window.location.href = './results.html';
      });
    }
    
    
    const savedInterests = JSON.parse(localStorage.getItem('selectedInterests') || '[]');
    if (savedInterests.length > 0) {
      savedInterests.forEach(interest => {
        const checkbox = document.getElementById(interest);
        if (checkbox) {
          checkbox.checked = true;
        }
      });
    }
  });
