// Global Javascript for After Hours

document.addEventListener('DOMContentLoaded', () => {
  // Navigation Active State (Fallback for inline elements)
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Booking Form Submission
  const bookingForm = document.getElementById('bookingForm');
  const bookingSuccess = document.getElementById('bookingSuccess');
  if (bookingForm && bookingSuccess) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Hide form and show success message
      bookingForm.style.display = 'none';
      bookingSuccess.style.display = 'block';
    });
  }

  // Menu Filters
  const filterButtons = document.querySelectorAll('.filter-row button');
  const menuItems = document.querySelectorAll('.menu-item');

  if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all
        filterButtons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked
        btn.classList.add('active');

        // Extract selected category key (e.g., "small-plates", "mains", "all")
        const targetCategory = btn.textContent.trim().toLowerCase().replace(/\s+/g, '-');

        menuItems.forEach(item => {
          const itemCategories = (item.getAttribute('data-category') || '').toLowerCase().split(' ');

          if (targetCategory === 'all' || itemCategories.includes(targetCategory)) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // "I'm in" Event RSVP Buttons
  const eventButtons = document.querySelectorAll('.event-save');
  eventButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!btn.classList.contains('saved')) {
        btn.innerHTML = 'SAVED ✓';
        btn.classList.add('saved');
      } else {
        btn.innerHTML = 'I’m in <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>';
        btn.classList.remove('saved');
      }
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Draggable Sticky Notes Logic
  const notes = document.querySelectorAll('.note');
  let topZIndex = 30;

  notes.forEach(note => {
    let isDragging = false;
    let startX, startY, currentTransX = 0, currentTransY = 0;

    const onStart = (e) => {
      isDragging = true;
      topZIndex++;
      note.style.zIndex = topZIndex.toString();

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      startX = clientX - currentTransX;
      startY = clientY - currentTransY;
    };

    const onMove = (e) => {
      if (!isDragging) return;
      
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      currentTransX = clientX - startX;
      currentTransY = clientY - startY;

      note.style.transform = `translate(${currentTransX}px, ${currentTransY}px)`;
    };

    const onEnd = () => {
      isDragging = false;
    };

    note.addEventListener('mousedown', onStart);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);

    note.addEventListener('touchstart', onStart, { passive: true });
    document.addEventListener('touchmove', onMove, { passive: true });
    document.addEventListener('touchend', onEnd);
  });
});
