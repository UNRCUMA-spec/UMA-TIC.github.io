// Interacciones comunes. Edita el contenido y las respuestas en cada HTML.
document.querySelectorAll('[role="tablist"]').forEach(list => {
  const tabs = [...list.querySelectorAll('[role="tab"]')];

  function activate(tab) {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', selected);
      item.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(item.getAttribute('aria-controls'));
      panel.hidden = !selected;
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        activate(tabs[next]);
        tabs[next].focus();
      }
    });
  });
});

document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const slides = [...carousel.querySelectorAll('[data-carousel-slide]')];
  const previous = carousel.querySelector('[data-carousel-previous]');
  const next = carousel.querySelector('[data-carousel-next]');
  const status = carousel.querySelector('[data-carousel-status]');
  let currentIndex = 0;

  function showSlide(index) {
    currentIndex = index;
    slides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== currentIndex;
      slide.setAttribute('aria-label', `Diapositiva ${slideIndex + 1} de ${slides.length}`);
    });
    previous.disabled = currentIndex === 0;
    next.disabled = currentIndex === slides.length - 1;
    status.textContent = `Diapositiva ${currentIndex + 1} de ${slides.length}`;
  }

  previous.addEventListener('click', () => showSlide(currentIndex - 1));
  next.addEventListener('click', () => showSlide(currentIndex + 1));
  showSlide(0);
});

document.querySelectorAll('form[data-quiz]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    let score = 0;
    const groups = [...form.querySelectorAll('fieldset')];

    groups.forEach(group => {
      const chosen = group.querySelector('input:checked');
      const feedback = group.querySelector('[role="status"]');
      const correct = chosen && chosen.dataset.correct === 'true';
      if (correct) score++;
      const prefix = correct ? 'Correcto. ' : 'Revisa tu respuesta. ';
      feedback.textContent = prefix + group.dataset.explanation;
    });

    form.querySelector('[data-result]').textContent =
      `Resultado: ${score} de ${groups.length}. Puedes cambiar tus respuestas y volver a revisar.`;
  });

  form.addEventListener('reset', () => {
    form.querySelectorAll('[role="status"]').forEach(element => {
      element.textContent = '';
    });
  });
});

document.querySelectorAll('[data-matching]').forEach(matching => {
  const selects = [...matching.querySelectorAll('select[data-match]')];
  const rows = [...matching.querySelectorAll('.matching-row')];
  const feedback = matching.querySelector('[data-matching-feedback]');
  const checkButton = matching.querySelector('[data-matching-check]');
  const resetButton = matching.querySelector('[data-matching-reset]');

  checkButton.addEventListener('click', () => {
    const complete = selects.every(select => select.value);
    if (!complete) {
      feedback.textContent = `Selecciona una opción en las ${rows.length} situaciones.`;
      return;
    }

    let correctCount = 0;
    rows.forEach(row => {
      const select = row.querySelector('select');
      const correct = select.value === select.dataset.match;
      row.classList.remove('is-correct', 'is-wrong');
      row.classList.add(correct ? 'is-correct' : 'is-wrong');
      if (correct) correctCount++;
    });

    feedback.textContent = correctCount === rows.length
      ? `Correcto. Elegiste el formato adecuado en las ${rows.length} situaciones.`
      : `Obtienes ${correctCount} de ${rows.length} respuestas correctas. Revisa las opciones marcadas en rojo.`;
  });

  resetButton.addEventListener('click', () => {
    selects.forEach(select => {
      select.value = '';
    });
    rows.forEach(row => row.classList.remove('is-correct', 'is-wrong'));
    feedback.textContent = '';
  });
});

document.querySelectorAll('[data-puzzle]').forEach(puzzle => {
    const bank = puzzle.querySelector('[data-piece-bank]');
    const slots = [...puzzle.querySelectorAll('[data-slot]')];
    const pieces = [...puzzle.querySelectorAll('[data-piece]')];
    const feedback = puzzle.querySelector('[data-puzzle-feedback]');
    let selectedPiece = null;

    slots.forEach(slot => {
      slot.dataset.placeholder = slot.textContent.trim();
      slot.setAttribute('role', 'button');
      slot.setAttribute('tabindex', '0');
      slot.setAttribute('aria-label', `Posición de rompecabezas: ${slot.dataset.placeholder}`);
    });

    function clearSelection() {
      if (selectedPiece) selectedPiece.classList.remove('is-selected');
      selectedPiece = null;
    }

    function moveToSlot(piece, slot) {
      const occupied = slot.querySelector('[data-piece]');
      if (occupied) moveToBank(occupied);
      slot.textContent = '';
      slot.appendChild(piece);
      slot.classList.add('has-piece');
    }

    function moveToBank(piece) {
      const oldSlot = piece.parentElement;
      if (oldSlot && oldSlot.matches('[data-slot]')) {
        oldSlot.classList.remove('has-piece');
        oldSlot.textContent = oldSlot.dataset.placeholder;
      }
      bank.appendChild(piece);
    }

    pieces.forEach(piece => {
      piece.setAttribute('aria-label', `Seleccionar pieza ${piece.textContent.trim()}`);
      piece.addEventListener('click', event => {
        event.stopPropagation();
        if (selectedPiece === piece) {
          clearSelection();
          return;
        }
        clearSelection();
        selectedPiece = piece;
        piece.classList.add('is-selected');
      });
      piece.addEventListener('dragstart', event => {
        clearSelection();
        event.dataTransfer.setData('text/plain', piece.dataset.piece);
        event.dataTransfer.effectAllowed = 'move';
    });
    });

    slots.forEach(slot => {
      slot.addEventListener('click', () => {
        if (selectedPiece) {
          moveToSlot(selectedPiece, slot);
          clearSelection();
          feedback.textContent = '';
        } else {
          const occupied = slot.querySelector('[data-piece]');
          if (occupied) {
            moveToBank(occupied);
            feedback.textContent = '';
          }
        }
      });
      slot.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          slot.click();
        }
      });
      slot.addEventListener('dragover', event => {
        event.preventDefault();
        slot.classList.add('is-over');
      });
      slot.addEventListener('dragleave', () => slot.classList.remove('is-over'));
      slot.addEventListener('drop', event => {
        event.preventDefault();
        slot.classList.remove('is-over');
        const value = event.dataTransfer.getData('text/plain');
        const piece = pieces.find(item => item.dataset.piece === value);
        if (piece) moveToSlot(piece, slot);
      });
    });

    bank.addEventListener('dragover', event => {
      event.preventDefault();
    });
    bank.addEventListener('drop', event => {
      event.preventDefault();
      const value = event.dataTransfer.getData('text/plain');
      const piece = pieces.find(item => item.dataset.piece === value);
      if (piece) moveToBank(piece);
    });

    puzzle.querySelector('[data-puzzle-reset]').addEventListener('click', () => {
      clearSelection();
      pieces.forEach(piece => moveToBank(piece));
      feedback.textContent = '';
    });

    puzzle.querySelector('[data-puzzle-check]').addEventListener('click', () => {
      const complete = slots.every(slot => slot.querySelector('[data-piece]'));
      if (!complete) {
        feedback.textContent = 'Coloca todas las piezas antes de comprobar.';
        return;
      }

      const correct = slots.every(slot => {
        const piece = slot.querySelector('[data-piece]');
        return piece && piece.dataset.piece === slot.dataset.correct;
      });

      feedback.textContent = correct
        ? 'Correcto. Las piezas forman la estructura adecuada en APA 7.'
        : 'No todavía. Observa el orden y vuelve a intentarlo.';
    });
});
