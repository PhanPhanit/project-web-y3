import React from 'react'
import {
    ViewBookDetail,
    ViewBookSectionTitle,
    ViewBookSlide,
    CustomerRate
} from '../components';

function ViewBook() {
    return (
        <>
            <ViewBookDetail />
            <ViewBookSectionTitle title="Suggestion" />
            <ViewBookSlide />
            <ViewBookSectionTitle title="People also looking for" />
            <ViewBookSlide />
            <CustomerRate />
        </>
    )
}

export default ViewBook
