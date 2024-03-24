"use strict";
const imgEl = document.getElementById("bg_img");
const imgCoverEl = document.getElementById("cover");
const musicTitleEl = document.getElementById("music_title");
const musicArtistEl = document.getElementById("musric_artist");
const playerProgressEl = document.getElementById("player_progress");
const progressEl = document.getElementById("progress");
const currentTimeEl = document.getElementById("current_time");
const durationEl = document.getElementById("duration");
const prevBtnEl = document.getElementById("prev");
const playvBtnEl = document.getElementById("play");
const nextvBtnEl = document.getElementById("next");
const songs = [
  {
    path: "song11.mp3",
    displayName: "Tum Hi Aana",
    cover: "anni.png",
    artist: "Jubin Nautiyal, Payal Dev",
  },
  {
    path: "song12.mp3",
    displayName: "Bol Na Halke Halke",
    cover: "anni2.jpg",
    artist: "Rahat Fateh Ali Khan",
  },
  {
    path: "song13.mp3",
    displayName: "Aram Ata Hai Deedar Se Tere",
    cover: "anni3.jpg",
    artist: "Azaan Sami Khan",
  },
  {
    path: "song14.mp3",
    displayName: "Banjaara",
    cover: "anni6.jpg",
    artist: "Mohammad Irfan",
  },
  {
    path: "song15.mp3",
    displayName: "Jitni Dafa",
    cover: "anni4.jpg",
    artist: "Yasser Desai, Rashmi Virag",
  },
  {
    path: "song16.mp3",
    displayName: "Milne Hai Mujhse Aayi",
    cover: "anni5.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song17.mp3",
    displayName: "Lo Safar",
    cover: "anni7.jpg",
    artist: "Jubin Nautiyal",
  },
  {
    path: "song18.mp3",
    displayName: "Bulleya",
    cover: "anni8.jpg",
    artist: "Amit Mishra",
  },
  {
    path: "song19.mp3",
    displayName: "Chand Sifarish",
    cover: "anni9.jpg",
    artist: "Kailash Kher, Shaan",
  },
  {
    path: "song20.mp3",
    displayName: "Uska Hi Banana",
    cover: "anni10.jpg",
    artist: "Arijit Singh",
  }, {
    path: "song21.mp3",
    displayName: "My Dil Goes Mmm",
    cover: "anni11.jpg",
    artist: "Gayatri Iyer, Shaan",
  },
  {
    path: "song22.mp3",
    displayName: "Baarish",
    cover: "anni12.jpg",
    artist: "Ash King, Shashaa Tirupati",
  },
  {
    path: "song23.mp3",
    displayName: "Ae Dil Hai Mushkil",
    cover: "anni13.jpg",
    artist: "Pritam and Arijit Singh",
  },
  {
    path: "song24.mp3",
    displayName: "Banke Hawa Mein",
    cover: "anni14.jpg",
    artist: "Altamash Faridi, Shivin, Jennifer",
  },
  {
    path: "song25.mp3",
    displayName: "Aapke Pyaar Mein",
    cover: "anni15.jpg",
    artist: "Alka Yagnik",
  },
  {
    path: "song26.mp3",
    displayName: "Dillagi",
    cover: "anni16.jpg",
    artist: "Rahat Fateh Ali Khan",
  },
  {
    path: "song27.mp3",
    displayName: "Ek Mulaqat",
    cover: "anni17.jpg",
    artist: "Jubin Nautiyal",
  },
  {
    path: "song28.mp3",
    displayName: "Mauka Milega To Hum",
    cover: "anni18.jpg",
    artist: "Alka Yagnik, Udit Narayan",
  },
  {
    path: "song29.mp3",
    displayName: "Main Dhoondne Ko Zamaane",
    cover: "anni19.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song30.mp3",
    displayName: "Tum Mere Ho",
    cover: "anni20.jpg",
    artist: "Jubin Nautiyal & Amrita Singh",
  },
  {
    path: "song31.mp3",
    displayName: "Kabhi Sham Dhale",
    cover: "anni21.jpg",
    artist: "Mahalakshmi Iyer",
  },
  {
    path: "song32.mp3",
    displayName: "Dil Lauta Do",
    cover: "anni22.jpg",
    artist: " Jubin Nautiyal, Payal Dev",
  },
  {
    path: "song33.mp3",
    displayName: "Main Jis Din Bhulaa Du",
    cover: "anni23.jpg",
    artist: "Jubin Nautiyal",
  },
  {
    path: "song34.mp3",
    displayName: "Meri Aashiqui",
    cover: "anni24.jpg",
    artist: "Jubin Nautiyal",
  },
  {
    path: "song35.mp3",
    displayName: "Bekhayali ",
    cover: "anni25.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song36.mp3",
    displayName: "Teri Masumiyat",
    cover: "anni26.jpg",
    artist: "Altamash Faridi",
  },
  {
    path: "song37.mp3",
    displayName: "Khairiyat",
    cover: "anni27.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song38.mp3",
    displayName: "Ye Hum Aa Gaye Hain Kahan",
    cover: "anni28.jpg",
    artist: "Lata Mangeshkar, Udit Narayan",
  },
  {
    path: "song39.mp3",
    displayName: "Zindagi",
    cover: "anni29.jpg",
    artist: "Jubin, NEELESH, Shankar",
  },
  {
    path: "song40.mp3",
    displayName: "Bol kaffara kya hoga",
    cover: "anni30.jpg",
    artist: "Sehar Gul Khan, Shehbaz Fayaz",
  }, {
    path: "song41.mp3",
    displayName: "Dekhte Dekhte",
    cover: "anni31.jpg",
    artist: "Atif Aslam",
  },
  {
    path: "song43.mp3",
    displayName: "Duaa",
    cover: "anni32.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song42.mp3",
    displayName: "Mile Ho Tum",
    cover: "anni33.jpg",
    artist: "Tony, Neha",
  },
  {
    path: "song44.mp3",
    displayName: "Haan Tu HAi",
    cover: "anni34.jpg",
    artist: "KK, Pritam Chakraborty",
  },
  {
    path: "song45.mp3",
    displayName: "Aaj Phir (Remix)",
    cover: "anni35.jpg",
    artist: "Arijit Singh, Samira Koppikar",
  },
  {
    path: "song46.mp3",
    displayName: "Hum Yaar Hai Tumhare",
    cover: "anni36.jpg",
    artist: "Alka Yagnik, Udit Narayan",
  },
  {
    path: "song47.mp3",
    displayName: "Ishq Mubarak ",
    cover: "anni37.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song48.mp3",
    displayName: "Is Qadar",
    cover: "anni38.jpg",
    artist: "Darshan, Tulsi, Sachet–Parampara",
  },
  {
    path: "song49.mp3",
    displayName: "Main Yahaan Hoon Yahaan",
    cover: "anni39.jpg",
    artist: "Udit Narayan",
  },
  {
    path: "song50.mp3",
    displayName: "Khuda Bhi",
    cover: "anni40.jpg",
    artist: "Mohit Chauhan",
  },
  {
    path: "song51.mp3",
    displayName: "Kisi Se Pyar Ho Jaye",
    cover: "anni41.jpg",
    artist: "Jubin Nautiyal",
  },
  {
    path: "song52.mp3",
    displayName: "Mere Rashke Qamar",
    cover: "anni42.jpg",
    artist: "Rahat Fateh Ali Khan",
  },
  {
    path: "song53.mp3",
    displayName: "Mere Sapnon Ki Rani",
    cover: "anni43.jpg",
    artist: "Kishore Kumar",
  },
  {
    path: "song54.mp3",
    displayName: "Isq Risk", 
    cover: "anni44.jpg",
    artist: "Rahat Fateh Ali Khan",
  },
  {
    path: "song55.mp3",
    displayName: "Jinke Liye",
    cover: "anni45.jpg",
    artist: "Neha Kakkar",
  },
  {
    path: "song56.mp3",
    displayName: "Hua Hain Aaj Pehli Baar",
    cover: "anni46.jpg",
    artist: "Armaan, Amaal, Palak Muchhal,",
  },
  {
    path: "song57.mp3",
    displayName: "Sanam Re",
    cover: "anni47.jpg",
    artist: "Arijit Singh, Mithoon",
  },
  {
    path: "song58.mp3",
    displayName: "Tere Bina",
    cover: "anni48.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song59.mp3",
    displayName: "Baarish Ban Jaana",
    cover: "anni49.jpg",
    artist: "Stebin Ben, Payal Dev",
  },
  {
    path: "song60.mp3",
    displayName: "Tu Itni Khoobsurat Hai",
    cover: "anni50.jpg",
    artist: "Jubin Nautiyal, Prakriti Kakar",
  }, {
    path: "song61.mp3",
    displayName: "Aa Tujhe In Bahon Mein",
    cover: "anni51.jpg",
    artist: "Irshan Ashraf, Pritam",
  },
  {
    path: "song62.mp3",
    displayName: "Tumse Bhi Jyada",
    cover: "anni52.jpg",
    artist: "Arijit Singh, Pritam Chakraborty",
  },
  {
    path: "song63.mp3",
    displayName: "Woh Ladki Nahi Zindagi",
    cover: "anni53.jpg",
    artist: "Alka Yagnik, Babul Supriyo",
  },
  {
    path: "song64.mp3",
    displayName: "Woh Chaand Kahan Se",
    cover: "anni54.jpg",
    artist: "Vishal Mishra",
  },
  {
    path: "song65.mp3",
    displayName: "Woh Lamhe Woh Baatein",
    cover: "anni55.jpg",
    artist: "Atif Aslam",
  },
  {
    path: "song66.mp3",
    displayName: "Aankhon Mein Aansoo",
    cover: "anni56.jpg",
    artist: "Yasser Desai",
  },
  {
    path: "song67.mp3",
    displayName: "Tu Soch Nahi Sakda",
    cover: "anni77.jpg",
    artist: "Mannat Noor",
  },
  {
    path: "song68.mp3",
    displayName: "Wafa Na Raas Aayee",
    cover: "anni58.jpg",
    artist: "Jubin Nautiyal, Meet Bros",
  },
  {
    path: "song69.mp3",
    displayName: "Sawan Aaya Hai.",
    cover: "anni59.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song70.mp3",
    displayName: "Naino Ki To Baat",
    cover: "anni60.jpg",
    artist: "Prateeksha Shrivastava",
  },
  {
    path: "song71.mp3",
    displayName: "Baazigar O Baazigar",
    cover: "anni61.jpg",
    artist: "Alka Yagnik, Kumar Sanu",
  },
  {
    path: "song72.mp3",
    displayName: "Ye Galiyan Ye Chaubara",
    cover: "anni62.jpg",
    artist: "Lata Mangeshkar",
  },
  {
    path: "song73.mp3",
    displayName: "Sehmi Hai Dhadkan ",
    cover: "anni63.jpg",
    artist: "Atif Aslam",
  },
  {
    path: "song74.mp3",
    displayName: "Lo Maan Liya",
    cover: "anni64.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song75.mp3",
    displayName: "Rafta Rafta",
    cover: "anni65.jpg",
    artist: "Atif Aslam, Sajal Ali",
  },
  {
    path: "song76.mp3",
    displayName: "Phir Mohabbat",
    cover: "anni66.jpg",
    artist: "Arijit, Saim Bhat, MD. Irfan",
  },
  {
    path: "song77.mp3",
    displayName: "Evergreen",
    cover: "anni67.jpg",
    artist: "Jigar",
  },
  {
    path: "song78.mp3",
    displayName: "Mujhe Ishq Hai Tujhi Se",
    cover: "anni68.jpg",
    artist: "Mohammed Rafi",
  },
  {
    path: "song79.mp3",
    displayName: "Naam Tere To Humne Apni",
    cover: "anni69.jpg",
    artist: "Udit Narayan, Sadhana Sargam",
  },
  {
    path: "song80.mp3",
    displayName: "Nazar Je Nazar Mile",
    cover: "anni70.jpg",
    artist: "Rahat Fateh Ali Khan",
  }, {
    path: "song81.mp3",
    displayName: "Pachtaoge",
    cover: "anni71.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song82.mp3",
    displayName: "Oye Raju",
    cover: "anni72.jpg",
    artist: "Anand Raj Anand",
  },
  {
    path: "song83.mp3",
    displayName: "Shaam Hai Dhuan Dhuan",
    cover: "anni73.jpg",
    artist: "Kumar Sanu, Alka Yagnik",
  },
  {
    path: "song84.mp3",
    displayName: "Sochta Houn (Remix)",
    cover: "anni74.jpg",
    artist: "Nusrat Fateh Ali Khan",
  },
  {
    path: "song85.mp3",
    displayName: "Tujhe Na Dekhu To Chain",
    cover: "anni75.jpg",
    artist: "Kumar Sanu, Alka Yagnik",
  },
  {
    path: "song86.mp3",
    displayName: "Tu Hi Hai Tu Hi Toh",
    cover: "anni76.jpg",
    artist: "Rahul Mishra",
  },
  {
    path: "song87.mp3",
    displayName: "Bahut Pyar Karte Hain",
    cover: "anni77.jpg",
    artist: "Rahul Jain",
  },
  {
    path: "song88.mp3",
    displayName: "Saanson Ko",
    cover: "anni78.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song89.mp3",
    displayName: "Ho Gaya Hai Tujhko",
    cover: "anni79.jpg",
    artist: "Udit Narayan, Lata Mangeshkar",
  },
  {
    path: "song90.mp3",
    displayName: "Dil De Diya Hai ",
    cover: "anni80.jpg",
    artist: "Aanand Raj Aanand",
  },
  {
    path: "song91.mp3",
    displayName: "Dil Ibaadat",
    cover: "anni81.jpg",
    artist: "Pritam, KK",
  },
  {
    path: "song92.mp3",
    displayName: "EK DILRUBA HAI",
    cover: "anni82.jpg",
    artist: "Udit Narayan",
  },
  {
    path: "song93.mp3",
    displayName: "Haule Haule",
    cover: "anni83.jpg",
    artist: "Sukhwinder Singh",
  },
  {
    path: "song94.mp3",
    displayName: "Humko Humise Chura Lo",
    cover: "anni84.jpg",
    artist: "Udit Narayan, Lata Mangeshkar",
  },
  {
    path: "song95.mp3",
    displayName: "Hum Tumko Nigahon Mein",
    cover: "anni85.jpg",
    artist: " Shreya Ghoshal, Udit Narayan",
  },
  {
    path: "song96.mp3",
    displayName: "Ik Mulaqaat",
    cover: "anni86.jpg",
    artist: "Altamash F, Palak M",
  },
  {
    path: "song97.mp3",
    displayName: "Ishq Mein",
    cover: "anni87.jpg",
    artist: "Meet Bros",
  },
  {
    path: "song98.mp3",
    displayName: "Jeene Laga Hoon",
    cover: "anni88.jpg",
    artist: "Atif Aslam, Shreya Ghoshal ",
  },
  {
    path: "song99.mp3",
    displayName: "Khamoshiyan",
    cover: "anni89.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song100.mp3",
    displayName: "Kitna Bechain Hoke",
    cover: "anni90.jpg",
    artist: "Rahul Jain",
  }, {
    path: "song101.mp3",
    displayName: "Kiya Kiya",
    cover: "anni91.jpg",
    artist: "Anjaan Sagari",
  },
  {
    path: "song102.mp3",
    displayName: "Kyun Khuda Tune",
    cover: "anni92.jpg",
    artist: "Rahat Fateh Ali Khan",
  },
  {
    path: "song103.mp3",
    displayName: "Lambiyaan Si Judaiyaan",
    cover: "anni93.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song104.mp3",
    displayName: "Hamein Tumse Hua Hai",
    cover: "anni94.jpg",
    artist: "Alka Yagnik, Udit Narayan",
  },
  {
    path: "song105.mp3",
    displayName: "Maahi (Slowed Reverb)",
    cover: "anni95.jpg",
    artist: "Toshi Shabri",
  },
  {
    path: "song106.mp3",
    displayName: "Mai Agar",
    cover: "anni96.jpg",
    artist: "Pritam, Atif Aslam, Kabir Khan",
  },
  {
    path: "song107.mp3",
    displayName: "Maine Tera Naam Dil",
    cover: "anni97.jpg",
    artist: "Aamir Shaikh",
  },
  {
    path: "song108.mp3",
    displayName: "Sohni Meri Sohni",
    cover: "anni98.jpg",
    artist: "Mani  Superstar",
  },
  {
    path: "song109.mp3",
    displayName: "Rab Kare Tujhko Bhi",
    cover: "anni99.jpg",
    artist: "Divyanshu",
  },
  {
    path: "song110.mp3",
    displayName: "Tera Yun",
    cover: "anni100.jpg",
    artist: "Anupama, Saaj, Danish",
  },
  {
    path: "song111.mp3",
    displayName: "Lat Lag Gayee (Slowed)",
    cover: "anni101.jpg",
    artist: " Benny Dayal ",
  }, {
    path: "song112.mp3",
    displayName: "Udaarian",
    cover: "anni102.jpg",
    artist: " Satinder Sartaaj, Jatinder",
  },
  {
    path: "song113.mp3",
    displayName: "Jeeta Tha Jiske Liye ",
    cover: "anni103.jpg",
    artist: "Kumar Sanu, Yalka Yagnik",
  },
  {
    path: "song114.mp3",
    displayName: "Kitna Haseen Chehra",
    cover: "anni104.jpg",
    artist: "Kumar Sanu",
  },
  {
    path: "song115.mp3",
    displayName: "Saaton Janam Main Tere",
    cover: "anni105.jpg",
    artist: "Kumar Sanu, Yalka Yagnik",
  },
  {
    path: "song117.mp3",
    displayName: "Falak Dekhun",
    cover: "anni106.jpg",
    artist: "Sonu Nigam",
  },
  {
    path: "song116.mp3",
    displayName: "Mujhse Mohabbat Ka",
    cover: "anni107.jpg",
    artist: "Kumar Sanu, Yalka Yagnik",
  },
  {
    path: "song118.mp3",
    displayName: "Tu Hi Hai Aashiqui",
    cover: "anni108.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song119.mp3",
    displayName: "Chal Tere Ishq Mein",
    cover: "anni109.jpg",
    artist: "Vishal M,Mithoon,Neeti,Sayeed",
  },
  {
    path: "song120.mp3",
    displayName: "SIMROON TERA NAAM",
    cover: "anni110.jpg",
    artist: "Sachet, Radhika",
  },
  {
    path: "song121.mp3",
    displayName: "Maharani",
    cover: "anni111.jpg",
    artist: "Arpit Bala, ReVo LEKHAK",
  },
];
const music = new Audio();
let musicIndex = 0;
let isPlaying = false;
//================== Play Song  True or False====================
function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}
//================== Play Music====================
function playMusic() {
  isPlaying = true;
  playvBtnEl.classList.replace("fa-play", "fa-pause");
  playvBtnEl.setAttribute("title", "pause");
  music.play();
}
//================== Pause Music====================
function pauseMusic() {
  isPlaying = false;
  playvBtnEl.classList.replace("fa-pause", "fa-play");
  playvBtnEl.setAttribute("pause", "title");
  music.pause();
}
//================== Load Songs ====================
function loadMusic(songs) {
  music.src = songs.path;
  musicTitleEl.textContent = songs.displayName;
  musicArtistEl.textContent = songs.artist;
  imgCoverEl.src = songs.cover;
  imgEl.src = songs.cover;
}
//================== Change Music ====================
function changeMusic(direction) {
  musicIndex = musicIndex + direction + (songs.length % songs.length);
  loadMusic(songs[musicIndex]);
  playMusic();
}
//================== Set Progress ====================
function setProgressBar(e) {
  const width = playerProgressEl.clientWidth;
  const xValue = e.offsetX;
  music.currentTime = (xValue / width) * music.duration;
}
//================== Set Progress ====================
function updateProgressBar() {
  const { duration, currentTime } = music;
  const ProgressPercent = (currentTime / duration) * 100;
  progressEl.style.width = `${ProgressPercent}%`;
  const formattime = (timeRanges) =>
    String(Math.floor(timeRanges)).padStart(2, "0");
  durationEl.textContent = `${formattime(duration / 60)} : ${formattime(
    duration % 60,
  )}`;
  currentTimeEl.textContent = `${formattime(currentTime / 60)} : ${formattime(
    currentTime % 60,
  )}`;
}
//================= Btn Events========================
const btnEvents = () => {
  playvBtnEl.addEventListener("click", togglePlay);
  nextvBtnEl.addEventListener("click", () => changeMusic(1));
  prevBtnEl.addEventListener("click", () => changeMusic(-1));
  //========= Progressbar===========================
  music.addEventListener("ended", () => changeMusic(1));
  music.addEventListener("timeupdate", updateProgressBar);
  playerProgressEl.addEventListener("click", setProgressBar);
};
//================= Btn Events========================
document.addEventListener("DOMContentLoaded", btnEvents);
//============ Calling Load Music
loadMusic(songs[musicIndex]);

alert("Happy Holi, dear Anni! 🌈 May this festival of colors sprinkle your life with melodies of love, paint your days with the brightest hues of happiness, and fill your heart with the sweetest rhythms of joy. Here's to a harmonious celebration and countless memories with friends and family. Wishing you a truly melodious and colorful Holi! 🎶✨");

