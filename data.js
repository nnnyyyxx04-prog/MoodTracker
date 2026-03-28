window.APP_DATA = {
  storageKey: "mood-tracker-v1",
  slotTemplate: {
    id: "default-slot-template-v1",
    name: "默认作息",
    slots: [
      { id: "late-night", name: "凌晨", start: "00:00", end: "05:59" },
      { id: "morning", name: "上午", start: "06:00", end: "11:59" },
      { id: "afternoon", name: "下午", start: "12:00", end: "17:59" },
      { id: "evening", name: "晚上", start: "18:00", end: "23:59" }
    ]
  },
  bodyAreas: ["头部", "眼睛", "喉咙", "胸口", "心口", "胃部", "腹部", "肩颈", "手臂", "腿部", "全身"],
  emotionCategories: [
    {
      id: "joy",
      label: "快乐",
      color: "#f0b441",
      groups: [
        { label: "乐观的", tags: ["受到启发的", "充满希望的"] },
        { label: "信任的", tags: ["亲密的", "敏感的"] },
        { label: "和平的", tags: ["感激的", "充满爱的"] },
        { label: "强大的", tags: ["有创造力的", "勇敢的"] },
        { label: "被接受的", tags: ["有价值的", "受尊敬的"] },
        { label: "骄傲的", tags: ["自信的", "如愿以偿"] },
        { label: "感兴趣的", tags: ["好问的", "好奇的"] },
        { label: "满足的", tags: ["愉快", "自由的"] },
        { label: "玩耍的", tags: ["顽皮的", "兴奋的"] },
        { label: "激动的", tags: ["渴望的", "精力充沛的"] }
      ]
    },
    {
      id: "surprise",
      label: "惊讶",
      color: "#8a5bd1",
      groups: [
        { label: "惊奇的", tags: ["惊讶的", "敬畏的"] },
        { label: "迷惑的", tags: ["困惑的", "幻灭的"] },
        { label: "吃惊的", tags: ["震惊的", "沮丧的"] }
      ]
    },
    {
      id: "negative",
      label: "消极状态",
      color: "#4d9c66",
      groups: [
        { label: "疲倦的", tags: ["昏昏沉沉的", "注意力不集中的"] },
        { label: "紧张的", tags: ["失控的", "无所适从感"] },
        { label: "忙碌的", tags: ["匆忙感", "有压力"] },
        { label: "无聊的", tags: ["无动于衷", "冷漠的"] }
      ]
    },
    {
      id: "fear",
      label: "恐惧",
      color: "#db8550",
      groups: [
        { label: "害怕", tags: ["无助", "受惊"] },
        { label: "焦虑", tags: ["被否决", "担心"] },
        { label: "无安全感", tags: ["不胜任感", "次等感"] },
        { label: "虚弱", tags: ["无价值", "无关紧要"] },
        { label: "被拒绝", tags: ["被排斥", "受迫害"] },
        { label: "受到威胁", tags: ["神经质", "暴露的"] }
      ]
    },
    {
      id: "anger",
      label: "愤怒",
      color: "#d15d57",
      groups: [
        { label: "失望", tags: ["被背叛", "忿恨"] },
        { label: "受辱", tags: ["被轻视", "被嘲笑"] },
        { label: "痛苦", tags: ["愤愤不平", "被亵渎"] },
        { label: "生气", tags: ["狂怒", "嫉妒"] },
        { label: "侵略性", tags: ["被激怒", "敌意"] },
        { label: "挫败感", tags: ["极度愤怒", "烦恼"] },
        { label: "疏离", tags: ["孤僻", "麻木"] },
        { label: "挑剔", tags: ["轻蔑", "鄙视"] }
      ]
    },
    {
      id: "disgust",
      label: "厌恶",
      color: "#8e8e8e",
      groups: [
        { label: "反对", tags: ["评判", "尴尬"] },
        { label: "糟糕", tags: ["惊骇", "厌恶"] },
        { label: "反感", tags: ["恶心", "可憎"] }
      ]
    },
    {
      id: "sadness",
      label: "悲伤",
      color: "#5585c0",
      groups: [
        { label: "失落", tags: ["犹豫", "失望的"] },
        { label: "虚弱", tags: ["自卑的", "空虚的"] },
        { label: "悲痛", tags: ["懊悔的", "感到羞耻"] },
        { label: "绝望", tags: ["有罪恶感", "无能为力"] },
        { label: "脆弱", tags: ["感到委屈", "受害"] },
        { label: "孤独", tags: ["被遗弃", "被孤立"] }
      ]
    }
  ],
  somaticTags: [
    { id: "chest-tight", label: "胸口发紧", color: "#5b7abf" },
    { id: "palpitations", label: "心慌", color: "#5b7abf" },
    { id: "short-breath", label: "呼吸急促", color: "#5b7abf" },
    { id: "throat-tight", label: "喉咙堵住", color: "#5b7abf" },
    { id: "headache", label: "头痛或头胀", color: "#5b7abf" },
    { id: "dizzy", label: "发晕", color: "#5b7abf" },
    { id: "stomach-pain", label: "胃部不适", color: "#5b7abf" },
    { id: "nausea", label: "恶心", color: "#5b7abf" },
    { id: "appetite-change", label: "食欲变化", color: "#5b7abf" },
    { id: "fatigue", label: "疲乏", color: "#5b7abf" },
    { id: "numb", label: "麻木", color: "#5b7abf" },
    { id: "tremble", label: "发抖", color: "#5b7abf" },
    { id: "insomnia", label: "难以入睡", color: "#5b7abf" },
    { id: "muscle-tense", label: "肌肉紧绷", color: "#5b7abf" }
  ],
  intensityLabels: {
    1: "1 · 很轻",
    2: "2 · 有一点",
    3: "3 · 有点明显",
    4: "4 · 很强",
    5: "5 · 非常强烈"
  },
  stepTitles: ["身体", "情绪", "强度", "发生了什么", "旧日回声"],
  quickEmotionIds: [
    "joy-充满希望的",
    "joy-感激的",
    "negative-昏昏沉沉的",
    "fear-焦虑",
    "fear-担心",
    "anger-生气",
    "anger-麻木",
    "sadness-空虚的",
    "sadness-被孤立",
    "surprise-困惑的"
  ]
};
