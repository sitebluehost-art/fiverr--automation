<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fiverr Automation Hub | Dashboard</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        :root {
            --deep-black: #080810;
            --charcoal: #121218;
            --dark-gray: #1e1e26;
            --medium-gray: #2a2a34;
            --light-gray: #e2e2e8;
            --electric-purple: #7A3FFF;
            --electric-purple-light: #8a5bff;
            --white: #ffffff;
            --soft-white: #f9f9fd;
            --green: #4ade80;
            --yellow: #facc15;
            --red: #f87171;
            --blue: #60a5fa;
            --transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            --border-radius: 16px;
            --card-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
            --hover-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--deep-black);
            color: var(--soft-white);
            line-height: 1.6;
            overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 700;
            line-height: 1.2;
        }

        .container {
            display: grid;
            grid-template-columns: 260px 1fr;
            min-height: 100vh;
        }

        /* Sidebar */
        .sidebar {
            background: var(--charcoal);
            border-right: 1px solid rgba(255, 255, 255, 0.05);
            padding: 28px 0;
            height: 100vh;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 16px;
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 800;
            font-size: 24px;
            color: var(--white);
            text-decoration: none;
            padding: 0 24px;
            margin-bottom: 40px;
        }

        .logo-icon {
            background: linear-gradient(135deg, var(--electric-purple), #5e2df7);
            width: 40px;
            height: 40px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            font-weight: bold;
            font-size: 18px;
        }

        .nav-menu {
            padding: 0 16px;
        }

        .nav-item {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 14px 20px;
            border-radius: 12px;
            color: var(--light-gray);
            text-decoration: none;
            font-weight: 500;
            font-size: 16px;
            transition: var(--transition);
            margin-bottom: 8px;
            cursor: pointer;
        }

        .nav-item:hover, .nav-item.active {
            background: rgba(122, 63, 255, 0.15);
            color: var(--electric-purple);
        }

        .nav-item i {
            font-size: 20px;
            width: 24px;
            text-align: center;
        }

        /* Main Content */
        .main-content {
            padding: 28px;
            overflow-y: auto;
            max-height: 100vh;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 32px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .page-title {
            font-size: 28px;
            font-weight: 700;
        }

        .user-actions {
            display: flex;
            gap: 16px;
            align-items: center;
        }

        .notification-btn {
            background: var(--dark-gray);
            width: 44px;
            height: 44px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--light-gray);
            position: relative;
            cursor: pointer;
        }

        .notification-badge {
            position: absolute;
            top: 8px;
            right: 8px;
            background: var(--red);
            color: var(--white);
            font-size: 10px;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .user-profile {
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
        }

        .avatar {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--electric-purple), #5e2df7);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            font-weight: bold;
        }

        /* Dashboard Sections */
        .section {
            display: none;
            animation: fadeIn 0.5s ease;
        }

        .section.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .card {
            background: var(--dark-gray);
            border-radius: var(--border-radius);
            padding: 24px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            box-shadow: var(--card-shadow);
            transition: var(--transition);
            margin-bottom: 28px;
        }

        .card:hover {
            box-shadow: var(--hover-shadow);
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .card-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--soft-white);
        }

        .card-actions {
            display: flex;
            gap: 12px;
        }

        .btn-icon {
            background: var(--medium-gray);
            width: 36px;
            height: 36px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--light-gray);
            cursor: pointer;
            transition: var(--transition);
        }

        .btn-icon:hover {
            background: var(--electric-purple);
            color: var(--white);
        }

        /* Inbox Manager */
        .inbox-tabs {
            display: flex;
            gap: 16px;
            margin-bottom: 20px;
            overflow-x: auto;
            padding-bottom: 12px;
        }

        .inbox-tab {
            padding: 8px 16px;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 500;
            white-space: nowrap;
            cursor: pointer;
            transition: var(--transition);
        }

        .inbox-tab.active {
            background: var(--electric-purple);
            color: var(--white);
        }

        .message-item {
            padding: 16px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            transition: var(--transition);
            display: flex;
            justify-content: space-between;
        }

        .message-item:hover {
            background: rgba(122, 63, 255, 0.05);
            border-radius: 12px;
            padding-left: 8px;
        }

        .message-content {
            flex: 1;
            margin-right: 16px;
        }

        .message-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
        }

        .client-name {
            font-weight: 600;
            color: var(--soft-white);
        }

        .message-time {
            font-size: 12px;
            color: #a0a0b0;
        }

        .message-preview {
            color: #b5b5c8;
            font-size: 14px;
            margin-bottom: 12px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .message-actions {
            display: flex;
            flex-direction: column;
            gap: 8px;
            justify-content: center;
        }

        .btn-ai {
            background: rgba(122, 63, 255, 0.15);
            border: none;
            color: var(--electric-purple);
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
            white-space: nowrap;
        }

        .btn-ai:hover {
            background: rgba(122, 63, 255, 0.25);
        }

        /* Analytics Section */
        .analytics-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 28px;
            margin-bottom: 32px;
        }

        .chart-container {
            height: 300px;
            position: relative;
        }

        .kpi-cards {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
        }

        .kpi-card {
            background: var(--dark-gray);
            border-radius: var(--border-radius);
            padding: 20px;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .kpi-value {
            font-size: 28px;
            font-weight: 700;
            margin: 12px 0;
            color: var(--electric-purple);
            font-family: 'Space Grotesk', sans-serif;
        }

        .kpi-label {
            color: #b5b5c8;
            font-size: 14px;
        }

        .kpi-trend {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 14px;
            margin-top: 8px;
        }

        .trend-up {
            color: var(--green);
        }

        .trend-down {
            color: var(--red);
        }

        /* AI Insights */
        .insight-item {
            padding: 16px;
            border-radius: 12px;
            background: rgba(122, 63, 255, 0.08);
            margin-bottom: 16px;
            border-left: 3px solid var(--electric-purple);
        }

        .insight-title {
            font-weight: 600;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .insight-content {
            color: #c0c0d0;
            font-size: 14px;
        }

        /* Automation Queue */
        .task-item {
            display: flex;
            padding: 14px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .task-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 16px;
            flex-shrink: 0;
        }

        .task-status.running {
            background: rgba(74, 222, 128, 0.15);
            color: var(--green);
        }

        .task-status.completed {
            background: rgba(114, 153, 242, 0.15);
            color: var(--blue);
        }

        .task-details {
            flex: 1;
        }

        .task-name {
            font-weight: 500;
            margin-bottom: 4px;
        }

        .task-time {
            font-size: 13px;
            color: #a0a0b0;
        }

        /* Premium Upsell */
        .premium-card {
            background: linear-gradient(135deg, #1a1a2a, #251b3a);
            border: 1px solid rgba(122, 63, 255, 0.3);
            position: relative;
            overflow: hidden;
        }

        .premium-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: var(--electric-purple);
        }

        .premium-content {
            padding: 24px;
            position: relative;
            z-index: 1;
        }

        .premium-badge {
            position: absolute;
            top: 16px;
            right: 16px;
            background: var(--electric-purple);
            color: var(--white);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        }

        .premium-features {
            margin: 20px 0;
        }

        .premium-feature {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
            font-size: 14px;
            color: #c0c0d0;
        }

        .premium-feature i {
            color: var(--electric-purple);
        }

        /* Responsive */
        @media (max-width: 1200px) {
            .analytics-grid {
                grid-template-columns: 1fr;
            }
            
            .kpi-cards {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        @media (max-width: 992px) {
            .container {
                grid-template-columns: 1fr;
            }
            
            .sidebar {
                position: fixed;
                width: 260px;
                transform: translateX(-100%);
                transition: transform 0.3s ease;
            }
            
            .sidebar.active {
                transform: translateX(0);
            }
            
            .kpi-cards {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .header {
                flex-wrap: wrap;
                gap: 16px;
            }
            
            .kpi-cards {
                grid-template-columns: 1fr;
            }
            
            .inbox-tabs {
                gap: 12px;
            }
        }

        @media (max-width: 480px) {
            .message-actions {
                flex-direction: column;
                gap: 8px;
            }
            
            .btn-ai {
                width: 100%;
                text-align: center;
            }
            
            .message-item {
                flex-direction: column;
            }
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: var(--charcoal);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--medium-gray);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--electric-purple);
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Sidebar -->
        <aside class="sidebar">
            <a href="#" class="logo">
                <div class="logo-icon">FA</div>
                Fiverr Automation
            </a>
            <nav class="nav-menu">
                <div class="nav-item active" data-section="dashboard">
                    <i class="fas fa-home"></i> Dashboard
                </div>
                <div class="nav-item" data-section="inbox">
                    <i class="fas fa-inbox"></i> Smart Inbox
                </div>
                <div class="nav-item" data-section="auto-reply">
                    <i class="fas fa-reply"></i> Auto-Reply System
                </div>
                <div class="nav-item" data-section="offer">
                    <i class="fas fa-file-invoice"></i> Offer Generator
                </div>
                <div class="nav-item" data-section="accounts">
                    <i class="fas fa-users"></i> Multi-Account Manager
                </div>
                <div class="nav-item" data-section="analytics">
                    <i class="fas fa-chart-line"></i> Analytics & Performance
                </div>
                <div class="nav-item" data-section="insights">
                    <i class="fas fa-brain"></i> AI Insights
                </div>
                <div class="nav-item" data-section="queue">
                    <i class="fas fa-tasks"></i> Automation Queue
                </div>
                <div class="nav-item" data-section="notifications">
                    <i class="fas fa-bell"></i> Notification Center
                </div>
                <div class="nav-item" data-section="settings">
                    <i class="fas fa-cog"></i> Settings
                </div>
            </nav>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <div class="header">
                <h1 class="page-title" id="current-section">Dashboard</h1>
                <div class="user-actions">
                    <div class="notification-btn">
                        <i class="fas fa-bell"></i>
                        <div class="notification-badge">3</div>
                    </div>
                    <div class="user-profile">
                        <div class="avatar">JD</div>
                        <span>John Doe</span>
                    </div>
                </div>
            </div>

            <!-- Dashboard Section -->
            <div class="section active" id="dashboard">
                <div class="dashboard-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 28px; margin-bottom: 32px;">
                    <!-- Smart Inbox Manager -->
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-title">Smart Inbox Manager</h2>
                            <div class="card-actions">
                                <div class="btn-icon" id="view-inbox">
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                        <div class="inbox-tabs">
                            <div class="inbox-tab active">New Messages</div>
                            <div class="inbox-tab">Unread</div>
                            <div class="inbox-tab">Active Clients</div>
                            <div class="inbox-tab">Pending Replies</div>
                            <div class="inbox-tab">Completed</div>
                        </div>
                        <div class="message-list">
                            <div class="message-item">
                                <div class="message-content">
                                    <div class="message-header">
                                        <div class="client-name">Alex Morgan</div>
                                        <div class="message-time">2 min ago</div>
                                    </div>
                                    <div class="message-preview">Hi, I'm interested in your logo design service. Do you have availability this week?</div>
                                </div>
                                <div class="message-actions">
                                    <button class="btn-ai">AI Quick Reply</button>
                                    <button class="btn-ai">Summarize Chat</button>
                                </div>
                            </div>
                            <div class="message-item">
                                <div class="message-content">
                                    <div class="message-header">
                                        <div class="client-name">Sarah Kim</div>
                                        <div class="message-time">15 min ago</div>
                                    </div>
                                    <div class="message-preview">Thanks for the quick response! Could you add the source files to the extras?</div>
                                </div>
                                <div class="message-actions">
                                    <button class="btn-ai">AI Quick Reply</button>
                                    <button class="btn-ai">Summarize Chat</button>
                                </div>
                            </div>
                            <div class="message-item">
                                <div class="message-content">
                                    <div class="message-header">
                                        <div class="client-name">Michael Chen</div>
                                        <div class="message-time">1 hour ago</div>
                                    </div>
                                    <div class="message-preview">I'd like to order your premium video editing package. What's the turnaround time?</div>
                                </div>
                                <div class="message-actions">
                                    <button class="btn-ai">AI Quick Reply</button>
                                    <button class="btn-ai">Summarize Chat</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Auto-Reply System -->
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-title">Auto-Reply System</h2>
                            <div class="card-actions">
                                <div class="btn-icon" id="view-auto-reply">
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px; background: rgba(122, 63, 255, 0.1); border-radius: 12px; margin-bottom: 20px;">
                            <div>
                                <div style="font-weight: 600; color: var(--electric-purple);">Automation Status</div>
                                <div style="color: #b5b5c8; font-size: 14px;">Active • 3 templates running</div>
                            </div>
                            <div style="display: flex; gap: 8px;">
                                <button style="background: var(--green); color: white; border: none; padding: 8px 16px; border-radius: 8px; font-weight: 500;">Resume</button>
                                <button style="background: var(--medium-gray); color: var(--light-gray); border: none; padding: 8px 16px; border-radius: 8px; font-weight: 500;">Pause</button>
                            </div>
                        </div>
                        <div style="margin-bottom: 16px;">
                            <div style="font-weight: 500; margin-bottom: 8px;">New Buyer Message</div>
                            <div style="color: #b5b5c8; font-size: 14px;">"Hi! Thanks for your interest. I'll get back to you shortly with more details."</div>
                        </div>
                        <div style="margin-bottom: 16px;">
                            <div style="font-weight: 500; margin-bottom: 8px;">Order Confirmation</div>
                            <div style="color: #b5b5c8; font-size: 14px;">"Your order has been confirmed! I'll start working on it right away."</div>
                        </div>
                        <div>
                            <div style="font-weight: 500; margin-bottom: 8px;">Gig Inquiry</div>
                            <div style="color: #b5b5c8; font-size: 14px;">"I see you're interested in my [service]. What specific requirements do you have?"</div>
                        </div>
                    </div>

                    <!-- Multi-Account Manager -->
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-title">Multi-Account Manager</h2>
                            <div class="card-actions">
                                <div class="btn-icon" id="view-accounts">
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; gap: 16px; margin-bottom: 16px; padding: 16px; background: rgba(114, 153, 242, 0.1); border-radius: 12px;">
                            <div style="flex-shrink: 0;">
                                <div class="avatar" style="width: 40px; height: 40px; font-size: 16px;">JD</div>
                            </div>
                            <div style="flex: 1;">
                                <div style="font-weight: 600;">john_doe_designs</div>
                                <div style="color: #b5b5c8; font-size: 14px; margin: 6px 0;">Connected • Automation ON</div>
                                <div style="display: flex; gap: 16px; color: #b5b5c8; font-size: 14px;">
                                    <span>12 new messages</span>
                                    <span>3 orders</span>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center;">
                                <i class="fas fa-chevron-right" style="color: #a0a0b0;"></i>
                            </div>
                        </div>
                        <div style="display: flex; gap: 16px; margin-bottom: 16px; padding: 16px; background: rgba(74, 222, 128, 0.1); border-radius: 12px;">
                            <div style="flex-shrink: 0;">
                                <div class="avatar" style="background: linear-gradient(135deg, #10b981, #059669); width: 40px; height: 40px; font-size: 16px;">JD</div>
                            </div>
                            <div style="flex: 1;">
                                <div style="font-weight: 600;">jane_doe_writing</div>
                                <div style="color: #b5b5c8; font-size: 14px; margin: 6px 0;">Connected • Automation ON</div>
                                <div style="display: flex; gap: 16px; color: #b5b5c8; font-size: 14px;">
                                    <span>5 new messages</span>
                                    <span>1 order</span>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center;">
                                <i class="fas fa-chevron-right" style="color: #a0a0b0;"></i>
                            </div>
                        </div>
                        <div style="display: flex; gap: 16px; padding: 16px; background: rgba(248, 113, 113, 0.1); border-radius: 12px;">
                            <div style="flex-shrink: 0;">
                                <div class="avatar" style="background: linear-gradient(135deg, #ef4444, #dc2626); width: 40px; height: 40px; font-size: 16px;">JD</div>
                            </div>
                            <div style="flex: 1;">
                                <div style="font-weight: 600;">john_dev_services</div>
                                <div style="color: #b5b5c8; font-size: 14px; margin: 6px 0;">Disconnected • Automation OFF</div>
                                <div style="display: flex; gap: 16px; color: #b5b5c8; font-size: 14px;">
                                    <span>0 new messages</span>
                                    <span>0 orders</span>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center;">
                                <i class="fas fa-chevron-right" style="color: #a0a0b0;"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Offer Generator -->
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-title">Offer Generator</h2>
                            <div class="card-actions">
                                <div class="btn-icon" id="view-offer">
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                        <div style="margin-bottom: 20px;">
                            <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--soft-white);">Service Details</label>
                            <input type="text" placeholder="Describe your service..." style="width: 100%; padding: 12px 16px; background: var(--medium-gray); border: 1px solid var(--dark-gray); border-radius: 12px; color: var(--soft-white);">
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                            <div>
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--soft-white);">Price ($)</label>
                                <input type="number" placeholder="0.00" style="width: 100%; padding: 12px 16px; background: var(--medium-gray); border: 1px solid var(--dark-gray); border-radius: 12px; color: var(--soft-white);">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--soft-white);">Delivery Time (days)</label>
                                <input type="number" placeholder="1" style="width: 100%; padding: 12px 16px; background: var(--medium-gray); border: 1px solid var(--dark-gray); border-radius: 12px; color: var(--soft-white);">
                            </div>
                        </div>
                        <div style="margin-bottom: 20px;">
                            <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--soft-white);">Extra Services</label>
                            <textarea placeholder="List additional services..." style="width: 100%; padding: 12px 16px; background: var(--medium-gray); border: 1px solid var(--dark-gray); border-radius: 12px; color: var(--soft-white; height: 80px;"></textarea>
                        </div>
                        <button style="width: 100%; background: var(--electric-purple); color: var(--white); border: none; padding: 14px; border-radius: 12px; font-weight: 600; font-family: 'Space Grotesk', sans-serif;">Generate Offer</button>
                    </div>

                    <!-- Premium Upsell -->
                    <div class="card premium-card">
                        <div class="premium-badge">PRO</div>
                        <div class="premium-content">
                            <h3 style="font-size: 20px; margin-bottom: 12px; color: var(--electric-purple);">Unlock Advanced Features</h3>
                            <p style="color: #c0c0d0; margin-bottom: 20px;">Upgrade to Professional to access these powerful tools:</p>
                            <div class="premium-features">
                                <div class="premium-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <span>Unlimited AI Quick Replies</span>
                                </div>
                                <div class="premium-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <span>Multi-Account Automation</span>
                                </div>
                                <div class="premium-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <span>Advanced Analytics</span>
                                </div>
                                <div class="premium-feature">
                                    <i class="fas fa-check-circle"></i>
                                    <span>Priority Support</span>
                                </div>
                            </div>
                            <button style="width: 100%; background: rgba(122, 63, 255, 0.2); color: var(--electric-purple); border: 1px solid var(--electric-purple); padding: 14px; border-radius: 12px; font-weight: 600; font-family: 'Space Grotesk', sans-serif;">Upgrade Now</button>
                        </div>
                    </div>
                </div>

                <!-- Analytics Section -->
                <div class="analytics-grid">
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-title">Performance Analytics</h2>
                            <div class="card-actions">
                                <div class="btn-icon">
                                    <i class="fas fa-download"></i>
                                </div>
                                <div class="btn-icon">
                                    <i class="fas fa-filter"></i>
                                </div>
                            </div>
                        </div>
                        <div class="chart-container">
                            <canvas id="analyticsChart"></canvas>
                        </div>
                    </div>
                    <div class="kpi-cards">
                        <div class="kpi-card">
                            <div class="kpi-label">Impressions</div>
                            <div class="kpi-value">12,450</div>
                            <div class="kpi-trend trend-up">
                                <i class="fas fa-arrow-up"></i> 12% vs last week
                            </div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-label">Messages</div>
                            <div class="kpi-value">84</div>
                            <div class="kpi-trend trend-up">
                                <i class="fas fa-arrow-up"></i> 8% vs last week
                            </div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-label">Orders</div>
                            <div class="kpi-value">24</div>
                            <div class="kpi-trend trend-up">
                                <i class="fas fa-arrow-up"></i> 22% vs last week
                            </div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-label">Earnings</div>
                            <div class="kpi-value">$1,280</div>
                            <div class="kpi-trend trend-up">
                                <i class="fas fa-arrow-up"></i> 15% vs last week
                            </div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-label">Conversion</div>
                            <div class="kpi-value">28.5%</div>
                            <div class="kpi-trend trend-up">
                                <i class="fas fa-arrow-up"></i> 3.5% vs last week
                            </div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-label">Response Rate</div>
                            <div class="kpi-value">92%</div>
                            <div class="kpi-trend trend-down">
                                <i class="fas fa-arrow-down"></i> 2% vs last week
                            </div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-label">Response Time</div>
                            <div class="kpi-value">12 min</div>
                            <div class="kpi-trend trend-up">
                                <i class="fas fa-arrow-up"></i> 4 min faster
                            </div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-label">Clicks</div>
                            <div class="kpi-value">1,042</div>
                            <div class="kpi-trend trend-up">
                                <i class="fas fa-arrow-up"></i> 18% vs last week
                            </div>
                        </div>
                    </div>
                </div>

                <!-- AI Insights Panel -->
                <div class="dashboard-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 28px; margin-bottom: 32px;">
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-title">AI Insights</h2>
                            <div class="card-actions">
                                <div class="btn-icon" id="view-insights">
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                        <div class="insight-item">
                            <div class="insight-title">
                                <i class="fas fa-user" style="color: var(--electric-purple);"></i>
                                Priority Client Alert
                            </div>
                            <div class="insight-content">Michael Chen is most likely to place an order within 24 hours. Send a personalized offer to increase conversion chances.</div>
                        </div>
                        <div class="insight-item">
                            <div class="insight-title">
                                <i class="fas fa-exclamation-triangle" style="color: var(--yellow);"></i>
                                Urgent Response Needed
                            </div>
                            <div class="insight-content">Sarah Kim has been waiting for 3 hours. Respond quickly to maintain your 92% response rate.</div>
                        </div>
                        <div class="insight-item">
                            <div class="insight-title">
                                <i class="fas fa-trophy" style="color: var(--green);"></i>
                                Top Performing Gig
                            </div>
                            <div class="insight-content">Your "Premium Logo Design" gig has 42% higher conversion than your other services. Consider promoting it more.</div>
                        </div>
                        <div class="insight-item">
                            <div class="insight-title">
                                <i class="fas fa-lightbulb" style="color: var(--blue);"></i>
                                Daily Growth Tip
                            </div>
                            <div class="insight-content">Adding portfolio samples to your gig description can increase orders by up to 35%.</div>
                        </div>
                    </div>

                    <!-- Automation Queue -->
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-title">Automation Queue</h2>
                            <div class="card-actions">
                                <div class="btn-icon" id="view-queue">
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                        <div class="task-item">
                            <div class="task-icon task-status running">
                                <i class="fas fa-reply"></i>
                            </div>
                            <div class="task-details">
                                <div class="task-name">Auto-reply to new message from Alex Morgan</div>
                                <div class="task-time">Scheduled in 2 minutes</div>
                            </div>
                        </div>
                        <div class="task-item">
                            <div class="task-icon task-status running">
                                <i class="fas fa-paper-plane"></i>
                            </div>
                            <div class="task-details">
                                <div class="task-name">Follow-up message to Sarah Kim</div>
                                <div class="task-time">Scheduled in 1 hour</div>
                            </div>
                        </div>
                        <div class="task-item">
                            <div class="task-icon task-status completed">
                                <i class="fas fa-bell"></i>
                            </div>
                            <div class="task-details">
                                <div class="task-name">Buyer reminder for Michael Chen</div>
                                <div class="task-time">Sent 3 hours ago</div>
                            </div>
                        </div>
                        <div class="task-item">
                            <div class="task-icon task-status completed">
                                <i class="fas fa-exchange-alt"></i>
                            </div>
                            <div class="task-details">
                                <div class="task-name">Account switch: john_doe_designs → jane_doe_writing</div>
                                <div class="task-time">Completed 5 hours ago</div>
                            </div>
                        </div>
                        <div class="task-item">
                            <div class="task-icon task-status running">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="task-details">
                                <div class="task-name">Welcome message template activation</div>
                                <div class="task-time">Scheduled in 12 hours</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Inbox Section -->
            <div class="section" id="inbox">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">Smart Inbox Manager</h2>
                        <div class="card-actions">
                            <div class="btn-icon">
                                <i class="fas fa-sync"></i>
                            </div>
                            <div class="btn-icon">
                                <i class="fas fa-cog"></i>
                            </div>
                        </div>
                    </div>
                    <div class="inbox-tabs">
                        <div class="inbox-tab active">New Messages (3)</div>
                        <div class="inbox-tab">Unread (5)</div>
                        <div class="inbox-tab">Active Clients (12)</div>
                        <div class="inbox-tab">Pending Replies (7)</div>
                        <div class="inbox-tab">Completed Conversations (42)</div>
                    </div>
                    <div class="message-list">
                        <div class="message-item">
                            <div class="message-content">
                                <div class="message-header">
                                    <div class="client-name">Alex Morgan</div>
                                    <div class="message-time">2 min ago</div>
                                </div>
                                <div class="message-preview">Hi, I'm interested in your logo design service. Do you have availability this week?</div>
                            </div>
                            <div class="message-actions">
                                <button class="btn-ai">AI Quick Reply</button>
                                <button class="btn-ai">Summarize Chat</button>
                            </div>
                        </div>
                        <div class="message-item">
                            <div class="message-content">
                                <div class="message-header">
                                    <div class="client-name">Sarah Kim</div>
                                    <div class="message-time">15 min ago</div>
                                </div>
                                <div class="message-preview">Thanks for the quick response! Could you add the source files to the extras?</div>
                            </div>
                            <div class="message-actions">
                                <button class="btn-ai">AI Quick Reply</button>
                                <button class="btn-ai">Summarize Chat</button>
                            </div>
                        </div>
                        <div class="message-item">
                            <div class="message-content">
                                <div class="message-header">
                                    <div class="client-name">Michael Chen</div>
                                    <div class="message-time">1 hour ago</div>
                                </div>
                                <div class="message-preview">I'd like to order your premium video editing package. What's the turnaround time?</div>
                            </div>
                            <div class="message-actions">
                                <button class="btn-ai">AI Quick Reply</button>
                                <button class="btn-ai">Summarize Chat</button>
                            </div>
                        </div>
                        <div class="message-item">
                            <div class="message-content">
                                <div class="message-header">
                                    <div class="client-name">Emma Rodriguez</div>
                                    <div class="message-time">2 hours ago</div>
                                </div>
                                <div class="message-preview">Can you deliver by Friday? I have an urgent deadline for this project.</div>
                            </div>
                            <div class="message-actions">
                                <button class="btn-ai">AI Quick Reply</button>
                                <button class="btn-ai">Summarize Chat</button>
                            </div>
                        </div>
                        <div class="message-item">
                            <div class="message-content">
                                <div class="message-header">
                                    <div class="client-name">David Wilson</div>
                                    <div class="message-time">4 hours ago</div>
                                </div>
                                <div class="message-preview">I've sent the payment. Please start working on my order as soon as possible.</div>
                            </div>
                            <div class="message-actions">
                                <button class="btn-ai">AI Quick Reply</button>
                                <button class="btn-ai">Summarize Chat</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Auto-Reply Section -->
            <div class="section" id="auto-reply">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">Auto-Reply System</h2>
                        <div class="card-actions">
                            <div class="btn-icon">
                                <i class="fas fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px; background: rgba(122, 63, 255, 0.1); border-radius: 12px; margin-bottom: 28px;">
                        <div>
                            <div style="font-weight: 600; color: var(--electric-purple); font-size: 18px;">Automation Status</div>
                            <div style="color: #b5b5c8; font-size: 14px;">Active • 5 templates running</div>
                        </div>
                        <div style="display: flex; gap: 8px;">
                            <button id="pause-automation" style="background: var(--red); color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600;">Pause All</button>
                            <button id="resume-automation" style="background: var(--green); color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; display: none;">Resume All</button>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 20px; padding: 20px; background: var(--dark-gray); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.05);">
                        <div style="font-weight: 600; margin-bottom: 12px; color: var(--soft-white); display: flex; justify-content: space-between; align-items: center;">
                            <span>New Buyer Message</span>
                            <div>
                                <button class="btn-ai" style="background: rgba(74, 222, 128, 0.15); color: var(--green);">Active</button>
                            </div>
                        </div>
                        <div style="color: #b5b5c8; font-size: 14px; background: var(--medium-gray); padding: 12px; border-radius: 10px; margin-bottom: 12px;">"Hi! Thanks for your interest in my service. I'll get back to you shortly with more details about your project."</div>
                        <div style="display: flex; gap: 12px;">
                            <button style="background: var(--medium-gray); color: var(--light-gray); border: none; padding: 8px 16px; border-radius: 8px; font-weight: 500;">Edit</button>
                            <button style="background: var(--red); color: white; border: none; padding: 8px 16px; border-radius: 8px; font-weight: 500;">Delete</button>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 20px; padding: 20px; background: var(--dark-gray); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.05);">
                        <div style="font-weight: 600; margin-bottom: 12px; color: var(--soft-white); display: flex; justify-content: space-between; align-items: center;">
                            <span>Order Confirmation</span>
                            <div>
                                <button class="btn-ai" style="background: rgba(74, 222, 128, 0.15); color: var(--green);">Active</button>
                            </div>
                        </div>
                        <div style="color: #b5b5c8; font-size: 14px; background: var(--medium-gray); padding: 12px; border-radius: 10px; margin-bottom: 12px;">"Your order has been confirmed! I'll start working on it right away and keep you updated on the progress."</div>
                        <div style="display: flex; gap: 12px;">
                            <button style="background: var(--medium-gray); color: var(--light-gray); border: none; padding: 8px 16px; border-radius: 8px; font-weight: 500;">Edit</button>
                            <button style="background: var(--red); color: white; border: none; padding: 8px 16px; border-radius: 8px; font-weight: 500;">Delete</button>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 20px; padding: 20px; background: var(--dark-gray); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.05);">
                        <div style="font-weight: 600; margin-bottom: 12px; color: var(--soft-white); display: flex; justify-content: space-between; align-items: center;">
                            <span>Gig Inquiry</span>
                            <div>
                                <button class="btn-ai" style="background: rgba(74, 222, 128, 0.15); color: var(--green);">Active</button>
                            </div>
                        </div>
                        <div style="color: #b5b5c8; font-size: 14px; background: var(--medium-gray); padding: 12px; border-radius: 10px; margin-bottom: 12px;">"I see you're interested in my [service]. What specific requirements do you have? I'd be happy to provide a custom quote."</div>
                        <div style="display: flex; gap: 12px;">
                            <button style="background: var(--medium-gray); color: var(--light-gray); border: none; padding: 8px 16px; border-radius: 8px; font-weight: 500;">Edit</button>
                            <button style="background: var(--red); color: white; border: none; padding: 8px 16px; border-radius: 8px; font-weight: 500;">Delete</button>
                        </div>
                    </div>
                    
                    <div style="padding: 20px; background: var(--dark-gray); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.05);">
                        <div style="font-weight: 600; margin-bottom: 12px; color: var(--soft-white); display: flex; justify-content: space-between; align-items: center;">
                            <span>Follow-up Message</span>
                            <div>
                                <button class="btn-ai" style="background: rgba(248, 113, 113, 0.15); color: var(--red);">Inactive</button>
                            </div>
                        </div>
                        <div style="color: #b5b5c8; font-size: 14px; background: var(--medium-gray); padding: 12px; border-radius: 10px; margin-bottom: 12px;">"Just checking in to see if you have any questions about my service. I'm available to discuss your project!"</div>
                        <div style="display: flex; gap: 12px;">
                            <button style="background: var(--medium-gray); color: var(--light-gray); border: none; padding: 8px 16px; border-radius: 8px; font-weight: 500;">Edit</button>
                            <button style="background: var(--green); color: white; border: none; padding: 8px 16px; border-radius: 8px; font-weight: 500;">Activate</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Offer Generator Section -->
            <div class="section" id="offer">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">Offer Generator</h2>
                        <div class="card-actions">
                            <div class="btn-icon">
                                <i class="fas fa-history"></i>
                            </div>
                        </div>
                    </div>
                    <div style="margin-bottom: 28px; padding: 24px; background: var(--dark-gray); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.05);">
                        <div style="font-weight: 600; color: var(--soft-white); margin-bottom: 16px;">Generate a Custom Offer</div>
                        <div style="margin-bottom: 20px;">
                            <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--soft-white);">Service Details</label>
                            <textarea id="service-details" placeholder="Describe your service in detail..." style="width: 100%; padding: 12px 16px; background: var(--medium-gray); border: 1px solid var(--dark-gray); border-radius: 12px; color: var(--soft-white; height: 100px;"></textarea>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                            <div>
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--soft-white);">Price ($)</label>
                                <input type="number" id="offer-price" placeholder="0.00" style="width: 100%; padding: 12px 16px; background: var(--medium-gray); border: 1px solid var(--dark-gray); border-radius: 12px; color: var(--soft-white);">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--soft-white);">Delivery Time (days)</label>
                                <input type="number" id="delivery-time" placeholder="1" style="width: 100%; padding: 12px 16px; background: var(--medium-gray); border: 1px solid var(--dark-gray); border-radius: 12px; color: var(--soft-white);">
                            </div>
                        </div>
                        <div style="margin-bottom: 20px;">
                            <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--soft-white);">Extra Services</label>
                            <textarea id="extra-services" placeholder="List additional services with descriptions..." style="width: 100%; padding: 12px 16px; background: var(--medium-gray); border: 1px solid var(--dark-gray); border-radius: 12px; color: var(--soft-white; height: 80px;"></textarea>
                        </div>
                        <button id="generate-offer" style="width: 100%; background: var(--electric-purple); color: var(--white); border: none; padding: 16px; border-radius: 12px; font-weight: 600; font-family: 'Space Grotesk', sans-serif; font-size: 18px;">Generate Professional Offer</button>
                    </div>
                    
                    <div id="offer-preview" style="display: none;">
                        <div style="font-weight: 600; color: var(--soft-white); margin-bottom: 16px;">Your Generated Offer</div>
                        <div style="background: var(--charcoal); border-radius: 16px; padding: 24px; border: 1px solid rgba(122, 63, 255, 0.3);">
                            <div id="offer-text" style="color: #e2e2e8; line-height: 1.7;"></div>
                            <div style="display: flex; gap: 16px; margin-top: 24px;">
                                <button id="copy-offer" style="flex: 1; background: var(--electric-purple); color: var(--white); border: none; padding: 14px; border-radius: 12px; font-weight: 600;">Copy to Clipboard</button>
                                <button id="reset-offer" style="flex: 1; background: var(--medium-gray); color: var(--light-gray); border: none; padding: 14px; border-radius: 12px; font-weight: 600;">Create New</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Multi-Account Manager Section -->
            <div class="section" id="accounts">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">Multi-Account Manager</h2>
                        <div class="card-actions">
                            <div class="btn-icon" id="add-account">
                                <i class="fas fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div style="margin-bottom: 24px;">
                        <div style="font-weight: 600; color: var(--soft-white); margin-bottom: 16px;">Connected Accounts</div>
                        <div style="display: flex; gap: 20px; margin-bottom: 20px; padding: 20px; background: rgba(114, 153, 242, 0.15); border-radius: 16px;">
                            <div style="flex-shrink: 0;">
                                <div class="avatar" style="width: 56px; height: 56px; font-size: 20px;">JD</div>
                            </div>
                            <div style="flex: 1;">
                                <div style="font-weight: 600; font-size: 18px;">john_doe_designs</div>
                                <div style="color: #b5b5c8; font-size: 14px; margin: 8px 0;">Connected • Automation ON</div>
                                <div style="display: flex; gap: 24px; color: #b5b5c8; font-size: 14px; margin-top: 16px;">
                                    <span>12 new messages</span>
                                    <span>3 orders this week</span>
                                    <span>92% response rate</span>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center;">
                                <button style="background: var(--electric-purple); color: var(--white); border: none; padding: 10px 20px; border-radius: 10px; font-weight: 600;">Manage</button>
                            </div>
                        </div>
                        <div style="display: flex; gap: 20px; margin-bottom: 20px; padding: 20px; background: rgba(74, 222, 128, 0.15); border-radius: 16px;">
                            <div style="flex-shrink: 0;">
                                <div class="avatar" style="background: linear-gradient(135deg, #10b981, #059669); width: 56px; height: 56px; font-size: 20px;">JD</div>
                            </div>
                            <div style="flex: 1;">
                                <div style="font-weight: 600; font-size: 18px;">jane_doe_writing</div>
                                <div style="color: #b5b5c8; font-size: 14px; margin: 8px 0;">Connected • Automation ON</div>
                                <div style="display: flex; gap: 24px; color: #b5b5c8; font-size: 14px; margin-top: 16px;">
                                    <span>5 new messages</span>
                                    <span>1 order this week</span>
                                    <span>98% response rate</span>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center;">
                                <button style="background: var(--electric-purple); color: var(--white); border: none; padding: 10px 20px; border-radius: 10px; font-weight: 600;">Manage</button>
                            </div>
                        </div>
                        <div style="display: flex; gap: 20px; padding: 20px; background: rgba(248, 113, 113, 0.15); border-radius: 16px;">
                            <div style="flex-shrink: 0;">
                                <div class="avatar" style="background: linear-gradient(135deg, #ef4444, #dc2626); width: 56px; height: 56px; font-size: 20px;">JD</div>
                            </div>
                            <div style="flex: 1;">
                                <div style="font-weight: 600; font-size: 18px;">john_dev_services</div>
                                <div style="color: #b5b5c8; font-size: 14px; margin: 8px 0;">Disconnected • Automation OFF</div>
                                <div style="display: flex; gap: 24px; color: #b5b5c8; font-size: 14px; margin-top: 16px;">
                                    <span>0 new messages</span>
                                    <span>0 orders this week</span>
                                    <span>0% response rate</span>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center;">
                                <button style="background: var(--medium-gray); color: var(--light-gray); border: none; padding: 10px 20px; border-radius: 10px; font-weight: 600;">Reconnect</button>
                            </div>
                        </div>
                    </div>
                    
                    <div id="add-account-form" style="display: none;">
                        <div style="font-weight: 600; color: var(--soft-white); margin-bottom: 16px;">Add New Account</div>
                        <div style="margin-bottom: 20px;">
                            <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--soft-white);">Fiverr Username</label>
                            <input type="text" id="new-username" placeholder="Enter your Fiverr username" style="width: 100%; padding: 12px 16px; background: var(--medium-gray); border: 1px solid var(--dark-gray); border-radius: 12px; color: var(--soft-white);">
                        </div>
                        <div style="margin-bottom: 20px;">
                            <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--soft-white);">API Key</label>
                            <input type="password" id="api-key" placeholder="Enter your Fiverr API key" style="width: 100%; padding: 12px 16px; background: var(--medium-gray); border: 1px solid var(--dark-gray); border-radius: 12px; color: var(--soft-white);">
                        </div>
                        <div style="display: flex; gap: 16px;">
                            <button id="connect-account" style="flex: 1; background: var(--electric-purple); color: var(--white); border: none; padding: 14px; border-radius: 12px; font-weight: 600;">Connect Account</button>
                            <button id="cancel-add" style="flex: 1; background: var(--medium-gray); color: var(--light-gray); border: none; padding: 14px; border-radius: 12px; font-weight: 600;">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Analytics Section -->
            <div class="section" id="analytics">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">Performance Analytics</h2>
                        <div class="card-actions">
                            <div class="btn-icon">
                                <i class="fas fa-download"></i>
                            </div>
                            <div class="btn-icon">
                                <i class="fas fa-filter"></i>
                            </div>
                        </div>
                    </div>
                    <div class="analytics-grid">
                        <div class="chart-container">
                            <canvas id="detailedChart"></canvas>
                        </div>
                        <div class="kpi-cards">
                            <div class="kpi-card">
                                <div class="kpi-label">Monthly Earnings</div>
                                <div class="kpi-value">$1,280</div>
                                <div class="kpi-trend trend-up">
                                    <i class="fas fa-arrow-up"></i> 15% vs last month
                                </div>
                            </div>
                            <div class="kpi-card">
                                <div class="kpi-label">Orders</div>
                                <div class="kpi-value">24</div>
                                <div class="kpi-trend trend-up">
                                    <i class="fas fa-arrow-up"></i> 22% vs last month
                                </div>
                            </div>
                            <div class="kpi-card">
                                <div class="kpi-label">Conversion Rate</div>
                                <div class="kpi-value">28.5%</div>
                                <div class="kpi-trend trend-up">
                                    <i class="fas fa-arrow-up"></i> 3.5% vs last month
                                </div>
                            </div>
                            <div class="kpi-card">
                                <div class="kpi-label">Avg. Response Time</div>
                                <div class="kpi-value">12 min</div>
                                <div class="kpi-trend trend-up">
                                    <i class="fas fa-arrow-up"></i> 4 min faster
                                </div>
                            </div>
                            <div class="kpi-card">
                                <div class="kpi-label">Active Clients</div>
                                <div class="kpi-value">18</div>
                                <div class="kpi-trend trend-up">
                                    <i class="fas fa-arrow-up"></i> 5 new this week
                                </div>
                            </div>
                            <div class="kpi-card">
                                <div class="kpi-label">Response Rate</div>
                                <div class="kpi-value">92%</div>
                                <div class="kpi-trend trend-down">
                                    <i class="fas fa-arrow-down"></i> 2% vs last month
                                </div>
                            </div>
                            <div class="kpi-card">
                                <div class="kpi-label">Gig Impressions</div>
                                <div class="kpi-value">12,450</div>
                                <div class="kpi-trend trend-up">
                                    <i class="fas fa-arrow-up"></i> 12% vs last month
                                </div>
                            </div>
                            <div class="kpi-card">
                                <div class="kpi-label">Profile Views</div>
                                <div class="kpi-value">2,140</div>
                                <div class="kpi-trend trend-up">
                                    <i class="fas fa-arrow-up"></i> 18% vs last month
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 28px;">
                        <div style="font-weight: 600; color: var(--soft-white); margin-bottom: 16px;">Performance by Gig</div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                            <div style="padding: 20px; background: var(--dark-gray); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.05);">
                                <div style="font-weight: 600; margin-bottom: 12px; color: var(--soft-white);">Premium Logo Design</div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                                    <span style="color: #b5b5c8;">Orders:</span>
                                    <span>12</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                                    <span style="color: #b5b5c8;">Conversion:</span>
                                    <span>32%</span>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <span style="color: #b5b5c8;">Earnings:</span>
                                    <span>$840</span>
                                </div>
                            </div>
                            <div style="padding: 20px; background: var(--dark-gray); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.05);">
                                <div style="font-weight: 600; margin-bottom: 12px; color: var(--soft-white);">Social Media Banner</div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                                    <span style="color: #b5b5c8;">Orders:</span>
                                    <span>8</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                                    <span style="color: #b5b5c8;">Conversion:</span>
                                    <span>24%</span>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <span style="color: #b5b5c8;">Earnings:</span>
                                    <span>$280</span>
                                </div>
                            </div>
                            <div style="padding: 20px; background: var(--dark-gray); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.05);">
                                <div style="font-weight: 600; margin-bottom: 12px; color: var(--soft-white);">Brand Style Guide</div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                                    <span style="color: #b5b5c8;">Orders:</span>
                                    <span>4</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                                    <span style="color: #b5b5c8;">Conversion:</span>
                                    <span>18%</span>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <span style="color: #b5b5c8;">Earnings:</span>
                                    <span>$160</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Other sections would go here -->
            <div class="section" id="insights">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">AI Insights</h2>
                        <div class="card-actions">
                            <div class="btn-icon">
                                <i class="fas fa-sync"></i>
                            </div>
                        </div>
                    </div>
                    <div class="insight-item">
                        <div class="insight-title">
                            <i class="fas fa-user" style="color: var(--electric-purple);"></i>
                            Priority Client Alert
                        </div>
                        <div class="insight-content">Michael Chen is most likely to place an order within 24 hours based on his message history and engagement patterns. Sending a personalized offer could increase your conversion chance by 68%.</div>
                    </div>
                    <div class="insight-item">
                        <div class="insight-title">
                            <i class="fas fa-exclamation-triangle" style="color: var(--yellow);"></i>
                            Urgent Response Needed
                        </div>
                        <div class="insight-content">Sarah Kim has been waiting for 3 hours without a response. Your response rate is currently at 92%. Responding within the next hour will help maintain your high rating.</div>
                    </div>
                    <div class="insight-item">
                        <div class="insight-title">
                            <i class="fas fa-trophy" style="color: var(--green);"></i>
                            Top Performing Gig
                        </div>
                        <div class="insight-content">Your "Premium Logo Design" gig has a 32% conversion rate, which is 42% higher than your other services. Consider featuring this gig more prominently in your profile.</div>
                    </div>
                    <div class="insight-item">
                        <div class="insight-title">
                            <i class="fas fa-lightbulb" style="color: var(--blue);"></i>
                            Daily Growth Tip
                        </div>
                        <div class="insight-content">Adding portfolio samples to your gig description can increase orders by up to 35%. Consider uploading 3-5 high-quality examples of your best work.</div>
                    </div>
                    <div class="insight-item">
                        <div class="insight-title">
                            <i class="fas fa-chart-line" style="color: var(--electric-purple);"></i>
                            Performance Trend
                        </div>
                        <div class="insight-content">Your earnings have increased by 15% this month compared to last month. This positive trend is primarily driven by your premium service offerings.</div>
                    </div>
                    <div class="insight-item">
                        <div class="insight-title">
                            <i class="fas fa-comments" style="color: var(--yellow);"></i>
                            Client Sentiment Analysis
                        </div>
                        <div class="insight-content">Recent client messages show a 92% positive sentiment. Clients particularly appreciate your quick responses and clear communication style.</div>
                    </div>
                </div>
            </div>

            <div class="section" id="queue">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">Automation Queue</h2>
                        <div class="card-actions">
                            <div class="btn-icon" id="pause-queue">
                                <i class="fas fa-pause"></i>
                            </div>
                        </div>
                    </div>
                    <div class="task-item">
                        <div class="task-icon task-status running">
                            <i class="fas fa-reply"></i>
                        </div>
                        <div class="task-details">
                            <div class="task-name">Auto-reply to new message from Alex Morgan</div>
                            <div class="task-time">Scheduled in 2 minutes</div>
                        </div>
                    </div>
                    <div class="task-item">
                        <div class="task-icon task-status running">
                            <i class="fas fa-paper-plane"></i>
                        </div>
                        <div class="task-details">
                            <div class="task-name">Follow-up message to Sarah Kim</div>
                            <div class="task-time">Scheduled in 1 hour</div>
                        </div>
                    </div>
                    <div class="task-item">
                        <div class="task-icon task-status completed">
                            <i class="fas fa-bell"></i>
                        </div>
                        <div class="task-details">
                            <div class="task-name">Buyer reminder for Michael Chen</div>
                            <div class="task-time">Sent 3 hours ago</div>
                        </div>
                    </div>
                    <div class="task-item">
                        <div class="task-icon task-status running">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="task-details">
                            <div class="task-name">Welcome message template activation</div>
                            <div class="task-time">Scheduled in 12 hours</div>
                        </div>
                    </div>
                    <div class="task-item">
                        <div class="task-icon task-status completed">
                            <i class="fas fa-exchange-alt"></i>
                        </div>
                        <div class="task-details">
                            <div class="task-name">Account switch: john_doe_designs → jane_doe_writing</div>
                            <div class="task-time">Completed 5 hours ago</div>
                        </div>
                    </div>
                    <div class="task-item">
                        <div class="task-icon task-status running">
                            <i class="fas fa-sync"></i>
                        </div>
                        <div class="task-details">
                            <div class="task-name">Analytics data sync for all accounts</div>
                            <div class="task-time">Running now</div>
                        </div>
                    </div>
                    <div class="task-item">
                        <div class="task-icon task-status completed">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="task-details">
                            <div class="task-name">Offer sent to Emma Rodriguez</div>
                            <div class="task-time">Sent 2 days ago</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section" id="notifications">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">Notification Center</h2>
                        <div class="card-actions">
                            <div class="btn-icon">
                                <i class="fas fa-cog"></i>
                            </div>
                        </div>
                    </div>
                    <div style="padding: 20px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                        <div style="display: flex; gap: 16px; margin-bottom: 16px;">
                            <div style="width: 40px; height: 40px; border-radius: 10px; background: rgba(122, 63, 255, 0.15); display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-comment" style="color: var(--electric-purple);"></i>
                            </div>
                            <div>
                                <div style="font-weight: 500; margin-bottom: 6px;">New message from Alex Morgan</div>
                                <div style="color: #b5b5c8; font-size: 14px;">"Hi, I'm interested in your logo design service..."</div>
                                <div style="color: #a0a0b0; font-size: 13px; margin-top: 8px;">2 minutes ago</div>
                            </div>
                        </div>
                    </div>
                    <div style="padding: 20px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                        <div style="display: flex; gap: 16px; margin-bottom: 16px;">
                            <div style="width: 40px; height: 40px; border-radius: 10px; background: rgba(74, 222, 128, 0.15); display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-shopping-cart" style="color: var(--green);"></i>
                            </div>
                            <div>
                                <div style="font-weight: 500; margin-bottom: 6px;">New order from Michael Chen</div>
                                <div style="color: #b5b5c8; font-size: 14px;">Premium video editing package - $120</div>
                                <div style="color: #a0a0b0; font-size: 13px; margin-top: 8px;">1 hour ago</div>
                            </div>
                        </div>
                    </div>
                    <div style="padding: 20px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                        <div style="display: flex; gap: 16px; margin-bottom: 16px;">
                            <div style="width: 40px; height: 40px; border-radius: 10px; background: rgba(248, 113, 113, 0.15); display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-times-circle" style="color: var(--red);"></i>
                            </div>
                            <div>
                                <div style="font-weight: 500; margin-bottom: 6px;">Order canceled by David Wilson</div>
                                <div style="color: #b5b5c8; font-size: 14px;">Logo design package</div>
                                <div style="color: #a0a0b0; font-size: 13px; margin-top: 8px;">3 hours ago</div>
                            </div>
                        </div>
                    </div>
                    <div style="padding: 20px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                        <div style="display: flex; gap: 16px; margin-bottom: 16px;">
                            <div style="width: 40px; height: 40px; border-radius: 10px; background: rgba(114, 153, 242, 0.15); display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-paper-plane" style="color: var(--blue);"></i>
                            </div>
                            <div>
                                <div style="font-weight: 500; margin-bottom: 6px;">Auto-reply sent to Sarah Kim</div>
                                <div style="color: #b5b5c8; font-size: 14px;">"Thanks for your message! I'll get back to you shortly..."</div>
                                <div style="color: #a0a0b0; font-size: 13px; margin-top: 8px;">15 minutes ago</div>
                            </div>
                        </div>
                    </div>
                    <div style="padding: 20px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                        <div style="display: flex; gap: 16px; margin-bottom: 16px;">
                            <div style="width: 40px; height: 40px; border-radius: 10px; background: rgba(251, 191, 36, 0.15); display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-bell" style="color: var(--yellow);"></i>
                            </div>
                            <div>
                                <div style="font-weight: 500; margin-bottom: 6px;">Offer requested by Emma Rodriguez</div>
                                <div style="color: #b5b5c8; font-size: 14px;">Requested custom offer for social media package</div>
                                <div style="color: #a0a0b0; font-size: 13px; margin-top: 8px;">2 hours ago</div>
                            </div>
                        </div>
                    </div>
                    <div style="padding: 20px;">
                        <div style="display: flex; gap: 16px; margin-bottom: 16px;">
                            <div style="width: 40px; height: 40px; border-radius: 10px; background: rgba(139, 92, 246, 0.15); display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-user-plus" style="color: #8b5cf6;"></i>
                            </div>
                            <div>
                                <div style="font-weight: 500; margin-bottom: 6px;">New buyer mentioned your gig</div>
                                <div style="color: #b5b5c8; font-size: 14px;">In a conversation with another seller</div>
                                <div style="color: #a0a0b0; font-size: 13px; margin-top: 8px;">5 hours ago</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section" id="settings">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">Settings</h2>
                        <div class="card-actions">
                            <div class="btn-icon">
                                <i class="fas fa-save"></i>
                            </div>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
                        <div>
                            <div style="font-weight: 600; color: var(--soft-white); margin-bottom: 16px;">Account & Security</div>
                            <div style="margin-bottom: 20px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--soft-white);">Fiverr API Connection</label>
                                <div style="display: flex; gap: 12px;">
                                    <button style="flex: 1; background: var(--green); color: white; border: none; padding: 12px; border-radius: 10px; font-weight: 500;">Connected</button>
                                    <button style="flex: 1; background: var(--medium-gray); color: var(--light-gray); border: none; padding: 12px; border-radius: 10px; font-weight: 500;">Reconnect</button>
                                </div>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--soft-white);">Two-Factor Authentication</label>
                                <button style="background: var(--green); color: white; border: none; padding: 12px 24px; border-radius: 10px; font-weight: 500;">Enabled</button>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--soft-white);">Password</label>
                                <button style="background: var(--medium-gray); color: var(--light-gray); border: none; padding: 12px 24px; border-radius: 10px; font-weight: 500;">Change Password</button>
                            </div>
                        </div>
                        <div>
                            <div style="font-weight: 600; color: var(--soft-white); margin-bottom: 16px;">Automation Preferences</div>
                            <div style="margin-bottom: 20px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--soft-white);">Automation Speed</label>
                                <select style="width: 100%; padding: 12px 16px; background: var(--medium-gray); border: 1px solid var(--dark-gray); border-radius: 12px; color: var(--soft-white);">
                                    <option>Instant (0-5 min)</option>
                                    <option selected>Fast (5-15 min)</option>
                                    <option>Standard (15-30 min)</option>
                                    <option>Slow (30-60 min)</option>
                                </select>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--soft-white);">AI Response Style</label>
                                <select style="width: 100%; padding: 12px 16px; background: var(--medium-gray); border: 1px solid var(--dark-gray); border-radius: 12px; color: var(--soft-white);">
                                    <option>Professional</option>
                                    <option selected>Friendly</option>
                                    <option>Casual</option>
                                    <option>Concise</option>
                                </select>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--soft-white);">Dark Mode</label>
                                <label class="switch">
                                    <input type="checkbox" checked>
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.05);">
                        <div style="font-weight: 600; color: var(--soft-white); margin-bottom: 16px;">System Logs</div>
                        <div style="background: var(--charcoal); border-radius: 12px; padding: 20px; font-family: monospace; font-size: 13px; color: #a0a0b0; max-height: 200px; overflow-y: auto;">
                            <div>[10:24:15] Auto-reply sent to Alex Morgan</div>
                            <div>[10:25:03] Analytics data synced</div>
                            <div>[10:30:22] Offer generated for Michael Chen</div>
                            <div>[10:32:45] Account switch: john_doe_designs → jane_doe_writing</div>
                            <div>[10:45:12] New message received from Sarah Kim</div>
                            <div>[10:46:01] Auto-reply sent to Sarah Kim</div>
                            <div>[11:00:00] Daily performance report generated</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <script>
        // Initialize Chart
        document.addEventListener('DOMContentLoaded', function() {
            // Main dashboard chart
            const ctx = document.getElementById('analyticsChart').getContext('2d');
            const analyticsChart = new Chart(ctx, {
                type: 'line',
                 {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Orders',
                         [18, 22, 19, 24, 27, 31, 24],
                        borderColor: '#7A3FFF',
                        backgroundColor: 'rgba(122, 63, 255, 0.1)',
                        borderWidth: 3,
                        pointBackgroundColor: '#7A3FFF',
                        pointRadius: 4,
                        fill: true,
                        tension: 0.3
                    }, {
                        label: 'Messages',
                        data: [62, 78, 65, 84, 92, 104, 88],
                        borderColor: '#4ADE80',
                        backgroundColor: 'rgba(74, 222, 128, 0.1)',
                        borderWidth: 3,
                        pointBackgroundColor: '#4ADE80',
                        pointRadius: 4,
                        fill: true,
                        tension: 0.3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: '#e2e2e8',
                                font: {
                                    family: 'Inter',
                                    size: 12
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.05)'
                            },
                            ticks: {
                                color: '#a0a0b0'
                            }
                        },
                        y: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.05)'
                            },
                            ticks: {
                                color: '#a0a0b0'
                            }
                        }
                    }
                }
            });

            // Detailed analytics chart
            const detailedCtx = document.getElementById('detailedChart').getContext('2d');
            const detailedChart = new Chart(detailedCtx, {
                type: 'bar',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: 'Orders',
                        data: [5, 8, 12, 15],
                        backgroundColor: 'rgba(122, 63, 255, 0.7)',
                        borderColor: 'rgba(122, 63, 255, 1)',
                        borderWidth: 1
                    }, {
                        label: 'Earnings ($)',
                        data: [240, 320, 480, 640],
                        backgroundColor: 'rgba(74, 222, 128, 0.7)',
                        borderColor: 'rgba(74, 222, 128, 1)',
                        borderWidth: 1,
                        yAxisID: 'y1'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'linear',
                            display: true,
                            position: 'left',
                            grid: {
                                color: 'rgba(255, 255, 255, 0.05)'
                            },
                            ticks: {
                                color: '#a0a0b0'
                            }
                        },
                        y1: {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            grid: {
                                drawOnChartArea: false,
                            },
                            ticks: {
                                color: '#a0a0b0'
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.05)'
                            },
                            ticks: {
                                color: '#a0a0b0'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: '#e2e2e8',
                                font: {
                                    family: 'Inter',
                                    size: 12
                                }
                            }
                        }
                    }
                }
            });

            // Navigation functionality
            const navItems = document.querySelectorAll('.nav-item');
            const sections = document.querySelectorAll('.section');
            const currentSectionTitle = document.getElementById('current-section');
            
            navItems.forEach(item => {
                item.addEventListener('click', () => {
                    // Update active nav item
                    navItems.forEach(nav => nav.classList.remove('active'));
                    item.classList.add('active');
                    
                    // Show selected section
                    const sectionId = item.getAttribute('data-section');
                    sections.forEach(section => {
                        section.classList.remove('active');
                        if (section.id === sectionId) {
                            section.classList.add('active');
                        }
                    });
                    
                    // Update page title
                    currentSectionTitle.textContent = item.textContent.trim();
                });
            });
            
            // Quick navigation from dashboard cards
            document.getElementById('view-inbox').addEventListener('click', () => {
                navItems[1].click();
            });
            
            document.getElementById('view-auto-reply').addEventListener('click', () => {
                navItems[2].click();
            });
            
            document.getElementById('view-offer').addEventListener('click', () => {
                navItems[3].click();
            });
            
            document.getElementById('view-accounts').addEventListener('click', () => {
                navItems[4].click();
            });
            
            document.getElementById('view-insights').addEventListener('click', () => {
                navItems[6].click();
            });
            
            document.getElementById('view-queue').addEventListener('click', () => {
                navItems[7].click();
            });
            
            // Auto-reply system controls
            document.getElementById('pause-automation').addEventListener('click', () => {
                document.getElementById('pause-automation').style.display = 'none';
                document.getElementById('resume-automation').style.display = 'block';
                // In a real app, this would pause automation
            });
            
            document.getElementById('resume-automation').addEventListener('click', () => {
                document.getElementById('resume-automation').style.display = 'none';
                document.getElementById('pause-automation').style.display = 'block';
                // In a real app, this would resume automation
            });
            
            // Offer Generator functionality
            document.getElementById('generate-offer').addEventListener('click', () => {
                const serviceDetails = document.getElementById('service-details').value || "Premium design services";
                const price = document.getElementById('offer-price').value || "100";
                const deliveryTime = document.getElementById('delivery-time').value || "3";
                const extraServices = document.getElementById('extra-services').value || "Source files included";
                
                const offerText = `Thank you for your interest in my services!\n\nI'm excited to offer you my ${serviceDetails} package for $${price}. Delivery will be completed within ${deliveryTime} days.\n\nAdditional services included:\n- ${extraServices}\n\nI'm confident this package will meet your needs. Let me know if you'd like to proceed!`;
                
                document.getElementById('offer-text').textContent = offerText;
                document.getElementById('offer-preview').style.display = 'block';
            });
            
            document.getElementById('copy-offer').addEventListener('click', () => {
                const offerText = document.getElementById('offer-text').textContent;
                navigator.clipboard.writeText(offerText).then(() => {
                    const btn = document.getElementById('copy-offer');
                    const originalText = btn.textContent;
                    btn.textContent = 'Copied!';
                    setTimeout(() => {
                        btn.textContent = originalText;
                    }, 2000);
                });
            });
            
            document.getElementById('reset-offer').addEventListener('click', () => {
                document.getElementById('offer-preview').style.display = 'none';
                document.getElementById('service-details').value = '';
                document.getElementById('offer-price').value = '';
                document.getElementById('delivery-time').value = '';
                document.getElementById('extra-services').value = '';
            });
            
            // Multi-account manager functionality
            document.getElementById('add-account').addEventListener('click', () => {
                document.getElementById('add-account-form').style.display = 'block';
            });
            
            document.getElementById('cancel-add').addEventListener('click', () => {
                document.getElementById('add-account-form').style.display = 'none';
            });
            
            document.getElementById('connect-account').addEventListener('click', () => {
                // In a real app, this would connect the account
                alert('Account connected successfully!');
                document.getElementById('add-account-form').style.display = 'none';
            });
            
            // Mobile sidebar toggle
            const sidebarToggle = document.createElement('div');
            sidebarToggle.innerHTML = '<i class="fas fa-bars"></i>';
            sidebarToggle.style.cssText = 'display: none; position: fixed; top: 20px; left: 20px; width: 44px; height: 44px; background: var(--dark-gray); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--light-gray); z-index: 1000; cursor: pointer;';
            document.body.appendChild(sidebarToggle);

            sidebarToggle.addEventListener('click', () => {
                document.querySelector('.sidebar').classList.toggle('active');
            });

            // Show sidebar toggle on mobile
            function checkScreenSize() {
                if (window.innerWidth <= 992) {
                    sidebarToggle.style.display = 'flex';
                } else {
                    sidebarToggle.style.display = 'none';
                    document.querySelector('.sidebar').classList.remove('active');
                }
            }

            checkScreenSize();
            window.addEventListener('resize', checkScreenSize);
        });
    </script>
</body>
</html>