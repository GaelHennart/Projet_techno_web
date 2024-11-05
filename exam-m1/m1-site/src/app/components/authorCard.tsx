import React from 'react';

interface Author {
  author_name: string;
}

const AuthorCard: React.FC<{ author: Author }> = ({ author }) => {
  return (
    <div className="bg-white rounded-[25px] shadow-md p-4 w-[215px] h-[310px]">
        <h3 className="text-xl font-bold text-gray-800">{author.author_name}</h3>
    </div>
  );
};

export default AuthorCard;
