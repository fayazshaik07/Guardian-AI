import React from "react";
import { Modal, Box, Typography, Button, styled } from "@mui/material";

interface PaymentGatewaySelectionProps {
  onSelection: () => void;
  open: boolean;
  onClose: () => void;
}

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
  padding: "32px",
  maxWidth: "500px",
  width: "90%",
  textAlign: "center",
  outline: "none",
  "@media (max-width: 600px)": {
    width: "85%",
    padding: "24px",
  },
}));

const ButtonContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "24px",
});

const YesButton = styled(Button)({
  backgroundColor: "#28a745",
  "&:hover": {
    backgroundColor: "#218838",
  },
  padding: "10px 24px",
  minWidth: "120px",
});

const NoButton = styled(Button)({
  backgroundColor: "#dc3545",
  "&:hover": {
    backgroundColor: "#c82333",
  },
  padding: "10px 24px",
  minWidth: "120px",
});

const PaymentGatewaySelection: React.FC<PaymentGatewaySelectionProps> = ({
  onSelection,
  open,
  onClose,
}) => {
  const handleSelection = (choice: "yes" | "no") => {
    onSelection();
    onClose();
  };

  return (
    <StyledModal
      open={open}
      onClose={onClose}
      closeAfterTransition
      aria-labelledby="payment-gateway-modal-title"
    >
      <ModalContent>
        <Typography
          id="payment-gateway-modal-title"
          variant="h5"
          component="h2"
          sx={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 600,
            marginBottom: 3,
          }}
        >
          Are you planning to use a payment gateway?
        </Typography>
        <ButtonContainer>
          <YesButton variant="contained" onClick={() => handleSelection("yes")}>
            Yes
          </YesButton>
          <NoButton variant="contained" onClick={() => handleSelection("no")}>
            No
          </NoButton>
        </ButtonContainer>
      </ModalContent>
    </StyledModal>
  );
};

export default PaymentGatewaySelection;
