import { RootState } from "shared/infrastructure/store/store";

export const selectRentingPageData = (state: RootState) => state.rentingPage;
