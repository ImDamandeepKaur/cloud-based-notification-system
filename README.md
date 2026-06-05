# ☁️ Cloud-Based Notification System

https://github.com/user-attachments/assets/a4863bb2-0bf9-4dc4-8811-21474f565451

A serverless notification system built using AWS Lambda functions and a simple web interface. The application allows users to submit notifications through a frontend interface, which are then processed and delivered using cloud-based serverless services.

---

## 📌 Project Overview

The Cloud-Based Notification System is designed to demonstrate serverless computing using AWS Lambda. Users can enter notification details through a web interface, and the backend Lambda functions handle notification processing and delivery.

This project showcases cloud-native architecture, event-driven processing, and scalable notification management.

---

## 🚀 Features

* User-friendly web interface
* Serverless architecture using AWS Lambda
* Notification processing automation
* Notification delivery service
* Scalable and cost-efficient design
* Cloud-native deployment model

---

## 📂 Project Structure

```text
cloud-based-notification-system/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── lambda Functions/
│   ├── process Notification
│   └── send Notification
│
└── README.md
```

---

## 🏗️ System Architecture

```text
User
 │
 ▼
Frontend (HTML/CSS/JavaScript)
 │
 ▼
AWS Lambda
(Process Notification)
 │
 ▼
AWS Lambda
(Send Notification)
 │
 ▼
Notification Delivered
```

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Cloud Services

* AWS Lambda
* AWS IAM
* AWS CloudWatch

### Development Tools

* Git
* GitHub

---

## ⚙️ Working Flow

1. User enters notification details on the web interface.
2. Frontend sends request to the notification processing Lambda function.
3. Process Notification Lambda validates and processes the request.
4. Send Notification Lambda delivers the notification.
5. Success or failure response is returned to the user.

---

## 📸 Screenshots

### Frontend Interface

Add a screenshot of your notification form here.

### AWS Lambda Functions

Add screenshots of:

* Process Notification Lambda
* Send Notification Lambda

### CloudWatch Logs

Add screenshots showing successful execution logs.

---

## 🚀 Deployment Steps

### Clone Repository

```bash
git clone https://github.com/ImDamandeepKaur/cloud-based-notification-system.git
cd cloud-based-notification-system
```

### Frontend Setup

Open `index.html` in your browser.

### AWS Setup

1. Create IAM roles with Lambda permissions.
2. Create the Process Notification Lambda function.
3. Create the Send Notification Lambda function.
4. Configure triggers and permissions.
5. Test the workflow using AWS Console.

---

## 📈 Future Enhancements

* Email notification support
* SMS integration
* Push notifications
* User authentication
* Notification scheduling
* Analytics dashboard

---

## 🎓 Learning Outcomes

* Understanding Serverless Computing
* AWS Lambda Function Development
* Event-Driven Architecture
* Frontend and Cloud Integration
* Cloud Monitoring with CloudWatch

---

## 👩‍💻 Author

**Damandeep Kaur**

GitHub: https://github.com/ImDamandeepKaur

---

## ⭐ If you found this project useful, please give it a star on GitHub!

