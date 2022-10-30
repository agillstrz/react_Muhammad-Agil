## Summary GRAPHQL_QUERY_AND_APOLLO_CLIENT

### 1. Apa itu GraphQL

GraphQL adalah bahasa yang digunakan untuk query API. GraphQL memungkinkan kita untuk mengambil data yang kita butuhkan hanya dengan satu end point.
GraphQL dapat dijalankan secara lokal dan dalam server. Untuk membuat GraphQL muncul di internet, kita dapat menggunakan Hasura dan Apollo server serta (Heroku + Neon) sebagai penyimpanan database. Hasura merupakan vendor graphQL dan rest api dalam bentuk cloud, sedangkan Heroku merupakan cloud PaaS yang biasa digunakan oleh backend developer untuk mempublikasikan codenya.

### 2. Fitur-Fitur yang ada pada GraphQL

a. Query : digunakan untuk mendapatkan data berdasarkan query yang didefinisikan.  
b. Mutation: digunakan untuk melakukan insert, update, dan delete.  
c. Subsription : Digunakan untuk mendapatkan data secara realtime berdasarkan event tertentu

### 3. Contoh dari GraphQL Query

```graphql
{
  query {
    movies {
      id
      title
      director {
        name
        age
      }
    }
  }
}
```
