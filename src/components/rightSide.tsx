import React from "react";

const rightSide = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-end gap-28 text-textLight">
        <a href="mailto:jeffersongarcia520@gmail.com">
          <p className="text-sm rotate-90 w-72 tracking-wide text-textLight hover:text-textGreen">
            jeffersongarcia520@gmail.com
          </p>
        </a>
        <span className="w-[2px] h-60 bg-textDark inline-flex"></span>
      </div>
    </>
  );
};

export default rightSide;
