import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitToGoogleForm } from "../utils/googleForm";

interface FormData {
  name: string;
  contact: string;
  dreamType: string;
  dreamContent: string;
}

const DreamInterpretation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    dreamType: "",
    dreamContent: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitToGoogleForm(formData);
    if (success) {
      navigate("/complete");
    } else {
      alert("제출에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">꿈 해석 신청</h2>
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="contact"
            className="block text-sm font-medium text-gray-700"
          >
            연락처
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="dreamType"
            className="block text-sm font-medium text-gray-700"
          >
            꿈 종류
          </label>
          <select
            id="dreamType"
            name="dreamType"
            value={formData.dreamType}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">선택해주세요</option>
            <option value="travel">여행</option>
            <option value="family">가족</option>
            <option value="animal">동물</option>
            <option value="daily">일상</option>
            <option value="future">미래</option>
            <option value="other">기타</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="dreamContent"
            className="block text-sm font-medium text-gray-700"
          >
            꿈 내용
          </label>
          <textarea
            id="dreamContent"
            name="dreamContent"
            value={formData.dreamContent}
            onChange={handleChange}
            required
            rows={5}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          제출하기
        </button>
      </form>
    </div>
  );
};

export default DreamInterpretation;
