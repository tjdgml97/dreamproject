import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const fortuneCategories = [
    { id: "love", title: "연애운", emoji: "💕" },
    { id: "business", title: "사업운", emoji: "💼" },
    { id: "health", title: "건강운", emoji: "🏥" },
    { id: "study", title: "학업운", emoji: "📚" },
  ];

  const dreamCategories = [
    { id: "travel", title: "여행", emoji: "✈️" },
    { id: "family", title: "가족", emoji: "👨‍👩‍👧‍👦" },
    { id: "animal", title: "동물", emoji: "🐾" },
    { id: "daily", title: "일상", emoji: "🌞" },
    { id: "future", title: "미래", emoji: "🔮" },
    { id: "etc", title: "기타", emoji: "✨" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-600 mb-12">
        운세와 꿈 해몽
      </h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">운세 보기</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/solo-fortune"
            className="bg-gradient-to-r from-pink-500 to-purple-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-white text-center group"
          >
            <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
              💝
            </div>
            <h3 className="text-xl font-semibold mb-2">솔로 운세</h3>
            <p className="text-pink-100">당신의 연애운과 인연을 알아보세요</p>
          </Link>
          {fortuneCategories.map((category) => (
            <Link
              key={category.id}
              to={`/fortune/${category.id}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-2">{category.emoji}</div>
              <div className="font-medium text-gray-800">{category.title}</div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">꿈 해몽</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {dreamCategories.map((category) => (
            <Link
              key={category.id}
              to={`/dream-form/${category.id}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-2">{category.emoji}</div>
              <div className="font-medium text-gray-800">{category.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
