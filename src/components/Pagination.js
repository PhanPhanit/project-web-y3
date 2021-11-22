import React from 'react'
import {PaginationItem} from '../components/index';
import ReactPaginate from 'react-paginate';
import {GrFormNext} from 'react-icons/gr';
import '../styles/components/pagination.css';

const Pagination = () => {
    return (
        <div className="wrapper-global pagination-wrapper">
            {/* <ReactPaginate
                pageCount={100}
                // marginPagesDisplayed={3}
                breakLabel={false}
                nextLabel={<GrFormNext />}
                // onPageChange={handlePageClick}
                // pageRangeDisplayed={3}
                previousLabel="<"
                containerClassName="pagination"
            
            /> */}
            <PaginationItem 
                totalPage={15}
            />
        </div>
    )
}

export default Pagination
