const pages = document.querySelectorAll('.page');
let currentPage = 0;

function nextPage() {
    pages[currentPage].classList.remove('active');
    currentPage = (currentPage + 1) % pages.length;
    pages[currentPage].classList.add('active');
}

const studyReplies = [
    "休學",
    "放棄",
    "不要上課",
    "被當也好",
    "老師又不記得你"
];

const emotionReplies = [
    "回家哭",
    "封鎖所有人",
    "給爸媽養",
    "誰都不理",
    "去死"
];

function drawReply() {
    const resultText = document.getElementById('resultText');
    const failType = document.getElementById('failType').value;
    const pool = failType === 'study' ? studyReplies : emotionReplies;
    const index = Math.floor(Math.random() * pool.length);
    resultText.textContent = pool[index];
    // 顯示第四頁，隱藏第三頁
    pages[currentPage].classList.remove('active'); // 隱藏當前頁（第三頁）
    currentPage = 3; // 第四頁index（假設第四頁是index 3）
    pages[currentPage].classList.add('active'); // 顯示結果頁
}

function goBack() {
    pages[currentPage].classList.remove('active'); // 隱藏結果頁
    currentPage = 2; // 第三頁index
    pages[currentPage].classList.add('active'); // 回到抽籤頁
}
