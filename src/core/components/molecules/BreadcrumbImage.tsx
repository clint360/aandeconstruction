import React from 'react';

interface BreadCrumbImageTypes {
  title: string,
  subtitle: string,
  backgroundImage?: string
}

export const BreadcrumbImage = ({ title, subtitle, backgroundImage = "/images/bg1.jpg" }: BreadCrumbImageTypes) => {
  return (
    <div
      className="relative bg-cover bg-center h-96 flex items-center justify-center text-white text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-80  w-full h-full breadcrumb pt-20 ">
        <h1 className="text-7xl font-bold">{title}</h1>
        <p className="text-lg mt-2">{subtitle}</p>
      </div>
    </div>
  );
};