'use client';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import { testimonials } from '../placeholder';
import clsx from 'clsx';
import SingleTestimony from './single-testimony';

export default function ModalTestimony() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        radius="sm"
        size="lg"
        variant="ghost"
        className="font-bold shadow-lg hover:bg-zinc-800 hover:text-stone-50"
        onPress={onOpen}
      >
        Przeczytaj więcej opini
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        classNames={{
          backdrop:
            'bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                {testimonials.map((testimonial, i) => {
                  return (
                    <div
                      className={clsx(
                        'relative overflow-hidden px-6 py-12 shadow-2xl sm:col-span-4 sm:py-32 lg:px-8',
                        { 'hidden': i === 0 }
                      )}
                    >
                      <SingleTestimony {...testimonial} />
                    </div>
                  );
                })}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
