// function openModal(id) {
//   document.getElementById(id).style.display = 'flex';
// }
// function closeModal(id) {
//   document.getElementById(id).style.display = 'none';
// }
// window.onclick = function(event) {
//   const modals = document.querySelectorAll('.modal');
//   modals.forEach(m => {
//     if (event.target === m) {
//       m.style.display = 'none';
//     }
//   });
// };





// 






// function openModal(data){
//   lastFocused = document.activeElement;
//   modalTitle.textContent = data.title || 'Project';
//   modalDesc.textContent = data.desc || '';
//   modalLink.href = data.href || '#';

//   const images = data.images || [];
//   if(images.length){
//     modalImg.src = images[0];
//     modalImg.alt = data.title + ' screenshot';
//   } else {
//     modalImg.src = '';
//     modalImg.alt = 'No image';
//   }

//   backdrop.classList.add('show');      // show full-screen backdrop
//   backdrop.setAttribute('aria-hidden','false');
//   document.body.style.overflow = 'hidden';  // prevent background scroll
//   closeBtn.focus();
// }

// function closeModal(){
//   backdrop.classList.remove('show');
//   backdrop.setAttribute('aria-hidden','true');
//   document.body.style.overflow = '';       // restore scroll
//   modalImg.removeAttribute('src');
//   if(lastFocused) lastFocused.focus();
// }


// 






// const backdrop = document.getElementById('modal-backdrop');
// const modal = document.querySelector('.modal');
// const closeBtn = document.getElementById('modal-close');
// let lastFocused = null;

// function openModal(data){
//   lastFocused = document.activeElement;

//   document.getElementById('modal-title').textContent = data.title || 'Project';
//   document.getElementById('modal-desc').textContent = data.desc || '';
//   document.getElementById('modal-link').href = data.href || '#';

//   const images = data.images || [];
//   const modalImg = document.getElementById('modal-img');
//   if(images.length){
//     modalImg.src = images[0];
//     modalImg.alt = data.title + ' screenshot';
//   } else {
//     modalImg.src = '';
//     modalImg.alt = 'No image';
//   }

//   backdrop.classList.add('show');
//   document.body.style.overflow = 'hidden'; // prevent background scroll
//   closeBtn.focus();
// }

// function closeModal(){
//   backdrop.classList.remove('show');
//   document.body.style.overflow = ''; // restore scroll
//   document.getElementById('modal-img').removeAttribute('src');
//   if(lastFocused) lastFocused.focus();
// }

// // Close modal on clicking backdrop or escape
// backdrop.addEventListener('click', e => { if(e.target === backdrop) closeModal(); });
// document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

// // Attach project buttons
// document.querySelectorAll('.project').forEach(p => {
//   p.addEventListener('click', () => {
//     const title = p.dataset.title;
//     const desc = p.dataset.desc;
//     const images = p.dataset.images ? p.dataset.images.split(',') : [];
//     openModal({title, desc, images});
//   });
// });











