import React from 'react';
import { NavMenuHomeComponent } from '../nav-menu-home-component';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet'; // Import shadcn Sheet components
import { Menu } from 'lucide-react'; // Import a burger menu icon from Lucide (or use your own)

const HeaderHome = () => {
    return (
        <div>
            <div className='flex mx-4 sm:flex-row gap-4 items-center justify-between my-4'>
                {/* Logo - Hidden on mobile, visible on medium screens and above */}
                <h1 className='text-xl font-bold hidden sm:block'>LOGO</h1>

                {/* Burger Menu - Visible on mobile, hidden on medium screens and above */}
                <div className='flex justify-center items-center'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className='block sm:hidden p-2'>
                                <Menu className="h-6 w-6" /> {/* Burger menu icon */}
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[500px] sm:w-[500px]">
                            {/* Sidebar Content */}
                            <div className="mt-6">
                                <NavMenuHomeComponent />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Navigation Menu - Visible on medium screens and above */}
                <div className="hidden sm:block">
                    <NavMenuHomeComponent />
                </div>

                {/* Buttons */}
                <div className='flex gap-4'>
                    <Button variant="outline" className='border-black px-4 md:px-8 rounded-none'>Help</Button>
                    <Button className='rounded-none px-4 md:px-8'>Start</Button>
                </div>
            </div>
            <hr className='border-black' />
        </div>
    );
};

export default HeaderHome;