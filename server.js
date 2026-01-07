const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();
const PORT = 6700;

app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    partialsDir: path.join(__dirname, "views/partials"),
    defaultLayout: false,
  }),
);

app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <h1>Email Templates</h1>
    <ul>
      <li><a href="/welcome">Welcome Email</a></li>
      <li><a href="/verification">Account Verification OTP</a></li>
      <li><a href="/verification-success">Account Verification Success</a></li>
      <li><a href="/password-reset-otp">Password Reset OTP</a></li>
      <li><a href="/password-change-otp">Password Change OTP</a></li>
      <li><a href="/ethereum-address-bound">Ethereum Address Bound</a></li>
      <li><a href="/kyc-submitted">KYC Submitted</a></li>
      <li><a href="/kyc-rejected">KYC Rejected</a></li>
      <li><a href="/kyc-approved">KYC Approved</a></li>
      <li><a href="/kyc-update-required">KYC Update Required</a></li>
      <li><a href="/trip-completed">Trip Completed</a></li>
      <li><a href="/trip-cancelled">Trip Cancelled</a></li>
      <li><a href="/trip-timeout">Trip Timeout</a></li>
      <li><a href="/order-created">Order Created</a></li>
      <li><a href="/order-cancelled">Order Cancelled</a></li>
      <li><a href="/order-delivered">Order Delivered</a></li>
      <li><a href="/order-received-vendor">New Order Received (Vendor)</a></li>
      <li><a href="/order-cancelled-vendor">Order Cancelled (Vendor)</a></li>
      <li><a href="/order-timeout">Order Timeout (User)</a></li>
      <li><a href="/order-timeout-vendor">Order Timeout (Vendor)</a></li>
      <li><a href="/monthly-stats">Monthly Stats (User)</a></li>
      <li><a href="/monthly-stats-vendor">Monthly Stats (Vendor)</a></li>
      <li><a href="/monthly-stats-driver">Monthly Stats (Driver)</a></li>
    </ul>
  `);
});

app.get("/welcome", (req, res) => {
  const sampleData = {
    user: {
      name: "John Doe",
    },
    feBaseUrl: "https://app.routaev.com",
  };
  res.render("welcome", sampleData);
});

app.get("/verification", (req, res) => {
  const sampleData = {
    user: {
      name: "John Doe",
    },
    otp: "123456",
  };
  res.render("verification", sampleData);
});

app.get("/verification-success", (req, res) => {
  const sampleData = {
    user: {
      name: "John Doe",
    },
    feBaseUrl: "https://app.routaev.com",
  };
  res.render("verification-success", sampleData);
});

app.get("/password-reset-otp", (req, res) => {
  const sampleData = {
    user: {
      name: "John Doe",
    },
    otp: "654321",
  };
  res.render("password-reset-otp", sampleData);
});

app.get("/password-change-otp", (req, res) => {
  const sampleData = {
    user: {
      name: "John Doe",
    },
    otp: "987654",
  };
  res.render("password-change-otp", sampleData);
});

app.get("/ethereum-address-bound", (req, res) => {
  const sampleData = {
    user: {
      name: "John Doe",
    },
    ethereumAddress: "0x1234...5678",
    feBaseUrl: "https://app.routaev.com",
  };
  res.render("ethereum-address-bound", sampleData);
});

app.get("/kyc-submitted", (req, res) => {
  const sampleData = {
    user: {
      name: "John Doe",
    },
  };
  res.render("kyc-submitted", sampleData);
});

app.get("/kyc-rejected", (req, res) => {
  const sampleData = {
    user: {
      name: "John Doe",
    },
    rejectionReason:
      "The uploaded ID document is blurry and the expiry date is not clearly visible. Please upload a clear, high-quality image of your government-issued ID.",
    feBaseUrl: "https://app.routaev.com",
  };
  res.render("kyc-rejected", sampleData);
});

app.get("/kyc-approved", (req, res) => {
  const sampleData = {
    user: {
      name: "John Doe",
    },
    feBaseUrl: "https://app.routaev.com",
  };
  res.render("kyc-approved", sampleData);
});

app.get("/kyc-update-required", (req, res) => {
  const sampleData = {
    user: {
      name: "John Doe",
    },
    updateReason:
      "Your proof of address document has expired. Please upload a recent utility bill, bank statement, or government correspondence issued within the last 3 months.",
    feBaseUrl: "https://app.routaev.com",
  };
  res.render("kyc-update-required", sampleData);
});

app.get("/trip-completed", (req, res) => {
  const sampleData = {
    user: {
      name: "John Doe",
    },
    trip: {
      pickupLocation: "123 Main Street, Downtown",
      dropoffLocation: "456 Oak Avenue, Westside",
      date: "Jan 5, 2026 at 2:30 PM",
      duration: "18 min",
      distance: "5.2 km",
      cost: "$12.50",
    },
    feBaseUrl: "https://app.routaev.com",
    ratingUrl: "https://app.routaev.com/trip/rate/abc123",
  };
  res.render("trip-completed", sampleData);
});

app.get("/trip-cancelled", (req, res) => {
  const sampleData = {
    user: {
      name: "John Doe",
    },
    trip: {
      pickupLocation: "123 Main Street, Downtown",
      dropoffLocation: "456 Oak Avenue, Westside",
      scheduledDate: "Jan 5, 2026 at 3:00 PM",
      tripId: "RT-12345678",
      cancellationFee: "$2.50",
    },
    feBaseUrl: "https://app.routaev.com",
  };
  res.render("trip-cancelled", sampleData);
});

app.get("/trip-timeout", (req, res) => {
  const sampleData = {
    user: {
      name: "John Doe",
    },
    trip: {
      pickupLocation: "123 Main Street, Downtown",
      dropoffLocation: "456 Oak Avenue, Westside",
      requestTime: "Jan 5, 2026 at 2:15 PM",
    },
    feBaseUrl: "https://app.routaev.com",
  };
  res.render("trip-timeout", sampleData);
});

app.get("/order-created", (req, res) => {
  const sampleData = {
    user: {
      name: "John Doe",
    },
    order: {
      orderId: "ORD-987654321",
      orderCode: "ABC123",
      orderType: "Food Delivery",
      total: "$25.80",
    },
    feBaseUrl: "https://app.routaev.com",
  };
  res.render("order-created", sampleData);
});

app.get("/order-cancelled", (req, res) => {
  const sampleData = {
    user: {
      name: "John Doe",
    },
    order: {
      orderId: "ORD-987654321",
      orderCode: "ABC123",
      orderType: "Food Delivery",
      total: "$25.80",
      paymentMethod: "credit card",
    },
    feBaseUrl: "https://app.routaev.com",
  };
  res.render("order-cancelled", sampleData);
});

app.get("/order-delivered", (req, res) => {
  const sampleData = {
    user: {
      name: "John Doe",
    },
    order: {
      orderId: "ORD-987654321",
      orderCode: "ABC123",
      orderType: "Food Delivery",
      deliveryAddress: "456 Oak Avenue, Westside",
      deliveryTime: "Jan 5, 2026 at 2:45 PM",
      total: "$25.80",
    },
    feBaseUrl: "https://app.routaev.com",
    ratingUrl: "https://app.routaev.com/order/rate/abc123",
  };
  res.render("order-delivered", sampleData);
});

app.get("/order-received-vendor", (req, res) => {
  const sampleData = {
    vendor: {
      name: "Gourmet Kitchen",
    },
    customer: {
      name: "John Doe",
    },
    order: {
      orderId: "ORD-987654321",
      orderCode: "XYZ789",
      orderType: "Food Delivery",
      total: "$25.80",
      deliveryAddress: "456 Oak Avenue, Westside, Apt 4B",
      deliveryInstructions: "Ring doorbell twice and leave at the door",
    },
    acceptUrl: "https://app.routaev.com/vendor/orders/accept/xyz789",
    declineUrl: "https://app.routaev.com/vendor/orders/decline/xyz789",
  };
  res.render("order-received-vendor", sampleData);
});

app.get("/order-cancelled-vendor", (req, res) => {
  const sampleData = {
    vendor: {
      name: "Gourmet Kitchen",
    },
    customer: {
      name: "John Doe",
    },
    order: {
      orderId: "ORD-987654321",
      orderCode: "XYZ789",
      orderType: "Food Delivery",
      total: "$25.80",
      cancelledTime: "Jan 5, 2026 at 2:20 PM",
      cancellationReason: "Customer changed mind",
    },
    feBaseUrl: "https://app.routaev.com/vendor",
  };
  res.render("order-cancelled-vendor", sampleData);
});

app.get("/order-timeout", (req, res) => {
  const sampleData = {
    user: {
      name: "John Doe",
    },
    order: {
      orderId: "ORD-987654321",
      orderCode: "ABC123",
      orderType: "Food Delivery",
      total: "$25.80",
      paymentMethod: "credit card",
    },
    feBaseUrl: "https://app.routaev.com",
  };
  res.render("order-timeout", sampleData);
});

app.get("/order-timeout-vendor", (req, res) => {
  const sampleData = {
    vendor: {
      name: "Gourmet Kitchen",
    },
    customer: {
      name: "John Doe",
    },
    order: {
      orderId: "ORD-987654321",
      orderCode: "XYZ789",
      orderType: "Food Delivery",
      total: "$25.80",
    },
    feBaseUrl: "https://app.routaev.com/vendor",
  };
  res.render("order-timeout-vendor", sampleData);
});

app.get("/monthly-stats", (req, res) => {
  const sampleData = {
    user: {
      name: "John Doe",
    },
    stats: {
      month: "December 2025",
      totalSpent: "$487.30",
      savings: "$52.40",
      rides: {
        count: 12,
        totalSpent: "$245.60",
      },
      orders: {
        count: 18,
        totalSpent: "$241.70",
      },
      foodOrders: {
        totalSpent: "$156.40",
      },
      groceryOrders: {
        totalSpent: "$85.30",
      },
      carbonSaved: "24.5 kg CO₂",
    },
    feBaseUrl: "https://app.routaev.com",
  };
  res.render("monthly-stats", sampleData);
});

app.get("/monthly-stats-vendor", (req, res) => {
  const sampleData = {
    vendor: {
      name: "Gourmet Kitchen",
    },
    stats: {
      month: "December 2025",
      totalRevenue: "$3,245.80",
      ordersDelivered: 142,
      averageOrderValue: "$22.86",
      rating: "4.8",
      reviews: 138,
      onTimeRate: "96%",
      foodOrdersRevenue: "$2,456.30",
      groceryOrdersRevenue: "$789.50",
      growthPercentage: "12.5%",
    },
    feBaseUrl: "https://app.routaev.com/vendor",
  };
  res.render("monthly-stats-vendor", sampleData);
});

app.get("/monthly-stats-driver", (req, res) => {
  const sampleData = {
    driver: {
      name: "Michael Smith",
    },
    stats: {
      month: "December 2025",
      totalEarnings: "$4,320.50",
      bonusEarned: "$325.00",
      tripsCompleted: 186,
      averageTripFare: "$23.23",
      hoursOnline: "142",
      hourlyRate: "$30.43",
      rating: "4.9",
      reviews: 178,
      distanceDriven: "2,847 km",
      acceptanceRate: "94%",
      cancellationRate: "2.1%",
      tripFares: "$3,850.50",
      tips: "$145.00",
      bonuses: "$325.00",
      growthPercentage: "18.2%",
    },
    feBaseUrl: "https://app.routaev.com/driver",
  };
  res.render("monthly-stats-driver", sampleData);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
