import { Question, Tool, ToolKey, NoteTaker, NoteTakerType } from './types';

// --- ENGLISH DATA ---

const TOOLS_EN: Record<ToolKey, Tool> = {
  [ToolKey.Notion]: {
    name: 'Notion',
    url: 'https://www.notion.so/',
    features: ['All-in-one workspace', 'Powerful databases', 'Highly customizable templates', 'Great for team collaboration', 'Web content clipper'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png',
    price: 'Free plan available, paid plans from $8/month',
    firstStep: 'Try using Notion\'s To-Do List template to plan out your day. Start simple!',
    recommendationReason: {
      [NoteTakerType.Architect]: 'You value structure and systems. Notion\'s incredible flexibility, databases, and templates empower you to build a fully customized life dashboard and operating system.',
      [NoteTakerType.Gardener]: 'You enjoy organizing thoughts gradually. Notion\'s flexible pages are like fertile ground, letting you plant ideas freely and grow them into a structured knowledge garden.',
      [NoteTakerType.Librarian]: 'You excel at collecting and archiving. Notion\'s powerful databases and Web Clipper are the tools you need to categorize all your digital information into an ultimate personal archive.',
    }
  },
  [ToolKey.Obsidian]: {
    name: 'Obsidian',
    url: 'https://obsidian.md/',
    features: ['Local storage for privacy', 'Plain text Markdown files', 'Knowledge graph visualization', 'Rich plugin ecosystem', 'Powerful bidirectional linking'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2023_Obsidian_logo.svg/1200px-2023_Obsidian_logo.svg.png',
    price: 'Free for personal use',
    firstStep: 'Create a "Daily Note" and write down one new thing you learned today. Don\'t worry about plugins or links just yet—just start writing.',
    recommendationReason: {
        [NoteTakerType.Gardener]: 'You love discovering surprising connections between ideas. Obsidian\'s bidirectional links and knowledge graph were made for you, helping your thoughts grow and collide to form a unique "second brain."',
        [NoteTakerType.Architect]: 'You seek a long-lasting system. Obsidian\'s local storage and universal format provide ultimate control. With its rich plugins, you can build a highly structured knowledge fortress.',
        [NoteTakerType.Librarian]: 'You prioritize data ownership. Obsidian\'s local, plain-text storage offers maximum information security. Your notes are 100% yours, forever, with no platform lock-in.',
    }
  },
  [ToolKey.Heptabase]: {
    name: 'Heptabase',
    url: 'https://get.heptabase.com/k0oiks8880st',
    features: ['Visual learning and research', 'Infinite whiteboard canvas', 'Card-based note system', 'Excels at connecting and organizing ideas', 'Built for deep research'],
    logo: 'https://wiki.heptabase.com/img/logo.svg',
    price: 'Subscription, from $11.99/month',
    firstStep: 'Create a whiteboard for a topic you\'re exploring. Add three simple note cards and draw lines to connect them. See how it feels!',
    recommendationReason: {
        [NoteTakerType.Gardener]: 'Your thoughts are a constellation of ideas, and Heptabase\'s infinite whiteboard is your canvas. It lets you visually connect and arrange concepts, which is perfect for deep research and untangling complex topics.',
        [NoteTakerType.Architect]: 'You like to build knowledge from a macro perspective. Heptabase\'s visual whiteboard helps you see the big picture first, then dive into the details, allowing a top-down approach to structuring your knowledge.',
    }
  },
  [ToolKey.AppleNotes]: {
    name: 'Apple Notes',
    url: 'https://apps.apple.com/us/app/notes/id1110145109',
    features: ['Seamless Apple ecosystem integration', 'Quick to launch, simple to use', 'Basic formatting and handwriting support', 'Completely free', 'Ideal for quick capture'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_Notes_icon.svg/1200px-Apple_Notes_icon.svg.png',
    price: 'Free',
    firstStep: 'Open Notes right now and create a grocery list for your next shopping trip. Try the checklist feature—it\'s super simple.',
    recommendationReason: {
        [NoteTakerType.Librarian]: 'For you, the fastest tool is the best tool. Apple Notes is built into all your devices, launching instantly so you never miss a fleeting thought or important bit of info.',
    }
  },
  [ToolKey.GoodNotes]: {
    name: 'GoodNotes',
    url: 'https://www.goodnotes.com/',
    features: ['Top-tier handwriting experience', 'Powerful PDF annotation', 'Digital notebook management', 'Handwriting recognition search', 'Perfect for students and academics'],
    logo: 'https://store-images.s-microsoft.com/image/apps.53458.13545614329042837.f1eab701-e76a-444e-842d-e8e01f558746.12ac4149-7319-48bd-a2b7-d016931a0f76',
    price: 'Free trial, one-time purchase or subscription',
    firstStep: 'Import a PDF document, try highlighting a key point, and scribble a quick thought in the margin.',
    recommendationReason: {
        [NoteTakerType.Gardener]: 'You love the intuitive, free-flowing feel of handwriting. GoodNotes offers a best-in-class digital handwriting experience, letting you doodle, draw, and connect ideas as naturally as you would on paper.',
        [NoteTakerType.Librarian]: 'You collect a lot of PDF documents. GoodNotes is your best reading and annotation companion, with powerful PDF markup features to highlight and comment with ease.',
    }
  },
  [ToolKey.Evernote]: {
    name: 'Evernote',
    url: 'https://evernote.com/',
    features: ['Powerful web clipper', 'Cross-platform sync', 'Robust search capabilities', 'Document scanning and OCR', 'Central repository for digital data'],
    logo: 'https://cdn-icons-png.flaticon.com/512/2111/2111389.png',
    price: 'Free plan available, paid plans from $14.99/month',
    firstStep: 'Install the Evernote Web Clipper in your browser and try saving an interesting article you find online. It\'s just one click!',
    recommendationReason: {
        [NoteTakerType.Librarian]: 'You are a collector of information, and Evernote\'s classic web clipper is still a benchmark. It helps you easily capture web content from all over, building a powerful, searchable digital archive.',
        [NoteTakerType.Architect]: 'You like to organize information in a stable, methodical way. Evernote\'s notebook and tag system provides a traditional yet powerful structure for building your information database.',
    }
  },
};

const NOTE_TAKER_ARCHETYPES_EN: Record<NoteTakerType, NoteTaker> = {
  [NoteTakerType.Architect]: {
    name: 'The Architect',
    description: 'You love to plan, build, and bring order to information. You need a tool that helps you create systems, frameworks, and dashboards. For you, a solid structure is everything.',
  },
  [NoteTakerType.Gardener]: {
    name: 'The Gardener',
    description: 'You thrive on exploring ideas, making spontaneous connections, and watching your thoughts grow. You need a flexible space that lets concepts organically connect and cross-pollinate.',
  },
  [NoteTakerType.Librarian]: {
    name: 'The Librarian',
    description: 'You excel at collecting, categorizing, and retrieving information. You need a powerful tool that makes it effortless to capture resources and find them again in a heartbeat.',
  },
};

const QUESTIONS_EN: Question[] = [
  {
    text: "What's your main goal for taking notes?",
    options: [
      { text: 'To map out and track my projects from start to finish.', scores: { [NoteTakerType.Architect]: 2, [ToolKey.Notion]: 2 } },
      { text: 'To connect ideas from different sources and build a personal knowledge hub.', scores: { [NoteTakerType.Gardener]: 2, [ToolKey.Obsidian]: 2, [ToolKey.Heptabase]: 1 } },
      { text: 'To quickly save random bits of info—like screenshots, links, and receipts.', scores: { [NoteTakerType.Librarian]: 2, [ToolKey.Evernote]: 2, [ToolKey.AppleNotes]: 1 } },
      { text: 'To get fleeting thoughts and to-dos out of my head before I forget them.', scores: { [NoteTakerType.Librarian]: 1, [ToolKey.AppleNotes]: 2 } },
    ],
  },
  {
    text: "You're planning a vacation. What does your process look like?",
    options: [
      { text: 'I\'d create a master document with a detailed itinerary, budget, and checklists.', scores: { [NoteTakerType.Architect]: 2, [ToolKey.Notion]: 3 } },
      { text: 'I\'d brainstorm on a whiteboard, connecting cool spots and restaurants to create a loose plan.', scores: { [NoteTakerType.Gardener]: 2, [ToolKey.Heptabase]: 3, [ToolKey.Obsidian]: 1 } },
      { text: 'I\'d save all my reservations, articles, and maps into a single "trip" folder.', scores: { [NoteTakerType.Librarian]: 2, [ToolKey.Evernote]: 2 } },
      { text: 'A simple list of must-sees and must-buys in my phone\'s notes app is all I need.', scores: { [ToolKey.AppleNotes]: 2 } },
    ],
  },
  {
    text: "When you're learning something new and complicated, what's your approach?",
    options: [
      { text: 'I build a solid outline first, then fill in the details piece by piece.', scores: { [NoteTakerType.Architect]: 2, [ToolKey.Notion]: 2 } },
      { text: 'I spread everything out and create a mind map to see how all the concepts connect.', scores: { [NoteTakerType.Gardener]: 2, [ToolKey.Heptabase]: 3 } },
      { text: 'I link notes together as I go, creating a web of interconnected ideas.', scores: { [NoteTakerType.Gardener]: 2, [ToolKey.Obsidian]: 3 } },
      { text: 'I gather all the materials—handouts, articles, and my own thoughts—into one central spot.', scores: { [NoteTakerType.Librarian]: 2, [ToolKey.Evernote]: 2, [ToolKey.GoodNotes]: 1 } },
    ],
  },
  {
    text: 'In a perfect world, one of your notes would look like...',
    options: [
      { text: 'A structured document with clear headings and tables, like a personal wiki page.', scores: { [NoteTakerType.Architect]: 2, [ToolKey.Notion]: 3 } },
      { text: 'A simple index card focusing on one single idea, ready to be linked to others.', scores: { [NoteTakerType.Gardener]: 2, [ToolKey.Obsidian]: 2, [ToolKey.Heptabase]: 2 } },
      { text: 'A souped-up web clipping with the original page, images, and my own highlights.', scores: { [NoteTakerType.Librarian]: 2, [ToolKey.Evernote]: 3 } },
      { text: 'A quick digital sticky note, maybe with a few scribbles or doodles.', scores: { [ToolKey.AppleNotes]: 2, [ToolKey.GoodNotes]: 1 } },
    ],
  },
  {
    text: "What's your biggest headache when it comes to managing information?",
    options: [
      { text: 'My notes are all over the place, with no single system to tie them together.', scores: { [NoteTakerType.Architect]: 2, [ToolKey.Notion]: 2 } },
      { text: 'I have a lot of great ideas, but they feel like lonely islands I can\'t connect.', scores: { [NoteTakerType.Gardener]: 2, [ToolKey.Obsidian]: 2, [ToolKey.Heptabase]: 2 } },
      { text: 'The classic "I know I saved it somewhere..." but I can never find it again.', scores: { [NoteTakerType.Librarian]: 2, [ToolKey.Evernote]: 3 } },
      { text: 'By the time I open the app, that brilliant idea I just had is already gone.', scores: { [ToolKey.AppleNotes]: 3 } },
    ],
  },
  {
    text: "Think about a tool you tried and ditched. Why didn't it work out?",
    options: [
      { text: 'The setup was a nightmare. I gave up before I even really started.', scores: { [ToolKey.Obsidian]: -2, [ToolKey.AppleNotes]: 2, [ToolKey.Notion]: 1 } },
      { text: 'I wasn\'t ready to commit to a paid subscription right away.', scores: { [ToolKey.Heptabase]: -2, [ToolKey.Evernote]: -1, [ToolKey.Obsidian]: 3, [ToolKey.AppleNotes]: 2 } },
      { text: 'The mobile experience was terrible, so I couldn\'t use it on the go.', scores: { [ToolKey.AppleNotes]: 3, [ToolKey.Notion]: -1 } },
      { text: 'It only did one thing well, and I need something that handles more of my life.', scores: { [ToolKey.Notion]: 3, [NoteTakerType.Architect]: 2, [ToolKey.AppleNotes]: -2 } },
    ],
  },
  {
    text: "Besides typing text, what's a must-have feature for you?",
    options: [
      { text: 'Being able to mark up PDFs and scribble with a stylus is essential.', scores: { [ToolKey.GoodNotes]: 3 } },
      { text: 'A one-click way to save articles, recipes, and images from the web.', scores: { [NoteTakerType.Librarian]: 2, [ToolKey.Evernote]: 2, [ToolKey.Notion]: 1 } },
      { text: 'A freeform canvas where I can visually connect ideas like a mood board.', scores: { [NoteTakerType.Gardener]: 2, [ToolKey.Heptabase]: 3 } },
      { text: 'Mostly text, but I need simple formatting like checklists and headers.', scores: { [ToolKey.Notion]: 2, [ToolKey.Obsidian]: 1, [ToolKey.AppleNotes]: 1 } },
    ],
  },
    {
    text: 'Fast forward five years. Your note-taking system has become...',
    options: [
      { text: 'My personal "life OS" for managing everything from big projects to daily habits.', scores: { [NoteTakerType.Architect]: 3, [ToolKey.Notion]: 3 } },
      { text: 'A "second brain" that grows with me, sparking unexpected new ideas.', scores: { [NoteTakerType.Gardener]: 3, [ToolKey.Obsidian]: 3, [ToolKey.Heptabase]: 2 } },
      { text: 'A perfectly organized digital file cabinet with everything I need to reference.', scores: { [NoteTakerType.Librarian]: 3, [ToolKey.Evernote]: 3 } },
      { text: 'A rich digital journal, full of memories, ideas, and inspiration.', scores: { [ToolKey.AppleNotes]: 2, [ToolKey.GoodNotes]: 2 } },
    ],
  },
  {
    text: 'How important is working with others in your notes?',
    options: [
      { text: 'Essential! I\'m constantly co-editing documents with my team.', scores: { [NoteTakerType.Architect]: 1, [ToolKey.Notion]: 3 } },
      { text: 'Sometimes. I just need to share a single note with someone every now and then.', scores: { [ToolKey.Evernote]: 1, [ToolKey.AppleNotes]: 1 } },
      { text: 'Not at all. My notes are my own private sanctuary.', scores: { [NoteTakerType.Gardener]: 1, [ToolKey.Obsidian]: 2, [ToolKey.Heptabase]: 1, [ToolKey.GoodNotes]: 1 } },
    ],
  },
  {
    text: "What's your top priority for a tool you'll use for years?",
    options: [
      { text: 'Data Ownership: My notes must be 100% mine, stored locally, with no platform lock-in.', scores: { [ToolKey.Obsidian]: 3 } },
      { text: 'Power & Flexibility: I need an all-in-one system that can adapt to anything I throw at it.', scores: { [ToolKey.Notion]: 3, [NoteTakerType.Architect]: 1 } },
      { text: 'Speed & Ease of Use: It has to be fast, sync everywhere, and capture ideas in seconds.', scores: { [ToolKey.AppleNotes]: 3, [ToolKey.Evernote]: 1 } },
      { text: 'Unique Features: I\'ll gladly pay for standout features like advanced handwriting or visualization tools.', scores: { [ToolKey.GoodNotes]: 2, [ToolKey.Heptabase]: 2 } },
    ],
  },
];

// --- CHINESE DATA ---

const TOOLS_ZH: Record<ToolKey, Tool> = {
  [ToolKey.Notion]: {
    name: 'Notion',
    url: 'https://www.notion.so/',
    features: ['All-in-one 工作區', '強大的數據庫功能', '高度可客製化模板', '適合團隊協作', '網頁內容收藏'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png',
    price: '提供免費方案，付費方案 $8/月 起',
    firstStep: '試著用 Notion 的「待辦清單」模板，規劃你明天要做的事。先不用想得太複雜！',
    recommendationReason: {
      [NoteTakerType.Architect]: '你注重結構與系統，Notion 的靈活性、數據庫和模板功能，能讓你打造一個完全客製化、專屬於你的人生儀表板與操作系統。',
      [NoteTakerType.Gardener]: '你享受慢慢組織想法的過程，Notion 靈活的頁面就像一片沃土，能讓你自由種植靈感，並逐漸將它們建構成一個更有結構的知識花園。',
      [NoteTakerType.Librarian]: '你擅長收集與歸檔，Notion 強大的資料庫與 Web Clipper 功能，正是你需要的利器。它能幫你將所有數位資訊分門別類，建立一個終極的個人檔案櫃。',
    }
  },
  [ToolKey.Obsidian]: {
    name: 'Obsidian',
    url: 'https://obsidian.md/',
    features: ['本地儲存，保障隱私', '純文字 Markdown 檔案', '知識圖譜視覺化', '豐富的插件生態系', '強大的雙向連結'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2023_Obsidian_logo.svg/1200px-2023_Obsidian_logo.svg.png',
    price: '個人使用免費',
    firstStep: '建立一個「每日筆記」，寫下一件今天學到的新事物。先別管插件和連結。',
    recommendationReason: {
        [NoteTakerType.Gardener]: '你享受探索知識連結的樂趣，Obsidian 的雙向連結和知識圖譜，就是為你而生。它能幫助你的想法自由生長、互相碰撞，最終形成一個獨一無二的「第二大腦」。',
        [NoteTakerType.Architect]: '你尋求一個能長久使用的系統，Obsidian 的本地儲存和通用格式提供了極致的掌控感。搭配豐富的插件，你可以在這個基礎上建立一個高度結構化、完全屬於你的知識堡壘。',
        [NoteTakerType.Librarian]: '你最重視資料的自主權，Obsidian 的本地儲存和純文字格式，提供了最極致的資訊安全感。你的筆記 100% 屬於你，永遠不必擔心被平台綁架。',
    }
  },
  [ToolKey.Heptabase]: {
    name: 'Heptabase',
    url: 'https://get.heptabase.com/k0oiks8880st',
    features: ['視覺化的學習與研究', '無限延伸的白板', '卡片式筆記系統', '擅長連結與梳理思路', '專為深度研究打造'],
    logo: 'https://wiki.heptabase.com/img/logo.svg',
    price: '訂閱制，$11.99/月 起',
    firstStep: '建立一個白板，為你最近在思考的主題，放上三張卡片筆記，並簡單連結起來。',
    recommendationReason: {
        [NoteTakerType.Gardener]: '你的思緒如同星圖，Heptabase 的無限白板就是你的宇宙。它讓你能在視覺上自由地連結、排列每一個想法卡片，非常適合用來進行深度研究和釐清複雜主題。',
        [NoteTakerType.Architect]: '你喜歡從宏觀視角建構知識，Heptabase 的視覺化白板能幫助你先看見全局，再深入細節。它讓你能夠以鳥瞰的方式，規劃和建立你的知識體系。',
    }
  },
  [ToolKey.AppleNotes]: {
    name: 'Apple Notes',
    url: 'https://apps.apple.com/us/app/notes/id1110145109',
    features: ['蘋果生態系無縫整合', '啟動快速，操作簡單', '基礎格式與手寫功能', '完全免費', '適合快速紀錄'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_Notes_icon.svg/1200px-Apple_Notes_icon.svg.png',
    price: '免費',
    firstStep: '立刻打開備忘錄，寫下你下次去超市要買的東西，試試看核對清單功能。',
    recommendationReason: {
        [NoteTakerType.Librarian]: '對你來說，最快的收藏工具就是最好的工具。Apple Notes 深度整合在你的蘋果裝置中，能以最快的速度啟動，確保你不會錯過任何一閃而過的零碎靈感或重要資訊。',
    }
  },
  [ToolKey.GoodNotes]: {
    name: 'GoodNotes',
    url: 'https://www.goodnotes.com/',
    features: ['頂級的手寫體驗', '強大的 PDF 標註功能', '數位筆記本管理', '支援手寫辨識搜尋', '適合學生和學術人士'],
    logo: 'https://store-images.s-microsoft.com/image/apps.53458.13545614329042837.f1eab701-e76a-444e-842d-e8e01f558746.12ac4149-7319-48bd-a2b7-d016931a0f76',
    price: '提供免費試用，可買斷或訂閱',
    firstStep: '匯入一份 PDF 文件，試著用螢光筆畫重點，並在旁邊寫下一點心得。',
    recommendationReason: {
        [NoteTakerType.Gardener]: '你偏愛手寫的直覺與溫度，GoodNotes 提供了頂級的數位手寫體驗。它讓你像在紙上一樣，自由地塗鴉、畫線、連結想法，讓思緒自然流淌。',
        [NoteTakerType.Librarian]: '你收藏的資訊大多是 PDF 文件，GoodNotes 將是你的最佳閱讀與註記夥伴。它強大的 PDF 標註功能，讓你能輕鬆地在文件上畫重點和寫下心得。',
    }
  },
  [ToolKey.Evernote]: {
    name: 'Evernote',
    url: 'https://evernote.com/',
    features: ['強大的網頁剪藏功能', '跨平台同步', '強大的搜尋功能', '文件掃描與 OCR', '數位資料的中央儲存庫'],
    logo: 'https://cdn-icons-png.flaticon.com/512/2111/2111389.png',
    price: '提供免費方案，付費方案 $14.99/月 起',
    firstStep: '安裝瀏覽器剪藏工具，然後試著把一篇你感興趣的文章完整存到 Evernote 裡。',
    recommendationReason: {
        [NoteTakerType.Librarian]: '你是資訊的收藏家，而 Evernote 經典的網頁剪藏功能至今仍是業界標竿。它能幫助你輕鬆捕捉來自四面八方的網路資訊，建立一個強大、易於搜尋的數位檔案櫃。',
        [NoteTakerType.Architect]: '你喜歡用穩定的方式來組織資訊，Evernote 的筆記本和標籤系統，提供了一個傳統而強大的架構。它能讓你以井然有序的方式，建立起屬於你的資訊資料庫。',
    }
  },
};

const NOTE_TAKER_ARCHETYPES_ZH: Record<NoteTakerType, NoteTaker> = {
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

const QUESTIONS_ZH: Question[] = [
  {
    text: '你透過做筆記來解決什麼問題？',
    options: [
      { text: '規劃並追蹤各種專案和目標。', scores: { [NoteTakerType.Architect]: 2, [ToolKey.Notion]: 2 } },
      { text: '連結學到的各種知識，建立屬於自己的知識庫。', scores: { [NoteTakerType.Gardener]: 2, [ToolKey.Obsidian]: 2, [ToolKey.Heptabase]: 1 } },
      { text: '快速捕捉圖片、收據、待辦事項、網址等各種零碎資訊。', scores: { [NoteTakerType.Librarian]: 2, [ToolKey.Evernote]: 2, [ToolKey.AppleNotes]: 1 } },
      { text: '只想隨手記下臨時的想法或待辦事項。', scores: { [NoteTakerType.Librarian]: 1, [ToolKey.AppleNotes]: 2 } },
    ],
  },
  {
    text: '規劃一趟自由旅行時，你會如何組織資訊？',
    options: [
      { text: '建立一個詳細的文件，包含預算、行程、打包清單等，力求資訊完整。', scores: { [NoteTakerType.Architect]: 2, [ToolKey.Notion]: 3 } },
      { text: '在白板上貼滿景點和餐廳的便利貼，隨機排列，再用線條連結出路線。', scores: { [NoteTakerType.Gardener]: 2, [ToolKey.Heptabase]: 3, [ToolKey.Obsidian]: 1 } },
      { text: '把所有訂票證明、部落格文章、地圖，全部丟進一個資料夾。', scores: { [NoteTakerType.Librarian]: 2, [ToolKey.Evernote]: 2 } },
      { text: '在手機備忘錄裡列出必去景點和必買清單就夠了。', scores: { [ToolKey.AppleNotes]: 2 } },
    ],
  },
    {
    text: '學習一個複雜的新領域時，你會怎麼做筆記？',
    options: [
      { text: '先建立清晰的大綱和結構，再慢慢寫入細節。', scores: { [NoteTakerType.Architect]: 2, [ToolKey.Notion]: 2 } },
      { text: '把所有概念攤開，畫出心智圖來理解它們的關係。', scores: { [NoteTakerType.Gardener]: 2, [ToolKey.Heptabase]: 3 } },
      { text: '邊看邊記，並在筆記之間建立雙向關聯，形成知識網絡。', scores: { [NoteTakerType.Gardener]: 2, [ToolKey.Obsidian]: 3 } },
      { text: '把課程講義、參考文章、心得全部搜集在同一個地方。', scores: { [NoteTakerType.Librarian]: 2, [ToolKey.Evernote]: 2, [ToolKey.GoodNotes]: 1 } },
    ],
  },
  {
    text: '你理想中的一則筆記長什麼樣子？',
    options: [
      { text: '一份結構完整的文件，有標題、列表和表格，像個小型維基。', scores: { [NoteTakerType.Architect]: 2, [ToolKey.Notion]: 3 } },
      { text: '一張只清楚說明一件事的卡片，方便與其他卡片連結。', scores: { [NoteTakerType.Gardener]: 2, [ToolKey.Obsidian]: 2, [ToolKey.Heptabase]: 2 } },
      { text: '一篇包含網頁、圖片和註解的豐富剪報。', scores: { [NoteTakerType.Librarian]: 2, [ToolKey.Evernote]: 3 } },
      { text: '一張數位便利貼，可能還帶有手寫或塗鴉。', scores: { [ToolKey.AppleNotes]: 2, [ToolKey.GoodNotes]: 1 } },
    ],
  },
  {
    text: '最讓你頭痛的資訊整理問題是？',
    options: [
      { text: '資訊散落在各處，缺乏統一的系統來整合。', scores: { [NoteTakerType.Architect]: 2, [ToolKey.Notion]: 2 } },
      { text: '想法很多，但它們都是孤立的，不知道怎麼連結。', scores: { [NoteTakerType.Gardener]: 2, [ToolKey.Obsidian]: 2, [ToolKey.Heptabase]: 2 } },
      { text: '儲存過某個東西，但想找時卻怎麼也找不到。', scores: { [NoteTakerType.Librarian]: 2, [ToolKey.Evernote]: 3 } },
      { text: '靈感一閃而過，但打開 App 的步驟太繁瑣，來不及記下。', scores: { [ToolKey.AppleNotes]: 3 } },
    ],
  },
  {
    text: '過去嘗試新工具時，最常因為什麼而放棄？',
    options: [
      { text: '設定太複雜，還沒開始用就累了。', scores: { [ToolKey.Obsidian]: -2, [ToolKey.AppleNotes]: 2, [ToolKey.Notion]: 1 } },
      { text: '一定付費才能使用，讓人卻步。', scores: { [ToolKey.Heptabase]: -2, [ToolKey.Evernote]: -1, [ToolKey.Obsidian]: 3, [ToolKey.AppleNotes]: 2 } },
      { text: '沒有支援行動裝置，無法隨時捕捉靈感。', scores: { [ToolKey.AppleNotes]: 3, [ToolKey.Notion]: -1 } },
      { text: '功能太單一，無法整合我生活的各個面向。', scores: { [ToolKey.Notion]: 3, [NoteTakerType.Architect]: 2, [ToolKey.AppleNotes]: -2 } },
    ],
  },
  {
    text: '除了打字，你最需要什麼功能？',
    options: [
      { text: '在PDF畫重點上做註記，或用手寫筆自由書寫。', scores: { [ToolKey.GoodNotes]: 3 } },
      { text: '輕鬆地把看到的網頁、文章、圖片完整存下來。', scores: { [NoteTakerType.Librarian]: 2, [ToolKey.Evernote]: 2, [ToolKey.Notion]: 1 } },
      { text: '在空白的畫布上，把各種資料像卡片般自由排列組合。', scores: { [NoteTakerType.Gardener]: 2, [ToolKey.Heptabase]: 3 } },
      { text: '主要是文字，但希望能方便地加入待辦清單、分隔線等簡單格式。', scores: { [ToolKey.Notion]: 2, [ToolKey.Obsidian]: 1, [ToolKey.AppleNotes]: 1 } },
    ],
  },
    {
    text: '五年後，你希望你的筆記庫變成什麼樣子？',
    options: [
      { text: '一個個人化的「人生操作系統」，管理我的專案、目標和知識。', scores: { [NoteTakerType.Architect]: 3, [ToolKey.Notion]: 3 } },
      { text: '一個能持續成長的「第二大腦」，裡面的想法會互相碰撞，產生新的洞見。', scores: { [NoteTakerType.Gardener]: 3, [ToolKey.Obsidian]: 3, [ToolKey.Heptabase]: 2 } },
      { text: '一個井然有序的數位檔案櫃，存放我所有重要的參考資料。', scores: { [NoteTakerType.Librarian]: 3, [ToolKey.Evernote]: 3 } },
      { text: '一個充滿回憶和靈感的數位日記本。', scores: { [ToolKey.AppleNotes]: 2, [ToolKey.GoodNotes]: 2 } },
    ],
  },
  {
    text: '你需要協作功能嗎？',
    options: [
      { text: '需要！我常跟團隊成員共同編輯文件。', scores: { [NoteTakerType.Architect]: 1, [ToolKey.Notion]: 3 } },
      { text: '偶爾會，只需把單篇筆記分享給朋友看。', scores: { [ToolKey.Evernote]: 1, [ToolKey.AppleNotes]: 1 } },
      { text: '幾乎不用，筆記是我的私密空間。', scores: { [NoteTakerType.Gardener]: 1, [ToolKey.Obsidian]: 2, [ToolKey.Heptabase]: 1, [ToolKey.GoodNotes]: 1 } },
    ],
  },
  {
    text: '選擇長期工具，你最看重的是？',
    options: [
      { text: '【資料主權】資料必須 100% 屬於我，存在本機，不被平台綁架。', scores: { [ToolKey.Obsidian]: 3 } },
      { text: '【整合與彈性】我需要一個能管理生活各個層面的「強大系統」。', scores: { [ToolKey.Notion]: 3, [NoteTakerType.Architect]: 1 } },
      { text: '【速度與便利】跨裝置同步，快速啟動，少少步驟就能記錄。', scores: { [ToolKey.AppleNotes]: 3, [ToolKey.Evernote]: 1 } },
      { text: '【專業功能】我願意為特殊功能（手寫、視覺化...）付費。', scores: { [ToolKey.GoodNotes]: 2, [ToolKey.Heptabase]: 2 } },
    ],
  },
];


export const getTools = (lang: 'en' | 'zh-TW') => lang === 'en' ? TOOLS_EN : TOOLS_ZH;
export const getNoteTakerArchetypes = (lang: 'en' | 'zh-TW') => lang === 'en' ? NOTE_TAKER_ARCHETYPES_EN : NOTE_TAKER_ARCHETYPES_ZH;
export const getQuestions = (lang: 'en' | 'zh-TW') => lang === 'en' ? QUESTIONS_EN : QUESTIONS_ZH;