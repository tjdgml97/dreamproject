import React from "react";
import { Link, useLocation } from "react-router-dom";

interface LocationState {
  type: "normal" | "pregnancy";
  category: string;
  name: string;
  contact: string;
  dreamContent: string;
}

const DreamComplete = () => {
  const location = useLocation();
  const state = location.state as LocationState;

  const getCompletionMessage = () => {
    if (state?.type === "pregnancy") {
      return {
        emoji: "👶",
        title: "태몽 해석 신청 완료",
        description: "태아의 미래와 관련된 소중한 꿈을 해석해드리겠습니다",
        color: "pink",
        bgGradient: "from-pink-50 via-white to-pink-50",
      };
    }
    return {
      emoji: "✨",
      title: "꿈 해석 신청 완료",
      description: "당신의 꿈이 가진 의미를 찾아드리겠습니다",
      color: "purple",
      bgGradient: "from-purple-50 via-white to-purple-50",
    };
  };

  const message = getCompletionMessage();

  return (
    <div className={`min-h-screen bg-gradient-to-br ${message.bgGradient}`}>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="relative inline-block animate-bounce">
            <span className="text-7xl mb-8 block filter drop-shadow-lg">
              {message.emoji}
            </span>
            <div className="absolute -inset-2 bg-white/30 rounded-full blur-xl"></div>
          </div>
          <h1
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-${message.color}-600 to-${message.color}-500 bg-clip-text text-transparent mb-4 animate-fade-in`}
          >
            {message.title}
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in-up">
            {message.description}
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8 animate-fade-in-up border border-gray-100">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                신청 내용 확인
              </h2>
              <div className="bg-gray-50/80 backdrop-blur-sm rounded-lg p-6 space-y-4 border border-gray-100">
                <p className="flex items-center">
                  <span className="font-medium min-w-[80px]">이름</span>
                  <span className="text-gray-700">{state?.name}</span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium min-w-[80px]">연락처</span>
                  <span className="text-gray-700">{state?.contact}</span>
                </p>
                <div className="pt-2 border-t border-gray-200">
                  <p className="font-medium mb-2">꿈 내용</p>
                  <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {state?.dreamContent}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                결과 전송 안내
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start bg-blue-50/50 rounded-lg p-3">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>24시간 이내에 전문가의 해석 결과를 보내드립니다</span>
                </li>
                <li className="flex items-start bg-blue-50/50 rounded-lg p-3">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>입력하신 연락처로 결과가 전송됩니다</span>
                </li>
                {state?.type === "pregnancy" && (
                  <li className="flex items-start bg-pink-50/50 rounded-lg p-3">
                    <svg
                      className="w-5 h-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>태몽의 길한 의미를 상세히 설명해드립니다</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <Link
            to="/"
            className={`inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-${message.color}-500 to-${message.color}-600 text-white rounded-xl hover:from-${message.color}-600 hover:to-${message.color}-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
          >
            <span className="text-lg">다른 꿈 해석받기</span>
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent h-px"></div>
            <p className="text-gray-500 relative bg-gradient-to-br from-white to-transparent px-4 inline-block">
              {state?.type === "pregnancy"
                ? "태몽은 아기의 미래를 암시하는 소중한 메시지입니다"
                : "꿈은 우리의 무의식이 전하는 메시지입니다"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamComplete;
