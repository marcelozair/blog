import React from 'react';

const PostResume = () => {
  return (
    <article className="flex">
      <div className="w-[75%]">
        <a className="text-black-title text-lg font-bold line-clamp-2" href="/">
          A Tough Covid Challenge: Reinforcing Our Wall of Immunity As pan demic A Tough Covid Challenge: Reinforcing Our Wall of Immunity As pandemic A Tough Covid Challenge: Reinforcing Our Wall of Immunity As pandemic A Tough Covid Challenge: Reinforcing Our Wall of Immunity As pandemic A Tough Covid Challenge: Reinforcing Our Wall of Immunity As pandemic
        </a>
        <p className="text-black-opacity-70 text-base font-light line-clamp-3">
          As pandemic measures unwind, can regular boosters boosters just mean the fake fatality thing here is you make us safer from a persistent virus?
        </p>
        <div className="flex items-center gap-3 text-sm mt-2">
          <div className="flex gap-2 items-center">
            <img
              src="images/user-picture.jpg"
              className="w-8 h-8 bg-red rounded-full object-cover"
            />
            <a href="/" className="text-sm font-bold">Alex Salas R.</a>
          </div>
          <span className="text-black-opacity-50">May 08, 2023</span>
          <span
            className="text-black-opacity-70 bg-black-opacity-10 rounded-full px-2 py-[2px]"
          >
            Public Health
          </span>
        </div>
      </div>
      <a className="w-[25%]" href="/">
        <img
          src="images/example-image.jpg"
          className="w-full h-full object-cover"
        />
      </a>
    </article>
  );
}

export default PostResume;