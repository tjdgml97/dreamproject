import React from "react";
import { Link } from "react-router-dom";

const DreamMain = () => {
  const normalDreamCategories = [
    {
      id: "travel",
      title: "여행",
      emoji: "✈️",
      description: "여행 관련 꿈 해석",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
    },
    {
      id: "family",
      title: "가족",
      emoji: "👨‍👩‍👧‍👦",
      description: "가족 관련 꿈 해석",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100",
    },
    {
      id: "animal",
      title: "동물",
      emoji: "🐾",
      description: "동물 관련 꿈 해석",
      bgColor: "bg-yellow-50",
      hoverColor: "hover:bg-yellow-100",
    },
  ];

  const pregnancyDreamCategories = [
    {
      id: "fruit",
      title: "과일/음식",
      emoji: "🍎",
      description: "음식이 나오는 태몽",
      bgColor: "bg-red-50",
      hoverColor: "hover:bg-red-100",
    },
    {
      id: "animal_pregnancy",
      title: "동물",
      emoji: "🐉",
      description: "동물이 나오는 태몽",
      bgColor: "bg-emerald-50",
      hoverColor: "hover:bg-emerald-100",
    },
    {
      id: "nature",
      title: "자연/날씨",
      emoji: "🌈",
      description: "자연현상 관련 태몽",
      bgColor: "bg-sky-50",
      hoverColor: "hover:bg-sky-100",
    },
  ];

  const renderDreamCategories = (
    categories: typeof normalDreamCategories,
    type: string
  ) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {categories.map((category, index) => (
        <Link
          key={category.id}
          to={`/dream-form/${type}/${category.id}`}
          className={`card-animation block ${category.bgColor} rounded-2xl p-8 shadow-sm 
            ${category.hoverColor} transition-all duration-300 transform hover:-translate-y-1 
            hover:shadow-xl relative overflow-hidden`}
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {category.title}
              </h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
            <span className="text-4xl">{category.emoji}</span>
          </div>

          <div className="mt-6">
            <span className="inline-flex items-center justify-center px-6 py-2 bg-white rounded-lg text-purple-600 font-medium shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
              해석받기
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-purple-600 mb-6 animate-fade-in">
            꿈 해석 백과점
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in-up">
            어떤 꿈을 꾸셨나요? 전문가의 해석을 받아보세요
          </p>
        </div>

        <div className="mb-16">
          <Link
            to="/solo-fortune"
            className="block bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-white text-center animate-fade-in-up"
          >
            <div className="text-6xl mb-4">💝</div>
            <h2 className="text-3xl font-bold mb-2">솔로 운세</h2>
            <p className="text-lg text-pink-100">
              당신의 연애운과 인연을 알아보세요
            </p>
          </Link>
        </div>

        <div className="space-y-16">
          {/* 일반 꿈 섹션 */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in">
                일반 꿈 해몽
              </h2>
              <p className="text-gray-600">
                일상에서 꾸는 꿈의 의미를 알아보세요
              </p>
            </div>
            {renderDreamCategories(normalDreamCategories, "normal")}
          </div>

          {/* 태몽 섹션 */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in">
                태몽 해몽
              </h2>
              <p className="text-gray-600">
                아기와 관련된 길몽을 해석해드립니다
              </p>
            </div>
            {renderDreamCategories(pregnancyDreamCategories, "pregnancy")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamMain;
