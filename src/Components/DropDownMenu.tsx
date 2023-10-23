import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { MdArrowDropDown } from 'react-icons/md';
import { dropDownMenu } from '../Constants'
import { Link } from 'react-scroll';

export default function DropDownMenu() {
    return (
        <div className=" text-right">
            <Menu as="div" className="relative ">
                <div>
                    <Menu.Button className="flex items-center justify-center w-full leading-normal  text-lg text-slate-400 hover:text-slate-500 duration-200'">
                        Options
                        <MdArrowDropDown
                            className="ml-2 -mr-1 h-5 w-5 "
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            {dropDownMenu.map((link) => (
                                <Menu.Item key={link.href} as={Fragment}>
                                    {({ active }) => (
                                        <button className={`${active ? 'bg-primaryColor text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                            <Link to={link.href} spy={true} smooth={true} offset={-50} duration={500}  >
                                                {link.label}
                                            </Link>
                                        </button>
                                    )}
                                </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div >
    )
}