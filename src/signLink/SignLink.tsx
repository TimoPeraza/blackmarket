import './SignLink.css';

interface signLinkProp {
    className: string,
    href: string,
    children: string
}

function SignLink({className, href, children}: signLinkProp) {
    return(
        <a className={className} href={href}>
            {children}
        </a>
    )
}

export default SignLink;
