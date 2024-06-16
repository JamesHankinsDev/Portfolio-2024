'use client';

import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from '@nextui-org/react';

import { useDisclosure } from '@nextui-org/react';

export default function ContactMe() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  const [subject, setSubject] = React.useState<string | null>(null);
  const [body, setBody] = React.useState<string | null>(null);
  const [sentEmail, setSentEmail] = React.useState<boolean>(false);

  const onSend = () => {
    console.log('Do that send thing!');
    setSentEmail(true);
    window.open(
      `mailto:hankins.jamesb@gmail.com?subject=${subject}&body=${body}`
    );
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          onPress={() => handleOpen()}
          variant="flat"
          className="bg-tirtiary text-primary opacity-95"
        >
          Get in touch
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
        className="bg-primary text-white"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Contact Me via Email!
              </ModalHeader>
              <ModalBody>
                {!sentEmail ? (
                  <>
                    <p>
                      {`Please be aware, this feature will open an email app on
                      your machine!`}
                    </p>
                    <Input
                      size="md"
                      type="text"
                      label="Subject"
                      value={subject ?? ''}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <Textarea
                      label="Body"
                      size="md"
                      placeholder=""
                      value={body ?? ''}
                      onChange={(e) => setBody(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <h1>{`Thanks for reaching out!`}</h1>
                    <p>{`I'm looking forward to connecting soon.`}</p>
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onSend}>
                  <span className="text-tirtiary hover:underline hover:italic hover:text-bold">
                    Get in touch!
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
