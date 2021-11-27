import React, {useState, useEffect} from 'react'

const PaginationItem = ({totalPage=50, prevBtnText="<", nextBtnText=">", containerClass="pagination", activeClass="active", previousClass="previous", nextClass="next", breakBtnClass="break", onChange}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const defaultPage = 7;
    const left = 2;
    const right = 2;
    const nextPage = () => {
        setCurrentPage((oldPage)=>{
            let newPage = oldPage + 1;
            if(newPage>=totalPage){
                newPage = totalPage;
            }
            return newPage;
        });
    }
    const prePage = () => {
        setCurrentPage((oldPage)=>{
            let newPage = oldPage - 1;
            if(newPage<=1){
                newPage = 1;
            }
            return newPage;
        });
    }
    useEffect(()=>{
        if(onChange){
            onChange(currentPage);
        }
    }, [currentPage]);
    if(totalPage<=defaultPage + 1){
        return (
            <ul className={containerClass}>
                {
                    currentPage>1 && <li key={totalPage+1} className={previousClass} onClick={prePage}>{prevBtnText}</li>
                }
                {
                    Array.from({length: totalPage}).map((item, index)=>{
                        index = index + 1;
                        return (
                            <li key={index} className={`${index===currentPage?activeClass:null}`} onClick={()=>setCurrentPage(index)}>{index}</li>
                        )
                    })
                }
                {
                    currentPage<totalPage && <li key={totalPage+2} className={nextClass} onClick={nextPage}>{nextBtnText}</li>
                }
            </ul>
        );
    }
    return (
        <ul className={containerClass}>
            {/* previous button */}
            {
                currentPage>1 && <li key={totalPage+1} className={previousClass} onClick={prePage}>{prevBtnText}</li>
            }
            {/* end previous button */}
            {
                Array.from({length: currentPage>=left+2?left:left+1}).map((item, index)=>{
                    index +=1;
                    return (
                        <li key={index} onClick={()=>setCurrentPage(index)} className={`${index===currentPage?activeClass:null}`}>{index}</li>
                    );
                })
            }
            {
                currentPage>=left+2?<li className={breakBtnClass}>...</li>:null
            }

            {/* center button */}

            {
                currentPage===left+2 && Array.from({length: 3}).map((item, index)=>{
                    index = index + left + 2;
                    return (
                        <li key={index} onClick={()=>setCurrentPage(index)} className={`${index===currentPage?activeClass:null}`}>{index}</li>
                    )
                })
            }
            
            {
                currentPage>left+2 && currentPage<totalPage-right-1 && Array.from({length: 3}).map((item, index)=>{
                    index += currentPage - 1;
                    return (
                        <li key={index} onClick={()=>setCurrentPage(index)} className={`${index===currentPage?activeClass:null}`}>{index}</li>
                    )
                })
            }

            {
                currentPage===totalPage-3 && Array.from({length: 3}).map((item, index)=>{
                    index = index + totalPage - 3 - 2;
                    return (
                        <li key={index} onClick={()=>setCurrentPage(index)} className={`${index===currentPage?activeClass:null}`}>{index}</li>
                    );
                })
            }

            {/* end center button */}

            {
                currentPage<=totalPage-right-1?<li className={breakBtnClass}>...</li>:null
            }
            {
                currentPage>=totalPage-right || Array.from({length: right}).map((item, index)=>{
                    index = index + 1 + totalPage - right;
                    return (
                        <li key={index} onClick={()=>setCurrentPage(index)} className={`${index===currentPage?activeClass:null}`}>{index}</li>
                    );
                })
            }
            {
                currentPage>=totalPage-right && Array.from({length: 3}).map((item, index)=>{
                    index = index + totalPage-right;
                    return (
                        <li key={index} onClick={()=>setCurrentPage(index)} className={`${index===currentPage?activeClass:null}`}>{index}</li>
                    );
                })
            }
            {/* next button */}
            {
                currentPage<totalPage && <li key={totalPage+2} className={nextClass} onClick={nextPage}>{nextBtnText}</li>
            }
            {/* end next button */}
        </ul>
    )
}

export default PaginationItem
