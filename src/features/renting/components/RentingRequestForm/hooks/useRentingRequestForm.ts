import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { selectCommon } from "shared/infrastructure/store/common/commonSlice";

import { useSendRentingRequestMutation } from "features/renting/api/rentingApi";
import { RentingRequestModel } from "../models/RentingRequestModel";
import { useState } from "react";
import AppNotification from "shared/components/notification/AppNotification";

export const useRentingRequestForm = () => {
  const common = useSelector(selectCommon);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { control, getValues, reset, formState, setValue, setError, clearErrors } =
    useForm<RentingRequestModel>({
      defaultValues: new RentingRequestModel(),
    });

  const [sendRentingRequest, { isLoading: isSubmitting, isError }] =
    useSendRentingRequestMutation();

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const onSubmit = async (data: RentingRequestModel) => {
    try {
      await sendRentingRequest({ ...data }).unwrap(); // Spread zajistí převod na plain object
      reset(new RentingRequestModel());
    } catch (error) {
      AppNotification("Chyba", "Odeslání poptávky se nezdařilo", "danger");
      console.error("Form submission error:", error);
    }
  };

  const validateTableSelections = (data: RentingRequestModel) => {
    const hasRentedItems = Array.isArray(data.rentedItems) && data.rentedItems.length > 0;
    const isDecorationSelected = (data.rentedItems || []).some((itemCode) =>
      String(itemCode).toLowerCase().includes("decoration")
    );
    const hasDecorationThemes =
      Array.isArray(data.decorationThemes) && data.decorationThemes.length > 0;

    if (!hasRentedItems) {
      setError("rentedItems", {
        type: "manual",
        message: "Vyberte alespoň jednu položku.",
      });
    } else {
      clearErrors("rentedItems");
    }

    if (isDecorationSelected && !hasDecorationThemes) {
      setError("decorationThemes", {
        type: "manual",
        message: "Vyberte alespoň jednu dekoraci.",
      });
    } else {
      clearErrors("decorationThemes");
    }

    return hasRentedItems && (!isDecorationSelected || hasDecorationThemes);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = getValues();

    if (!validateTableSelections(data)) {
      return;
    }

    await onSubmit(data);
  };

  const handleOpenTerms = (e: React.MouseEvent) => {
    e.preventDefault();
    setDialogOpen(true);
  };

  const handleCloseTerms = () => {
    setDialogOpen(false);
  };

  return {
    control,
    handleFormSubmit,
    handleOpenTerms,
    handleCloseTerms,
    dialogOpen,
    formState,
    setValue,
    clearErrors,
    isMobile,
    common,
    isSubmitting,
    isError,
  };
};
