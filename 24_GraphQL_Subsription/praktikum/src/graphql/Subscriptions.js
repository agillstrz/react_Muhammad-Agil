import { gql } from "@apollo/client";

export const Passenger = gql`
  subscription MySubscription {
    passengers_Data_Passengers {
      Umur
      id
      Jenis_Kelamin
      nama
    }
  }
`;
