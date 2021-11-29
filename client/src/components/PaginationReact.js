import React from 'react'
import {GrLinkNext, GrLinkPrevious} from "react-icons/gr";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import '../styles/components/pagination.css';


const PaginationReact = () => {
    const getPage = (event, value) => {
        console.log(value);
    }
    return (
        <div className="wrapper-global pagination-wrapper">
            <Stack spacing={2}>
                <Pagination
                    count={15}
                    defaultPage={6}
                    onChange={getPage}
                    renderItem={(item) => (
                        <PaginationItem
                          components={{
                              previous: GrLinkPrevious,
                              next: GrLinkNext,
                            }}
                          {...item}
                        />
                    )}
                />
            </Stack>
        </div>
    )
}

export default PaginationReact
