import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { selectCommon } from "shared/infrastructure/store/common/commonSlice";

import { useSendRentingRequestMutation } from "features/renting/api/rentingApi";
import { RentingRequestModel } from "../models/RentingRequestModel";
import { useState } from "react";

export const useRentingRequestForm = () => {
  const common = useSelector(selectCommon);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { control, handleSubmit, reset, formState, setValue } =
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
      console.error("Form submission error:", error);
    }
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
    handleSubmit: handleSubmit(onSubmit),
    handleOpenTerms,
    handleCloseTerms,
    dialogOpen,
    formState,
    setValue,
    isMobile,
    common,
    isSubmitting,
    isError,
  };
};
