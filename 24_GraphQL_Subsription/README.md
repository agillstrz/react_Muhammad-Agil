### Summary GraphQL-Subscription

1. Subscription

- Subscription adalah fitur GraphQL yang memungkinkan server mengirim data ke kliennya ketika peristiwa tertentu terjadi. Subscription biasanya diterapkan dengan WebSocket.

2. Setting Subscription

- Install subscriptions-transport-ws to enable websocket connection npm install @apollo/client-subscriptions-transport-ws
- Import all needed modules and separate between http and websocket link
- Create httpLink for query and mutation. and WsLink for subscriptions.
- Add split function and use as link when create client. Split function used to combine those two Links into a single link that uses one or the other accotding to the type of operation being executed.

3. Subscription using useSubscription

- Import useSubscription from apollo client and define subscription
- Invoke subscription and consume data, in this example we will remove query from previous code and change it to subscription. in Jsx code just like before.
