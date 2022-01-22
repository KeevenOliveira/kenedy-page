import Link from 'next/link';
import { Button } from '@chakra-ui/react';
interface IActiveLinkStyle {
    href: string,
    title: string,
    active: boolean,
    className?: string
}

export const ActiveLinkStyle = ({ href, title, active, className }: IActiveLinkStyle) => {

    return (
        <Link href={href} passHref>
            <Button className={className} isActive={active} color={"#FFF"} variant='link'>{title}</Button>
        </Link>
    );
}