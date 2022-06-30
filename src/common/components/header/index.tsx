import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useAppSelector } from "../../../setup/hooks";
import { classNames } from "../../../utils";

const Header = () => {
	const router = useRouter();
	const guild = useAppSelector((state) => state.guild.data);

	return (
		<Disclosure as="nav" className="bg-white dark:bg-gray-800 border-b border-b-gray-700">
			{({ open }) => (
				<>
					<div className="px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>

							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
								<div className="flex-shrink-0 flex items-center">
									<span className="text-2xl font-semibold text-gray-200 hidden sm:block">
										{guild?.name ?? "Clay"}
									</span>
								</div>
								{/* <div className="flex-shrink-0 flex items-center">
									<img
										className="block sm:hidden h-16 w-auto"
										src={Logo.src}
										alt="Workflow"
									/>
									<img
										className="hidden sm:block h-28 w-auto"
										src={LogoMark.src}
										alt="Workflow"
									/>
									<span className="text-4xl hidden sm:block">Clay</span>
								</div> */}

								{/* <div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										{navigation.map((item, i) => (
											<Link key={item.name} href={item.href} passHref>
												<a
													className={classNames(
														router.asPath === item.href
															? "font-semibold border-b-2 border-blue-500 text-slate-400"
															: "border-b-2 border-transparent hover:border-blue-500/70",
														"font-medimum transition-colors duration-200 ease-in-out transform dark:text-slate-300"
													)}
													aria-current={
														router.asPath === item.href
															? "page"
															: undefined
													}
												>
													{item.name}
												</a>
											</Link>
										))}
									</div>
								</div> */}
							</div>

							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<button
									type="button"
									className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
								>
									<span className="sr-only">View notifications</span>
									<BellIcon className="h-6 w-6" aria-hidden="true" />
								</button>

								<Menu as="div" className="ml-3 relative">
									<div>
										<Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
											<span className="sr-only">Open user menu</span>
											<img
												className="h-8 w-8 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
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
										<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-gray-100" : "",
															"w-[95%] block mx-auto rounded-md px-4 py-2 text-sm text-gray-700"
														)}
													>
														Your Profile
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-gray-100" : "",
															"w-[95%] block mx-auto rounded-md block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Settings
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-gray-100" : "",
															"w-[95%] block mx-auto rounded-md block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Sign out
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>
				</>
			)}
		</Disclosure>
	);
};

export default Header;
