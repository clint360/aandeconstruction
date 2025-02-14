import React from 'react';

interface BreadCrumbImageTypes {
  title: string,
  subtitle: string,
  backgroundImage: string
}

export const BreadcrumbImage = ({ title, subtitle, backgroundImage }: BreadCrumbImageTypes) => {
  return (
    <div
      className="relative bg-cover bg-center h-64 flex items-center justify-center text-white text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-lg mt-2">{subtitle}</p>
      </div>
    </div>
  );
};