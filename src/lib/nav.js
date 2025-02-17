'use client'
import React, { useEffect } from 'react'
import Link from 'next/link';
import { works } from '@/lib/works';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const tabs = React.useMemo(() => ["works", "bio", "contact"], []);
    const subWorks = works.map((work) => work.title);
    const [selectedTab, setSelectedTab] = React.useState(0);
    const pathname = usePathname();

    useEffect(() => {
        if(pathname === '/'){
            setSelectedTab(0);
        } else {
            setSelectedTab(tabs.indexOf(pathname.slice(1)));
        }
    }, [pathname, tabs]);
    const handleSubWorkClick = (subwork) => {
        const subworkElement = document.getElementById(subwork);
        if (subworkElement) {
            subworkElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className='max-lg:hidden min-w-[300px] sticky top-0 right-0 h-screen pr-10  max-xl:min-w-[150px] font-urbanist font-bold text-[30px] leading-[36px] cursor-pointer max-xl:text-lg'>
                <ul className='flex flex-col w-full items-left pt-[100px]' style={{ minHeight: '50vh' }}>
                    {tabs.map((tab, index) => {
                        return index <= selectedTab ? <div key={tab}>
                            <li className='hover:text-gray-700'>
                                <Link href={tab === 'works' ? '/' : `/${tab}`} onClick={() => setSelectedTab(index)}>
                                    {tab}{index === selectedTab && <span>_</span>}
                                </Link>
                            </li>
                            {
                                tabs[selectedTab] === 'works' &&
                                <li className="text-gray-500 font-semibold text-sm ml-4 flex flex-col">
                                    <ul>
                                        {subWorks.map((subwork) => {
                                            return (
                                                <li key={subwork} id={subwork} onClick={() => handleSubWorkClick(subwork)}>
                                                    {"."}{subwork}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            }
                        </div> : null
                    })}
                </ul>
                <ul className='flex flex-col w-full items-left justify-end ' style={{ minHeight: '50vh', paddingBottom: '100px' }}>
                    {tabs.map((tab, index) => {
                        return index > selectedTab ? <div key={tab}>
                            <li className='hover:text-gray-700'>
                                <Link href={tab === 'works' ? '/' : `/${tab}`} onClick={() => setSelectedTab(index)}>
                                    {tab}{tab === selectedTab && <span>_</span>}
                                </Link>
                            </li>
                        </div> : null
                    })}
                </ul>
            </nav>
            <nav className='lg:hidden '>
                <ul className=' w-full text-left px-1'>
                    {tabs.map((tab, index) => {
                        return (
                            <React.Fragment key={tab}>
                                <li>
                                    <Link href={tab === 'works' ? '/' : `/${tab}`} onClick={() => setSelectedTab(index)}>
                                        {index === selectedTab ? <span className='font-bold'>{tab}{'_'}</span> : tab}
                                    </Link>
                                </li>
                                {
                                    tabs[selectedTab] === 'works' && index === selectedTab ?
                                        <li className="text-gray-500 font-semibold text-sm ml-4 flex flex-col">
                                            <ul>
                                                {subWorks.map((subwork) => {
                                                    return (
                                                        <li key={subwork} id={subwork} onClick={() => handleSubWorkClick(subwork)}>
                                                            {"."}{subwork}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </li> : null
                                }
                            </React.Fragment>
                        )
                    }
                    )}
                </ul>
            </nav>
        </>
    )
}

export default Navbar