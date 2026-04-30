
import React, { useEffect, useState } from "react";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { motion } from "motion/react";
import { Lock, Navigation } from "lucide-react";
import { Button } from "../../components/ui/button";

// The bootstrap admin email
const ADMIN_EMAILS = ["edgaragronvargas@gmail.com"];

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-red-700 border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-500 font-medium animate-pulse">Verifying credentials...</p>
        </div>
      </div>
    );
  }

  const isAdmin = user && ADMIN_EMAILS.includes(user.email || "");

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-center"
        >
          <div className="w-20 h-20 bg-red-50 text-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Restricted Access</h1>
          <p className="text-slate-500 mb-8">
            This area is reserved for authorized restaurant staff only. 
            Please sign in with an admin account to continue.
          </p>
          <div className="flex flex-col gap-3">
            <Button 
                variant="default" 
                className="bg-red-700 hover:bg-red-800 h-12 rounded-xl"
                onClick={() => window.location.href = "/"}
            >
              Return Home
            </Button>
            {!user && (
              <p className="text-sm text-slate-400 mt-2">
                Use the "Sign In" button in the navigation bar.
              </p>
            )}
            {user && !isAdmin && (
              <div className="mt-4 p-4 bg-amber-50 border border-amber-100 rounded-2xl text-xs text-amber-700 text-left">
                <strong>Access Denied:</strong> You are signed in as {user.email}, which does not have administrative privileges.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
}
