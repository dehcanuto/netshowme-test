import Image from 'next/image'
import Link from 'next/link';
import { MdOutlineSearch, MdPerson, MdMenu } from 'react-icons/md';

import menuItems from '@/misc/menu';

const TopHeader = () => {
    return (
        <div className="flex fixed top-0 p-4 bg-transparent w-full z-10">
            <div className="container mx-auto">
                <div className="row flex items-center justify-between">
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Open main menu</span>
                            <MdMenu className="text-3xl text-white" />
                        </button>
                    </div>
                    <Link href={{ pathname: '/' }}>
                        <Image
                            src="/images/logo.svg"
                            alt="Logo"
                            className="block md:w-[7.5rem]"
                            width={120}
                            height={68}
                            priority
                        />
                    </Link>
                    <ul className="hidden lg:flex items-center space-x-10 text-white font-nunito-sans">
                        {menuItems.map((item, index) => 
                            <li key={index}>
                                <Link href={{ pathname: item.path }}>
                                    {item.label}
                                </Link>
                            </li>
                        )}
                    </ul>
                    <div className="flex items-center text-2xl gap-6">
                        <button type="button" className="text-3xl lg:text-2xl text-white cursor-pointer">
                            <MdOutlineSearch />
                        </button>
                        <button type="button" className="flex w-10 h-10 bg-gray-600 text-black items-center justify-center cursor-pointer rounded-full">
                            <MdPerson />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;