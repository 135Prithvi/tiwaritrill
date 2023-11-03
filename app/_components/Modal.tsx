
"use client";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import CardC from './Card';
import Link from 'next/link';

type CardCProps = {
  title: string;
  description: string;
  imageSrc: string;
  url: string;
  gurl: string;
};
export default function MyModal({ title,description, imageSrc,gurl, url }: CardCProps) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  

  return (
    <>
      <button type="button"
        onClick={openModal}>
          <CardC title={title} imageSrc={imageSrc} url={url} /></button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
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

                <Dialog.Panel className="w-full max-w- transform overflow-hidden rounded-2xl dark:bg-slate-800 bg-gray-200 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h2"
                    className="text-lg font-black leading-6 dark:text-slate-100 text-gray-900 mb-1.5"
                  >
                    {title}
                  </Dialog.Title>
                  <article className="grid grid-cols-1 sm:grid-cols-2 justify-between w-full sm:gap-x-5">
                    <div className="h-60 w-full">
                      <img src={imageSrc} alt={title} className="w-full h-full rounded object-cover" />
                    </div>
                    <div className="mt-2">
                      <p className="text-sm dark:text-slate-300 text-gray-500">
                        {description}
                      </p>
                      <div className="mt-4 flex flex-wrap space-x-6">
                        <Link
                          href={url}
                          className="inline-flex justify-center rounded-md border border-transparent dark:bg-[#7A8CD8] bg-[#5d6eba] px-4 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5d6eba] focus-visible:ring-offset-2"
                          
                        >
                          live!
                        </Link>
                        <Link
                        href={gurl}
                          className="inline-flex justify-center rounded-md border border-transparent dark:bg-[#7A8CD8] bg-[#5d6eba] px-4 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5d6eba] focus-visible:ring-offset-2"
                        
                        >
                          Repo Please!
                        </Link>
                      </div>
                    </div>
                  </article>


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
