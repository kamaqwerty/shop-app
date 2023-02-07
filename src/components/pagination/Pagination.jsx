import React from 'react';
import cls from "./Pagination.module.scss";

const Pagination = ({page, handleNext, nextDisabled, handlePrev, prevDisabled}) => {
  return (
    <div className={cls.pagination_point}>
      <button
        onClick={handlePrev}
        className={prevDisabled ? cls.next_dis : ""}
        disabled={prevDisabled}
      >
        Prev
      </button>

      <p>{page}</p>

      <button 
        className={nextDisabled ? cls.next_dis : ""}
        disabled={nextDisabled}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
