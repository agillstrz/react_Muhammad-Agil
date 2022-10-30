import { gql } from "@apollo/client";

export const GetAllPassengers = gql`
  query Data_Passangers {
    passengers_Data_Passengers {
      id
      nama
      Umur
      Jenis_Kelamin
    }
  }
`;

export const GetPassengerById = gql`
  query getById($id: Int!) {
    passengers_Data_Passengers(where: { id: { _eq: $id } }) {
      id
      nama
      Umur
      Jenis_Kelamin
    }
  }
`;
