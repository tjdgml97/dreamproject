import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">꿈 해석 서비스</h1>
      <p className="text-lg mb-8">
        당신의 꿈을 해석해드립니다. 꿈에서 본 내용을 입력하시면 전문가가
        해석해드립니다.
      </p>
      <Link
        to="/interpret"
        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        꿈 해석하기
      </Link>
    </div>
  );
};

export default Home;
