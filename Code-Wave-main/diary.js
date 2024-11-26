const correctPassword = "Codewave5"; 
let diaryEntries = [];

// Page Elements
const homepage = document.getElementById("homepage");
const loginPage = document.getElementById("login-page");
const diaryPage = document.getElementById("diary-page");
const addEntryPage = document.getElementById("add-entry-page");

const goToLoginBtn = document.getElementById("go-to-login");
const passwordInput = document.getElementById("password-input");
const submitPasswordBtn = document.getElementById("submit-password");
const loginError = document.getElementById("login-error");

const addEntryBtn = document.getElementById("add-entry-btn");
const lockDiaryBtn = document.getElementById("lock-diary-btn");
const diaryEntriesDiv = document.getElementById("diary-entries");

const newDiaryEntry = document.getElementById("new-diary-entry");
const saveEntryBtn = document.getElementById("save-entry-btn");

// Navigate to Login Page
goToLoginBtn.addEventListener("click", () => {
  homepage.classList.add("hidden");
  loginPage.classList.remove("hidden");
});

// Submit Password
submitPasswordBtn.addEventListener("click", () => {
  if (passwordInput.value === correctPassword) {
    loginPage.classList.add("hidden");
    diaryPage.classList.remove("hidden");
    loginError.textContent = ""; // Clear error message
    renderDiaryEntries();
  } else {
    loginError.textContent = "Incorrect password. Try again.";
  }
});

// Add Entry Button
addEntryBtn.addEventListener("click", () => {
  diaryPage.classList.add("hidden");
  addEntryPage.classList.remove("hidden");
});

// Save Entry
saveEntryBtn.addEventListener("click", () => {
  const newEntry = newDiaryEntry.value.trim();
  if (newEntry) {
    diaryEntries.push(newEntry);
    newDiaryEntry.value = ""; // Clear input
    addEntryPage.classList.add("hidden");
    diaryPage.classList.remove("hidden");
    renderDiaryEntries();
  }
});

// Render Diary Entries
function renderDiaryEntries() {
  if (diaryEntries.length === 0) {
    diaryEntriesDiv.innerHTML = "<p>No diary entries yet.</p>";
  } else {
    diaryEntriesDiv.innerHTML = diaryEntries
      .map((entry, index) => `<p>${index + 1}: ${entry}</p>`)
      .join("");
  }
}

// Lock Diary
lockDiaryBtn.addEventListener("click", () => {
  diaryPage.classList.add("hidden");
  loginPage.classList.remove("hidden");
  passwordInput.value = ""; // Clear password input
});

