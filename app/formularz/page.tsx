'use client';

import { useState, useContext } from 'react';
import { LanguageContext } from '../../components/LanguageProvider';

const FormularzZgloszeniowy = () => {
  const { t } = useContext(LanguageContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    affiliation: '',
    title: '',
    abstract: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);  // dane z formularza wyświetlają się w konsoli

    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert(t('form.success'));
      setFormData({
        name: '',
        email: '',
        phone: '',
        affiliation: '',
        title: '',
        abstract: '',
      });
    } else {
      alert(t('form.error'));
    }
  };

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-2xl font-bold">{t('form.title')}</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              {t('form.name')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded"
            />
          </div>
          <div>
            <label htmlFor="affiliation" className="block mb-1 text-sm font-medium">
              {t('form.affiliation')}
            </label>
            <input
              type="text"
              name="affiliation"
              id="affiliation"
              value={formData.affiliation}
              onChange={handleChange}
              className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded"
            />
          </div>
          <div>
            <label htmlFor="title" className="block mb-1 text-sm font-medium">
              {t('form.titleField')}
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded"
            />
          </div>
          <div>
            <label htmlFor="abstract" className="block mb-1 text-sm font-medium">
              {t('form.abstract')}
            </label>
            <textarea
              name="abstract"
              id="abstract"
              maxLength={200}
              value={formData.abstract}
              onChange={handleChange}
              className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              {t('form.email')} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 text-sm font-medium">
              {t('form.phone')} <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            {t('form.submit')}
          </button>
        </form>
      </main>
    </div>
  );
};

export default FormularzZgloszeniowy;
