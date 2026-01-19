import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import AdminDashboard from "./components/Administrator";
import CandidateDashboard from "./components/CandidateDashboard";
import VoterDashboard from "./components/VoterDashboard";

export default function AppWrapper() {
  return (
    <Routes>
      <Route 
        path="/admin" 
        element={
          <MainLayout>
            <AdminDashboard />
          </MainLayout>
        } 
      />
      <Route 
        path="/candidate" 
        element={
          <MainLayout>
            <CandidateDashboard />
          </MainLayout>
        } 
      />
      <Route 
        path="/voter" 
        element={
          <MainLayout>
            <VoterDashboard />
          </MainLayout>
        } 
      />
    </Routes>
  );
}