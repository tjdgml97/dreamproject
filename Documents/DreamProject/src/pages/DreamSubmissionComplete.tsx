import React from "react";
import { Link } from "react-router-dom";

const DreamSubmissionComplete = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">제출 완료</h2>
      <p className="text-lg mb-8">
        꿈 해석 신청이 완료되었습니다. 전문가의 해석이 완료되면
        연락드리겠습니다.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default DreamSubmissionComplete;
