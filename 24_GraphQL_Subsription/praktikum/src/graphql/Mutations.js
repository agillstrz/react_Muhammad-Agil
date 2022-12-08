import { gql } from "@apollo/client";

export const InsertPassangers = gql`
  mutation insertPassanger($nama: String, $Umur: Int, $Jenis_Kelamin: String) {
    insert_passengers_Data_Passengers(
      objects: { nama: $nama, Umur: $Umur, Jenis_Kelamin: $Jenis_Kelamin }
    ) {
      returning {
        id
      }
    }
  }
`;

export const DeletePassangers = gql`
  mutation DeletePassanger($id: Int) {
    delete_passengers_Data_Passengers(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;
