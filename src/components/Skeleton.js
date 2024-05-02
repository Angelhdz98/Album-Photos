import classNames from "classnames";
function Skeleton({times, className}){

    const outerClassNames= classNames(
        'relative',
        'overflow-hidden',
        'bg-gray-200', 
        'rounded',
        'mb-2.5',
        className);
    const innerClassNames= classNames(
        'animate-shimmer',
        'absolute', 
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-indigo-500',
        'via-purple-500',
        'to-pink-500'

    );

const boxes = Array(times).fill(0).map((_, i)=>{
    return <div key={i} className={outerClassNames}>
         <div className={innerClassNames}/></div>
});
return boxes; 
}

export default Skeleton;