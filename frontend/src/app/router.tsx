import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/components/layout/AppLayout";

import DashboardPage from "@/pages/Dashboard";
import ChatPage from "@/pages/Chat";
import SymptomsPage from "@/pages/Symptoms";
import PrescriptionPage from "@/pages/Prescription";
import ReportsPage from "@/pages/Reports";
import HistoryPage from "@/pages/History";
import MedicinePage from "@/pages/Medicine";
import SettingsPage from "@/pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "chat",
        element: <ChatPage />,
      },
      {
        path: "symptoms",
        element: <SymptomsPage />,
      },
      {
        path: "prescription",
        element: <PrescriptionPage />,
      },
      {
        path: "medicine",
        element: <MedicinePage />,
     },
      {
        path: "reports",
        element: <ReportsPage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);