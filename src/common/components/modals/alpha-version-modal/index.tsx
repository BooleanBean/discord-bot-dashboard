import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../../../setup/hooks";
import { closeModal, setAlphaVersion } from "../../../../setup/site-manager";
import PrimaryButton from "../../buttons/primary";

export default function AlphaVersionModal() {
	const { isModalOpen } = useAppSelector((state) => state.site);
	const dispatch = useAppDispatch();

	function iCloseModal() {
		dispatch(closeModal());
		dispatch(setAlphaVersion());
	}

	return (
		<Transition appear show={isModalOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={() => {}}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-50" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
								<Dialog.Title
									as="h3"
									className="text-lg font-medium leading-6 text-gray-100"
								>
									Alpha version attention
								</Dialog.Title>
								<div className="mt-2">
									<p className="text-sm text-gray-400">
										Since the site is still under construction, problems such as
										crashes and bugs may occur. By clicking the button below,
										you will accept the responsibility and you will be able to
										start using the site.
									</p>
								</div>

								<div className="mt-4">
									<PrimaryButton type="button" onClick={iCloseModal}>
										Let me in!
									</PrimaryButton>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
