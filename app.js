const translations = {
  ru: {
    creator:"Студия автора", tagline:"ТВОЯ НОВАЯ ЗАВИСИМОСТЬ", heroTitle:"Короткие дорамы.<br><em>Большие чувства.</em>",
    heroDesc:"Оригинальные истории, незабываемые герои и ещё одна серия.", browse:"Смотреть дорамы", curated:"ПОДБОРКА ДЛЯ ТЕБЯ",
    popular:"Популярные истории", demoNote:"Демо-версия", all:"Все", romance:"Романтика", revenge:"Месть", mystery:"Тайны", fantasy:"Фэнтези",
    empty:"В этой категории пока нет дорам.", studio:"ТВОЯ ТВОРЧЕСКАЯ МАСТЕРСКАЯ", creatorTitle:"Студия автора",
    localOnly:"Сохранение на этом устройстве", creatorHelp:"Добавь название, ссылку на постер и прямую ссылку на видео (рекомендуется MP4). Эта версия сохраняет записи только в этом браузере: файлы не загружаются на сервер и не становятся доступны другим зрителям.",
    titleLabel:"Название дорамы", genreLabel:"Жанр", descLabel:"Краткое описание", posterLabel:"Ссылка на постер (необязательно)",
    videoLabel:"Ссылка на видео 1-й серии (MP4)", addDrama:"Добавить дораму", resetDemo:"Восстановить демо-каталог",
    footer:"Концепция независимой ИИ-дорамы · Только оригинальные истории", noVideo:"Видео серии ещё не добавлено",
    addVideoHint:"Добавь прямую ссылку на MP4 в студии автора.", nowWatching:"СЕЙЧАС СМОТРИШЬ", episodeOne:"Серия 1", previewLabel:"Тестовая версия",
    episode:"серия", episodes:"серии", episodeMany:"серий", added:"Дорама добавлена в этом браузере.", reset:"Демо-каталог восстановлен.",
    invalidVideo:"Не удалось загрузить видео. Проверь прямую ссылку на файл MP4.", sampleDesc:"Оригинальная история скоро появится. Добавь видео через студию автора.",
    openStudio:"Открой студию автора, чтобы добавить видео.", genres:{romance:"Романтика",revenge:"Месть",mystery:"Тайны",fantasy:"Фэнтези"}
  },
  en: {
    creator:"Creator studio", tagline:"YOUR NEXT OBSESSION", heroTitle:"Short dramas.<br><em>Big feelings.</em>",
    heroDesc:"Original stories, unforgettable characters, one more episode.", browse:"Explore dramas", curated:"CURATED FOR YOU",
    popular:"Popular stories", demoNote:"Starter demo", all:"All", romance:"Romance", revenge:"Revenge", mystery:"Mystery", fantasy:"Fantasy",
    empty:"No dramas in this category yet.", studio:"YOUR PRIVATE WORKSPACE", creatorTitle:"Creator studio",
    localOnly:"Saved on this device", creatorHelp:"Add a title, poster image URL and a direct video URL (MP4 recommended). This starter saves entries only in this browser; it does not upload files or publish them for other users.",
    titleLabel:"Drama title", genreLabel:"Genre", descLabel:"Short description", posterLabel:"Poster image URL (optional)",
    videoLabel:"Episode 1 video URL (MP4)", addDrama:"Add drama", resetDemo:"Reset demo catalog",
    footer:"An independent AI drama concept · Original stories only", noVideo:"No episode video attached yet",
    addVideoHint:"Use Creator Studio to add a direct MP4 URL.", nowWatching:"NOW WATCHING", episodeOne:"Episode 1", previewLabel:"Preview build",
    episode:"episode", episodes:"episodes", episodeMany:"episodes", added:"Drama added in this browser.", reset:"Demo catalog restored.",
    invalidVideo:"Could not load the video. Check that the URL points directly to an MP4 file.", sampleDesc:"An original story is coming soon. Add a video in Creator Studio.",
    openStudio:"Open Creator Studio to add a video.", genres:{romance:"Romance",revenge:"Revenge",mystery:"Mystery",fantasy:"Fantasy"}
  },
  ko: {
    creator:"제작자 스튜디오", tagline:"다음 정주행 드라마", heroTitle:"짧은 드라마.<br><em>깊은 감정.</em>",
    heroDesc:"오리지널 스토리, 잊을 수 없는 캐릭터, 다음 에피소드.", browse:"드라마 둘러보기", curated:"당신을 위한 추천",
    popular:"인기 스토리", demoNote:"데모 버전", all:"전체", romance:"로맨스", revenge:"복수", mystery:"미스터리", fantasy:"판타지",
    empty:"이 카테고리에는 아직 드라마가 없습니다.", studio:"나만의 작업 공간", creatorTitle:"제작자 스튜디오",
    localOnly:"이 기기에 저장됨", creatorHelp:"제목, 포스터 URL, 직접 연결되는 동영상 URL(MP4 권장)을 추가하세요. 이 데모는 현재 브라우저에만 저장되며 서버에 업로드되거나 다른 사용자에게 공개되지 않습니다.",
    titleLabel:"드라마 제목", genreLabel:"장르", descLabel:"짧은 설명", posterLabel:"포스터 이미지 URL(선택)",
    videoLabel:"1화 동영상 URL(MP4)", addDrama:"드라마 추가", resetDemo:"데모 카탈로그 초기화",
    footer:"독립 AI 드라마 콘셉트 · 오리지널 스토리", noVideo:"아직 에피소드 영상이 없습니다",
    addVideoHint:"제작자 스튜디오에서 직접 MP4 URL을 추가하세요.", nowWatching:"시청 중", episodeOne:"1화", previewLabel:"미리보기",
    episode:"화", episodes:"화", episodeMany:"화", added:"이 브라우저에 드라마가 추가되었습니다.", reset:"데모 카탈로그가 복원되었습니다.",
    invalidVideo:"영상을 불러올 수 없습니다. MP4 파일의 직접 URL인지 확인하세요.", sampleDesc:"오리지널 스토리가 곧 공개됩니다. 제작자 스튜디오에서 영상을 추가하세요.",
    openStudio:"영상을 추가하려면 제작자 스튜디오를 여세요.", genres:{romance:"로맨스",revenge:"복수",mystery:"미스터리",fantasy:"판타지"}
  }
};

const demoDramas = [
  {id:"midnight",title:"After Midnight",genre:"romance",description:"A chance meeting pulls two strangers into a secret neither can afford to reveal.",poster:"",video:"",episodes:8,art:"art1"},
  {id:"heir",title:"The Secret Heir",genre:"mystery",description:"She came to expose the family. She never expected to fall for its heir.",poster:"",video:"",episodes:12,art:"art2"},
  {id:"velvet",title:"Velvet Revenge",genre:"revenge",description:"One betrayal. A new identity. A plan that changes when love gets involved.",poster:"",video:"",episodes:10,art:"art3"},
  {id:"moon",title:"Moonbound",genre:"fantasy",description:"A mysterious stranger appears every night at the same hour — and remembers her future.",poster:"",video:"",episodes:16,art:"art4"}
];
const STORAGE_KEY = "velora_dramas_v1";
let dramas = loadDramas();
let currentGenre = "all";
let currentLanguage = localStorage.getItem("velora_language") || "ru";
const $ = (id) => document.getElementById(id);
$("year").textContent = new Date().getFullYear();
$("languageSelect").value = currentLanguage;

function loadDramas(){
  try { const saved = localStorage.getItem(STORAGE_KEY); return saved ? JSON.parse(saved) : structuredClone(demoDramas); }
  catch { return structuredClone(demoDramas); }
}
function saveDramas(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(dramas)); }
function t(key){ return translations[currentLanguage][key] || translations.en[key] || key; }
function escapeHtml(value=""){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function safeUrl(value){try{const u=new URL(value);return ["http:","https:"].includes(u.protocol)?u.href:"";}catch{return "";}}
function applyLanguage(){
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(translations[currentLanguage][key]) el.innerHTML=translations[currentLanguage][key];
  });
  renderDramas();
}
function renderDramas(){
  const list = dramas.filter(d=>currentGenre==="all"||d.genre===currentGenre);
  $("dramaGrid").innerHTML = list.map((d,i)=>{
    const poster=safeUrl(d.poster);
    const artClass = d.art || ["art1","art2","art3","art4"][i%4];
    const artText = d.title.split(/\\s+/).slice(0,2).map(escapeHtml).join("<br>");
    const genre = translations[currentLanguage].genres[d.genre] || d.genre;
    const posterMarkup = poster ? `<img class="poster-image" src="${escapeHtml(poster)}" alt="" loading="lazy" onerror="this.remove()">` : "";
    return `<article class="drama-card" tabindex="0" role="button" aria-label="${escapeHtml(d.title)}" data-id="${escapeHtml(d.id)}">
      <div class="poster ${artClass}">${posterMarkup}<div class="poster-overlay"></div><div class="poster-copy"><div class="poster-genre">${escapeHtml(genre)}</div><div class="poster-title">${artText}</div></div></div>
      <div class="card-title">${escapeHtml(d.title)}</div><div class="card-desc">${escapeHtml(d.description||t("sampleDesc"))}</div>
      <div class="card-meta"><span>${d.episodes||1} ${t("episodeMany")}</span><span>▶ ${d.video?"Video":"Preview"}</span></div>
    </article>`;
  }).join("");
  $("emptyState").classList.toggle("hidden",list.length!==0);
}
function showToast(message){
  const old=document.querySelector(".toast"); if(old) old.remove();
  const el=document.createElement("div");el.className="toast";el.textContent=message;document.body.appendChild(el);
  setTimeout(()=>el.remove(),3000);
}
function openDrama(id){
  const d=dramas.find(x=>x.id===id);if(!d)return;
  $("modalTitle").textContent=d.title;
  $("modalDescription").textContent=d.description||t("sampleDesc");
  const video=safeUrl(d.video);
  $("videoPlayer").pause();$("videoPlayer").removeAttribute("src");$("videoPlayer").load();
  $("videoPlayer").classList.add("hidden");$("videoPlaceholder").classList.remove("hidden");
  if(video){
    $("videoPlayer").src=video;
    $("videoPlayer").classList.remove("hidden");$("videoPlaceholder").classList.add("hidden");
    $("videoPlayer").onerror=()=>{ $("videoPlayer").classList.add("hidden");$("videoPlaceholder").classList.remove("hidden");showToast(t("invalidVideo")); };
  }
  $("watchModal").classList.remove("hidden");document.body.style.overflow="hidden";
}
function closeDrama(){
  $("watchModal").classList.add("hidden");$("videoPlayer").pause();document.body.style.overflow="";
}
$("dramaGrid").addEventListener("click",e=>{const card=e.target.closest("[data-id]");if(card)openDrama(card.dataset.id);});
$("dramaGrid").addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches("[data-id]")){e.preventDefault();openDrama(e.target.dataset.id);}});
$("closeModal").addEventListener("click",closeDrama);$("modalBackdrop").addEventListener("click",closeDrama);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeDrama();});
$("languageSelect").addEventListener("change",e=>{currentLanguage=e.target.value;localStorage.setItem("velora_language",currentLanguage);applyLanguage();});
$("filters").addEventListener("click",e=>{const btn=e.target.closest("[data-genre]");if(!btn)return;currentGenre=btn.dataset.genre;document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b===btn));renderDramas();});
$("browseBtn").addEventListener("click",()=>$("catalog").scrollIntoView({behavior:"smooth"}));
$("homeBtn").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
$("adminToggle").addEventListener("click",()=>{$("creatorPanel").classList.toggle("hidden");if(!$("creatorPanel").classList.contains("hidden"))$("creatorPanel").scrollIntoView({behavior:"smooth",block:"start"});});
$("dramaForm").addEventListener("submit",e=>{
  e.preventDefault();
  const title=$("titleInput").value.trim();
  const poster=safeUrl($("posterInput").value.trim());
  const video=safeUrl($("videoInput").value.trim());
  if(!title)return;
  const drama={id:"user-"+Date.now(),title,genre:$("genreInput").value,description:$("descInput").value.trim(),poster,video,episodes:1,art:"art"+(dramas.length%4+1)};
  dramas.unshift(drama);saveDramas();renderDramas();e.target.reset();showToast(t("added"));
});
$("resetDemo").addEventListener("click",()=>{dramas=structuredClone(demoDramas);saveDramas();renderDramas();showToast(t("reset"));});
applyLanguage();
// MAEVRIN — day/night theme switcher
(() => {
  const toggle = document.getElementById("themeToggle");

  if (!toggle) return;

  let currentTheme = "night";

  try {
    currentTheme = localStorage.getItem("velora-theme") || "night";
  } catch (error) {}

  function applyTheme(theme) {
    currentTheme = theme;
    document.body.dataset.theme = theme;

    toggle.textContent = theme === "day" ? "🌙" : "☀️";
    toggle.setAttribute(
      "aria-label",
      theme === "day" ? "Switch to night theme" : "Switch to day theme"
    );
    toggle.title = theme === "day" ? "Ночная тема" : "Дневная тема";

    try {
      localStorage.setItem("velora-theme", theme);
    } catch (error) {}
  }

  applyTheme(currentTheme);

  toggle.addEventListener("click", () => {
    applyTheme(currentTheme === "day" ? "night" : "day");
  });
})();