// 1. BERANDA & TANTANGAN
function handleChallenge() {
  const btn = document.getElementById('acceptChallengeBtn');
  btn.innerHTML = btn.classList.toggle('accepted') ? 'Tantangan Diikuti' : 'Ikuti Tantangan';
}

function terimaTantangan(btn) {
  btn.innerText = "Tantangan Diterima!";
  btn.style.backgroundColor = "#111111";
  alert("Tantangan dimulai! Selesaikan dalam 24 jam.");
}

// 2. HABIT TRACKER (OTOMATIS & MOTIVASI)
function toggleHabit(btn) {
  btn.innerText = btn.closest('.habit-card').classList.toggle('checked-done') ? "Selesai" : "Tandai Selesai";
  
  const total = document.querySelectorAll('.habit-card').length;
  const done = document.querySelectorAll('.habit-card.checked-done').length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  
  document.getElementById('progressBarFill').style.width = pct + '%';
  document.getElementById('progressBarFill').innerText = pct + '%';
  document.getElementById('doneCount').innerText = done;

  const quotes = [
    '"Mulai centang hari ini!"', // 0%
    '"Awal yang bagus, pertahankan!"', // 1-25%
    '"Sudah setengah jalan, konsisten!"', // 26-50%
    '"Keren, sedikit lagi tercapai!"', // 51-75%
    '"Jangan kasih kendor!"', // 76-99%
    '"Luar biasa, semua selesai!"' // 100%
  ];
  const idx = pct === 0 ? 0 : pct <= 25 ? 1 : pct <= 50 ? 2 : pct <= 75 ? 3 : pct < 100 ? 4 : 5;
  document.getElementById('motivationQuote').innerHTML = quotes[idx];
}

// 3. NAVIGASI ARTIKEL
function bukaHalaman(idTarget) {
  document.getElementById('halaman-utama').style.display = 'none';
  document.getElementById('halaman-detail-artikel').style.display = 'block';
  document.querySelectorAll('.full-article-content-box').forEach(box => box.style.display = 'none');
  document.getElementById(idTarget).style.display = 'block';
  window.scrollTo(0, 0);
}

const bukaArtikel = (id) => bukaHalaman(id);

function kembaliKeDaftar() {
  document.getElementById('halaman-detail-artikel').style.display = 'none';
  document.getElementById('halaman-utama').style.display = 'block';
  window.scrollTo(0, 0);
}
