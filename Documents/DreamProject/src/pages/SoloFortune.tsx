import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  birthDate: string;
  birthTime: string;
  gender: string;
  name: string;
  contact: string;
}

const SoloFortune = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    birthDate: "",
    birthTime: "",
    gender: "",
    name: "",
    contact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/fortune-complete", {
      state: {
        type: "솔로 운세",
        ...formData,
      },
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-6xl mb-6 block">💝</span>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            솔로 운세
          </h1>
          <p className="text-gray-600 text-lg">
            당신의 연애운과 인연을 알아보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              운세 해석 포함 사항
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-pink-500"
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
                연애운 종합 분석
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-pink-500"
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
                인연의 상세한 특징
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-pink-500"
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
                만남의 시기와 장소
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-pink-500"
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
                궁합이 맞는 상대 분석
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-lg space-y-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                생년월일
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
                className="w-full rounded-lg border-gray-300 focus:border-pink-500 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                태어난 시간
              </label>
              <input
                type="time"
                name="birthTime"
                value={formData.birthTime}
                onChange={handleChange}
                required
                className="w-full rounded-lg border-gray-300 focus:border-pink-500 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                성별
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full rounded-lg border-gray-300 focus:border-pink-500 focus:ring-pink-500"
              >
                <option value="">선택해주세요</option>
                <option value="male">남성</option>
                <option value="female">여성</option>
              </select>
            </div>

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
                className="w-full rounded-lg border-gray-300 focus:border-pink-500 focus:ring-pink-500"
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
                placeholder="카카오톡 ID 또는 전화번호"
                className="w-full rounded-lg border-gray-300 focus:border-pink-500 focus:ring-pink-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-pink-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              운세 보기
            </button>
          </form>
        </div>

        <div
          className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg
                className="w-8 h-8"
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
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">안내사항</h2>
              <p className="opacity-90">
                정확한 운세를 위해 실제 생년월일과 태어난 시간을 입력해주세요.
                <br />
                운세 결과는 24시간 이내에 입력하신 연락처로 전송됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoloFortune;
