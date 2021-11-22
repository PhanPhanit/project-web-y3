import React, {useState} from 'react'

const PaginationItem = ({totalPage=1, defaultPage=6}) => {
    const [currentPage, setCurrentPage] = useState(0);

    if(totalPage<=defaultPage){
        return (
            <ul className="pagination">
                <li className="previous">pre</li>
                {
                    Array.from({length: defaultPage}).map((item, index)=>{
                        return (
                            <li key={index} className={`${index===currentPage?'active':null}`}>{index+1}</li>
                        );
                    })
                }
                <li className="next">next</li>
            </ul>
        )
    }

    return (
        <ul className="pagination">
            <li className="previous">pre</li>
            {
                Array.from({length: totalPage}).map((item, index)=>{
                    if(index<=4){
                        return (
                            <li key={index} className={`${index===currentPage?'active':null}`}>{index+1}</li>
                        );
                    }
                    if(index==totalPage-2){
                        return (
                            <>
                                <li key={index}>...</li>
                            </>
                        );
                    }
                    if(index==totalPage-1){
                        return (
                            <>
                                <li key={index} className={`${index===currentPage?'active':null}`}>{index+1}</li>
                            </>
                        );
                    }
                })
            }
            <li className="next">next</li>
        </ul>
    )
}

export default PaginationItem
