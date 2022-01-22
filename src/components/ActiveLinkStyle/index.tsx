import Link from 'next/link';
import { Button } from '@chakra-ui/react';
interface IActiveLinkStyle {
    href: string,
    title: string,
    active: boolean
}

export const ActiveLinkStyle = ({ href, title, active }: IActiveLinkStyle) => {

    return (
        <Link href={href} passHref>
            <Button className='first-btn' isActive={active} color={"#FFF"} variant='link'>{title}</Button>
        </Link>
    );
}