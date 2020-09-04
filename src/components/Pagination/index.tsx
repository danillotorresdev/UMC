import React, { useCallback, useState } from 'react';
import {
  NavBar,
  PaginationList,
  PaginationItem,
} from './styles';

const Pagination = ({ cardsPerPage, totalCards, paginate, currentPage }: any) => {

  const pageNumbers: any[] = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  const prevPage = useCallback(() => {
    if (currentPage > 1) {
      paginate(currentPage - 1)
    }
    return null
  }, [paginate, currentPage])

  const nextPage = useCallback(() => {
    if (currentPage > 0 && currentPage < pageNumbers.length) {
      paginate(currentPage + 1)
    }
  }, [paginate, currentPage])

  return (
    <NavBar>
      <PaginationList className='pagination'>
  <PaginationItem><button onClick={prevPage}>{"<"}</button></PaginationItem>
        {pageNumbers.map(number => (
          <PaginationItem key={number} className='page-item'>
            {console.log(number, "number")}
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </PaginationItem>
        ))}
        <PaginationItem><button onClick={nextPage}>{">"}</button></PaginationItem>
      </PaginationList>
    </NavBar>
  );
};

export default Pagination;
