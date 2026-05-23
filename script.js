/* ===================================================================
   01. HALAMAN BERANDA
   =================================================================== */
function handleChallenge() {
  var tombol = document.getElementById('acceptChallengeBtn');
  if (!tombol.classList.contains('accepted')) {
    tombol.classList.add('accepted');
    tombol.innerHTML = 'Tantangan Diikuti';
  } else {
    tombol.classList.remove('accepted');
    tombol.innerHTML = 'Ikuti Tantangan';
  }
}

/* ===================================================================
   02. HALAMAN HABIT TRACKER (7 TINGKAT KATA MOTIVASI)
   =================================================================== */
function toggleHabit(button) {
  const habitCard = button.closest('.habit-card');
  habitCard.classList.toggle('checked-done');
  
  if (habitCard.classList.contains('checked-done')) {
    button.innerText = "Selesai";
  } else {
    button.innerText = "Tandai Selesai";
  }
  
  updateProgressBar();
}

function updateProgressBar() {
  const totalHabits = document.querySelectorAll('.habit-card').length;
  const completedHabits = document.querySelectorAll('.habit-card.checked-done').length;
  
  // Rumus hitung persentase sederhana
  const percentage = totalHabits > 0 ? Math.round((completedHabits / totalHabits) * 100) : 0;
  
  // Update panjang bar persen
  const progressBarFill = document.getElementById('progressBarFill');
  if (progressBarFill) {
    progressBarFill.style.width = percentage + '%';
    progressBarFill.innerText = percentage + '%';
  }
  
  // Update angka hitungan habit
  const doneCountEl = document.getElementById('doneCount');
  if (doneCountEl) {
    doneCountEl.innerText = completedHabits;
  }

  // Logika 7 tingkat kata motivasi simpel tanpa emotikon
  const teksMotivasi = document.getElementById('motivationQuote');
  if (teksMotivasi) {
    if (percentage === 0) {
      teksMotivasi.innerHTML = '"Disiplin adalah jembatan antara cita-cita dan pencapaian. Yuk mulai cetang hari ini!"';
    } else if (percentage > 0 && percentage <= 25) {
      teksMotivasi.innerHTML = '"Awal yang bagus! Langkah pertama selalu jadi yang paling berat, pertahankan!"';
    } else if (percentage > 25 && percentage <= 50) {
      teksMotivasi.innerHTML = '"Sudah setengah jalan! Kamu membuktikan kalau kamu bisa konsisten."';
    } else if (percentage > 50 && percentage <= 75) {
      teksMotivasi.innerHTML = '"Keren banget! Sedikit lagi target harianmu akan tercapai sepenuhnya."';
    } else if (percentage > 75 && percentage < 100) {
      teksMotivasi.innerHTML = '"Satu langkah lagi menuju kesempurnaan! Jangan kasih kendor!"';
    } else if (percentage === 100) {
      teksMotivasi.innerHTML = '"Luar biasa! Semua kebiasaan sehat hari ini telah kamu selesaikan dengan sempurna!"';
    } else {
      teksMotivasi.innerHTML = '"Setiap tindakan kecil hari ini adalah investasi untuk masa depanmu."';
    }
  }
}

/* ===================================================================
   03. NAVIGASI DETAIL (ARTIKEL & TANTANGAN)
   =================================================================== */
function bukaHalaman(idTarget) {
  document.getElementById('halaman-utama').style.display = 'none';
  document.getElementById('halaman-detail-artikel').style.display = 'block';
  
  let semuaBoxDetail = document.querySelectorAll('.full-article-content-box');
  semuaBoxDetail.forEach(box => {
    box.style.display = 'none';
  });
  
  document.getElementById(idTarget).style.display = 'block';
  window.scrollTo(0, 0);
}

// Menghubungkan fungsi lama agar tidak error
function bukaArtikel(idArtikel) {
  bukaHalaman(idArtikel);
}

function kembaliKeDaftar() {
  document.getElementById('halaman-detail-artikel').style.display = 'none';
  document.getElementById('halaman-utama').style.display = 'block';
  window.scrollTo(0, 0);
}

function terimaTantangan(tombol) {
  tombol.innerText = "Tantangan Diterima! Semangat!";
  tombol.style.backgroundColor = "#111111";
  alert("Bagus! Tantangan telah dimulai. Jangan lupa selesaikan dalam 24 jam ya!");
}

