import React from "react";
import { useLocation, Link } from "react-router-dom";

const DreamResult = () => {
  const location = useLocation();
  const { interpretation } = location.state || {};

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">꿈 해석 결과</h2>
      {interpretation ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg mb-6">{interpretation}</p>
          <Link
            to="/"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg mb-6">해석 결과를 찾을 수 없습니다.</p>
          <Link
            to="/"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
      )}
    </div>
  );
};

export default DreamResult;
