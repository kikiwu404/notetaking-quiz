import { Question, Tool, ToolKey, NoteTaker, NoteTakerType } from './types';

export const TOOLS: Record<ToolKey, Tool> = {
  [ToolKey.Notion]: {
    name: 'Notion',
    url: 'https://www.notion.so/',
    description: '你是個終極的組織者，喜歡將所有東西都放在一個地方。Notion 的靈活性、數據庫和模板功能，能讓你打造一個完全客製化的「人生操作系統」。',
    features: ['All-in-one 工作區', '強大的數據庫功能', '高度可客製化模板', '適合團隊協作', '網頁內容收藏'],
    logo: '/logos/notion.png',
  },
  [ToolKey.Obsidian]: {
    name: 'Obsidian',
    url: 'https://obsidian.md/',
    description: '你是一位思想家，重視知識之間的連結和數據的完全擁有權。Obsidian 的本地優先、Markdown 格式和雙向連結功能，是你建立「第二大腦」的完美工具。',
    features: ['本地儲存，保障隱私', '純文字 Markdown 檔案', '知識圖譜視覺化', '豐富的插件生態系', '強大的雙向連結'],
    logo: '/logos/obsidian.png',
  },
  [ToolKey.Heptabase]: {
    name: 'Heptabase',
    url: 'https://heptabase.com/',
    description: '你是個視覺學習者和研究者，喜歡在一個無限畫布上組織你的想法。Heptabase 的卡片、白板和心智圖功能，能幫助你釐清複雜的主題並看見全局。',
    features: ['視覺化的學習與研究', '無限延伸的白板', '卡片式筆記系統', '擅長連結與梳理思路', '專為深度研究打造'],
    logo: '/logos/heptabase.png',
  },
  [ToolKey.AppleNotes]: {
    name: 'Apple Notes (蘋果備忘錄)',
    url: 'https://apps.apple.com/us/app/notes/id1110145109',
    description: '你是蘋果生態系的使用者，追求極致的簡單和方便。蘋果備忘錄無縫整合你的所有 Apple 設備，是你快速捕捉靈感、製作清單的最佳選擇。',
    features: ['蘋果生態系無縫整合', '啟動快速，操作簡單', '基礎格式與手寫功能', '完全免費', '適合快速紀錄'],
    logo: '/logos/apple-notes.png',
  },
  [ToolKey.GoodNotes]: {
    name: 'GoodNotes',
    url: 'https://www.goodnotes.com/',
    description: '你偏愛手寫的溫度，並經常需要在平板上閱讀和註釋文件。GoodNotes 提供業界頂尖的手寫體驗，讓你的 iPad 變成一本無限可能的數位筆記本。',
    features: ['頂級的手寫體驗', '強大的 PDF 標註功能', '數位筆記本管理', '支援手寫辨識搜尋', '適合學生和學術人士'],
    logo: '/logos/goodnotes.png',
  },
  [ToolKey.Evernote]: {
    name: 'Evernote (印象筆記)',
    url: 'https://evernote.com/',
    description: '你是一位數位歸檔大師，需要一個強大的工具來收集和整理來自四面八方的資訊。Evernote 經典的網頁剪藏和跨平台同步功能，讓你輕鬆捕捉一切。',
    features: ['強大的網頁剪藏功能', '跨平台同步', '強大的搜尋功能', '文件掃描與 OCR', '數位資料的中央儲存庫'],
    logo: '/logos/evernote.png',
  },
};

export const NOTE_TAKER_ARCHETYPES: Record<NoteTakerType, NoteTaker> = {
  [NoteTakerType.Architect]: {
    name: '建築師 (The Architect)',
    description: '你喜歡規劃、建構並系統化地組織資訊。你需要能幫助你建立系統、框架和儀表板的工具。對你來說，結構就是一切。',
  },
  [NoteTakerType.Gardener]: {
    name: '園丁 (The Gardener)',
    description: '你享受探索想法、進行自發性的創意跳躍，並連結不同的思緒。你需要一個能輕鬆探索、讓概念交叉授粉的彈性環境。',
  },
  [NoteTakerType.Librarian]: {
    name: '圖書管理員 (The Librarian)',
    description: '你擅長收集、分類和高效地檢索資訊以供未來使用。你需要一個擅長捕捉和組織資源，並讓它們易於搜尋的工具。',
  },
};

export const QUESTIONS: Question[] = [
  {
    text: '你通常都拿筆記軟體來做什麼呀？',
    options: [
      {
        text: '一步步規劃專案，從無到有打造出成果。',
        scores: { [NoteTakerType.Architect]: 2, [ToolKey.Notion]: 2 },
      },
      {
        text: '隨手記下靈感，把它們串連起來，看看會迸出什麼新火花。',
        scores: { [NoteTakerType.Gardener]: 2, [ToolKey.Obsidian]: 2, [ToolKey.Heptabase]: 1 },
      },
      {
        text: '打造我的數位圖書館，把文章、網頁、圖片全都丟進去收藏。',
        scores: { [NoteTakerType.Librarian]: 2, [ToolKey.Evernote]: 2, [ToolKey.Notion]: 1 },
      },
      {
        text: '快！現在就要記下來！不管是待辦事項還是突然的想法。',
        scores: { [ToolKey.AppleNotes]: 2, [ToolKey.GoodNotes]: 1 },
      },
    ],
  },
  {
    text: '你理想中的筆記軟體，看起來應該像什麼樣子？',
    options: [
      {
        text: '像個萬能的儀表板，所有資料、進度、文件都一目了然。',
        scores: { [NoteTakerType.Architect]: 2, [ToolKey.Notion]: 3 },
      },
      {
        text: '一張無限大的白板或心智圖，讓我可以把想法視覺化地連在一起。',
        scores: { [NoteTakerType.Gardener]: 2, [ToolKey.Obsidian]: 2, [ToolKey.Heptabase]: 3 },
      },
      {
        text: '像個超強的數位檔案櫃，不管存了什麼，一搜就找到。',
        scores: { [NoteTakerType.Librarian]: 2, [ToolKey.Evernote]: 3 },
      },
      {
        text: '就像一本乾淨的筆記本，打開就能寫，沒有多餘的干擾。',
        scores: { [ToolKey.AppleNotes]: 2, [ToolKey.GoodNotes]: 2 },
      },
    ],
  },
  {
    text: '看到一篇很棒的文章或學到新知時，你會怎麼做？',
    options: [
      {
        text: '把它歸檔到我設定好的資料夾和分類裡，一切井井有條。',
        scores: { [NoteTakerType.Architect]: 2, [ToolKey.Notion]: 2 },
      },
      {
        text: '想想這跟以前學過的東西有什麼關聯，然後把它們連起來。',
        scores: { [NoteTakerType.Gardener]: 2, [ToolKey.Obsidian]: 2, [ToolKey.Heptabase]: 1 },
      },
      {
        text: '先丟進去再說！加上幾個標籤，以後方便找。',
        scores: { [NoteTakerType.Librarian]: 2, [ToolKey.Evernote]: 2 },
      },
    ],
  },
  {
    text: '對於筆記資料，你的安全感來自...',
    options: [
      {
        text: '檔案必須是我的！它們要能備份在我的電腦裡。',
        scores: { [ToolKey.Obsidian]: 3 },
      },
      {
        text: '方便最重要！要能夠雲端同步服務，隨時都能存取。',
        scores: { [NoteTakerType.Architect]: 1, [NoteTakerType.Librarian]: 1, [ToolKey.Notion]: 1, [ToolKey.Evernote]: 1, [ToolKey.AppleNotes]: 1, [ToolKey.GoodNotes]: 1, [ToolKey.Heptabase]: 1 },
      },
    ],
  },
  {
    text: '你最常在哪種裝置上記筆記？',
    options: [
      {
        text: 'iPad 不離身，最愛用手寫筆寫字的感覺。',
        scores: { [ToolKey.GoodNotes]: 3 },
      },
      {
        text: '我是果粉！在iPhone, iPad, Mac 之間無縫切換。',
        scores: { [ToolKey.AppleNotes]: 3 },
      },
      {
        text: '多平台游牧者，公司用 Windows，回家用 Mac，手機也要能看。',
        scores: { [ToolKey.Notion]: 1, [ToolKey.Evernote]: 1, [ToolKey.Obsidian]: 1 },
      },
      {
        text: '大部分時間都使用電腦做筆記',
        scores: { [ToolKey.Obsidian]: 1, [ToolKey.Heptabase]: 1, [ToolKey.Notion]: 1 },
      },
    ],
  },
  {
    text: '對於軟體功能，你的態度比較偏向？',
    options: [
      {
        text: '給我最大的自由度！我喜歡用各種插件把工具改造成我想要的樣子。',
        scores: { [NoteTakerType.Gardener]: 1, [ToolKey.Obsidian]: 3 },
      },
      {
        text: '軟體本身功能要夠強大，有內建資料庫或模板就很棒。',
        scores: { [NoteTakerType.Architect]: 1, [ToolKey.Notion]: 3 },
      },
      {
        text: '簡單、好用、能快速上手最重要。',
        scores: { [ToolKey.AppleNotes]: 2, [ToolKey.GoodNotes]: 1, [ToolKey.Evernote]: 1 },
      },
    ],
  },
];