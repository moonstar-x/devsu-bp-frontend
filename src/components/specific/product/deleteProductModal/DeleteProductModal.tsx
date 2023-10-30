import React from 'react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Modal } from '$components/common/modal/modal';
import { ModalCard } from '$components/common/modal/modalCard';
import { ModalCardBody } from '$components/common/modal/modalCardBody';
import { ModalCardActions } from '$components/common/modal/modalCardActions';
import { Button } from '$components/common/button';
import { useApiClient, useMutation } from '$components/hooks/api.tsx';

interface Props {
  id: string
  name: string
}

export const DeleteProductModal = NiceModal.create<Props>(({ id, name }) => {
  const modal = useModal();
  const client = useApiClient();
  const deleteMutation = useMutation(client.products.deleteProduct(id));

  const handleCancelClick = () => {
    modal.remove();
  };

  const handleConfirmClick = async () => {
    try {
      await deleteMutation.mutateAsync();
    } catch (error) {
      console.error(`Could not delete product ${id}`, error);
    } finally {
      modal.remove();
    }
  };

  return (
    <Modal>
      <ModalCard>
        <ModalCardBody>
          <p>
            Are you sure you wish to delete the product {name}?
          </p>
        </ModalCardBody>

        <ModalCardActions>
          <Button color="gray" onClick={handleCancelClick}>
            Cancel
          </Button>

          <Button color="primary" onClick={handleConfirmClick}>
            Confirm
          </Button>
        </ModalCardActions>
      </ModalCard>
    </Modal>
  );
});
