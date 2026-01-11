# Roadside Food Delivery App - Implementation Plan

## Goal Description
Update the application to persist data using **LocalStorage**, ensuring that User Registration, Login, and Orders work without a Node.js backend.

## Proposed Changes

### Authentication
#### [MODIFY] [src/pages/auth/RegisterPage.jsx](file:///home/balachandar/roadside-eats/src/pages/RegisterPage.jsx)
- **Logic**: On successful registration, append the new user to a `users` array in `localStorage`.
- **Logic**: Automatically log the user in (set `currentUser`) after registration.

#### [MODIFY] [src/pages/auth/LoginPage.jsx](file:///home/balachandar/roadside-eats/src/pages/LoginPage.jsx)
- **Logic**: Retrieve `users` from `localStorage`.
- **Logic**: Validate email/password against stored users.
- **Logic**: Set `currentUser` in `localStorage` on success.

### Dashboard & Data
#### [MODIFY] [src/components/Navbar.jsx](file:///home/balachandar/roadside-eats/src/components/Navbar.jsx)
- **UI**: Read `currentUser` from `localStorage` to display the real user's name.
- **Logic**: Add a "Logout" button/functionality (clears `currentUser`).

#### [MODIFY] [src/pages/MainPage.jsx](file:///home/balachandar/roadside-eats/src/pages/MainPage.jsx)
- **Logic**: When "Confirm Order" is clicked, save the order details to an `orders` array in `localStorage` with a timestamp.

## Verification Plan
1.  **Registration**: Register as "Balachandar", check Application > LocalStorage in DevTools to see the data.
2.  **Login**: Logout and try logging in with the created credentials.
3.  **Persistence**: Refresh the page and ensure the user is still logged in (Navbar shows name).
