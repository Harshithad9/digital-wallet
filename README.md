# Digital Wallet (Paytm Clone)

## Project Overview

This project is a **Digital Wallet** application inspired by Paytm, built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The platform allows users to send money, view their transaction history, and analyze their transactions with interactive charts. It is designed to provide a seamless and intuitive user experience for digital payments and financial tracking.

---

## Key Features

### 1. **Send Money**
- Users can transfer funds to other users instantly.
- Real-time balance updates post-transaction.

### 2. **View Transactions**
- Comprehensive transaction history with details like date, amount.

### 3. **Analyze Transactions**
- Visualize spending habits and trends using interactive charts (e.g., pie charts, bar graphs).
- Categorized expenses to provide insights into spending patterns.

---

## Technology Stack

### Frontend
- **React.js**: For building a responsive and user-friendly interface.

### Backend
- **Node.js**: For server-side logic and handling API requests.
- **Express.js**: For building robust APIs and middleware.

### Database
- **MongoDB**: For storing user information, transaction details, and analytics data.

---

## Installation and Setup

### Prerequisites
- Node.js (v14 or above)
- MongoDB (local or cloud-based)

### Steps to Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Harshithad9/digital-wallet.git
   cd digital-wallet
   ```

2. **Install Dependencies**
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the `backend` directory.
   - Add the following:
     ```env
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-secret-key
     PAYMENT_GATEWAY_API_KEY=your-payment-gateway-key
     ```

4. **Run the Application**
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend server:
     ```bash
     cd frontend
     npm start
     ```
   - Access the app at `http://localhost:3000`.

---

## Usage

1. **Register/Login**
   - New users can sign up with their email and phone number.
   - Existing users can log in securely using their credentials.

2. **Dashboard**
   - View account balance, recent transactions, and spending overview.

3. **Send Money**
   - Enter recipient details, and amount.
   - Confirm the transaction.

4. **Transaction History**
   - View all past transactions by date or category.

5. **Analytics**
   - Navigate to the "Analytics" tab to explore interactive charts and gain insights into your spending habits.

---

## Acknowledgments

- Inspiration from Paytm for the design and feature set.

---

## Contact

For any queries or support, feel free to reach out:
- **Email**: your-dharshitha292@gmail.com
- **GitHub**: [Harshithad9](https://github.com/Harshithad9/digital-wallet.git)

