import React from 'react';
import cn from 'classnames';

export type LogoProps = React.SVGAttributes<SVGSVGElement>;

export const Logo = React.forwardRef<SVGSVGElement, LogoProps>(function Logo(props, ref) {
    const className = cn('h-7 w-7 m-1 self-center justify-self-center flex-shrink-0 flex-grow-0', props.className);

    return (
        <svg {...props} className={className} ref={ref} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
            <g className="fill-brand-sunsetOrange">
                <path d="M3.2496172 16.0366c-1.44938-.2893-2.857854.6517-3.1442248 2.1011-.2863702 1.4493.6516388 2.8578 2.1010248 3.1442 1.44938.2893 2.85786-.6517 3.14423-2.101.28929-1.4465-.65164-2.855-2.10103-3.1443z" />
                <path d="M18.9911672 19.1692c-2.4137-.4792-4.7602 1.0871-5.2423 3.5037-.4793 2.4137 1.087 4.7602 3.5036 5.2423 2.4137.4793 4.7602-1.087 5.2424-3.5036.4792-2.4166-1.0871-4.7631-3.5037-5.2424z" />
                <path d="M23.6958672.105135c-2.8988-.578585-5.7157 1.303275-6.2943 4.199125l-.5172 2.62116c-.3828 1.93446-2.2647 3.19098-4.1992 2.80819l-1.7474-.35651c-1.92569-.3828-3.18221-2.25589-2.79941-4.19035l.08766-.43832c.33021-1.68608-.7656-3.33417-2.45168-3.66438-1.69776-.336043-3.33709.75976-3.67606 2.45461-.33897 1.68607.76561 3.3254 2.45168 3.66437l.43833.09058c1.93446.3828 3.19098 2.26467 2.79941 4.19039l-.16948.8737c-.3828 1.9345.87372 3.8163 2.79945 4.1991 1.9344.3828 3.8163-.8737 4.1991-2.8082l.1695-.8737c.3828-1.9257 2.2646-3.1822 4.1903-2.7994l2.63.526c2.8987.5698 5.7157-1.31206 6.2855-4.20791.5844-2.90169-1.2974-5.718636-4.1962-6.288455z" />
            </g>
        </svg>
    );
});