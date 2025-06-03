import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface FormData {
  name: string;
  contact: string;
  dreamContent: string;
}

type ColorType =
  | "blue"
  | "green"
  | "yellow"
  | "purple"
  | "red"
  | "emerald"
  | "sky"
  | "pink";

interface DreamTypeInfo {
  title: string;
  description: string;
  emoji: string;
  color: ColorType;
  interpretations?: string[];
  reviews?: Array<{
    name: string;
    content: string;
    rating: number;
    date: string;
  }>;
}

const DreamForm = () => {
  const navigate = useNavigate();
  const { type, category } = useParams<{ type: string; category: string }>();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    dreamContent: "",
  });

  const getDreamTypeInfo = (): DreamTypeInfo => {
    if (type === "normal") {
      switch (category) {
        case "travel":
          return {
            title: "여행 꿈",
            description: "여행과 관련된 꿈을 해석해드립니다",
            emoji: "✈️",
            color: "blue",
          };
        case "family":
          return {
            title: "가족 꿈",
            description: "가족과 관련된 꿈을 해석해드립니다",
            emoji: "👨‍👩‍👧‍👦",
            color: "green",
          };
        case "animal":
          return {
            title: "동물 꿈",
            description: "동물이 등장하는 꿈을 해석해드립니다",
            emoji: "🐾",
            color: "yellow",
          };
        default:
          return {
            title: "꿈 해몽",
            description: "꿈의 의미를 해석해드립니다",
            emoji: "✨",
            color: "purple",
          };
      }
    } else {
      switch (category) {
        case "fruit":
          return {
            title: "음식 태몽",
            description: "음식이 나오는 태몽을 해석해드립니다",
            emoji: "🍎",
            color: "red",
            interpretations: [
              "과일이 크고 싱싱할수록 건강한 아이를 의미합니다",
              "달콤한 과일은 여자아이, 신 과일은 남자아이를 암시할 수 있습니다",
              "과일을 받는 꿈은 아이의 복을 받는다는 의미입니다",
              "과일나무에 과일이 많이 열린 꿈은 다산을 의미합니다",
            ],
            reviews: [
              {
                name: "김*영",
                content: "사과 태몽을 꾸고 정말 예쁜 딸을 낳았어요!",
                rating: 5,
                date: "2024.03.15",
              },
              {
                name: "이*희",
                content: "귤 태몽을 꾸고 쌍둥이를 임신했답니다",
                rating: 5,
                date: "2024.03.10",
              },
            ],
          };
        case "animal_pregnancy":
          return {
            title: "동물 태몽",
            description: "동물이 나오는 태몽을 해석해드립니다",
            emoji: "🐉",
            color: "emerald",
            interpretations: [
              "용 태몽은 매우 길한 태몽으로 훌륭한 인물이 될 것을 암시합니다",
              "호랑이는 강인하고 담대한 아이를 상징합니다",
              "토끼는 영리하고 착한 아이를 의미합니다",
              "새나 나비는 재주가 많은 아이를 상징합니다",
            ],
            reviews: [
              {
                name: "박*준",
                content: "용 태몽을 꾸고 건강한 아들을 얻었습니다",
                rating: 5,
                date: "2024.03.12",
              },
              {
                name: "최*아",
                content: "나비 태몽 후 예술적 재능이 뛰어난 아이를 낳았어요",
                rating: 5,
                date: "2024.03.08",
              },
            ],
          };
        case "nature":
          return {
            title: "자연 태몽",
            description: "자연현상 관련 태몽을 해석해드립니다",
            emoji: "🌈",
            color: "sky",
            interpretations: [
              "맑은 하늘은 아이의 밝은 미래를 상징합니다",
              "무지개는 특별한 재능이나 복을 가진 아이를 의미합니다",
              "구름은 부드럽고 온화한 성격의 아이를 암시합니다",
              "비는 풍요와 다산을 상징합니다",
            ],
            reviews: [
              {
                name: "정*우",
                content: "무지개 태몽 후 재능있는 아이가 태어났어요",
                rating: 5,
                date: "2024.03.14",
              },
              {
                name: "한*미",
                content: "맑은 하늘 태몽을 꾸고 건강한 아이를 낳았습니다",
                rating: 5,
                date: "2024.03.05",
              },
            ],
          };
        default:
          return {
            title: "태몽",
            description: "태몽의 의미를 해석해드립니다",
            emoji: "👶",
            color: "pink",
            interpretations: [
              "태몽은 임신과 출산의 징조를 나타냅니다",
              "선명하고 기분 좋은 꿈일수록 길몽입니다",
              "태몽은 임신 초기에 자주 나타납니다",
              "같은 꿈을 반복해서 꾸는 것은 강한 태몽의 신호입니다",
            ],
            reviews: [
              {
                name: "송*라",
                content: "정확한 해몽으로 아이의 성별을 미리 알 수 있었어요",
                rating: 5,
                date: "2024.03.13",
              },
            ],
          };
      }
    }
  };

  const getWritingGuide = () => {
    if (type === "normal") {
      switch (category) {
        case "travel":
          return [
            "여행지의 분위기와 날씨는 어땠나요?",
            "동행인이 있었다면 누구였는지 기억나시나요?",
            "여행 중 특별한 사건이나 감정이 있었나요?",
            "방문한 장소나 건물의 특징이 기억나시나요?",
          ];
        case "family":
          return [
            "꿈에서 만난 가족은 누구였나요?",
            "가족들과 어떤 상황이었나요?",
            "특별한 대화나 행동이 있었나요?",
            "꿈에서 느낀 감정은 어땠나요?",
          ];
        case "animal":
          return [
            "어떤 동물이 등장했나요?",
            "동물의 행동이나 특징은 어땠나요?",
            "동물과의 상호작용이 있었나요?",
            "꿈에서 느낀 감정은 어땠나요?",
          ];
        default:
          return [
            "꿈의 전체적인 분위기는 어땠나요?",
            "특별히 기억나는 장면이 있나요?",
            "꿈에서 느낀 감정은 어땠나요?",
            "현실의 어떤 일과 연관이 있을까요?",
          ];
      }
    } else {
      switch (category) {
        case "fruit":
          return [
            "어떤 과일이나 음식이 등장했나요?",
            "음식의 상태와 색깔은 어땠나요?",
            "음식을 먹거나 받는 상황이었나요?",
            "특별한 맛이나 향이 기억나시나요?",
          ];
        case "animal_pregnancy":
          return [
            "어떤 동물이 등장했나요?",
            "동물의 색깔과 크기는 어땠나요?",
            "동물의 행동이 특이했나요?",
            "동물과 어떤 상호작용이 있었나요?",
          ];
        case "nature":
          return [
            "어떤 자연현상이 나타났나요?",
            "날씨나 하늘의 상태는 어땠나요?",
            "특별한 자연물이 보였나요?",
            "전체적인 분위기는 어땠나요?",
          ];
        default:
          return [
            "꿈에서 본 특별한 상징이 있나요?",
            "전체적인 분위기는 어땠나요?",
            "특별한 감정이 느껴졌나요?",
            "인상 깊었던 장면을 자세히 적어주세요",
          ];
      }
    }
  };

  const dreamInfo = getDreamTypeInfo();
  const colorClasses: Record<ColorType, string> = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    yellow: "from-yellow-500 to-yellow-600",
    purple: "from-purple-500 to-purple-600",
    red: "from-red-500 to-red-600",
    emerald: "from-emerald-500 to-emerald-600",
    sky: "from-sky-500 to-sky-600",
    pink: "from-pink-500 to-pink-600",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dream-complete", {
      state: {
        type: type,
        category: category,
        ...formData,
      },
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-6xl mb-6 block">{dreamInfo.emoji}</span>
          <h1
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${
              colorClasses[dreamInfo.color]
            } bg-clip-text text-transparent mb-4`}
          >
            {dreamInfo.title}
          </h1>
          <p className="text-xl text-gray-600">{dreamInfo.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-lg space-y-6 animate-fade-in-up"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이름
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                placeholder="이름을 입력해주세요"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                연락처
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                placeholder="카카오톡 ID 또는 전화번호"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                꿈 내용
              </label>
              <textarea
                name="dreamContent"
                value={formData.dreamContent}
                onChange={handleChange}
                required
                rows={12}
                className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                placeholder={`${
                  type === "normal" ? "꿈의 내용을" : "태몽의 내용을"
                } 자세히 적어주세요`}
              />
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                이전으로
              </button>
              <button
                type="submit"
                className={`px-6 py-3 bg-gradient-to-r ${
                  colorClasses[dreamInfo.color]
                } text-white rounded-lg transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                해석 신청하기
              </button>
            </div>
          </form>

          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-fade-in-up">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-blue-500"
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
                작성 가이드
              </h2>
              <ul className="space-y-4">
                {getWritingGuide().map((guide, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-medium mr-3">
                      {index + 1}
                    </span>
                    <span className="text-gray-600">{guide}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-fade-in-up">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-yellow-500"
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
                작성 tip
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-yellow-500 mr-2 mt-0.5"
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
                  꿈에서 보고 느낀 것을 최대한 자세히 적어주세요
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-yellow-500 mr-2 mt-0.5"
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
                  시간 순서대로 정리하면 더 정확한 해몽이 가능합니다
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-yellow-500 mr-2 mt-0.5"
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
                  꿈에서 느낀 감정도 중요한 해몽 포인트입니다
                </li>
              </ul>
            </div>

            {type === "pregnancy" && dreamInfo.interpretations && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-fade-in-up">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  해몽 정보
                </h2>
                <ul className="space-y-3">
                  {dreamInfo.interpretations.map((interpretation, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-sm font-medium mr-3">
                        {index + 1}
                      </span>
                      <span className="text-gray-600">{interpretation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {type === "pregnancy" && dreamInfo.reviews && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-fade-in-up">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-pink-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  해몽 후기
                </h2>
                <div className="space-y-4">
                  {dreamInfo.reviews.map((review, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">
                          {review.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{review.content}</p>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamForm;
