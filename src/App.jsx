import React, { useState } from 'react';
import { prepareQuizData } from './utils/shuffle';
import LESSONS_DATA from './data/lessonsData';
import SUBJECTS_DATA from './data/subjectsData';
import MultipleChoiceQuestion from './components/questions/MultipleChoiceQuestion';
import MultipleSelectQuestion from './components/questions/MultipleSelectQuestion';
import TrueFalseGroupQuestion from './components/questions/TrueFalseGroupQuestion';
import DragDropFillQuestion from './components/questions/DragDropFillQuestion';
import DragDropCategoryQuestion from './components/questions/DragDropCategoryQuestion';

// Color map for Tailwind classes (dynamic class names need to be listed explicitly)
const COLOR_CLASSES = {
  blue: {
    bg: 'bg-blue-50', bgDark: 'bg-blue-600', bgDarkHover: 'hover:bg-blue-700',
    text: 'text-blue-600', textDark: 'text-blue-800',
    border: 'border-blue-100', borderActive: 'border-blue-200',
    shadow: 'hover:shadow-blue-100',
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-700',
    cardBorder: 'border-l-blue-500',
    badge: 'bg-blue-100 text-blue-700',
  },
  emerald: {
    bg: 'bg-emerald-50', bgDark: 'bg-emerald-600', bgDarkHover: 'hover:bg-emerald-700',
    text: 'text-emerald-600', textDark: 'text-emerald-800',
    border: 'border-emerald-100', borderActive: 'border-emerald-200',
    shadow: 'hover:shadow-emerald-100',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-emerald-700',
    cardBorder: 'border-l-emerald-500',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  violet: {
    bg: 'bg-violet-50', bgDark: 'bg-violet-600', bgDarkHover: 'hover:bg-violet-700',
    text: 'text-violet-600', textDark: 'text-violet-800',
    border: 'border-violet-100', borderActive: 'border-violet-200',
    shadow: 'hover:shadow-violet-100',
    iconBg: 'bg-gradient-to-br from-violet-500 to-violet-700',
    cardBorder: 'border-l-violet-500',
    badge: 'bg-violet-100 text-violet-700',
  },
  amber: {
    bg: 'bg-amber-50', bgDark: 'bg-amber-600', bgDarkHover: 'hover:bg-amber-700',
    text: 'text-amber-600', textDark: 'text-amber-800',
    border: 'border-amber-100', borderActive: 'border-amber-200',
    shadow: 'hover:shadow-amber-100',
    iconBg: 'bg-gradient-to-br from-amber-500 to-amber-700',
    cardBorder: 'border-l-amber-500',
    badge: 'bg-amber-100 text-amber-700',
  },
};

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [quizData, setQuizData] = useState([]);

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [dragCategoryState, setDragCategoryState] = useState({});
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [score, setScore] = useState(0);

  // Bắt đầu hoặc làm lại bài học
  const startLesson = (lessonId) => {
    const rawData = LESSONS_DATA[lessonId];
    if (!rawData) return;

    const shuffledData = prepareQuizData(rawData);
    setQuizData(shuffledData);

    const initialDragCategoryState = {};
    shuffledData.forEach(q => {
      if (q.type === 'drag-drop-category') {
        initialDragCategoryState[q.id] = { pool: q.items, cat1: [], cat2: [] };
      }
    });
    setDragCategoryState(initialDragCategoryState);
    
    setCurrentStep(0);
    setAnswers({});
    setIsSubmitted(false);
    setShowReview(false);
    setScore(0);
    setCurrentLesson(lessonId);
  };

  const goHome = () => {
    setCurrentLesson(null);
    setCurrentSubject(null);
  };

  const goToSubjectLessons = (subjectId) => {
    setCurrentSubject(subjectId);
  };

  const goBackToSubjects = () => {
    setCurrentSubject(null);
  };

  const handleOptionChange = (questionId, optionId) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const handleCheckboxChange = (questionId, optionId) => {
    setAnswers(prev => {
      const currentSelected = prev[questionId] || [];
      if (currentSelected.includes(optionId)) {
        return { ...prev, [questionId]: currentSelected.filter(id => id !== optionId) };
      }
      return { ...prev, [questionId]: [...currentSelected, optionId] };
    });
  };

  const calculateScore = () => {
    let totalScore = 0;
    quizData.forEach(q => {
      if (q.type === 'multiple-choice') {
        if (answers[q.id] === q.correctAnswer) totalScore++;
      } 
      else if (q.type === 'multiple-select') {
        const userAns = answers[q.id] || [];
        if (userAns.length === q.correctAnswers.length && userAns.every(v => q.correctAnswers.includes(v))) {
          totalScore++;
        }
      } 
      else if (q.type === 'true-false-group') {
        const allCorrect = q.subQuestions.every(subQ => answers[subQ.id] === subQ.correctAnswer);
        if (allCorrect) totalScore++;
      } 
      else if (q.type === 'drag-drop-category') {
        const state = dragCategoryState[q.id];
        const c1Ok = state.cat1.length === q.correct.cat1.length && state.cat1.every(i => q.correct.cat1.includes(i));
        const c2Ok = state.cat2.length === q.correct.cat2.length && state.cat2.every(i => q.correct.cat2.includes(i));
        if (c1Ok && c2Ok) totalScore++;
      }
      else if (q.type === 'drag-drop-fill') {
        const allCorrect = Object.keys(q.correct).every(key => answers[`${q.id}_${key}`] === q.correct[key]);
        if (allCorrect) totalScore++;
      }
    });

    setScore(totalScore);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentStep < quizData.length - 1) setCurrentStep(prev => prev + 1);
    else calculateScore();
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const renderQuestion = (question, index, isReview) => {
    switch (question.type) {
      case 'multiple-choice': return <MultipleChoiceQuestion key={question.id} data={question} index={index} selectedValue={answers[question.id]} onChange={handleOptionChange} reviewMode={isReview} />;
      case 'multiple-select': return <MultipleSelectQuestion key={question.id} data={question} index={index} selectedValues={answers[question.id]} onChange={handleCheckboxChange} reviewMode={isReview} />;
      case 'true-false-group': return <TrueFalseGroupQuestion key={question.id} data={question} index={index} answers={answers} onChange={handleOptionChange} reviewMode={isReview} />;
      case 'drag-drop-fill': return <DragDropFillQuestion key={question.id} data={question} index={index} answers={answers} setAnswers={setAnswers} reviewMode={isReview} />;
      case 'drag-drop-category': return <DragDropCategoryQuestion key={question.id} data={question} index={index} itemsState={dragCategoryState} setItemsState={setDragCategoryState} reviewMode={isReview} />;
      default: return null;
    }
  };

  // ----------------------------------------------------
  // TRANG CHỦ - CHỌN MÔN HỌC
  // ----------------------------------------------------
  if (currentLesson === null && currentSubject === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 py-12 px-4 font-sans text-gray-800">
        <div className="max-w-5xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-2xl mb-5 shadow-lg shadow-blue-200/50">
              📚
            </div>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 bg-clip-text text-transparent mb-3 tracking-tight">
              MR Study
            </h1>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              Hệ thống ôn tập trực tuyến — Chọn môn học để bắt đầu
            </p>
          </div>
          
          {/* Subject Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {Object.values(SUBJECTS_DATA).map(subject => {
              const colors = COLOR_CLASSES[subject.color] || COLOR_CLASSES.blue;
              const hasLessons = subject.lessons.length > 0;
              const lessonCount = subject.lessons.length;
              const availableCount = subject.lessons.filter(id => !!LESSONS_DATA[id]).length;

              return (
                <button
                  key={subject.id}
                  onClick={() => hasLessons && goToSubjectLessons(subject.id)}
                  disabled={!hasLessons}
                  className={`group relative bg-white rounded-3xl border-2 p-8 text-left transition-all duration-300 
                    ${hasLessons 
                      ? `${colors.border} hover:shadow-xl ${colors.shadow} hover:-translate-y-1 cursor-pointer` 
                      : 'border-gray-100 opacity-60 cursor-not-allowed'
                    }`}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-md
                    ${hasLessons ? `${colors.iconBg} text-white` : 'bg-gray-200 text-gray-400'}`}
                  >
                    {subject.icon}
                  </div>

                  {/* Title + Description */}
                  <h2 className={`text-2xl font-bold mb-2 ${hasLessons ? 'text-gray-800' : 'text-gray-400'}`}>
                    {subject.name}
                  </h2>
                  <p className={`text-sm mb-6 ${hasLessons ? 'text-gray-500' : 'text-gray-400'}`}>
                    {subject.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full 
                      ${hasLessons ? colors.badge : 'bg-gray-100 text-gray-400'}`}
                    >
                      {hasLessons ? `${availableCount} bài học` : 'Sắp ra mắt'}
                    </span>
                    {hasLessons && (
                      <span className="text-xs text-gray-400">
                        {availableCount * 25}+ câu hỏi
                      </span>
                    )}
                  </div>

                  {/* Arrow indicator */}
                  {hasLessons && (
                    <div className={`absolute top-8 right-8 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 
                      ${colors.bg} group-hover:scale-110`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={colors.text}>
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </div>
                  )}

                  {/* "Coming soon" badge */}
                  {!hasLessons && (
                    <div className="absolute top-6 right-6 px-3 py-1 bg-gray-100 text-gray-400 text-xs font-bold rounded-full">
                      Chưa có dữ liệu
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // TRANG CHỌN BÀI HỌC TRONG MÔN
  // ----------------------------------------------------
  if (currentLesson === null && currentSubject !== null) {
    const subject = SUBJECTS_DATA[currentSubject];
    const colors = COLOR_CLASSES[subject.color] || COLOR_CLASSES.blue;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 py-10 px-4 font-sans text-gray-800">
        <div className="max-w-4xl mx-auto w-full">
          {/* Back + Header */}
          <div className="mb-10">
            <button 
              onClick={goBackToSubjects} 
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-800 mb-6 transition-colors group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Tất cả môn học
            </button>

            <div className="flex items-center gap-5">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md ${colors.iconBg} text-white`}>
                {subject.icon}
              </div>
              <div>
                <h1 className={`text-3xl font-extrabold ${colors.textDark} tracking-tight`}>{subject.name}</h1>
                <p className="text-gray-500 mt-1">{subject.description}</p>
              </div>
            </div>
          </div>
          
          {/* Lessons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {subject.lessons.map(lessonId => {
              const isAvailable = !!LESSONS_DATA[lessonId];
              const lessonName = subject.lessonNames[lessonId];
              const questionCount = isAvailable ? LESSONS_DATA[lessonId].length : 0;

              return (
                <div 
                  key={lessonId} 
                  className={`bg-white rounded-2xl shadow-sm border-l-4 border p-6 flex flex-col transition-all duration-300 
                    ${isAvailable 
                      ? `${colors.cardBorder} border-gray-100 hover:shadow-lg hover:-translate-y-1` 
                      : 'border-l-gray-200 border-gray-100 opacity-70'
                    }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-lg font-bold shadow-sm 
                    ${isAvailable 
                      ? `${colors.bg} ${colors.text} border ${colors.border}` 
                      : 'bg-gray-50 text-gray-400 border border-gray-100'
                    }`}
                  >
                    {lessonId}
                  </div>
                  <h3 className={`text-lg font-bold mb-1.5 ${isAvailable ? 'text-gray-800' : 'text-gray-400'}`}>
                    Bài {lessonId}
                  </h3>
                  <p className="text-gray-500 text-xs mb-5 flex-1 leading-relaxed">
                    {lessonName || (isAvailable ? `Bộ câu hỏi ôn tập tổng hợp cho Bài ${lessonId}.` : 'Nội dung đang được cập nhật.')}
                  </p>
                  {isAvailable && (
                    <p className="text-xs text-gray-400 mb-4 font-medium">{questionCount} câu hỏi</p>
                  )}
                  <button 
                    onClick={() => isAvailable && startLesson(lessonId)}
                    disabled={!isAvailable}
                    className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 
                      ${isAvailable 
                        ? `${colors.bgDark} ${colors.bgDarkHover} text-white shadow-md` 
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                  >
                    {isAvailable ? 'Bắt Đầu Làm Bài' : 'Chưa Mở'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // GIAO DIỆN KẾT QUẢ ĐIỂM SỐ
  // ----------------------------------------------------
  if (isSubmitted && !showReview) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl text-green-600">✓</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Hoàn thành!</h2>
          <p className="text-gray-500 mb-6">Bạn đã hoàn thành bài kiểm tra Bài {currentLesson}.</p>
          
          <div className="bg-blue-50 py-6 rounded-lg mb-8">
            <p className="text-sm text-blue-600 font-bold uppercase tracking-wider mb-1">Tổng điểm</p>
            <p className="text-5xl font-extrabold text-blue-700">{score} <span className="text-2xl text-blue-400">/ {quizData.length}</span></p>
          </div>

          <div className="space-y-3">
            <button onClick={() => setShowReview(true)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md">Xem chi tiết đáp án</button>
            <button onClick={() => startLesson(currentLesson)} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-4 rounded-xl transition-colors">Làm lại bài này</button>
            <button onClick={goHome} className="w-full text-gray-500 hover:text-gray-800 font-semibold py-3 px-4 rounded-xl transition-colors">Về trang chủ</button>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // GIAO DIỆN LÀM BÀI / XEM LẠI ĐÁP ÁN
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-[#f4f6f8] font-sans text-gray-800 pb-28">
      
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto py-3 px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button onClick={goHome} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center" title="Về trang chủ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 hover:text-blue-600"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div>
              <h1 className="text-xl font-bold text-blue-700">Kiểm Tra: Bài {currentLesson}</h1>
              {showReview && <span className="inline-block mt-0.5 px-3 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded-full">Chế độ xem lại (Đáp án)</span>}
            </div>
          </div>
          {!showReview && (
            <div className="text-sm font-bold text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
              Câu {currentStep + 1} / {quizData.length}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mt-8 px-4">
        {showReview ? (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow mb-8 text-center border-t-4 border-blue-500">
              <h2 className="text-2xl font-bold text-gray-800">Chi tiết bài làm (Bài {currentLesson})</h2>
              <p className="text-gray-600 mt-2">Tổng điểm: <strong className="text-blue-600 text-xl">{score}/{quizData.length}</strong></p>
            </div>
            {quizData.map((q, idx) => renderQuestion(q, idx, true))}
          </div>
        ) : (
          renderQuestion(quizData[currentStep], currentStep, false)
        )}
      </div>

      {/* Footer Navigation (Thi) */}
      {!showReview && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)] z-50">
          <div className="max-w-4xl mx-auto flex justify-between items-center p-4 px-6">
            <button onClick={handlePrev} disabled={currentStep === 0} className={`font-bold py-2.5 px-6 rounded-lg transition-colors ${currentStep === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}>
              Quay lại
            </button>
            <button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-8 rounded-lg shadow-md transition-colors">
              {currentStep === quizData.length - 1 ? 'Nộp Bài' : 'Tiếp Theo'}
            </button>
          </div>
        </div>
      )}

      {/* Footer Navigation (Xem lại) */}
      {showReview && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="max-w-4xl mx-auto flex justify-center gap-4 p-4">
             <button onClick={() => startLesson(currentLesson)} className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold py-3 px-8 rounded-xl transition-colors shadow-sm">
              Làm lại bài này
            </button>
             <button onClick={goHome} className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-md">
              Về trang chủ
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
