// --- Hàm Tiện Ích Trộn Mảng (Fisher-Yates Shuffle) ---
export const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

// Hàm chuẩn bị dữ liệu: Trộn câu hỏi và trộn các đáp án bên trong
export const prepareQuizData = (data) => {
  const shuffledQuestions = shuffleArray(data);

  return shuffledQuestions.map(q => {
    const newQ = { ...q };
    if (newQ.options) {
      newQ.options = shuffleArray(newQ.options);
    }
    if (newQ.subQuestions) {
      newQ.subQuestions = newQ.subQuestions.map(subQ => ({
        ...subQ,
        options: shuffleArray(subQ.options)
      }));
    }
    if (newQ.items) {
      newQ.items = shuffleArray(newQ.items);
    }
    return newQ;
  });
};
