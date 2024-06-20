'use client';

import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';

type props = {
  body: React.ReactElement;
  header: React.ReactElement;
  CTA: string;
};

import { useDisclosure } from '@nextui-org/react';

export default function WHModal({ body, CTA, header }: props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3" id="WHModal">
        <Button radius="full" size="sm" onPress={() => handleOpen()}>
          {CTA}
        </Button>
      </div>

      <Modal
        size={'md'}
        isOpen={isOpen}
        onClose={onClose}
        backdrop={'blur'}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: 'easeOut',
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: 'easeIn',
              },
            },
          },
        }}
        className="bg-secondary text-primary border-2 border-primary"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 bg-primary text-tirtiary">
                {header}
              </ModalHeader>
              <ModalBody>{body}</ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  <span className="text-tirtiary hover:underline hover:italic hover:text-bold">
                    Take me back!
                  </span>
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
