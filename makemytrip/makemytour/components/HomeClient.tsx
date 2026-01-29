"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignupDialog from "@/components/SignupDialog";

export default function HomeClient() {
  return (
    <>
      <Navbar />

      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
             "url('https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="flex justify-center items-center h-full">
          
        
        </div>
      </div>

      <Footer />
    </>
  );
}
