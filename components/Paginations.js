import React from 'react';
import Link from 'next/link'

const Paginations =({postperpage, totalPosts, paginate}) => {
  const pageNumbers = [];
  for(let i = 1; i <= Math.ceil(totalPosts / postperpage); i++){
    pageNumbers.push(i);
  }
 
  return (
    <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center cstmPgntn">
            {pageNumbers.map(number => {
              return (
                <li key={number} className="page-item"><Link href="#"><a className="page-link" onClick={() => paginate(number)}>{number}</a></Link></li>
              )
            })}
        </ul>
    </nav>
  )
}

export default Paginations;
