import React from "react";
import Skeleton from "react-loading-skeleton";

const GameCardSkeleton = ({width, count}) => {
    return (
        Array(count)
        .fill(0)
        .map( (item, index) =>
            <div key={index} className={"h-72 rounded-2xl " + (width ? width : 'w-56')}>
                <Skeleton className="h-full" />
            </div>
        )
    )
}

export default GameCardSkeleton;