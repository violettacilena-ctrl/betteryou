// 1. TOMBOL BERANDA & TANTANGAN
function handleChallenge() {
  const btn = document.getElementById('acceptChallengeBtn');
  btn.innerHTML = btn.classList.toggle('accepted') ? 'Diikuti' : 'Ikuti Tantangan';
}

function terimaTantangan(btn) {
  btn.innerText = "Diterima!";
  alert("Tantangan dimulai!");
}

// 2. HABIT TRACKER (HITUNG OTOMATIS & 3 MOTIVASI PENDEK)
function toggleHabit(btn) {
  btn.innerText = btn.closest('.habit-card').classList.toggle('checked-done') ? "Selesai" : "Tandai Selesai";
  
  const total = document.querySelectorAll('.habit-card').length;
  const done = document.querySelectorAll('.habit-card.checked-done').length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  
  document.getElementById('progressBarFill').style.width = pct + '%';
  document.getElementById('progressBarFill').innerText = pct + '%';
  document.getElementById('doneCount').innerText = done;

  // motivasi pendek
  const teks = pct === 0 ? '"Yuk mulai!"' : pct < 100 ? '"Pertahankan!"' : '"Luar biasa, selesai!"';
  document.getElementById('motivationQuote').innerHTML = teks;
}

// 3. NAVIGASI PINDAH HALAMAN (ARTIKEL)
function bukaHalaman(idTarget) {
  document.getElementById('halaman-utama').style.display = 'none';
  document.getElementById('halaman-detail-artikel').style.display = 'block';
  document.querySelectorAll('.full-article-content-box').forEach(box => box.style.display = 'none');
  document.getElementById(idTarget).style.display = 'block';
}

const bukaArtikel = (id) => bukaHalaman(id);

function kembaliKeDaftar() {
  document.getElementById('halaman-detail-artikel').style.display = 'none';
  document.getElementById('halaman-utama').style.display = 'block';
}
