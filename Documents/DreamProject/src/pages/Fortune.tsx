import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface FormData {
  name: string;
  birthDate: string;
  gender: string;
}

const fortuneTypes = {
  love: "연애운",
  business: "사업운",
  health: "건강운",
  study: "학업운",
};

const Fortune = () => {
  const navigate = useNavigate();
  const { type } = useParams<{ type: keyof typeof fortuneTypes }>();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    birthDate: "",
    gender: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 폼 제출 로직 추가
    navigate("/fortune-complete");
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">
        {type && fortuneTypes[type]} 보기
      </h1>
      <p className="text-center text-gray-600 mb-12">
        정확한 운세를 위해 아래 정보를 입력해주세요
      </p>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="birthDate"
              className="block text-sm font-medium text-gray-700"
            >
              생년월일
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              성별
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            >
              <option value="">선택해주세요</option>
              <option value="male">남성</option>
              <option value="female">여성</option>
            </select>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="inline-block bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              이전으로
            </button>
            <button
              type="submit"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              결과보기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Fortune;
