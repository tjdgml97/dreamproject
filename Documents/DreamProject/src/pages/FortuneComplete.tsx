import React from "react";
import { Link } from "react-router-dom";

const FortuneComplete = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <div className="text-6xl mb-8">🎊</div>
      <h1 className="text-4xl font-bold text-purple-600 mb-8">
        운세 확인이 완료되었습니다
      </h1>
      <div className="max-w-2xl mx-auto space-y-4 text-gray-600">
        <p>
          24시간 이내에 카카오톡 또는 문자 메시지로
          <br />
          상세한 운세 결과를 보내드리겠습니다.
        </p>
        <p>
          당신의 운세를 정성껏 분석하여
          <br />
          좋은 결과를 전달해드리겠습니다.
        </p>
      </div>

      <div className="mt-12 bg-purple-50 max-w-2xl mx-auto p-6 rounded-lg">
        <p className="text-purple-700 font-medium">
          "당신의 앞날에 행운이 가득하기를 바랍니다"
        </p>
      </div>

      <div className="mt-12 space-x-4">
        <Link
          to="/"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          다른 운세 보기
        </Link>
      </div>
    </div>
  );
};

export default FortuneComplete;
