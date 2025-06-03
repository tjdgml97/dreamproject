import React from "react";
import { Link } from "react-router-dom";

const Dream = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">
        꿈 해석 백과점
      </h1>
      <p className="text-center text-gray-600 mb-12">
        어떤 꿈을 꾸셨나요? 전문가의 해석을 받아보세요
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">여행 꿈</h2>
            <span className="text-3xl">✈️</span>
          </div>
          <p className="text-gray-600 mb-4">
            여행과 모험에 관련된 꿈을 해석해드립니다
          </p>
          <Link
            to="/dream/travel"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            해석받기
          </Link>
        </div>

        <div className="bg-pink-50 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">가족 꿈</h2>
            <span className="text-3xl">👨‍👩‍👧‍👦</span>
          </div>
          <p className="text-gray-600 mb-4">
            가족과 관련된 꿈의 의미를 알아보세요
          </p>
          <Link
            to="/dream/family"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            해석받기
          </Link>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">동물 꿈</h2>
            <span className="text-3xl">🦁</span>
          </div>
          <p className="text-gray-600 mb-4">
            동물이 등장하는 꿈을 해석해드립니다
          </p>
          <Link
            to="/dream/animal"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            해석받기
          </Link>
        </div>

        <div className="bg-green-50 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">일상 꿈</h2>
            <span className="text-3xl">🏠</span>
          </div>
          <p className="text-gray-600 mb-4">
            일상생활에서 마주치는 꿈의 의미를 해석해드립니다
          </p>
          <Link
            to="/dream/daily"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            해석받기
          </Link>
        </div>

        <div className="bg-purple-50 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">미래 꿈</h2>
            <span className="text-3xl">🔮</span>
          </div>
          <p className="text-gray-600 mb-4">
            미래와 관련된 예지몽을 해석해드립니다
          </p>
          <Link
            to="/dream/future"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            해석받기
          </Link>
        </div>

        <div className="bg-red-50 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">기타 꿈</h2>
            <span className="text-3xl">✨</span>
          </div>
          <p className="text-gray-600 mb-4">
            그 외 모든 종류의 꿈을 해석해드립니다
          </p>
          <Link
            to="/dream/other"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            해석받기
          </Link>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link
          to="/"
          className="text-purple-600 hover:text-purple-700 transition-colors"
        >
          처음으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default Dream;
